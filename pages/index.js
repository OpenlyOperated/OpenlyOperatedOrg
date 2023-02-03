import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-5">
            <h4
              className="font-weight-light mb-1 pb-4 mt-0 text-nowrap text-center mx-auto serif"
              style={{ color: "#999" }}
            >
              A{" "}
              <strong className="font-weight-normal text-dark d-inline-block mr-2">
                <Typewriter
                  options={{
                    strings: [
                      "To-Do App",
                      "Web Service",
                      "Finance App",
                      "Social Network",
                      "Payments Service",
                      "Search Engine",
                      "VPN",
                      "Contacts Manager",
                      "Photo Sharing App",
                      "Cloud Storage",
                      "Mail Service",
                      "Cloud Photos App",
                      "Messenger",
                      "To-Do App",
                      "Video Chat",
                      "Rideshare App",
                    ],
                    autoStart: true,
                    cursor: "",
                    skipAddStyles: true,
                    delay: 35,
                    pauseFor: 750,
                    loop: true,
                  }}
                />
              </strong>
              You Can Trust
            </h4>
            <h2 className="serif mb-2 pb-0 mt-1" id="top">
              Openly Operated
            </h2>
            <p className="serif pb-3 mb-4">
              The Internet's Transparency Standard
            </p>
            <hr />
          </div>
          <div className="col-lg-10 offset-lg-1">
            <p className="mt-4">
              Openly Operated is a certification given to apps and services that
              operate with full transparency. To receive it, the app or service
              goes through the <Link href="/how-to">certification process</Link>{" "}
              and provides public proof of its privacy and security claims, as
              well as its comprehensive audit results.
            </p>
            <h5 className="pt-4 mt-0">Problem: Users Can't Trust Apps</h5>
            <p>
              Today, there's no way to know what companies are <em>really</em>{" "}
              doing with user data. Are they{" "}
              <Link href="/user-benefits#insecure-apps">
                securing it properly
              </Link>
              ? Are they selling to{" "}
              <Link href="/user-benefits#dishonest-apps">third parties</Link>?
              Do employees have{" "}
              <Link href="/user-benefits#internal-threat">
                unrestricted access
              </Link>{" "}
              to everything? Privacy policies are often copy-pasted and
              meaningless without proof, and there's nobody checking if the
              company is actually following them. By the time the public finds
              out a company was being{" "}
              <Link href="/user-benefits#malicious-apps">malicious</Link>,
              selling their data, or had poor security, it's too late. Most of
              these events are likely{" "}
              <Link href="/user-benefits#hidden-breaches">not reported</Link>{" "}
              and are swept under the rug.
            </p>
            <div
              className="text-center mx-auto pb-2 px-3"
              style={{ maxWidth: "740px" }}
            >
              <p>
                <img
                  src="/images/non-oo.png"
                  alt="Diagram of phone transferring a secret document to a black box server."
                  title="Black Box Servers"
                  className="img-fluid mb-0 w-100"
                />
              </p>
            </div>
            <h5 className="pt-4">
              Solution: Fully Auditable, Transparent Apps
            </h5>
            <p>
              Apps should <em>earn</em> user trust by operating with full
              transparency, leaving no room for questionable or lazy behavior.
              This isn't just open sourcing a few parts of an app — it's giving
              the public a read-only account to the app's servers and
              infrastructure, allowing anyone to verify the app's privacy and
              security claims. To ensure that the transparency is consistent,
              reliable, and comprehensive, we created a certification for
              products to provide verifiable proof of their claims:{" "}
              <Link href="/how-to">Openly Operated</Link>.
            </p>
            <div
              className="text-center mx-auto pb-2 px-3"
              style={{ maxWidth: "740px" }}
            >
              <p>
                <img
                  src="/images/oo.png"
                  alt="Diagram of phone transferring a secret document to an openly operated server."
                  title="Openly Operated Client And Servers"
                  className="img-fluid mb-0 w-100"
                />
              </p>
            </div>
            <h5 className="pt-4 pb-2">An Openly Operated World</h5>
            <p>
              Privacy and security scandals happen every week not because
              companies are evil, but because companies operate on incentives.
              In a world where there's no way to verify an app's security or
              privacy claims, why should a company be honest and make less
              money, when their competitors are being dishonest and making more
              money? Current incentives give dishonest and insecure companies an
              edge to grow faster, compete more efficiently, spend more on
              marketing, and capture the most customers.
            </p>
            <p>
              Openly Operated provides a structured way for companies to prove
              their honesty. It's comprehensive, verifiable, and is the long
              term solution to fix the status quo's perverse incentives.
            </p>
          </div>
          <div
            className="col-lg-10 offset-lg-1 text-center"
            style={{ marginTop: "-10px" }}
          >
            <div className="row mt-3">
              <div className="col-sm-4 col-6 px-2">
                <p>
                  <img
                    src="/images/future-ios.png"
                    alt="An app store listing with verifiable data and privacy information up front."
                    title="An app store listing with verifiable data and privacy information up front."
                    className="img-fluid mb-0 w-100 rounded border"
                  />
                </p>
              </div>
              <div className="col-sm-4 col-6 px-2">
                <p>
                  <img
                    src="/images/future-ios-dialog.png"
                    alt="Giving the user critical audit information before allowing an app to access to their data."
                    title="Giving the user critical audit information before allowing an app to access to their data."
                    className="img-fluid mb-0 w-100 rounded border"
                  />
                </p>
              </div>
              <div className="col-sm-4 d-none d-sm-block px-2">
                <p>
                  <img
                    src="/images/future-extension.png"
                    alt="A website showing verifiable data and privacy information up front."
                    title="A website showing verifiable data and privacy information up front."
                    className="img-fluid mb-0 w-100 rounded border"
                  />
                </p>
              </div>
            </div>
          </div>
          <div className="row pb-4 mt-5">
            <div className="col-lg-8 offset-lg-2 text-left pb-3 px-3">
              <p>
                <a
                  href="https://www.theverge.com/2019/6/18/18682026/openly-operated-user-data-privacy-auditing-standard-announce"
                  target="_blank"
                  style={{ borderBottom: "none" }}
                >
                  <img
                    src="/images/theverge.png"
                    alt="The Verge logo"
                    title="The Verge logo"
                    className="img-fluid mb-0 mt-3"
                    style={{ opacity: "0.4", maxWidth: "155px" }}
                  />
                </a>
              </p>
              <p>
                <a
                  href="https://www.theverge.com/2019/6/18/18682026/openly-operated-user-data-privacy-auditing-standard-announce"
                  target="_blank"
                  style={{ borderBottom: "none" }}
                >
                  <em>
                    "Openly Operated wants to make privacy policies actually
                    mean something... [it] lays out an attractive paradigm for
                    privacy."
                  </em>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
