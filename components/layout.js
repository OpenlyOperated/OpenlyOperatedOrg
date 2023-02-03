import Head from "next/head";
import Script from "next/script";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="Trust through transparency." />
        <meta name="author" content="Openly Operated" />
        <meta property="og:type" content="product" />
        <meta property="og:title" content="Openly Operated" />
        <meta property="og:description" content="Trust through transparency." />
        <meta property="og:url" content="https://openlyoperated.org" />

        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>

      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark shadow navbar-lg">
        <Link className="navbar-brand" href="/">
          Openly Operated
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" href="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/user-benefits">
                User Benefits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/for-companies">
                For Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/how-to">
                How To
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/auditors">
                Auditors
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div>{children}</div>

      <div className="container">
        <div className="row mt-2 pb-5 px-3">
          <div className="col-12">
            <hr className="mt-4 mb-2" />
          </div>
          <div className="col-md-10 offset-md-1 px-4 mb-5 mt-4 pb-4 text-left">
            <h5 className="text-left mb-3 pt-2">Learn More</h5>
            <p className="mb-2">
              <Link
                href="/user-benefits"
                className="btn btn-primary btn-lg mr-1"
              >
                User Benefits
              </Link>
              A deeper look into the many benefits for users, with examples and
              references.
            </p>
            <p className="mb-2">
              <Link
                href="/for-companies"
                className="btn btn-primary btn-lg mr-1"
              >
                For Companies
              </Link>
              See why companies and businesses also benefit from being Openly
              Operated.
            </p>
            <p className="mb-2">
              <Link href="/how-to" className="btn btn-primary btn-lg mr-1">
                How To
              </Link>
              The requirements for Openly Operated products, and how to get
              started.
            </p>
            <p className="mb-2">
              <Link href="/about-us" className="btn btn-primary btn-lg mr-1">
                About Us
              </Link>
              Read about the values, mission, origin, and creators of Openly
              Operated.
            </p>
            <p className="mb-2">
              <Link href="/contact" className="btn btn-primary btn-lg mr-1">
                Get Involved
              </Link>
              Discuss Openly Operated, transparency, the future of the web, and
              any related topics.
            </p>
          </div>
        </div>
      </div>

      <footer className="footer bg-black text-left">
        <div className="container">
          <div className="row mb-5 pt-4">
            <div className="col-lg-10 offset-lg-1">
              <div className="row pt-1">
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li>
                      <strong>Learn</strong>
                    </li>
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li>
                      <Link href="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link href="/user-benefits">User Benefits</Link>
                    </li>
                    <li>
                      <Link href="/for-companies">For Companies</Link>
                    </li>
                    <li>
                      <Link href="/how-to">How To</Link>
                    </li>
                    <li>
                      <Link href="/auditors">Auditors</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li>
                      <strong>
                        <Link href="/contact" className="border-bottom-0">
                          Contact
                        </Link>
                      </strong>
                    </li>
                    <li>
                      <a href="mailto:hi@openlyoperated.org">Email</a>
                    </li>
                    <li>
                      <a href="https://twitter.com/openlyoperated">Twitter</a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://github.com/openlyoperated/openlyoperatedorg"
                      >
                        GitHub
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <ul className="list-unstyled">
                    <li>
                      <strong>
                        <Link href="/contact" className="border-bottom-0">
                          Legal
                        </Link>
                      </strong>
                    </li>
                    <li>
                      <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms">Terms and Conditions</Link>
                    </li>
                    <li>
                      <div className="small pt-3">
                        © 2023 The Openly Operated Company
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
