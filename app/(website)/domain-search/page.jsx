/* eslint-disable jsx-a11y/label-has-associated-control */
export default function DomainSearchPage() {
    return (
        <main className="main">
            <section className="domainsearch">
                <div className="domainsearch-content">
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="col-lg-6 mx-lg-auto">
                                <div className="d-flex flex-column align-items-center gap-4 text-center">
                                    <h1 className="display-5 fw-bold">Find unique domains!</h1>

                                    <div className="info">
                                        <p className="text">
                                            Searching for that perfect domain? Catch your all ideal
                                            domain names with the domain checker!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div className="domainsearch-details">
                            <div className="row">
                                <div className="col-lg-7 mx-lg-auto">
                                    <form className="domainsearchform">
                                        <input
                                            type="search"
                                            placeholder="Search your domain"
                                            className="searchfield"
                                        />
                                        <button type="submit" className="btn-search">
                                            Search
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="row g-4">
                                <div className="col-lg-4" data-aos="fade-right">
                                    <div className="existingdomain">
                                        <div className="existingdomain-header">
                                            <h5 className="title">Domain extension filter</h5>
                                        </div>

                                        <div className="existingdomain-body">
                                            <div className="domainlist">
                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="showall-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                        checked
                                                    />

                                                    <label
                                                        htmlFor="showall-domain"
                                                        className="checklabel"
                                                    >
                                                        Show All
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotcom-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotcom-domain"
                                                        className="checklabel"
                                                    >
                                                        .com
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotnet-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotnet-domain"
                                                        className="checklabel"
                                                    >
                                                        .net
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotorg-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotorg-domain"
                                                        className="checklabel"
                                                    >
                                                        .org
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotinfo-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotinfo-domain"
                                                        className="checklabel"
                                                    >
                                                        .info
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotbiz-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotbiz-domain"
                                                        className="checklabel"
                                                    >
                                                        .biz
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotus-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotus-domain"
                                                        className="checklabel"
                                                    >
                                                        .us
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotname-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotname-domain"
                                                        className="checklabel"
                                                    >
                                                        .name
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="doticu-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="doticu-domain"
                                                        className="checklabel"
                                                    >
                                                        .icu
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotnetdotin-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotnetdotin-domain"
                                                        className="checklabel"
                                                    >
                                                        .net.in
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotmobi-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotmobi-domain"
                                                        className="checklabel"
                                                    >
                                                        .mobi
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotco-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotco-domain"
                                                        className="checklabel"
                                                    >
                                                        .co
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotme-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotme-domain"
                                                        className="checklabel"
                                                    >
                                                        .me
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotcodotuk-domain"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotcodotuk-domain"
                                                        className="checklabel"
                                                    >
                                                        .co.uk
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotnetdotin-1"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotnetdotin-1"
                                                        className="checklabel"
                                                    >
                                                        .net.in
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotmobi-2"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotmobi-2"
                                                        className="checklabel"
                                                    >
                                                        .mobi
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotco-3"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label htmlFor="dotco-3" className="checklabel">
                                                        {' '}
                                                        .co{' '}
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotme-4"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label htmlFor="dotme-4" className="checklabel">
                                                        {' '}
                                                        .me{' '}
                                                    </label>
                                                </div>

                                                <div className="customcheck">
                                                    <input
                                                        type="checkbox"
                                                        name="checkprivacy"
                                                        id="dotcodotuk-5"
                                                        className="checkprivacy"
                                                        hidden
                                                    />

                                                    <label
                                                        htmlFor="dotcodotuk-5"
                                                        className="checklabel"
                                                    >
                                                        .co.uk
                                                    </label>
                                                </div>
                                            </div>

                                            <button type="button" className="btn-apply">
                                                Apply
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8" data-aos="fade-left">
                                    <div className="domainoptions">
                                        <div className="domainoptions-header">
                                            <h5 className="title">Domain options</h5>

                                            <div className="alldomains">
                                                <select className="selectfield" autoComplete="off">
                                                    <option selected>All Domains</option>
                                                    <option value="">.com</option>
                                                    <option value="">.net</option>
                                                    <option value="">.org</option>
                                                    <option value="">.info</option>
                                                    <option value="">.biz</option>
                                                    <option value="">.us</option>
                                                    <option value="">.name</option>
                                                    <option value="">.icu</option>
                                                    <option value="">.net.in</option>
                                                    <option value="">.mobi</option>
                                                    <option value="">.co</option>
                                                    <option value="">.me</option>
                                                    <option value="">.co.uk</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="domainoptions-body">
                                            <div className="optiontable">
                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.com
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.org
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.biz
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.us
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.name
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.icu
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.mobi
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.org.bd
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.co
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.me
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.co.uk
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.agency
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.ltd
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.news
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.io
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.cloud
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.pro
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.xyz
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.app
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <div className="addto">
                                                            <button
                                                                type="button"
                                                                className="btn-cart"
                                                            >
                                                                Add to cart
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.me
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="alreadytaken">
                                                            Already taken
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="optionrow">
                                                    <div className="option">
                                                        <h5 className="domain-name">
                                                            Webwowzer.in
                                                        </h5>
                                                    </div>

                                                    <div className="option">
                                                        <span className="domain-price">
                                                            $14.62/yr
                                                        </span>
                                                    </div>

                                                    <div className="option">
                                                        <p className="premiumdomain">
                                                            This is Premium domain
                                                        </p>
                                                    </div>
                                                </div>
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
    );
}
