import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>For Companies - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center serif mb-4 pb-2 mt-0 pt-5" id="overview">
              For Companies
            </h4>
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
                  href="#win-customers"
                  className="list-group-item list-group-item-action small"
                >
                  Win Customers
                </a>
                <a
                  href="#foster-integrity"
                  className="list-group-item list-group-item-action small"
                >
                  Foster Integrity
                </a>
                <a
                  href="#internal-threat"
                  className="list-group-item list-group-item-action small"
                >
                  Internal Threat
                </a>
                <a
                  href="#secure-infrastructure"
                  className="list-group-item list-group-item-action small"
                >
                  Secure Infrastructure
                </a>
                <a
                  href="#platform-risk"
                  className="list-group-item list-group-item-action small"
                >
                  Platform Risk
                </a>
                <a
                  href="#community-support"
                  className="list-group-item list-group-item-action small"
                >
                  Community Support
                </a>
                <a
                  href="#the-opportunity"
                  className="list-group-item list-group-item-action small"
                >
                  The Opportunity
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-9 order-1 mb-5">
            <p className="mt-4">
              Why should companies build Openly Operated products? While
              transparency brings numerous benefits to the end user, there are
              also many advantages to being Openly Operated for companies of all
              sizes, whether they serve consumers or businesses.
            </p>
            <h4 id="win-customers" className="pt-4">
              Win Customers
            </h4>
            <p>
              Users and companies today do not trust apps and services — not
              even the ones they've been using for years. In every product
              category, customers are desperate for something they can trust and
              see proof of that trust. This is true not only in{" "}
              <Link href="/user-benefits">the consumer space</Link>, but also
              true in the B2B space, where sometimes makes sense for businesses
              to pay a significantly greater amount for a product that has
              meaningful assurances of privacy and protection.
            </p>
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
                    <em className="small text-secondary text-nowrap mr-2">
                      Example Scenario
                    </em>
                  </td>
                  <td>
                    A biotechnology company has to keep private medical records
                    for their users, and is choosing a vendor for this service.
                    The fine for a single HIPAA violation for a single person
                    can be tens of thousands of dollars. If you were in charge
                    of making vendor purchase decisions for this biotechnology
                    company, would you rather pay $10 per customer stored at a
                    vendor with zero proof of how customer data is stored,
                    secured, and accessed? Or would you pay $30 per customer
                    stored on an <Link href="/how-to">Openly Operated</Link>{" "}
                    vendor that's fully transparent and audited?
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-3" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h4 id="foster-integrity" className="pt-4">
              Foster Integrity
            </h4>
            <p>
              How will your employees choose to act? Especially for medium to
              large businesses, a growing headcount means that instead of being
              able to manage every employee, the company has to set a cultural
              standard to guide their workers. Because the requirements to be
              Openly Operated necessitate transparency for everyone working on
              the product, companies can foster a culture of integrity simply by
              adhering to the requirements.
            </p>
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
                    <em className="small text-secondary text-nowrap mr-2">
                      Example Scenario
                    </em>
                  </td>
                  <td>
                    From the day that she was onboarded as an engineer at a
                    major ridesharing startup, Susan learns the company is
                    dedicated to trust through transparency by being Openly
                    Operated. From building dashboards for the Customer Support
                    staff, to cooperating with the legal team on
                    passenger-driver matching algorithms, Susan does everything
                    with the expectation that her work will be public and
                    represent not just the brand of the company, but also her
                    own personal brand.
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-3" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h4 id="internal-threat" className="pt-4">
              Internal Threat
            </h4>
            <p>
              Even if most of a company's employees are trusted, there are still
              always potential internal threats — interns, contractors, and new
              hires are all risks. What if they steal business information or
              sell user data on the side? Openly Operated requires all
              infrastructure and critical app-level actions to leave verifiable{" "}
              <Link href="/how-to#audit-trails">audit trails</Link>, which
              allows identification of the employee responsible for any issues.
              The mere existence of auditability also creates a powerful
              deterrent against bad internal behavior.
            </p>
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
                    <em className="small text-secondary text-nowrap mr-2">
                      Example Scenario
                    </em>
                  </td>
                  <td>
                    A large, publicly-traded Fortune 50 company's internal
                    product plans for the next three years leak onto the
                    internet, causing immeasurable harm. Who was responsible?
                    Was it a disgruntled fired employee, a new hire who shared
                    too much, a vendor who was too lax with data? Being Openly
                    Operated allows the company to track down the suspect by
                    analyzing the full audit trail of which employees accessed
                    what documents, and if they're using Openly Operated
                    vendors, the company can also efficiently investigate third
                    party partners.
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-3" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h4 id="secure-infrastructure" className="pt-4">
              Secure Infrastructure
            </h4>
            <p>
              Today, billions of devices run on the foundations of collaborative
              open source projects such as Linux, Apache, and MySQL. The web
              would certainly be worse off without open source — an estimated{" "}
              <a href="https://www.wired.com/2016/08/linux-took-web-now-taking-world/">
                67 percent
              </a>{" "}
              of servers run on Linux. While security is never guaranteed, open
              source has allowed millions to quickly and effectively create new
              software that is <em>relatively</em> secure.
            </p>
            <p>
              But in the modern web, many breaches and leaks happen due to
              misconfigurations, simple oversights, and usage of weak encryption
              — all which often occur outside of the source code. So what about
              opening up all this infrastructure <em>around</em> software, such
              as configurations, deployment, and processes? Similar to open
              source, Openly Operated's requirement for{" "}
              <Link href="/how-to#open-infrastructure">
                Open Infrastructure
              </Link>{" "}
              is a move toward a collaborative future where millions of people
              can quickly and effectively create new, secure infrastructure.
            </p>
            <h4 id="platform-risk" className="pt-4">
              Platform Risk
            </h4>
            <p>
              Any company that allows a developer platform faces a risk of their
              API, data, and user information being exploited by the developers.
              The central issue is that the developer platform has no way of
              checking or enforcing that developers are abiding by their data
              usage terms and conditions. So, when developers misuse the APIs,
              the company that runs the developer platform is on the hook for
              all the legal and financial downsides.
            </p>
            <p>
              Companies running the developer platform can solve this problem by
              requiring that the developers who use their APIs to be Openly
              Operated, and only approving apps that can prove they're obeying
              the terms. Since Openly Operated requires{" "}
              <Link href="/how-to#open-source">open source</Link> and{" "}
              <Link href="/how-to#open-infrastructure">
                open infrastructure
              </Link>
              , everyone is able to verify if the developer's apps are being
              abusive.
            </p>
            <h4 id="community-support" className="pt-4">
              Community Support
            </h4>
            <p>
              The bigger a product gets, the more work it has, whether that's
              developing features, fixing bugs, customer support, or something
              else. Fortunately, the more users a product gets, the more
              potential help it also has. In fact, developers often find that
              some users are more than happy to volunteer to help improve a
              product they use — the current bottleneck is that they currently
              have very limited ways to help, even if the volunteer may have
              sufficient technical skill.
            </p>
            <p>
              The Openly Operated certification process creates a space for
              companies to in{" "}
              <Link href="/how-to#community">engage the community</Link>,
              allowing the conversation to continue past the auditing and audit
              report. This collaboration with the community not only lets users
              ask their most pressing questions, but because the product is
              already <Link href="/how-to#open-source">open source</Link> and{" "}
              <Link href="/how-to#open-infrastructure">
                open infrastructure
              </Link>
              , it also lets users help improve the product. The company's
              product gets better, and all the users benefit — everybody wins.
            </p>
            <h4 id="the-opportunity" className="pt-4">
              The Opportunity
            </h4>
            <p>
              Openly Operated aims to solve critical privacy, security, and
              trust concerns for both users and businesses. Our mission is to
              bring transparency through trust for everyone. We hope startups
              and large companies alike will create Openly Operated versions of
              today's web services, apps, and APIs. The opportunity is huge:
              It's easy to imagine demand for an Openly Operated messaging app
              standing out from the saturated market of closed, opaque,
              unaudited messaging apps, or a privacy-focused photo sharing
              service that can <em>prove</em> it's not data-mining uploaded
              photos.
            </p>
            <p>
              Trust through transparency is the future. Here's how to{" "}
              <Link href="/how-to">get started</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
