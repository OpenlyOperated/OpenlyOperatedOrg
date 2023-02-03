import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Auditors - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h4 className="serif mb-2 pb-0 mt-1 pt-5">Auditors</h4>
            <p className="serif pb-3 mb-4">A Critical Role In Transparency</p>
            <hr />
          </div>
          <div className="col-lg-3 d-none d-lg-block order-12 pt-4">
            <div
              className="list-group sticky-top pl-4 serif text-left"
              style={{ top: "65px" }}
            >
              <p>
                <a
                  href="#overview"
                  className="list-group-item list-group-item-action small"
                >
                  Overview
                </a>
                <a
                  href="#why-audit"
                  className="list-group-item list-group-item-action small"
                >
                  Why Audit?
                </a>
                <a
                  href="#be-an-auditor"
                  className="list-group-item list-group-item-action small"
                >
                  Be An Auditor
                </a>
                <a
                  href="#the-audit-process"
                  className="list-group-item list-group-item-action small"
                >
                  The Audit Process
                </a>
                <a
                  href="#auditing-tools"
                  className="list-group-item list-group-item-action small"
                >
                  Auditing Tools
                </a>
                <a
                  href="#the-near-future"
                  className="list-group-item list-group-item-action small"
                >
                  The Near Future
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-9 order-1">
            <p className="mt-4">
              Auditors help the general public verify, find issues in, and
              summarize the <Link href="/how-to">requirements and claims</Link>{" "}
              presented by an Openly Operated products. Transparency doesn't
              help gauge trustworthiness if very few people understand or have
              time to look through a product's public audit materials, so
              auditors help make sense of them, saving everyone time and effort.
            </p>
            <h4 id="why-audit" className="pt-4">
              Why Be An Auditor?
            </h4>
            <ul className="list-serif">
              <li className="serif pt-2">
                <strong>A Safer Internet</strong> - By looking into and
                verifying the inner workings of apps and services, you can help
                secure the products that you use, and also recommend products to
                friends and family that you can personally vouch for.
              </li>
              <li className="serif pt-2">
                <strong>Learn and Gain Experience</strong> - Because Openly
                Operated products are fully open source and open infrastructure,
                you can learn to be a better developer and architect by auditing
                and understanding how these products work.
              </li>
              <li className="serif pt-2">
                <strong>Earn Money Or Credits</strong> - Auditors can do their
                work for free if they want, but they can also be compensated by
                the operator in different ways — an avid user of a product might
                get a free year or lifetime subscription, or the operator might
                simply pay a sum of money.
              </li>
            </ul>
            <h4 id="be-an-auditor" className="pt-4">
              Be An Auditor
            </h4>
            <p>
              Currently, the Openly Operated auditors consist of a handful of
              engineers that are familiar with the Openly Operated requirements,
              but we'll soon open it up to anyone who wants to audit, and we're
              now working out the best way to onboard new auditors and helping
              them through their initial audits.{" "}
              <a href="mailto:hi@openlyoperated.org?subject=Auditor%20Early%20Adopter%20Program&body=I'd%20like%20to%20be%20part%20of%20the%20Auditor%20Early%20Adopter%20Program%20for%20Openly%20Operated.%20Please%20let%20me%20know%20more%20information%20about%20this%20as%20soon%20as%20it's%20available.">
                Contact us here
              </a>{" "}
              to let us know you're interested in joining.
            </p>
            <h4 id="the-audit-process" className="pt-4">
              The Audit Process
            </h4>
            <p>
              Once an auditor is matched with a product and its Audit Kit and
              Audit Template, the Openly Operated audit process begins:
            </p>
            <ol className="list-serif">
              <li>
                <strong>Receive and Accept OpenAudit Request -</strong> The
                auditor receives a request for audit on the OpenAudit platform,
                and then accept it.
              </li>
              <li>
                <strong>Verify OpenAudit References -</strong> Each OpenAudit
                document contains references that must be verified. The auditor
                opens the document in "Audit" mode, and verifies each reference
                to make sure it sufficiently and accurately backs the claim.
              </li>
              <li>
                <strong>Mark Audit as Complete -</strong> Once all references
                have been verified, the auditor marks the audit as complete.
              </li>
              <li>
                <strong>Receive Payment -</strong> The administrators of the
                OpenAudit platform do final checks on the document, and then
                release payment to the auditor.
              </li>
            </ol>
            <h4 id="auditing-tools" className="pt-4">
              Auditing Tools
            </h4>
            <p>
              Since infrastructure audit logs can easily be many gigabytes, we
              built{" "}
              <a
                href="https://github.com/OpenlyOperated/Open-Watch"
                target="_blank"
              >
                Open Watch
              </a>
              , an open source tool that automatically parses through
              infrastructure logs to verify their integrity and look for
              violations of Openly Operated tenets. It's designed for
              infrastructure logs generated by Amazon Web Services' CloudTrail
              audit trail service.
            </p>
            <h4 id="the-near-future" className="pt-4">
              The Near Future
            </h4>
            <p>
              Auditors play a very large role in the future of the internet. As
              more apps and services become open to improve privacy and
              security, their complex inner workings will require more dedicated
              specialists to both help find issues and increase public
              understanding in them. Technology companies today have both the
              responsibility and the resources to ensure every part of their
              products are properly and publicly audited.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
