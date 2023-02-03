import Layout from "../components/layout";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>User Benefits - Openly Operated</title>
      </Head>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="text-center serif mb-4 pb-2 mt-0 pt-5" id="overview">
              User Benefits
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
                  href="#dishonest-apps"
                  className="list-group-item list-group-item-action small"
                >
                  Dishonest Apps
                </a>
                <a
                  href="#malicious-apps"
                  className="list-group-item list-group-item-action small"
                >
                  Malicious Apps
                </a>
                <a
                  href="#manipulative-apps"
                  className="list-group-item list-group-item-action small"
                >
                  Manipulative Apps
                </a>
                <a
                  href="#insecure-apps"
                  className="list-group-item list-group-item-action small"
                >
                  Insecure Apps
                </a>
                <a
                  href="#internal-threat"
                  className="list-group-item list-group-item-action small"
                >
                  Internal Threat
                </a>
                <a
                  href="#no-accountability"
                  className="list-group-item list-group-item-action small"
                >
                  No Accountability
                </a>
                <a
                  href="#ownership-change"
                  className="list-group-item list-group-item-action small"
                >
                  Ownership Change
                </a>
                <a
                  href="#hidden-breaches"
                  className="list-group-item list-group-item-action small"
                >
                  Hidden Breaches
                </a>
                <a
                  href="#other-benefits"
                  className="list-group-item list-group-item-action small"
                >
                  Other Benefits
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-9 order-1 mb-5 pb-0">
            <p className="mt-4">
              Users want to know if they can trust an app or service with their
              data. Openly Operated is a certification that ensures apps are
              verifiably transparent in everything they do, which creates user
              protections and meaningful assurances. Here, we describe scenarios
              of how the transparency in Openly Operated products make them
              superior.
            </p>
            <h5 id="dishonest-apps" className="pt-4">
              Case: Dishonest Apps
            </h5>
            <p>
              Users have no way of knowing if a Privacy Policy is truthful or
              not. Companies take advantage of this by writing Privacy Policies
              that <em>sound</em> amazing, but are either completely made up and
              unenforced, or simply copy-pasted from somewhere.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    An iPhone app for managing contacts has a stellar Privacy
                    Policy and promises to keep a user's data private, but
                    instead secretly uploads the user's entire address book to a
                    shady third party vendor for a quick profit.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    Openly Operated certifications require apps to{" "}
                    <Link href="/how-to#open-source">fully disclose</Link> their
                    source code, making it impossible to hide any code. In this
                    scenario, while undergoing Openly Operated certification,
                    any code that uploads the user's address book to third
                    parties would be immediately revealed.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="https://www.nbcnews.com/tech/security/millions-people-uploaded-photos-ever-app-then-company-used-them-n1003371"
                      target="_blank"
                      className="small"
                    >
                      "Millions of people uploaded photos to the Ever app. Then
                      the company used them to develop facial recognition
                      tools.", May 9th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/chinese-it-services-giant-harvests-contacts-tracks-users/"
                      target="_blank"
                      className="small"
                    >
                      "IT Services Giant Harvests Contacts, Tracks Users", March
                      13th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.zdnet.com/article/two-thirds-of-all-android-antivirus-apps-are-frauds/"
                      target="_blank"
                      className="small"
                    >
                      "Two-thirds of all Android antivirus apps are frauds",
                      March 14th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.sfgate.com/technology/businessinsider/article/Facebook-is-using-dishonest-and-manipulative-12839559.php"
                      target="_blank"
                      className="small"
                    >
                      "Facebook is using dishonest and manipulative tactics",
                      April 16th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://techcrunch.com/2015/08/21/agree-to-disagree/"
                      target="_blank"
                      className="small"
                    >
                      "Terms and Conditions are the biggest lie of our
                      industry", August 21st, 2015
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://9to5mac.com/2019/03/01/apps-sending-sensitive-data/"
                      target="_blank"
                      className="small"
                    >
                      "Apps sending sensitive data to Facebook, including sexual
                      activity", March 1st, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://arstechnica.com/information-technology/2018/09/dozens-of-ios-apps-surreptitiously-share-user-location-data-with-tracking-firms/"
                      target="_blank"
                      className="small"
                    >
                      "Dozens of iOS apps share user location data with tracking
                      firms", September 10th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.fastcompany.com/90310803/here-are-the-data-brokers-quietly-buying-and-selling-your-personal-information"
                      target="_blank"
                      className="small"
                    >
                      "Here are the data brokers quietly buying and selling your
                      personal information", March 2nd, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.theverge.com/2017/8/24/16197262/accuweather-app-mobile-sdk-collect-user-data-privacy"
                      target="_blank"
                      className="small"
                    >
                      "AccuWeather deflects blame after selling users’ data,
                      even if they opt out", August 24th, 2017
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="malicious-apps" className="pt-4">
              Case: Malicious Apps
            </h5>
            <p>
              Developers and companies can release seemingly innocent apps that
              are actually purely designed to mine user data, because there's no
              way to see or confirm what's happening on their servers.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    A VPN app claims to encrypt connections for an additional
                    layer of security, but is instead actually spying on the
                    websites and apps that user uses.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    Openly Operated certifications require apps to not just
                    disclose the source code on the client app, but also all
                    code <Link href="/how-to#open-source">on the server</Link>.
                    In this scenario, while undergoing Openly Operated
                    certification, the VPN's servers' spying behavior would be
                    caught and reported.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="https://medium.com/@johnnylin/how-to-make-80-000-per-month-on-the-apple-app-store-bdb943862e88"
                      target="_blank"
                      className="small"
                    >
                      "How To Make $80,000 Per Month On The App Store", June
                      9th, 2017
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.deccanchronicle.com/technology/in-other-news/290717/free-vpn-are-vpns-safe-what-are-the-hidden-risks.html"
                      target="_blank"
                      className="small"
                    >
                      "VPNs are tracking your private data passing through their
                      VPN services.", July 29th, 2017
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.wsj.com/articles/techs-dirty-secret-the-app-developers-sifting-through-your-gmail-1530544442"
                      target="_blank"
                      className="small"
                    >
                      "Tech’s ‘Dirty Secret’: The App Developers Sifting Through
                      Your Gmail", July 2nd, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/fake-pirate-chick-vpn-pushed-azorult-info-stealing-trojan/"
                      target="_blank"
                      className="small"
                    >
                      "Fake Pirate Chick VPN Pushed AZORult Info Stealing
                      Trojan", May 10th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.theverge.com/2019/3/14/18264458/voice-technology-speech-analysis-mental-health-risk-privacy"
                      target="_blank"
                      className="small"
                    >
                      "Why companies want to mine the secrets in your voice",
                      March 14th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/mac-cryptocurrency-price-tracker-caught-installing-backdoors/"
                      target="_blank"
                      className="small"
                    >
                      "CryptoCurrency Price Tracker Caught Installing
                      Backdoors", October 29th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="manipulative-apps" className="pt-4">
              Case: Manipulative Apps
            </h5>
            <p>
              In the course of attempting to squeeze every penny out of their
              users, or trying to get users more and more addicted to their
              apps, companies sometimes use data about their users against them,
              treating them as though they were lab monkeys.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    A travel booking website runs studies on their users and
                    finds that people booking trips using Macs are higher
                    spenders. As a result, the company secretly inflates its
                    prices for visitors who use Macs.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    Openly Operated certifications require apps to have complete{" "}
                    <Link href="/how-to#audit-trail">audit trails</Link>, so
                    they they leave unforgeable logs of their major,
                    user-influencing decisions. In this case, the audit trails
                    would reveal both the company's "platform comparison" study,
                    as well as its questionable decision to increase prices for
                    an otherwise unsuspecting portion of their visitors.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="https://clark.com/shopping-retail/mac-users-being-fed-pricier-hotel-searches/"
                      target="_blank"
                      className="small"
                    >
                      "Mac users being fed pricier hotel searches", March 22nd,
                      2017
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.ibtimes.com/how-uber-other-digital-platforms-could-trick-us-using-behavioral-science-unless-we-2791467"
                      target="_blank"
                      className="small"
                    >
                      "How Uber And Other Digital Platforms Could Trick Us Using
                      Behavioral Science", May 13th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.vox.com/the-goods/2018/10/30/18044678/kids-apps-gaming-manipulative-ads-ftc"
                      target="_blank"
                      className="small"
                    >
                      "Kids apps are filled with manipulative ads", October
                      30th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.businessinsider.com/how-app-developers-keep-us-addicted-to-our-smartphones-2018-1"
                      target="_blank"
                      className="small"
                    >
                      "How app developers keep us addicted to our smartphones ",
                      February 17th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.washingtonpost.com/news/monkey-cage/wp/2018/08/06/its-no-accident-that-facebook-is-so-addictive/?utm_term=.1058706f817b"
                      target="_blank"
                      className="small"
                    >
                      "It's no accident that Facebook is so addictive", August
                      2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="insecure-apps" className="pt-4">
              Case: Insecure Apps
            </h5>
            <p>
              For a company, spending more time and money on security could mean
              moving slower and less profits. So, many companies simply ignore
              proper security and secure processes, leading to breaches, leaks,
              and other loss of user data.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    A venture-funded messaging startup is under pressure from
                    investors to grow quickly. Instead of taking adequate time
                    to build and audit the proper security infrastructure, they
                    put together a slick user interface that makes the app seem
                    trustworthy. Soon after launch, hackers breach their user
                    and chat database, selling the data on the dark web.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    While nothing can guarantee security, Openly Operated
                    certifications require apps to be clear about whether or not
                    they're taking proper security measures by having{" "}
                    <Link href="/how-to#open-infrastructure">
                      Open Infrastructure
                    </Link>{" "}
                    and code. It would become evident through the certification
                    process that this app was optimizing for the{" "}
                    <em>appearance</em> of security rather than <em>actual</em>{" "}
                    security — potential users are then warned to steer clear.
                    In the future, we hope it becomes an industry standard for
                    professional reviews of apps and services to include a
                    "Security and Privacy" section, using Openly Operated audit
                    results in their evaluations.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/medical-information-of-almost-150k-rehab-patients-exposed/"
                      target="_blank"
                      className="small"
                    >
                      "Medical information of 150,000 rehab patients exposed",
                      April 22nd, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/exposed-database-leaks-addresses-income-info-of-millions-of-americans/"
                      target="_blank"
                      className="small"
                    >
                      "Exposed Database Leaks Addresses, Income Info of Millions
                      of Americans", April 29th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://9to5mac.com/2019/05/15/popular-games/"
                      target="_blank"
                      className="small"
                    >
                      "Popular games send unknown data to unknown entities, even
                      if developers are reputable",{" "}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/fema-data-leak-exposes-personal-info-of-23m-disaster-survivors/"
                      target="_blank"
                      className="small"
                    >
                      "FEMA data leak exposes personal info of 23 million
                      disaster survivors", March 22nd, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/google-photos-bug-exposed-the-location-and-time-of-your-pictures/"
                      target="_blank"
                      className="small"
                    >
                      "Google Photos bug exposed the location and time of your
                      pictures", March 20th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.businessinsider.in/Facebook-says-it-unintentionally-uploaded-1-5-million-peoples-email-contacts-without-their-consent/articleshow/68930320.cms"
                      target="_blank"
                      className="small"
                    >
                      "Facebook says it 'unintentionally uploaded' 1.5 million
                      people's email contacts without their consent", April
                      18th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/12-449-data-breaches-confirmed-in-2018-a-424-percent-increase-over-the-previous-year/"
                      target="_blank"
                      className="small"
                    >
                      "12,449 Data breaches in 2018, a 424% increase over the
                      previous year", March 6th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/multiple-enterprise-vpn-apps-allow-attackers-to-bypass-authentication/"
                      target="_blank"
                      className="small"
                    >
                      "Enterprise VPN apps allow attackers to bypass
                      authentication", April 14th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/google-stored-unhashed-g-suite-passwords-for-over-a-decade/"
                      target="_blank"
                      className="small"
                    >
                      "Google Stored Unhashed G Suite Passwords for Over a
                      Decade", May 21st, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="internal-threat" className="pt-4">
              Case: Internal Threat
            </h5>
            <p>
              Users never have any way to verify who has unlimited, unaudited
              access to their data. This can include employees, contractors,
              third party partners, connected libraries and companies,
              contractors, vendors, interns, and more. Of course, once any of
              the above has the user data, they may then share it with friends,
              family, acquaintances, or even just put it on the internet
              anonymously.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    A "disappearing photos" social app has thousands of
                    employees and even more contractors. Every summer, they hire
                    hundreds of interns, some as young as 18 years old.
                    Eventually, the interns discover they can access any user's
                    private photos simply by looking up their username. The next
                    month, millions of supposedly deleted photos leak onto the
                    internet, and nobody knows why.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    Openly Operated requires all possible points of
                    administrative access to user data to leave a verifiable{" "}
                    <Link href="/how-to#audit-trail">audit trail</Link>.
                    Additionally, the requirement of being fully{" "}
                    <Link href="/how-to#open-source">open source</Link> publicly
                    exposes any "employee-only backdoors".
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="https://gizmodo.com/report-uber-can-track-any-customer-using-its-god-view-1660525110"
                      target="_blank"
                      className="small"
                    >
                      "Uber can track any customer using its 'God View' tool",
                      November 2014
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.vice.com/en_us/article/xwnva7/snapchat-employees-abused-data-access-spy-on-users-snaplion"
                      target="_blank"
                      className="small"
                    >
                      "Snapchat Employees Abused Data Access to Spy on Users",
                      May 23rd, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/insider-attacks-more-common-harder-to-detect-after-cloud-migration/"
                      target="_blank"
                      className="small"
                    >
                      "Insider attacks more common, harder to detect after cloud
                      migration", April 3rd, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.revealnews.org/article/uber-said-it-protects-you-from-spying-security-sources-say-otherwise/"
                      target="_blank"
                      className="small"
                    >
                      "Uber said it protects you from spying. Security sources
                      say otherwise", December 2016
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.pcworld.com/article/3375202/update-facebook-passwords-for-hundreds-of-millions-of-users-were-exposed-to-facebook-employees.html"
                      target="_blank"
                      className="small"
                    >
                      "Facebook passwords for hundreds of millions of users were
                      exposed to Facebook employees", April 18th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://techcrunch.com/2019/04/13/microsoft-support-agent-email-hack/"
                      target="_blank"
                      className="small"
                    >
                      "Hackers compromised Microsoft support agent's credentials
                      to access customer email accounts", April 13th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://money.cnn.com/2018/05/23/technology/facebook-revenge-porn/index.html"
                      target="_blank"
                      className="small"
                    >
                      "Facebook's controversial 'revenge porn' pilot program is
                      coming to the US, UK", May 23rd, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="no-accountability" className="pt-4">
              Case: No Accountability
            </h5>
            <p>
              When something goes wrong with an app or service, who is
              responsible? Owners and operators sometimes obfuscate or
              completely hide who they are in order to lessen their personal
              financial, legal, or reputational impact.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    An investment app promises users a 10% yearly return. After
                    receiving millions in customer deposits, the app disappears,
                    along with all the investments. Users attempting to identify
                    the owner of the investment app instead find that the
                    company was anonymously incorporated in the Cayman Islands,
                    and the names on the website are individuals who don't
                    actually exist.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    To be certified as Openly Operated, operators are not
                    allowed to be anonymous — they are required to{" "}
                    <Link href="/how-to#identify-operation">
                      identify themselves
                    </Link>{" "}
                    and to be reachable. Auditors then verify this information
                    in the{" "}
                    <Link href="/auditors#the-audit-process">
                      Auditing Process
                    </Link>{" "}
                    step. Openly Operated apps also provide ways to contact the
                    operators, so users can directly clarify any concerns.
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="ownership-change" className="pt-4">
              Case: Ownership Change
            </h5>
            <p>
              Even if an app's current owners and operators are fully trusted,
              what happens if the app gets acquired, or is sold off to different
              owners? Change of ownership can happen at any time, and happens
              frequently with successful products. The risk is that the new
              management may want to increase profits by sacrificing user
              security and privacy.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    An international messaging app whose founders are privacy
                    advocates is acquired by a large social networking company,
                    who vaguely promises that the messaging app's users will not
                    exploit personal data for advertisements. A few years later,
                    the social networking company starts to do it in secret
                    anyway.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    Openly Operated requires that all code is open source and
                    verifiable. In the case of an ownership change,{" "}
                    <Link href="/how-to#claims-with-proof">
                      proof of claims
                    </Link>{" "}
                    such as claims about privacy would have to be re-submitted
                    and re-audited.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="https://9to5mac.com/2019/03/17/brian-acton-facebook-delete-apple/"
                      target="_blank"
                      className="small"
                    >
                      "WhatsApp co-founder renews call for users to delete
                      Facebook", March 17th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://globalnews.ca/news/4662348/google-streams-health-app-privacy/"
                      target="_blank"
                      className="small"
                    >
                      "Google's acquisition of health care app has privacy
                      experts concerned.", November 14th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bankrate.com/finance/identity-theft/consumer-data-company-acquisition.aspx"
                      target="_blank"
                      className="small"
                    >
                      "What happens after consumer data after a company
                      acquisition?", August 18th, 2016
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="hidden-breaches" className="pt-4">
              Case: Hidden Breaches
            </h5>
            <p>
              Currently, users rely on companies self-reporting when security
              breaches and privacy violations happen; this is like having
              prisoners guard themselves. Obviously, companies have little
              incentive to broadcast that user data was stolen if they can
              simply destroy all evidence. If you feel like today's data
              breaches are happening too frequently, then there's bad news for
              you: the number of <em>actual</em> data breaches that simply get
              swept under the rug are likely much, much higher.
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
                      Problem Scenario
                    </em>
                  </td>
                  <td>
                    A once widely used search engine and email service is
                    hacked. With hundreds of millions of user passwords stolen,
                    company executives realize it is the largest hack in
                    internet history. But to avoid further depressing the price
                    of the already poorly performing stock, the company keeps
                    the hack a secret. Years later, when it is courting an
                    acquisition, the company realizes that the details of
                    security breach would be uncovered during due diligence, and
                    finally fesses up to the hack.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Openly Operated Solution
                    </em>
                  </td>
                  <td>
                    Openly Operated products are required to publicly provide
                    verifiable{" "}
                    <Link href="/how-to#audit-trail">
                      infrastructure-level audit trails
                    </Link>
                    . In cases of hacks, there are usually (but not always)
                    telltale signs such as direct access to a database password
                    and changes in firewall settings or security groups. These
                    audit logs are reviewed by auditors every time an Openly
                    Operated evaluation occurs, providing an upper bound for how
                    long the company has to disclose breaches.
                  </td>
                </tr>
                <tr>
                  <td className="text-right align-top">
                    <em className="small text-secondary text-nowrap mr-2">
                      Examples
                    </em>
                  </td>
                  <td>
                    <a
                      href="http://fortune.com/2016/11/09/yahoo-hack-data-breach-sec/"
                      target="_blank"
                      className="small"
                    >
                      "Yahoo knew about the breach in 2014", November 10th, 2016
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.nytimes.com/2017/11/21/technology/uber-hack.html"
                      target="_blank"
                      className="small"
                    >
                      "Uber Hid 2016 Breach, Paying Hackers to Delete Stolen
                      Data", November 21st, 2017
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.theverge.com/2018/10/8/17951914/google-plus-data-breach-exposed-user-profile-information-privacy-not-disclosed"
                      target="_blank"
                      className="small"
                    >
                      "Google hid major Google+ security flaw that exposed
                      users’ personal information", October 8th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bleepingcomputer.com/news/security/teamviewer-confirms-undisclosed-breach-from-2016/"
                      target="_blank"
                      className="small"
                    >
                      "TeamViewer Confirms Undisclosed Breach From 2016", May
                      17th, 2019
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.bankinfosecurity.asia/freshmenu-hid-data-breach-affecting-110000-users-a-11514"
                      target="_blank"
                      className="small"
                    >
                      "FreshMenu hid data breach affecting 110,000 users",
                      September 14th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://www.forbes.com/sites/jenniferhicks/2018/10/09/what-drives-tech-internet-giants-to-hide-data-breaches-like-the-google-breach/#18c7388258a2"
                      target="_blank"
                      className="small"
                    >
                      "What Drives Tech Internet Giants To Hide Data Breaches ",
                      October 9th, 2018
                    </a>
                  </td>
                </tr>
                <tr>
                  <td />
                  <td>
                    <a
                      href="https://krebsonsecurity.com/2016/12/yahoo-one-billion-more-accounts-hacked/"
                      target="_blank"
                      className="small"
                    >
                      "One billion more accounts hacked", December 16th, 2016
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="serif mb-1" />
                  <td />
                </tr>
              </tbody>
            </table>
            <h5 id="other-benefits" className="pt-4">
              Other Benefits
            </h5>
            <p>
              This is not an exhaustive list of user benefits and protections.
              There are likely many other unsavory behaviors that would be
              uncovered and stopped if companies and apps were fully
              transparent. Openly Operated creates a deterrent effect against
              lazy, insecure, or malicious programming. But the benefits aren't
              just for users — read about how{" "}
              <Link href="/for-companies">companies benefit</Link>.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
