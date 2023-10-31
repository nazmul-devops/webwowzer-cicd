/* eslint-disable no-alert */
/* eslint-disable react/no-unstable-nested-components */

'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

import Loader from '@/components/Loader';
import TutorialCreateModal from '@/components/admin/Tutorial/CreateTutorial';
import EditTutorialModal from '@/components/admin/Tutorial/EditTutorial';
import axios from '@/lib/axios';
import customStyles from '@/lib/customTables';

export default function TutorialPage() {
    const [tutorials, setTutorials] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');
    const [showModal, setShowModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selecteTutorial, setSelectedTurorial] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchTutorials() {
        try {
            const response = await axios.get('/api/tutorial');
            setTutorials(response.data.tutorials);
            setFilteredData(response.data.tutorials);
            setLoading(false);
        } catch (error) {
            console.log('Error fetching tutorials', error);
        }
    }

    useEffect(() => {
        fetchTutorials();
    }, []);

    useEffect(() => {
        // Apply filters and search
        const filtered = tutorials.filter((tutorial) => {
            if (
                activeFilter === 'all' ||
                (activeFilter === 'active' && tutorial.active) ||
                (activeFilter === 'inactive' && !tutorial.active)
            ) {
                return (
                    tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    tutorial.thumbnail_img.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    tutorial.video_url.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    tutorial.duration.toString().includes(searchTerm)
                );
            }
            return false;
        });
        setFilteredData(filtered);
    }, [searchTerm, activeFilter, tutorials]);

    const handleCheckboxChange = async (tutorialId, isActive) => {
        try {
            const response = await axios.patch(`/api/tutorial/${tutorialId}`, {
                active: !isActive,
            });
            if (response.status === 200) {
                toast.success(response.data.message);
                fetchTutorials(); // Refresh the tutorial list
            }
        } catch (error) {
            console.log('Cannot change status', error);
        }
    };

    const handlePlayClick = (row) => {
        const videoURL = row.video_url;
        window.open(videoURL, '_blank'); // Open the video URL in a new tab
    };

    const handleEdit = (tutorial) => {
        setSelectedTurorial(tutorial);
        setShowEditModal(true);
    };

    const deleteTutorial = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this tutorial ?');
        if (confirmed) {
            try {
                const response = await axios.delete(`/api/tutorial/${id}`);

                if (response.status === 200) {
                    toast.success(response.data.message);
                    fetchTutorials();
                } else {
                    toast.error('Failed to delete the tutorial');
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    const columns = [
        {
            name: 'Video Title',
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Thumbnail Image',
            selector: 'thumbnail_img',
            sortable: true,
            cell: (row) => (
                <Image
                    src={row.thumbnail_img ? row.thumbnail_img : '/jpath'}
                    height={100}
                    className="img-thumbnail my-2"
                    width={100}
                    alt="turorial thumb"
                />
            ),
        },
        {
            name: 'Video URL',
            selector: 'video_url',
            sortable: true,
            cell: (row) => (
                <button
                    type="button"
                    className="btn btn-small btn-success"
                    onClick={() => handlePlayClick(row)}
                >
                    Play
                </button>
            ),
        },
        {
            name: 'Duration',
            selector: 'duration',
            sortable: true,
            cell: (row) => <span>{row.duration} minutes</span>,
        },
        {
            name: 'Status',
            selector: 'active',
            sortable: false,
            cell: (row) => (
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="button"
                        onChange={() => handleCheckboxChange(row._id, row.active)}
                        checked={row.active}
                        id={`flexSwitchCheck-${row._id}`}
                    />
                </div>
            ),
        },
        {
            name: 'Action',
            selector: 'active',
            sortable: true,
            cell: (row) => (
                <div className="d-flex gap-2 align-items-center">
                    <button
                        onClick={() => handleEdit(row)}
                        type="button"
                        className="btn btn-primary btn-small "
                    >
                        <i className="bi bi-pencil-square " />
                    </button>

                    <button
                        onClick={() => deleteTutorial(row._id)}
                        type="button"
                        className="btn btn-danger btn-small"
                    >
                        <i className="bi bi-trash" />
                    </button>
                </div>
            ),
        },
    ];

    // Function to open the Create Tutorial modal
    const openCreateModal = () => {
        setShowModal(true);
    };

    // Function to close the Create Tutorial modal
    const closeCreateModal = () => {
        setShowModal(false);
    };

    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center">
                                <h5 className="card-title">All Tutorials </h5>
                                <button
                                    type="button"
                                    className="btn btn-success"
                                    onClick={openCreateModal}
                                >
                                    <i className="bi bi-plus-circle" /> Add Tutorial
                                </button>
                            </div>
                            <div className="d-flex justify-content-between mb-4">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search"
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <select
                                        className="form-select"
                                        onChange={(e) => setActiveFilter(e.target.value)}
                                    >
                                        <option value="all">All</option>
                                        <option value="active">Active</option>
                                        <option value="inactive">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            {loading ? (
                                <Loader />
                            ) : (
                                <div className="table-responsive nowrap-table">
                                    {filteredData.length > 0 && (
                                        <DataTable
                                            title="Tutorials"
                                            columns={columns}
                                            data={filteredData}
                                            pagination
                                            paginationPerPage={perPage}
                                            keyField="_id"
                                            customStyles={customStyles}
                                            onChangeRowsPerPage={setPerPage}
                                        />
                                    )}
                                </div>
                            )}
                            {/* Create Tutorial Modal */}
                            <TutorialCreateModal
                                show={showModal}
                                onHide={closeCreateModal}
                                onSave={() => fetchTutorials()}
                            />
                            <EditTutorialModal
                                show={showEditModal}
                                onHide={() => setShowEditModal(false)}
                                tutorial={selecteTutorial}
                                onSave={() => fetchTutorials()}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
