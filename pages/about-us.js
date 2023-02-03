import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>About Us - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center serif mb-4 pb-2 mt-0 pt-5" id="mission">
              About Us
            </h4>
            <hr />
          </div>
          <div className="col-lg-10 offset-lg-1 order-1">
            <h4 className="pt-4" id="mission">
              Mission
            </h4>
            <p>
              The mission of Openly Operated is{" "}
              <strong>trust through transparency</strong>: to make online
              services as transparent as possible, in order to increase trust in
              the apps we all use. People shouldn't have to be in the dark about
              what's happening with their personal data, and companies should
              provide <strong>verifiable proof</strong> of their claims.
            </p>
            <h4 className="pt-4" id="values">
              Values
            </h4>
            <ul className="list-serif">
              <li className="serif pt-2">
                <strong>Simplicity</strong> - Keep things as simple as possible.
                The more complicated something is, the harder it is to
                understand, and the easier it is to obscure or hide problems and
                potential gaps. Document and explain things that cannot be
                simplified further.
              </li>
              <li className="serif pt-2">
                <strong>Prudence</strong> - Go slow, and think through decisions
                for the long term. The failing method of "move fast and break
                things" naturally puts security and privacy in the backseat.
                When building and auditing products, ask: How can this design or
                feature be abused? How can you prove it won't be abused?
              </li>
              <li className="serif pt-2">
                <strong>Transparency</strong> - Everything that is not private
                user data should be made public, with proof. This includes and
                is not limited to internal processes, source code, reports,
                updates, and explanations and reasons for how things work.
                Products should be so transparent that the user could rebuild
                the entire product by themselves if given enough time.
              </li>
            </ul>
            <h4 className="pt-4" id="origin">
              Origin
            </h4>
            <p>
              In 2017, we discovered that app stores were rife with abusive and
              scammy apps, and wrote an{" "}
              <a href="https://medium.com/@johnnylin/how-to-make-80-000-per-month-on-the-apple-app-store-bdb943862e88">
                investigative piece on Medium
              </a>{" "}
              that was read by over 500,000 people. We realized that all these
              abusive apps had privacy policies - which were full of lies. Even
              if App Store reviewers wanted to confirm whether or not the apps
              were abiding by their Privacy Policy, they couldn't. There's no
              standard for verifying that an app was being honest.
            </p>
            <p>
              We found that everyone's just hoping for the best when it came to
              trusting apps online with their data. People were relying on
              things like how nice a company's website looks, or a privacy
              policy, or even price — all of which can be easily faked or
              copied. Since no standard existed, we set out to create one. This
              is how we came up with the concept of services that are Openly
              Operated™, a certification that creates trust through complete,
              verifiable transparency.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
