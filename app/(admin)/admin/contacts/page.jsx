/* eslint-disable no-nested-ternary */

'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

export default function ContactPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedStatus, setSelectedStatus] = useState('');
    const [searchText, setSearchText] = useState('');
    const [perPage, setPerPage] = useState(10); // Number of rows per page

    async function fetchContacts() {
        try {
            const response = await axios.get(`/api/contact`);
            console.log(response.data.contacts);
            setLoading(false);
            setContacts(response.data.contacts);
        } catch (error) {
            console.error('Error fetching Contacts', error);
        }
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    const statusOptions = ['Pending', 'Contacted', 'Resolved'];
    const handleStatusChange = async (contactId, newStatus) => {
        try {
            const response = await axios.patch(`/api/contact/${contactId}`, { status: newStatus });

            if (response.status === 200) {
                const updatedContacts = contacts.map((contact) => {
                    if (contact._id === contactId) {
                        return { ...contact, status: newStatus };
                    }
                    return contact;
                });

                setContacts(updatedContacts);
                toast.success('Status updated successfully');
            }
        } catch (error) {
            console.error('Error updating status', error);
        }
    };

    const columns = [
        {
            name: 'Name',
            selector: 'full_name',
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Company Name',
            selector: 'company_name',
            sortable: true,
        },
        {
            name: 'Phone',
            selector: 'phone',
            sortable: true,
        },

        {
            name: 'Message',
            selector: 'message',
            sortable: true,
            cell: (row) => {
                const maxLength = 50; // Set your desired maximum length
                const message =
                    row.message.length > maxLength
                        ? `${row.message.slice(0, maxLength)}...`
                        : row.message;

                // Show the full message in a tooltip
                const tooltip = <Tooltip id={`message-tooltip-${row._id}`}>{row.message}</Tooltip>;

                return (
                    <OverlayTrigger placement="top" overlay={tooltip}>
                        <span>{message}</span>
                    </OverlayTrigger>
                );
            },
        },
        {
            name: 'Check Privacy',
            selector: 'checkprivacy',
            sortable: true,
            cell: (row) => <input type="checkbox" checked={row.checkprivacy} disabled />,
        },

        {
            name: 'Status',
            selector: 'status',
            sortable: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            cell: (row) => (
                <select
                    className="form-select"
                    value={row.status}
                    onChange={(e) => handleStatusChange(row._id, e.target.value)}
                    style={{
                        backgroundColor:
                            row.status === 'Pending'
                                ? 'lightyellow'
                                : row.status === 'Contacted'
                                ? 'lightgreen'
                                : row.status === 'Resolved'
                                ? 'lightblue'
                                : 'transparent',
                    }}
                >
                    {statusOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            ),
        },
    ];

    const filteredContacts = contacts.filter((contact) =>
        contact.full_name.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="section">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">All Contacts</h5>
                            <input
                                type="text"
                                placeholder="Search by Name"
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                            {contacts.length > 0 && (
                                <DataTable
                                    title="Contacts"
                                    columns={columns}
                                    data={filteredContacts}
                                    pagination
                                    paginationPerPage={perPage}
                                    onChangeRowsPerPage={setPerPage}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
