
"use client";

import Link from "next/link"
import { useState } from 'react';

export default function Footer1() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDialog = () => setIsOpen(!isOpen);
    return (
        <>

            <footer className="footer-section">
                <div className="footer-widgets-wrapper footer-bg">
                    <div className="shape-1">
                        <img src="/assets/img/footer-shape-1.png" alt="shape-img" />
                    </div>
                    <div className="shape-2">
                        <img src="/assets/img/footer-shape-2.png" alt="shape-img" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <Link href="/">
                                            <img src="https://qedamisolution.com/logo.png" style={{ width: '300px' }} alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                        Qedami Software Solutions is a technology firm providing advanced, customized solutions for businesses. Specializing in software development, system integration, and IT consulting, Qedami uses the latest technology to optimize operations and drive growth.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                            <Link href="#"><i className="fab fa-facebook-f" /></Link>
                                            <Link href="#"><i className="fab fa-twitter" /></Link>
                                            <Link href="#"><i className="fa-brands fa-linkedin-in" /></Link>
                                            <Link href="#"><i className="fa-brands fa-youtube" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Quick Links</h3>
                                    </div>
                                    <ul className="list-area" >
                                        <li>
                                            <Link href="/about">
                                                <i className="fa-solid fa-chevron-right" />
                                                 About Qedami
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Services
                                            </Link>
                                        </li>
                                     
                                        <li>
                                            <Link href="/faq">
                                                <i className="fa-solid fa-chevron-right" />
                                                FAQ’S
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/project">
                                                <i className="fa-solid fa-chevron-right" />
                                                Our Projects
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/career">
                                                <i className="fa-solid fa-chevron-right" />
                                                Careers
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".5s">
                                <div className="single-footer-widget style-margin">
                                    <div className="widget-head">
                                        <h3>IT Solution</h3>
                                    </div>
                                    <ul className="list-area">
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                IT Management
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Web Development
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                Cyber Security
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                SEO Optimization
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/service-details">
                                                <i className="fa-solid fa-chevron-right" />
                                                App Development
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".9s">
                                <div className="single-footer-widget">
                                    <div className="widget-head">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul className="contact-info">
                                            <li>
                                                <i className="fas fa-map-marker-alt" />
                                                Lingo Tower Infront sheger Plaza Bole, Addis Ababa, Ethiopia
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+251 91 081 3571</Link>
                                                <br/>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+251 94 143 9741</Link>
                                                <br/>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+1 206 353 5373</Link>
                                            </li>
                                            <li>
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:infotech@gmail.com">info@qedamisolution.com
                                                </Link>
                                               
                                            </li>
                                        </ul>
                                        <Link href="/contact" className="theme-btn hover-white mt-4">
                                            Contact Us
                                            <i className="fa-solid fa-arrow-right-long" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="footer-wrapper d-flex align-items-center justify-content-between">
                            <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
                                <span style={{fontSize: '30px'}}>©</span> All Copyright {new Date().getFullYear()} by <Link href="/">Qedami Software Solution and Services</Link>
                            </p>
                            <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                            <li>
                                    <a     onClick={toggleDialog}>
                                    Terms &amp; Condition
                                    </a>
                                </li>
                                <li>
                                    <a  onClick={() => document.getElementById('infoDialog').showModal()}>
                                    Privacy Policy
                                    </a>
                                </li>
                            
                            </ul>
                        </div>
                    </div>
                    <Link href="#" id="scrollUp" className="scroll-icon">
                        <i className="far fa-arrow-up" />
                    </Link>
                </div>
      
            <dialog id="infoDialog" className="dialog">
                <form method="dialog" style={{ width: '90%', height: '90%', padding: '40px 30px', borderRadius: '30px',  }}>
                    <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Privacy Policy</h2>
                    <p style={{ marginBottom: '20px', textAlign: 'center', color: '#666' }}>Last Updated: September 2024</p>
                    <ol style={{ paddingLeft: '20px', color: '#444' }}>
                        <li>
                            <strong style={{ color: '#007bff' }}>Introduction</strong>
                            <p>Welcome to Qedami Software Solution and Services ("Qedami," "we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you access or use our website, products, or services. By using our services, you consent to the practices described in this Privacy Policy.</p>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Information We Collect</strong>
                            <p>We may collect various types of information, including:</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li><strong>Personal Information:</strong> This includes identifiable information such as your name, email address, phone number, and payment details that you provide when engaging with our services.</li>
                                <li><strong>Usage Data:</strong> Information about your interactions with our website or services, such as IP address, browser type, operating system, pages visited, and the duration of your visit.</li>
                                <li><strong>Cookies and Tracking Technologies:</strong> We use cookies and similar technologies to enhance your experience on our website, track user activity, and analyze trends.</li>
                            </ul>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>How We Use Your Information</strong>
                            <p>We use your personal information for various purposes, including:</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>To Provide and Improve Services: To deliver and enhance the services you request and manage your account.</li>
                                <li>To Communicate with You: To respond to inquiries, send updates, and provide important notices related to our services.</li>
                                <li>For Billing and Payments: To process transactions and manage billing.</li>
                                <li>To Analyze and Improve: To analyze usage patterns, track performance, and improve our website and services.</li>
                                <li>For Marketing: With your consent, to send promotional materials and offers.</li>
                            </ul>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Disclosure of Your Information</strong>
                            <p>We may disclose your personal information to:</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>Service Providers: Third-party vendors who perform services on our behalf, such as payment processing, data analysis, and customer support.</li>
                                <li>Legal Requirements: To comply with legal obligations, enforce our Terms, or protect the rights, property, or safety of Qedami, our clients, or others.</li>
                                <li>Business Transfers: In connection with a merger, acquisition, or sale of assets, where your information may be transferred as part of the transaction.</li>
                            </ul>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Data Security</strong>
                            <p>We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Data Retention</strong>
                            <p>We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements.</p>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Your Rights</strong>
                            <p>Depending on your jurisdiction, you may have rights regarding your personal information, including:</p>
                            <ul style={{ paddingLeft: '20px' }}>
                                <li>Access: The right to request access to the personal information we hold about you.</li>
                                <li>Correction: The right to request correction of inaccurate or incomplete information.</li>
                                <li>Deletion: The right to request the deletion of your personal information under certain conditions.</li>
                                <li>Opt-Out: The right to opt-out of receiving marketing communications.</li>
                            </ul>
                            <p>To exercise these rights, please contact us using the information provided below.</p>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Changes to This Privacy Policy</strong>
                            <p>We may update this Privacy Policy from time to time. Any changes will be posted on our website with an updated effective date. We encourage you to review this Privacy Policy periodically to stay informed of any changes.</p>
                        </li>
                        <li>
                            <strong style={{ color: '#007bff' }}>Contact Us</strong>
                            <p>If you have any questions or concerns about this Privacy Policy or our practices, please contact us at:</p>
                            <p>Qedami Software Solution and Services<br />
                            Email: <a href="mailto:info@qedamisolution.com" style={{ color: '#007bff' }}>info@qedamisolution.com</a><br />
                            Phone: <a href="tel:+251910813571" style={{ color: '#007bff' }}>+251910813571</a><br />
                            Address: Bole, Lingo Tower, Addis Ababa, Ethiopia</p>
                            <p>By using our services, you acknowledge that you have read, understood, and agree to this Privacy Policy. Thank you for choosing Qedami Software Solution and Services.</p>
                        </li>
                    </ol>
                    <menu style={{ position: 'absolute', right: 20, top: 20 }}>
                        <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer', transition: 'background-color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>Close</button>
                    </menu>
                </form>
            </dialog>














      {isOpen && (
        <div className='position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-dark bg-opacity-50' style={{zIndex: 100}}>
          <div className='bg-white w-75 rounded shadow p-4 overflow-auto' style={{ maxHeight: '90vh' }}>
            <h2 className='h4 font-weight-bold text-dark'>
              Terms and Conditions
            </h2>
            <p className='small text-muted'>
              Last Updated: September 2024
            </p>
            <p className='text-dark'>
              These Terms and Conditions ("Terms") govern your access to and use
              of Qedami Software Solution and Services ("Qedami," "we," "us," or
              "our"). By accessing or using our website, products, or services,
              you agree to be bound by these Terms. If you do not agree with
              these Terms, please do not use our services. These Terms affect
              your legal rights and obligations, so please read them carefully.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              1. Acceptance of Terms
            </h3>
            <p className='text-dark'>
              By accessing or using any of our services, you agree to be bound
              by these Terms, which form a legally binding agreement between you
              and Qedami. You agree to comply with all applicable laws, rules,
              and regulations when using our services.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              2. Definitions
            </h3>
            <ul className='list-unstyled text-dark'>
              <li>
                <strong>“Services”:</strong> The full range of software
                development, IT consulting, maintenance, and related technology
                solutions provided by Qedami.
              </li>
              <li>
                <strong>“Client”:</strong> Any individual, entity, or
                organization that engages Qedami for its services.
              </li>
              <li>
                <strong>“Content”:</strong> Any data, information, software, or
                material displayed or shared through our platform or services.
              </li>
            </ul>

            <h3 className='h5 font-weight-bold text-dark'>
              3. Modification of Terms
            </h3>
            <p className='text-dark'>
              Qedami reserves the right to modify, amend, or update these Terms
              at any time. Changes will take effect immediately upon posting the
              updated Terms on our website. We recommend reviewing these Terms
              regularly to stay informed of any updates. Your continued use of
              the services constitutes acceptance of the modified Terms.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              4. Scope of Services
            </h3>
            <p className='text-dark'>
              Qedami offers custom software development, IT consultancy, mobile
              app development, and related technology services. The scope of
              services provided to each client will be defined in a mutually
              agreed-upon service agreement, contract, or proposal.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>
              4.1 Service Delivery
            </h4>
            <p className='text-dark'>
              Qedami is committed to providing high-quality services. We make
              every reasonable effort to meet agreed-upon deadlines and deliver
              services as outlined in individual contracts. However, delivery
              timelines may be affected by factors beyond our control, including
              third-party delays, unforeseen technical challenges, or force
              majeure events.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>
              4.2 Service Modifications
            </h4>
            <p className='text-dark'>
              Qedami reserves the right to modify or discontinue any part of our
              services at any time without prior notice. Clients will be
              notified if such changes significantly affect ongoing projects.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              5. Client Responsibilities
            </h3>
            <p className='text-dark'>
              Clients are expected to provide timely, accurate, and complete
              information necessary for the execution of services.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>
              5.1 Content and Data Sharing
            </h4>
            <p className='text-dark'>
              Any content, data, or materials provided to Qedami for the
              completion of services must be free of intellectual property
              violations or other legal issues.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>
              5.2 Collaboration
            </h4>
            <p className='text-dark'>
              You agree to cooperate with Qedami by providing access to
              necessary systems, personnel, and information for successful
              project completion. Delays or failure to provide requested
              resources may result in project delays, for which Qedami cannot be
              held responsible.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              6. Fees, Payment, and Taxes
            </h3>
            <h4 className='h6 font-weight-bold text-dark'>
              6.1 Payment Terms
            </h4>
            <p className='text-dark'>
              Clients agree to pay all fees for the services provided as
              outlined in the relevant service contract or invoice. Payment
              terms will vary depending on the service agreement but must be
              adhered to strictly.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>
              6.2 Late Payments
            </h4>
            <p className='text-dark'>
              In case of delayed payments, Qedami reserves the right to charge a
              late fee or interest at the rate specified in the service contract
              or invoice. Failure to pay outstanding balances may lead to
              suspension or termination of services.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>6.3 Taxes</h4>
            <p className='text-dark'>
              All fees charged by Qedami will include any applicable sales, use,
              VAT, or other taxes. Qedami is responsible for any applicable
              taxes associated with the purchase of services unless otherwise
              stated in the contract.
            </p>

            <h4 className='h6 font-weight-bold text-dark'>
              6.4 Ethiopian Tax and VAT
            </h4>
            <p className='text-dark'>
              For services provided within Ethiopia, Qedami will comply with
              applicable Ethiopian tax laws, including Value Added Tax (VAT).
              All fees and payments will be subject to Ethiopian tax
              regulations, and the client agrees to bear any VAT or taxes
              imposed by the government of Ethiopia unless otherwise agreed in
              writing. Qedami reserves the right to amend invoices and charge
              the client for any applicable taxes that were not initially
              included due to oversight or later-imposed legal obligations.
            </p>
            <h3 className='h5 font-weight-bold text-dark'>
              7. Confidentiality and Data Protection
            </h3>
            <p className='text-dark'>
              <strong>7.1 Confidential Information:</strong> Qedami agrees to
              keep all client data, proprietary information, and sensitive
              business details confidential and will not disclose them to third
              parties unless required by law.
            </p>
            <p className='text-dark'>
              <strong>7.2 Data Security:</strong> Qedami follows
              industry-standard practices to secure client data against
              unauthorized access, loss, or misuse. However, no data
              transmission over the internet is 100% secure, and we cannot
              guarantee complete security.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              8. Intellectual Property Rights
            </h3>
            <p className='text-dark'>
              <strong>8.1 Ownership of Deliverables:</strong> All software,
              applications, and technology created or provided by Qedami as part
              of our services are the intellectual property of Qedami unless
              expressly transferred to the client through a separate written
              agreement.
            </p>
            <p className='text-dark'>
              <strong>8.2 License:</strong> Where applicable, clients will be
              granted a non-exclusive, non-transferable license to use the
              software or applications developed by Qedami, subject to the terms
              specified in the service contract.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              9. Warranties and Disclaimers
            </h3>
            <p className='text-dark'>
              Qedami will provide warranties or guarantees as specified in the
              service agreement with the client or involved parties. These
              warranties will cover a specific period, depending on the nature
              of the services. The contract will outline the extent of these
              assurances, including performance standards, remedy options, and
              limitations.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              10. Limitation of Liability
            </h3>
            <p className='text-dark'>
              Qedami shall not be held liable for any indirect, incidental,
              special, or consequential damages, including loss of revenue,
              profits, data, or business opportunities, arising out of or in
              connection with the use of our services.
            </p>
            <p className='text-dark'>
              Qedami's maximum liability shall be limited to the fees paid by
              the client for the specific service in question.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              11. Indemnification
            </h3>
            <p className='text-dark'>
              You agree to indemnify and hold harmless Qedami, its affiliates,
              officers, directors, employees, and agents from any claims,
              liabilities, damages, or expenses arising out of your use of our
              services, breach of these Terms, or violation of any third-party
              rights.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              12. Termination of Services
            </h3>
            <p className='text-dark'>
              Qedami reserves the right to suspend or terminate access to our
              services at any time, with or without cause, including for
              violations of these Terms or non-payment of fees.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              13. Force Majeure
            </h3>
            <p className='text-dark'>
              Qedami will not be liable for any failure or delay in performing
              our obligations due to unforeseen events beyond our reasonable
              control, including but not limited to acts of nature, war,
              strikes, or government actions.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              14. Dispute Resolution
            </h3>
            <p className='text-dark'>
              Any disputes arising out of or relating to these Terms shall be
              resolved amicably between the parties.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              15. Governing Law and Jurisdiction
            </h3>
            <p className='text-dark'>
              These Terms shall be governed by the laws of Ethiopia. Any legal
              action related to these Terms shall be brought exclusively in the
              courts of Addis Ababa, Ethiopia.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              16. Entire Agreement
            </h3>
            <p className='text-dark'>
              These Terms, along with any additional agreements or contracts you
              enter into with Qedami, constitute the entire agreement between
              you and Qedami and supersede any prior agreements.
            </p>

            <h3 className='h5 font-weight-bold text-dark'>
              17. Contact Information
            </h3>
            <p className='text-dark'>
              For any questions or concerns, please contact us at:
            </p>
            <p className='text-dark'>
              Email: info@qedamisolution.com
              <br />
              Phone: +251910813571
              <br />
              Address: Bole, Lingo Tower, Addis Ababa, Ethiopia
            </p>

            <button
              onClick={toggleDialog}
              className='btn btn-danger mt-3'
            >
              Close
            </button>
          </div>
        </div>
      )}



            </footer>

        </>
    )
}
