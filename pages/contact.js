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
          <div className="col-12">
            <h4 className="text-center serif mb-4 pb-2 mt-0 pt-5">Contact</h4>
          </div>
          <div className="col-lg-10 offset-lg-1 mb-5 pb-0 pt-4">
            <p>
              We're generally available for questions, comments, and feedback at
              &nbsp;
              <a href="mailto:hi@openlyoperated.org">hi@openlyoperated.org</a>.
              Come say hi!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
