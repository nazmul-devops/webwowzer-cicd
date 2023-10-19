import axios from '@/lib/axios';

async function getBlogs() {
    const response = await axios('/api/blog');

    if (response.status !== 200) {
        throw new Error('Failed to fetch data');
    }
    return response.data;
}

export default async function BlogPage() {
    const data = await getBlogs();

    return (
        <div>
            <section className="section">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">All Blogs</h5>

                                {/* <!-- Table with stripped rows --> */}
                                <table className="table datatable">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Blog Title</th>
                                            <th scope="col">Blog Content</th>
                                            <th scope="col">Blog Image</th>
                                            <th scope="col">author name</th>
                                            <th scope="col">Created Date</th>
                                            <th scope="col">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.blogs.map((blog, index) => (
                                            <tr key={blog._id}>
                                                <th scope="row">{index + 1}</th>
                                                <td>{blog.title}</td>
                                                <td>
                                                    {blog.blog_content.length > 30
                                                        ? `${blog.blog_content.slice(0, 30)}...`
                                                        : blog.blog_content}
                                                </td>

                                                <td>
                                                    <img
                                                        src={
                                                            blog.blog_cover_img
                                                                ? blog.blog_cover_img
                                                                : 'jpath'
                                                        }
                                                        alt="blog thumb "
                                                    />
                                                </td>
                                                <td>{blog.author_name}</td>
                                                <td>{blog.created_at.split('T')[0]}</td>
                                                <td>
                                                    <div className="form-check form-switch">
                                                        <input
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            checked={blog.active}
                                                            id={`flexSwitchCheck-${blog._id}`}
                                                        />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {/* <!-- End Table with stripped rows --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
