import Image from 'next/image'
import styles from './page.module.css';

export const metadata = {
  title: 'FACEWORX',
  description: 'Faceworx anti-wrinkle injections, dermal fillers and skin boosters.',
  openGraph: { type: "website", url: "https://faceworx.beauty", title: "FACEWORX", description: "Faceworx anti-wrinkle injections, dermal fillers and skin boosters.", siteName: "FACEWORX", image: '/images/logo.png'},
  icons: {
    icon: '/images/favicon.ico',
  },
}

function Privacy() {
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <br />
        <h2>Privacy Policy</h2>
        <br />
        <p>At Faceworx, we are committed to protecting the privacy and security of our website users and clients. This Privacy Policy outlines the types of personal information we collect, how we use and protect it, and the choices you have regarding your information. By using our website, you agree to the terms of this Privacy Policy.</p>
        <br />
        <h3>Information We Collect</h3>
        <br />
        <p>
          1.1. Personal Information: When you visit our website or communicate with us, we may collect personal information, such as your name, email address, phone number, and any other information you provide voluntarily.
        <br /> <br />
          1.2. Usage Data: We may collect non-personal information about your interactions with our website, including your IP address, browser type, device information, and pages visited, to improve our services and website experience.
        </p>

        <br />

        <h3>Use of Personal Information</h3>
        <br />
        <p>
          2.1. Service Provision: We may use your personal information to provide you with requested services, including scheduling appointments, administering treatments, and responding to your inquiries.
          <br /> <br />
          2.2. Communication: We may use your personal information to send you relevant information, updates, newsletters, and promotional offers, unless you choose to opt out of such communications.
          <br /> <br />
          2.3. Improving Services: We may use your information to analyze trends, gather demographic information, and enhance our website, services, and overall customer experience.
          <br /> <br />
          2.4. Legal Compliance: We may use and disclose your personal information to comply with applicable laws, regulations, legal processes, or enforceable governmental requests.
        </p>
        <br />
        <h3>Information Security</h3>
        <br />
        <p>
          3.1. We employ industry-standard security measures to protect your personal information from unauthorized access, misuse, loss, or disclosure. However, please note that no method of transmission over the internet or electronic storage is 100% secure.
        <br /><br />
          3.2. We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, or as required by law.
        </p>
        <br />

        <h3>Sharing of Personal Information</h3>
        <br />
        <p>
          4.1. We do not sell, trade, or rent your personal information to third parties for their marketing purposes.
        <br /><br />
          4.2. We may share your personal information with trusted third-party service providers who assist us in delivering our services, such as appointment scheduling, payment processing, and website analytics. These providers are obligated to protect your information and use it solely for the purposes specified by us.
        <br /><br />
          4.3. We may disclose your personal information if required by law, to protect our rights, or to comply with a judicial proceeding, court order, or legal process.
        </p>
        
        <br />
        <h3>Your Rights and Choices</h3>
        <br />
        <p>
          5.1. You have the right to access, update, correct, or delete your personal information by contacting us directly.
        <br /><br />
          5.2. You may opt out of receiving promotional communications from us by following the instructions provided in such communications or by contacting us directly.
        <br /><br />
          5.3. Please note that even if you opt out of marketing communications, we may still send you transactional or administrative messages related to our services.
        </p>
        <br />

  
        <h3>Third-Party Links</h3>
        <br />
        <p>Our website may contain links to third-party websites or services that are not operated or controlled by us. This Privacy Policy does not apply to those third-party websites. We recommend reviewing the privacy policies of those websites before providing any personal information.</p>
        <br />
        <h3>Changes to the Privacy Policy</h3>
        <br />
        <p>We reserve the right to modify or update this Privacy Policy at any time. Any changes will be effective immediately upon posting the revised policy on our website. We encourage you to review this Privacy Policy periodically for any updates.</p>
        <br />
        <h3>Contact Us</h3>
        <br />
        <p>
          If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us at:</p>
          <br />
            <p>Spinnakers</p>
            <p>Laindon Common Road</p>
            <p>Little Burstead</p>
            <p>Billericay</p>
            <p>Essex</p><br/>
            <p>CM12 9TD</p>
        <br />
        <p>This Privacy Policy was last updated on 03/07/2023.</p>
  
      </div>
    </div>
  )
}

export default Privacy