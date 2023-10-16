import AnnouncementSection from '@/components/dashboard/AnnouncementSection';

/* eslint-disable jsx-a11y/label-has-associated-control */
export default function BillingDetailsPage() {
    return (
        <>
            <AnnouncementSection />

            {/* <!-- MAIN-SECTION START --> */}
            <main className="loggedmain" data-aos="fade-up">
                <section className="billingdetails">
                    <div className="container">
                        <div className="billingdetails-content">
                            <div className="billingdetails-header">
                                <h2 className="title">Billing Details</h2>
                            </div>

                            <div className="billingdetails-body">
                                <div className="row">
                                    <div className="col-xxl-10 mx-xxl-auto">
                                        <div className="row g-4">
                                            <div className="col-lg-6">
                                                <div className="myplan">
                                                    <div className="myplan-header">
                                                        <h5 className="title">My Plan</h5>
                                                    </div>

                                                    <div className="myplan-body">
                                                        <div className="row g-4">
                                                            <div className="col-xxl-3 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">
                                                                        Web Builder
                                                                    </h5>
                                                                    <span className="plantext package">
                                                                        Standard
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-3 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">
                                                                        E-commerce add-on
                                                                    </h5>
                                                                    <span className="plantext package">
                                                                        Standard e-store
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-3 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">Type</h5>
                                                                    <span className="plantext">
                                                                        Monthly
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-3 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">
                                                                        Total cost
                                                                    </h5>
                                                                    <span className="plantext">
                                                                        $ 278.56
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <p className="text">
                                                            Here you can
                                                            <a href="#" className="link">
                                                                explore more plans
                                                            </a>
                                                            . If you want to manage your plans you
                                                            click
                                                            <a href="#" className="link">
                                                                manage plans
                                                            </a>
                                                            .
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-lg-6">
                                                <div className="myplan">
                                                    <div className="myplan-header">
                                                        <h5 className="title">Payment method</h5>
                                                    </div>

                                                    <div className="myplan-body">
                                                        <div className="row g-4">
                                                            <div className="col-xxl-4 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">
                                                                        Card number
                                                                    </h5>
                                                                    <span className="plantext">
                                                                        1231-5641-5642-8941
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-4 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">
                                                                        E-mail
                                                                    </h5>
                                                                    <span className="plantext">
                                                                        john.doe@gmail.com
                                                                    </span>
                                                                </div>
                                                            </div>

                                                            <div className="col-xxl-4 col-md-6">
                                                                <div className="planinfo">
                                                                    <h5 className="title">
                                                                        Expiry
                                                                    </h5>
                                                                    <span className="plantext">
                                                                        08/2026
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <p className="text">
                                                            Notes : Please be carefull on choosing
                                                            your payment method, because we will
                                                            automatically cut your ballance.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="paymenthistory">
                                    <div className="row">
                                        <div className="col-xxl-10 mx-xxl-auto">
                                            <div className="paymenthistory-header">
                                                <h5 className="title">Payment History</h5>

                                                <button type="button" className="btn-downloadall">
                                                    <span className="icon">
                                                        <svg
                                                            width="18"
                                                            height="18"
                                                            viewBox="0 0 18 18"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <path
                                                                d="M9 10.875L9 3.375M9 10.875C8.47483 10.875 7.49365 9.37927 7.125 9M9 10.875C9.52517 10.875 10.5064 9.37927 10.875 9"
                                                                stroke="white"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                            <path
                                                                d="M15 12.375C15 14.2365 14.6115 14.625 12.75 14.625H5.25C3.3885 14.625 3 14.2365 3 12.375"
                                                                stroke="white"
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                            />
                                                        </svg>
                                                    </span>
                                                    <span className="text">Download All</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="paymenthistory-body">
                                        <div className="row">
                                            <div className="col-xxl-10 mx-xxl-auto">
                                                <div className="table-responsive">
                                                    <table id="billingTable">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-all"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-all"
                                                                            className="checklabel"
                                                                        >
                                                                            Payment Invoice
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <th scope="col">Amount</th>
                                                                <th scope="col">Date</th>
                                                                <th scope="col">Status</th>
                                                                <th scope="col" />
                                                            </tr>
                                                        </thead>

                                                        <tbody>
                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-1"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-1"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0098 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 245.41</td>
                                                                <td>October 11, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-2"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-2"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0096 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 145</td>
                                                                <td>October 12, 2023</td>
                                                                <td>
                                                                    <span className="pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-3"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-3"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0092 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 345</td>
                                                                <td>October 13, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-4"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-4"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0028 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 41</td>
                                                                <td>October 14, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-5"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-5"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0056 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 515</td>
                                                                <td>October 15, 2023</td>
                                                                <td>
                                                                    <span className="pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-6"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-6"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0022 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 645</td>
                                                                <td>October 16, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-7"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-7"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0078 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 71</td>
                                                                <td>October 17, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-8"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-8"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0086 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 158</td>
                                                                <td>October 18, 2023</td>
                                                                <td>
                                                                    <span className="pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-9"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-9"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0099 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 459</td>
                                                                <td>October 19, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-10"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-10"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0090 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 241</td>
                                                                <td>October 20, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-11"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-11"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0016 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 195</td>
                                                                <td>October 21, 2023</td>
                                                                <td>
                                                                    <span className="pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-12"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-12"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0052 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 354</td>
                                                                <td>October 23, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-13"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-13"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0018 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 451</td>
                                                                <td>October 24, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-14"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-14"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0036 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 519</td>
                                                                <td>October 24, 2023</td>
                                                                <td>
                                                                    <span className="pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-15"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-15"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0015 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 635</td>
                                                                <td>October 25, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-16"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-16"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0098 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 454</td>
                                                                <td>October 27, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-17"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-17"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0069 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 315</td>
                                                                <td>October 28, 2023</td>
                                                                <td>
                                                                    <span className="pending">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>

                                                            <tr>
                                                                <th scope="row">
                                                                    <div className="customcheck">
                                                                        <input
                                                                            type="checkbox"
                                                                            name="tablecheck"
                                                                            id="tablecheck-18"
                                                                            className="checkprivacy"
                                                                            hidden
                                                                        />

                                                                        <label
                                                                            htmlFor="tablecheck-18"
                                                                            className="checklabel"
                                                                        >
                                                                            Invoice#0076 - Oct 2023
                                                                        </label>
                                                                    </div>
                                                                </th>
                                                                <td>$ 745</td>
                                                                <td>October 29, 2023</td>
                                                                <td>
                                                                    <span className="success">
                                                                        Success
                                                                    </span>
                                                                </td>
                                                                <td>
                                                                    <button
                                                                        type="button"
                                                                        className="btn-download"
                                                                    >
                                                                        <span className="icon">
                                                                            <svg
                                                                                width="14"
                                                                                height="14"
                                                                                viewBox="0 0 14 14"
                                                                                fill="none"
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                            >
                                                                                <path
                                                                                    d="M7.0013 8.45833L7.0013 2.625M7.0013 8.45833C6.59284 8.45833 5.82969 7.29499 5.54297 7M7.0013 8.45833C7.40977 8.45833 8.17291 7.29499 8.45964 7"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                                <path
                                                                                    d="M11.6673 9.625C11.6673 11.0728 11.3652 11.375 9.91732 11.375H4.08398C2.63615 11.375 2.33398 11.0728 2.33398 9.625"
                                                                                    stroke="#1DB4E9"
                                                                                    strokeLinecap="round"
                                                                                    strokeLinejoin="round"
                                                                                />
                                                                            </svg>
                                                                        </span>

                                                                        <span className="text">
                                                                            Download
                                                                        </span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
