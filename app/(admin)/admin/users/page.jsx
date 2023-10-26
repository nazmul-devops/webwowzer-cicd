'use client';

import customStyles from '@/lib/customTables';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

export default function UsersPage() {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [roleFilter, setRoleFilter] = useState('all');
    const [activeFilter, setActiveFilter] = useState('all');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const [userToDelete, setUserToDelete] = useState(null);

    async function fetchUsers() {
        try {
            const response = await axios.get('/api/users'); // Replace with your API endpoint
            setUsers(response.data.users);
        } catch (error) {
            console.log('Error fetching users', error);
        }
    }
    const filteredUsers = users.filter((user) => {
        const roleMatch = roleFilter === 'all' || user.role === roleFilter;
        const activeMatch =
            activeFilter === 'all' ||
            (activeFilter === 'active' && user.active) ||
            (activeFilter === 'inactive' && !user.active);
        const searchTermMatch =
            searchTerm === '' ||
            user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase());

        return roleMatch && activeMatch && searchTermMatch;
    });
    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setShowDeleteModal(true);
    };
    const columns = [
        {
            name: 'Name',
            selector: (row) => row.name || `${row.first_name} ${row.last_name}`,
            sortable: true,
        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Role',
            selector: 'role',
            sortable: true,
        },
        {
            name: 'Joining Date',
            selector: 'joiningDate',
            sortable: true,
        },
        {
            name: 'Active',
            selector: 'active',
            sortable: true,
            cell: (row) => (row.active ? 'Active' : 'Inactive'),
        },
        {
            name: 'Country',
            selector: 'country',
            sortable: true,
        },
        {
            name: 'City',
            selector: 'city',
            sortable: true,
        },
        {
            name: 'Region',
            selector: 'region',
            sortable: true,
        },
        {
            name: 'Postal Code',
            selector: 'postal_code',
            sortable: true,
        },
        {
            name: 'Phone Number',
            selector: 'phone_number',
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <div className="d-flex gap-2 align-items-center">
                    <button
                        // onClick={() => handleEdit(row)}
                        type="button"
                        className="btn btn-primary btn-small "
                    >
                        <i className="bi bi-pencil-square " />
                    </button>

                    <button
                        onClick={() => handleDeleteClick(row)}
                        type="button"
                        className="btn btn-danger btn-small"
                    >
                        <i className="bi bi-trash" />
                    </button>
                </div>
            ),
        },
    ];

    useEffect(() => {
        fetchUsers();
    }, []);
    const handleConfirmDelete = async () => {
        if (userToDelete) {
            // Perform the deletion action here, e.g., send a DELETE request to your API
            try {
                const response = await axios.delete(`/api/users/${userToDelete._id}`);
                if (response.status === 200) {
                    fetchUsers();
                    // setUsers(updatedContacts);
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
        <div>
            <div className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">All Users</h5>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Search by Name"
                                            className="form-control"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />{' '}
                                    </div>
                                    <div className="d-flex align-items-center gap-2">
                                        <select
                                            value={roleFilter}
                                            className="form-control"
                                            onChange={(e) => setRoleFilter(e.target.value)}
                                        >
                                            <option value="all">All Roles</option>
                                            <option value="client">Client</option>
                                            <option value="admin">Admin</option>
                                        </select>
                                        <select
                                            value={activeFilter}
                                            className="form-control"
                                            onChange={(e) => setActiveFilter(e.target.value)}
                                        >
                                            <option value="all">All</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">Inactive</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <DataTable
                columns={columns}
                data={filteredUsers}
                pagination
                customStyles={customStyles}
                paginationPerPage={10} // You can adjust the number of rows per page
                paginationRowsPerPageOptions={[10, 20, 30]}
            />
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this User?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" size="sm" onClick={() => setShowDeleteModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" size="sm" onClick={handleConfirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
