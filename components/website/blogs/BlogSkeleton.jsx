export default function BlogSkeleton() {
    return (
        <div className="row gx-4 gy-5">
            <div class="col-md-6" data-aos="fade-right">
                <a href="#" class="bloglink">
                    <div class="cardblog">
                        <div class="cardblog-header">
                            <figure class="blogthumbnail" />
                        </div>
                        <div class="cardblog-body">
                            <h5 class="blogtitle" aria-label="Blog Title">
                                Loading...
                            </h5>
                            <p class="blogtext" />
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
}
