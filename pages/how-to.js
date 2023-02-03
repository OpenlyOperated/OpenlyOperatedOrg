import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>How To - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row pb-5">
          <div className="col-12 text-center">
            <h4 className="serif mb-2 pb-0 mt-1 pt-5" id="summary">
              How To Be Openly Operated
            </h4>
            <p className="serif pb-3 mb-4">
              The Process, Requirements, and Certification - v1.0
            </p>
            <hr />
          </div>
          <div className="col-lg-3 d-none d-lg-block order-12 pt-1">
            <div
              className="list-group sticky-top pl-4 serif text-left"
              style={{ top: "65px" }}
            >
              <p>
                <a
                  href="#summary"
                  className="list-group-item list-group-item-action small"
                >
                  Summary
                </a>
                <a
                  href="#certification-process"
                  className="list-group-item list-group-item-action small"
                >
                  Certification Process
                </a>
                <a
                  href="#fulfill-requirements"
                  className="list-group-item list-group-item-action small"
                >
                  1. Fulfill Requirements
                </a>
                <a
                  href="#identify-operation"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Identify Operation
                </a>
                <a
                  href="#open-source"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Open Source
                </a>
                <a
                  href="#open-infrastructure"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Open Infrastructure
                </a>
                <a
                  href="#audit-trail"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Audit Trail
                </a>
                <a
                  href="#establish-provenance"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Establish Provenance
                </a>
                <a
                  href="#claims-with-proof"
                  className="list-group-item list-group-item-action small"
                >
                  2. Claims With Proof
                </a>
                <a
                  href="#choosing-claims"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Choosing Claims
                </a>
                <a
                  href="#prove-claims"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Prove Claims
                </a>
                <a
                  href="#complete-audit"
                  className="list-group-item list-group-item-action small text-nowrap"
                >
                  3. Complete OpenAudit
                </a>
                <a
                  href="#assemble-audit-kit"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Assemble OpenAudit
                </a>
                <a
                  href="#submit-for-audit"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Submit For OpenAudit
                </a>
                <a
                  href="#community"
                  className="list-group-item list-group-item-action small pl-5"
                >
                  Community
                </a>
                <a
                  href="#change-log"
                  className="list-group-item list-group-item-action small"
                >
                  Change Log
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-9 order-1 pt-3">
            <p>
              For a product to be Openly Operated, it must follow and pass the
              certification process: fulfill requirements, prove claims, and
              complete audits. To follow along with an example, follow along
              with{" "}
              <a href="https://openaudit.com/lockdownprivacy">
                Lockdown Privacy's OpenAudit
              </a>{" "}
              in a separate window. We're happy to answer questions about any of
              Openly Operated process — just{" "}
              <Link href="/contact">contact us</Link>.
            </p>
            <h4 id="certification-process" className="pt-5 pb-3">
              Certification Process
            </h4>
            <ol className="list-serif">
              <li className="mb-3">
                <a href="#fulfill-requirements">
                  <strong className="sans-serif">Fulfill Requirements</strong>
                </a>{" "}
                - These are requirements for demonstrating a basic level of
                transparency, and they can be thought of as the "raw materials"
                for auditors, security and privacy experts, and the general
                public to view and analyze.
              </li>
              <li className="mb-3">
                <a href="#claims-with-proof">
                  <strong className="sans-serif">Claims With Proof</strong>
                </a>{" "}
                - Provide claims regarding the privacy, security, or other
                important aspects of the product, keeping them as{" "}
                <Link href="/about-us#values">simple as possible</Link>. Using
                content from the Requirements, provide proof of each individual
                claim. Proof should be reproducible and based on unforgeable
                evidence.{" "}
                <strong>
                  Unsubstantiated assertions such as "Read our Privacy Policy"
                  do not qualify as proof.
                </strong>
              </li>
              <li>
                <a href="#complete-audit">
                  <strong className="sans-serif">Complete OpenAudit</strong>
                </a>{" "}
                - Sign up and create a document on{" "}
                <a href="https://openaudit.com">OpenAudit</a> that contains the
                requirements and claims with proof above. Contact us at{" "}
                <a href="mailto: hi@openaudit.com">hi@openaudit.com</a>, and
                we'll walk you through the rest of the auditing process. After
                that, your OpenAudit and results are made public for your users
                and customers to see. Services should be re-audited frequently.
              </li>
            </ol>
            <h4 id="fulfill-requirements" className="pt-5">
              Step 1: Fulfill Requirements
            </h4>
            <p>
              These are the requirements for demonstrating a basic level of
              transparency, and they can be thought of as the "raw materials"
              for auditors, security and privacy experts, and the general public
              to analyze and work with.
            </p>
            <p>
              Each requirement has a <em>description</em> describing the
              requirement, <em>rationale</em> or the reason behind the
              requirement, and <em>verification</em> which contains suggestions
              on how to verify completion of the requirement.{" "}
              <em>Verification</em> is a bare-minimum suggestion — auditors are
              free to and encouraged to go well beyond it to find issues and
              flaws.
            </p>
            <h5 id="identify-operation" className="pt-4">
              Identify Operation
            </h5>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Description</em>
                  </td>
                  <td>
                    Clearly state what the product is, its purpose, and people
                    who own and build it. Owners and operators of the service
                    must be identified with at least their full name, recent
                    photos, and reachable contact information, including
                    business address. Pseudonyms, placeholders, and nicknames
                    are not acceptable.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Rationale</em>
                  </td>
                  <td>
                    Identifying owners and operators not only creates meaningful
                    accountability, but it also incentivizes more honest product
                    operation and behavior. Millions of users give their
                    personal information to a product in the course of using it
                    — they have the right to know who is behind it.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Verification</em>
                  </td>
                  <td>
                    Manually verify each item (product, purpose, people,
                    location) by appropriate means, whether that's search engine
                    to find references, viewing social profiles, testing contact
                    information, etc. Verifications of these items won't ever be
                    100% guaranteed, so it's sufficient to document how the
                    operation's items seem reasonably legitimate and has no red
                    flags.
                  </td>
                </tr>
                <tr>
                  <td className="serif" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="open-source" className="pt-4">
              Open Source
            </h5>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Description</em>
                  </td>
                  <td>
                    All server and client code must be open source and fully
                    documented. All libraries and usage of third party or
                    external APIs must also be noted, leaving no room for
                    unknown behavior.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Rationale</em>
                  </td>
                  <td>
                    The source code determines the behavior of computers and
                    servers, so seeing all the source code (not a partial
                    release) is essential to knowing what is (and isn't) being
                    done with user data, as well as revealing any malicious
                    behavior.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Verification</em>
                  </td>
                  <td>
                    ✓{" "}
                    <strong className="sans-serif small font-weight-bold">
                      Completeness -
                    </strong>{" "}
                    Check that all source code is public and that there are no
                    missing parts. Optionally, build the source code to create
                    the product. No part of the source code should be
                    precompiled binaries (closed source), and note any
                    suspicious third party libraries.
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    ✓{" "}
                    <strong className="sans-serif small font-weight-bold">
                      User Data Handling -
                    </strong>{" "}
                    Find the points where user data enters the server, and
                    follow them to their storage (encryption, security) and
                    handling (third parties APIs and libraries). Be sure to
                    check for logging, such as IPs and other Personally
                    Identifiable Information.
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    ✓{" "}
                    <strong className="sans-serif small font-weight-bold">
                      Security -
                    </strong>{" "}
                    What measures are used to protect the server from both
                    internal and external threats? Are they sufficient,
                    up-to-date, and complete? Is it possible for employees to
                    steal user data without leaving a trail?
                  </td>
                </tr>
                <tr>
                  <td className="serif" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="open-infrastructure" className="pt-4">
              Open Infrastructure
            </h5>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Description</em>
                  </td>
                  <td>
                    All configuration and infrastructure of the app must be
                    fully documented and public. Any parts of the infrastructure
                    that rely on third parties or opaque services should be
                    noted. This should be detailed enough that an auditor could
                    build a test environment for validation.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Rationale</em>
                  </td>
                  <td>
                    Configuration and infrastructure define the <em>what</em>,{" "}
                    <em>when</em>, <em>where</em>, and <em>how</em> of deploying
                    and executing the source code, as well as many crucial
                    aspects relating to user data, such as storage and
                    encryption. It is just as important as source code itself.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Verification</em>
                  </td>
                  <td>
                    ✓{" "}
                    <strong className="sans-serif small font-weight-bold">
                      Completeness -
                    </strong>{" "}
                    Check that all infrastructure is public and there are no
                    missing pieces. Optionally, build the infrastructure to
                    create a test environment.
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    ✓{" "}
                    <strong className="sans-serif small font-weight-bold">
                      Secrets and Keys -
                    </strong>{" "}
                    Are operators able to access secrets and keys such as
                    database password, encryption keys, hashes? If so, how can
                    they prove it isn't abused?
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    ✓{" "}
                    <strong className="sans-serif small font-weight-bold">
                      Security -
                    </strong>{" "}
                    What measures are used to protect the server from both
                    internal and external threats? Are they sufficient,
                    up-to-date, and complete? Is it possible for employees to
                    steal user data without leaving a trail?
                  </td>
                </tr>
                <tr>
                  <td className="serif" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="audit-trail" className="pt-4">
              Audit Trail
            </h5>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Description</em>
                  </td>
                  <td>
                    Openly Operated products must have one or more trails of
                    logs showing <em>all operator actions</em> from the moment
                    the product is created. Audit trails must be impartial,
                    authentic, and comprehensive.
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <strong className="sans-serif small font-weight-bold">
                      Impartial -
                    </strong>{" "}
                    Audit trails should be generated by an impartial mechanism,
                    which usually means they're automatically generated by the
                    platform on which the product is built. If the platform's
                    trail doesn't cover all operator actions, any custom audit
                    trails should show proof of impartiality.
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <strong className="sans-serif small font-weight-bold">
                      Authentic -
                    </strong>{" "}
                    Audit trails should be impossible or extremely difficult to
                    forge, tamper with, or delete. Auditors and the general
                    public should be able to personally verify authenticity of
                    the audit trails.
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <strong className="sans-serif small font-weight-bold">
                      Comprehensive -
                    </strong>{" "}
                    Audit trails should cover the entire time period from the
                    creation of the production environment of the app until the
                    current date. The trail should have a comprehensive record
                    of all potentially dangerous operator actions that could
                    compromise user data.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Rationale</em>
                  </td>
                  <td>
                    In order to see what code and infrastructure is{" "}
                    <em>really</em> running in production and to see what the
                    operator has done with user data, Openly Operated products
                    need to present a reliable "source of truth" — unbiased,
                    verifiable audit trails. Without audit trails, auditors and
                    users are left to rely on blind trust of the operators,
                    defeating the purpose of earning trust transparency.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Verification</em>
                  </td>
                  <td>
                    Verify the <em>Impartial</em>, <em>Authentic</em>, and{" "}
                    <em>Comprehensive</em> traits described above. For the{" "}
                    <em>Comprehensive</em> trait, pay special attention to these
                    questions: Are all operator actions that could possibly
                    compromise user data logged? Assuming the operator is a
                    malicious actor (or bought out by a malicious actor), could
                    user data be secretly exploited without this behavior being
                    exposed?
                  </td>
                </tr>
                <tr>
                  <td className="serif" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="establish-provenance" className="pt-4">
              Establish Provenance
            </h5>
            <table>
              <thead>
                <tr>
                  <th />
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Description</em>
                  </td>
                  <td>
                    <em>Provenance</em> means "the origin of something". Openly
                    Operated products <em>establish provenance</em> by proving
                    that the source code and infrastructure presented in the
                    requirements (the "origin") matches the production
                    environment. To do this, follow the code and infrastructure
                    step-by-step, providing proof and explanation on each step
                    for why tampering cannot occur.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Rationale</em>
                  </td>
                  <td>
                    The requirements of Open Source and Open Infrastructure
                    aren't useful if there's no way to verify that the presented
                    code and infrastructure presented are what's actually
                    running in production. Establishing provenance ensures the
                    code and infrastructure evidence that is cited in Proving
                    Claims is reliable and accurate.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary mr-2">Verification</em>
                  </td>
                  <td>
                    Follow the code and infrastructure from the user to the
                    server and back. Are there any gaps that could be compromise
                    the integrity of the source code and infrastructure
                    presented? Check that the servers that the public is
                    connecting to are the servers being audited, not some other
                    server, either by verifying that the DNS nameserver entries
                    in the infrastructure, or by some other means.
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-3" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h4 id="claims-with-proof" className="pt-5">
              Step 2: Claims With Proof
            </h4>
            <p>
              Provide claims regarding the privacy, security, or other important
              aspects of the product, keeping them as{" "}
              <Link href="/about-us#values">simple as possible</Link>, and by
              referring to content from the <em>Requirements</em> and other
              resources as necessary. Proof should be reproducible and based on
              unforgeable evidence. Unsubstantiated assertions such as "Read our
              Privacy Policy" do not qualify as proof.
            </p>
            <h5 id="choosing-claims" className="pt-4">
              Choosing Claims
            </h5>
            <p>
              Since Privacy Policies and Terms can be lengthy, choose the most
              relevant points to highlight and explain. This varies depending on
              the product, but should be what the end user is most likely
              interested in — for example, a photo sharing app should focus on
              the handling of user photos, instead of the algorithm used to
              compress photos.
            </p>
            <p>
              Questions that may help in choosing privacy and security claims to
              prioritize:
            </p>
            <ul className="list-serif">
              <li>What is the data in question? (e.g, User Email)</li>
              <li>Who can access the data? (e.g, Customer Support Staff)</li>
              <li>
                Why do they need access to this data? (e.g, Need to respond to
                customer inquiries)
              </li>
              <li>
                When can they access the data? (e.g, Only when a customer emails
                in to our support email)
              </li>
              <li>
                How can they access the data? (e.g, Support staff must log into
                the support dashboard)
              </li>
              <li>
                How is the access audited? (e.g, The customer is sent an audit
                alert every time this data access occurs)
              </li>
            </ul>
            <h5 id="prove-claims" className="pt-4">
              Prove Claims
            </h5>
            <p>
              Proof and explanations should be simple to understand and whenever
              possible, point to the exact files in the code, infrastructure or
              audit logs and results for reference. Break down proof into
              smaller steps when there is a sequence of logic. Auditors, end
              users, and the community can request clarifications and further
              proof in the final <em>Complete OpenAudit</em> stage.
            </p>
            <h4 id="complete-audit" className="pt-5">
              Step 3: Complete OpenAudit
            </h4>
            <p>
              Sign up and create a document on{" "}
              <a href="https://openaudit.com">OpenAudit</a> that contains the
              requirements and claims with proof above. Contact us at{" "}
              <a href="mailto: hi@openaudit.com">hi@openaudit.com</a>, and we'll
              walk you through the rest of the auditing process. After that,
              your OpenAudit and results are made public for your users and
              customers to see. Services should be re-audited frequently.
            </p>
            <h5 id="assemble-audit-kit" className="pt-4">
              Assemble OpenAudit
            </h5>
            <p>
              An OpenAudit contains the Requirements and Claims with Proof
              sections above, and they let{" "}
              <Link href="/auditors">auditors</Link> or anyone else verify the
              privacy, security, and other claims of an Openly Operated product.
              A compelted example is{" "}
              <a href="https://openaudit.com/lockdownprivacy">
                Lockdown Privacy's OpenAudit
              </a>
              . Here's what to include:
            </p>
            <ul className="list-serif">
              <li>
                <strong>Title -</strong> The name of your product.
              </li>
              <li>
                <strong>Audit Scope -</strong> What's being audited? For
                example, is the the website, the iOS app, the server, all the
                above, or something else?
              </li>
              <li>
                <strong>Date of Snapshot -</strong> The point in time that the
                Requirements and Proof of Claims are referencing — it's used to
                differentiate between the current audit and future audits of the
                same product.
              </li>
              <li>
                <strong>Requirements, Claims With Proof -</strong> The
                requirements and claims with proof above.
              </li>
              <li>
                <strong>Next Audit Date -</strong> The date that you expect the
                next audit to be conducted.
              </li>
              <li>
                <strong>Read-Only Account (optional) -</strong> A read-only
                account of your operator console - it's the closest thing to
                being an employee without being one. This account should have
                extremely limited permissions, being careful to not allow access
                to secret keys or any user data. It can also help expedite
                verification of some requirements and claims. For example, it's
                much easier to verify the currently deployed code on production
                servers.
              </li>
            </ul>
            <h5 id="submit-for-audit" className="pt-2">
              Submit For OpenAudit
            </h5>
            <p>
              Once the OpenAudit document is completed, contact us at{" "}
              <a href="mailto: hi@openaudit.com">hi@openaudit.com</a>, and we'll
              walk you through the rest, including matching you with an auditor
              to complete the process.
            </p>
            <h5 id="community" className="pt-4">
              Community
            </h5>
            <p>
              After the OpenAudit is published, users of the product (and the
              public) can become part of helping improve the product by finding
              issues that the auditor may not have focused on. Anyone can
              contact the operator for further questions, clarifications, and
              feedback. If any changes are necessary, code/infrastructure is
              updated, or a new revision is released. Establishing a public
              community such as a Discord channel or moderated subreddit is
              encouraged, and of course, users can create issues in the
              product's public repositories.
            </p>
            <p>
              At the point, the operator can also choose to create a public
              bounty reward for finding issues or contributing to the product or
              its OpenAudit. The reward doesn't necessarily have to be cash — in
              fact, non-cash rewards such as a year's free subscription could
              build a stronger community around the product.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
