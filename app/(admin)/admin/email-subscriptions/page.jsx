/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-use-before-define */

'use client';

import { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

import Loader from '@/components/Loader';
import axios from '@/lib/axios';
import customStyles from '@/lib/customTables';

export default function EmailSubscriptionPage() {
    const [subscriptions, setSubscriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [perPage, setPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [subscriptionToDelete, setSubscriptionToDelete] = useState(null);

    async function fetchSubscriptions() {
        try {
            const response = await axios.get(`/api/email-subscription`);
            setLoading(false);
            setSubscriptions(response.data.allEmailSubscriptons);
        } catch (error) {
            console.error('Error fetching Email Subscriptions', error);
        }
    }

    useEffect(() => {
        fetchSubscriptions();
    }, []);

    const columns = [
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
        },
        {
            name: 'Created At',
            selector: 'created_at',
            sortable: true,
            cell: (row) => <div>{row.created_at.split('T')[0]}</div>,
        },
        {
            name: 'Status',
            selector: 'active',
            sortable: true,
            cell: (row) => (row.active ? 'Active' : 'Inactive'),
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

    const filteredSubscriptions = subscriptions.filter((subscription) =>
        subscription.email.toLowerCase().includes(searchText.toLowerCase())
    );

    const handleDeleteClick = (subscription) => {
        setSubscriptionToDelete(subscription);
        setShowDeleteModal(true);
    };

    const handleConfirmDelete = async () => {
        if (subscriptionToDelete) {
            try {
                const response = await axios.delete(
                    `/api/email-subscription/${subscriptionToDelete._id}`
                );
                if (response.status === 200) {
                    const updatedSubscriptions = subscriptions.filter(
                        (subscription) => subscription._id !== subscriptionToDelete._id
                    );
                    setSubscriptions(updatedSubscriptions);
                    toast.success('Subscription deleted successfully');
                }
            } catch (error) {
                console.error('Error deleting subscription', error);
            }
        }
        setShowDeleteModal(false);
    };

    return (
        <>
            <div className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Email Subscriptions</h5>
                                <div className="d-flex justify-content-between mb-3">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Search by Email"
                                            className="form-control"
                                            onChange={(e) => setSearchText(e.target.value)}
                                        />
                                    </div>
                                </div>
                                {loading ? (
                                    <Loader />
                                ) : (
                                    <div className="table-responsive">
                                        {subscriptions.length > 0 && (
                                            <DataTable
                                                columns={columns}
                                                data={filteredSubscriptions}
                                                pagination
                                                customStyles={customStyles}
                                                paginationPerPage={perPage}
                                                onChangeRowsPerPage={setPerPage}
                                            />
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete Subscription</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this subscription?</Modal.Body>
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
