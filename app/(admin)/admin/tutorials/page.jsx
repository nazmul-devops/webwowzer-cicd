'use client';

import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import toast from 'react-hot-toast';

export default function TutorialPage() {
    const [tutorials, setTutorials] = useState([]);
    const [perPage, setPerPage] = useState(10);
    const [filteredData, setFilteredData] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('all');

    async function fetchTutorials() {
        try {
            const response = await axios.get('/api/tutorial');
            setTutorials(response.data.tutorials);
            setFilteredData(response.data.tutorials);
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
    }, [searchTerm, activeFilter]);
    const handleCheckboxChange = async (tutorialId, isActive) => {
        try {
            const response = await axios.patch(`/api/tutorial/${tutorialId}`, {
                active: !isActive,
            });
            if (response.status === 200) {
                toast.success(response.data.message);
                fetchTutorials();
            }
        } catch (error) {
            console.log('cannot change status', error);
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
                    alt="blog thumb"
                />
            ),
        },
        {
            name: 'Video URL',
            selector: 'video_url',
            sortable: true,
            cell: (row) => (
                <button className="btn btn-small btn-success" onClick={() => handlePlayClick(row)}>
                    Play
                </button>
            ),
        },
        {
            name: 'Duration',
            selector: 'duration',
            sortable: true,
        },
        {
            name: 'Status',
            selector: 'active',
            sortable: true,
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
    ];

    const handlePlayClick = (row) => {
        const videoURL = row.video_url;
        window.open(videoURL, '_blank'); // Open the video URL in a new tab
    };

    return (
        <div>
            <div>
                <label>
                    Filter by:
                    <select onChange={(e) => setActiveFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </label>
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {filteredData.length > 0 && (
                <DataTable
                    title="Tutorials"
                    columns={columns}
                    data={filteredData}
                    paginationPerPage={perPage}
                    keyField="_id"
                    onChangeRowsPerPage={setPerPage}
                />
            )}
        </div>
    );
}
