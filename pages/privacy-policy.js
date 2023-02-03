import Layout from "../components/layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Contact - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="serif mb-2 pb-0 mt-1 pt-5">Privacy Policy</h4>
            <p className="serif pb-3 mb-4">Last Updated February 2nd, 2023</p>
            <hr />
          </div>
          <div className="col-lg-10 offset-lg-1 mb-5 pb-0 pt-5">
            <p>
              OpenlyOperated.org is operated by The Openly Operated Company and
              collects the minimum data possible to ensure your data and privacy
              is protected.
            </p>
            <p>
              OpenlyOperated.org complies with the European Union’s General Data
              Protection Regulation (GDPR) for all users, regardless of
              location. In addition, we collect the minimum personal information
              required to provide OpenlyOperated.org service.
            </p>
            <p>
              We do not sell or provide data to advertising services, and there
              are zero third party frameworks for marketing or re-marketing
              purposes. This includes any direct or indirect advertising
              frameworks by Facebook, Twitter, and Google, including
              Crashlytics, Fabric, Google Analytics, Facebook SDK, Firebase, and
              Twitter SDK.
            </p>
            <h3 className="mt-5 mb-3">Information We Collect</h3>
            <h5>Information From Website Browsers</h5>
            <p>
              If you are just browsing the OpenlyOperated website, we do not
              store or log your IP address or use a cookie to track you.
            </p>
            <h5>Website Traffic</h5>
            <p>
              We do not log or track any personally identifiable usage of our
              website. For example, user IP address is never logged.
            </p>
            <h3 className="mt-5 mb-4">Privacy Practices</h3>
            <p>
              We store and process the information that we collect in the United
              States in accordance with this Privacy Policy.
            </p>
            <p>
              However, OpenlyOperated.org understands that we have users from
              different countries and regions with different privacy
              expectations, and we try to meet those needs even when the United
              States does not have the same privacy framework as other
              countries.
            </p>
            <p>
              We provide the same standard of privacy protection — as described
              in this Privacy Policy — to all our users around the world,
              regardless of their country of origin or location, and we are
              proud of the levels of notice, choice, accountability, security,
              data integrity, access, and recourse we provide.
            </p>
            <p>
              If you have any questions or concerns regarding our Privacy
              Policy, please contact us at hi@openlyoperated.org and we will
              respond as quickly as we can.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
