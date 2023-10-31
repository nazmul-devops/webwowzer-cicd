/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-nested-ternary */

'use client';

import { useEffect, useState } from 'react';
import { Button, Modal, OverlayTrigger, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

import Loader from '@/components/Loader';
import axios from '@/lib/axios';
import customStyles from '@/lib/customTables';

export default function ContactPage() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [perPage, setPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [contactToDelete, setContactToDelete] = useState(null);
    const [selectedStatusFilter, setSelectedStatusFilter] = useState('');

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
                fetchContacts();
                toast.success('Status updated successfully');
            }
        } catch (error) {
            console.error('Error updating status', error);
        }
        // Update the selected status filter
        // setSelectedStatusFilter(newStatus);
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
        // {
        //     name: 'Check Privacy',
        //     selector: 'checkprivacy',
        //     sortable: true,
        //     cell: (row) => <input type="checkbox" checked={row.checkprivacy} disabled />,
        // },

        {
            name: 'Status',
            selector: 'status',
            sortable: true,
            // eslint-disable-next-line react/no-unstable-nested-components
            cell: (row) => (
                <select
                    value={row.status}
                    onChange={(e) => handleStatusChange(row._id, e.target.value)}
                    className="form-select"
                    style={{
                        backgroundColor:
                            row.status === 'Pending'
                                ? '#fee2e2'
                                : row.status === 'Contacted'
                                ? '#fef9c3'
                                : row.status === 'Resolved'
                                ? '#dcfce7'
                                : 'transparent',
                        fontSize: '14px',
                        width: '120px',
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
        {
            name: 'Actions',
            cell: (row) => (
                <div>
                    <i
                        className="bi bi-trash3-fill"
                        onClick={() => handleDeleteClick(row)}
                        style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'crimson' }}
                    />
                </div>
            ),
        },
    ];

    const filteredContacts = contacts
        .filter((contact) => contact.full_name.toLowerCase().includes(searchText.toLowerCase()))
        .filter((contact) =>
            selectedStatusFilter ? contact.status === selectedStatusFilter : true
        );

    const handleDeleteClick = (contact) => {
        setContactToDelete(contact);
        setShowDeleteModal(true);
    };
    const handleConfirmDelete = async () => {
        if (contactToDelete) {
            // Perform the deletion action here, e.g., send a DELETE request to your API
            try {
                const response = await axios.delete(`/api/contact/${contactToDelete._id}`);
                if (response.status === 200) {
                    // Remove the deleted contact from the state
                    const updatedContacts = contacts.filter(
                        (contact) => contact._id !== contactToDelete._id
                    );
                    setContacts(updatedContacts);
                    toast.success('Contact deleted successfully');
                }
            } catch (error) {
                console.error('Error deleting contact', error);
            }
        }
        // Close the delete confirmation modal
        setShowDeleteModal(false);
    };

    return (
        <>
            <div className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">All Contacts</h5>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Search by Name"
                                            className="form-control"
                                            onChange={(e) => setSearchText(e.target.value)}
                                        />{' '}
                                    </div>
                                    <div>
                                        <select
                                            id="statusFilter"
                                            value={selectedStatusFilter}
                                            onChange={(e) =>
                                                setSelectedStatusFilter(e.target.value)
                                            }
                                            className="form-select"
                                        >
                                            <option value="">All</option>
                                            {statusOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <div className="table-responsive nowrap-table">
                                        {contacts.length > 0 && (
                                            <DataTable
                                                title="Contacts"
                                                columns={columns}
                                                data={filteredContacts}
                                                pagination
                                                customStyles={customStyles}
                                                paginationPerPage={perPage}
                                                onChangeRowsPerPage={setPerPage}
                                            />
                                        )}{' '}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this contact?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" size="sm" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
