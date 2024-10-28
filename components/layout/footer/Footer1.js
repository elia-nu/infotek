
"use client";

import Link from "next/link"
import { useState, useEffect } from 'react';

export default function Footer1() {
    const [isOpen, setIsOpen] = useState(false);

    
    const services = [
        "Software Development",
        "Managed Services",
        "Infrastructure Services",
        "System Integration",
        "Training and Development",
        "Cybersecurity Services"
    ];
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
                                            <img src="/assets/img/header/logo.png" style={{ width: '300px' }} alt="logo-img" />
                                        </Link>
                                    </div>
                                    <div className="footer-content">
                                        <p>
                                        Qedami Software Solutions is a technology firm providing advanced, customized solutions for businesses. Specializing in software development, system integration, and IT consulting, Qedami uses the latest technology to optimize operations and drive growth.
                                        </p>
                                        <div className="social-icon d-flex align-items-center">
                                        <Link href=" https://www.facebook.com/share/8nDYQiLdk45Ank1V/" target="_blank"><i className="fab fa-facebook-f" /></Link>
                                    <Link href=" https://x.com/Qedamisolutions?t=SZm06VjW8VakIkaNYuaGeA&s=08" target="_blank"><i className="fab fa-twitter" /></Link>
                                    <Link href=" https://t.me/QedamiSolution" target="_blank"><i className="fab fa-telegram" /></Link>
                                    <Link href=" https://www.linkedin.com/company/qedami-software-solution-and-services/about/?viewAsMember=true" target="_blank"><i className="fab fa-linkedin-in" /></Link>
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
                                                <div className="col-xl-3 col-lg-3 col-md-5 ps-lg-4 wow fadeInUp" data-wow-delay=".5s">
                                                    <div className="single-footer-widget style-margin">
                                                        <div className="widget-head">
                                                            <h3>Our Services</h3>
                                                        </div>
                                                        <ul className="list-area">
                                                            {services.map((service, index) => (
                                                                <li key={index}>
                                                                    <Link href={`/service-details?title=${encodeURIComponent(service)}`}>
                                                                    
                                                                        {service}
                                                                        <i className="fa-solid fa-chevron-right" />
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                        
                                                    </div>
                                      
                                                    <div className="col-xl-3 col-lg-4 col-md-6 ps-xl-6 wow fadeInUp" data-wow-delay=".9s">
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
                                                <i className="fa-regular fa-envelope" />
                                                <Link href="/mailto:infotech@gmail.com">info@qedamisolution.com
                                                </Link>
                                               
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+251 91 081 3571</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+251 94 143 9741</Link>
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-phone-volume" />
                                                <Link href="/tel:+251910813571">+1 206 353 5373</Link>
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
const data = {
    company: {
        name: "Qedami IT Solutions and Services",
        description: "Qedami IT Solutions and Services offers a comprehensive range of IT services to drive business growth through innovative technology and expertise. We specialize in software development, managed services, infrastructure management, system integration, training, and cybersecurity.",
        services: [
            {
                title: "Software Development",
                description: "At Qedami IT Solutions and Services, we offer a comprehensive range of software development solutions tailored to meet your unique business needs and drive growth through innovative technology and industry expertise. Our services include:",
                subservices: [
                    {
                        name: "Custom Software Development",
                        description: "We provide tailor-made software solutions designed to fit your specific operational requirements and seamlessly integrate with your existing systems.",
                        key_features: [
                            "Tailored Solutions: Customized software to address your unique business processes.",
                            "Seamless Integration: Smooth integration with your current systems to maintain operational efficiency.",
                            "Scalable and Adaptable: Solutions that grow with your business and adjust to future needs."
                        ]
                    },
                    {
                        name: "Mobile App Development",
                        description: "Our team develops high-performance, user-friendly mobile applications for both iOS and Android platforms, enhancing user engagement and optimizing workflows.",
                        key_features: [
                            "Intuitive Interfaces: Engaging and easy-to-use designs for a superior user experience.",
                            "High Performance: Optimized applications ensuring smooth functionality on both iOS and Android.",
                            "Smooth User Experience: Efficient and seamless performance for enhanced usability."
                        ]
                    },
                    {
                        name: "Web Development",
                        description: "We craft responsive, secure websites and web applications that effectively represent your brand and deliver an outstanding user experience.",
                        key_features: [
                            "Responsive Design: Adaptable to various devices and screen sizes for a consistent experience.",
                            "Secure and Scalable: Robust solutions that ensure security and can expand with your business needs.",
                            "Enhanced User Experience: Optimized to provide a superior experience and effectively represent your brand."
                        ]
                    },
                    {
                        name: "Enterprise Software Solutions",
                        description: "We offer scalable and robust solutions designed to streamline complex processes, integrate seamlessly with existing systems, and deliver valuable data insights.",
                        key_features: [
                            "Scalable Solutions: Efficiently manage large-scale operations with scalable solutions.",
                            "Seamless Integration: Integrate smoothly with your current enterprise systems for enhanced efficiency.",
                            "Comprehensive Insights: Deliver valuable data analytics and insights for informed decision-making."
                        ]
                    }
                ]
            },
            {
                title: "Managed Services",
                description: "At Qedami IT Solutions and Services, our Managed Services are designed to ensure your business operates smoothly and securely. We offer a comprehensive suite of services that includes IT Support and Helpdesk, Managed Network Services, Managed Security Services, and Managed Cloud Services. Our proactive approach to managing your IT infrastructure allows you to focus on driving your business forward with confidence.",
                subservices: [
                    {
                        name: "IT Support and Helpdesk",
                        description: "Proactive IT infrastructure management to ensure smooth and secure business operations.",
                        key_features: [
                            "24/7 Support: Around-the-clock assistance to resolve issues quickly.",
                            "Expert Assistance: Access to skilled professionals with deep technical knowledge.",
                            "Efficient Resolution: Fast and effective solutions to minimize downtime."
                        ]
                    },
                    {
                        name: "Managed Network Services",
                        description: "Proactive network management to ensure optimal performance and security.",
                        key_features: [
                            "Network Monitoring: Continuous monitoring to detect and address issues proactively.",
                            "Performance Optimization: Ensuring optimal network performance and reliability.",
                            "Scalability: Solutions that grow with your business needs."
                        ]
                    },
                    {
                        name: "Managed Security Services",
                        description: "Advanced security management to safeguard your systems and data from cyber threats.",
                        key_features: [
                            "Threat Detection and Response: Advanced tools and strategies to identify and mitigate threats.",
                            "Data Protection: Robust measures to safeguard your sensitive information.",
                            "Compliance: Ensuring adherence to industry regulations and standards."
                        ]
                    },
                    {
                        name: "Managed Cloud Services",
                        description: "Advanced cloud management to optimize performance and cost-efficiency.",
                        key_features: [
                            "Cloud Optimization: Tailored solutions for optimal cloud performance and cost-efficiency.",
                            "Scalability: Easily adjust resources based on your business needs.",
                            "Support and Management: Comprehensive management and support to ensure seamless cloud operations."
                        ]
                    }
                ]
            },
            {
                title: "Infrastructure Services",
                description: "At Qedami IT Solutions and Services, we provide a full range of Infrastructure Services designed to optimize and enhance your IT infrastructure. Our offerings include Network Setup and Management, Server Installation and Maintenance, Cloud Services (IaaS, PaaS, SaaS), and Data Center Management. We focus on ensuring that your IT operations are robust, scalable, and efficient, enabling your business to thrive in a digital landscape.",
                subservices: [
                    {
                        name: "Network Setup and Management",
                        description: "We design, implement, and manage your network infrastructure to ensure seamless connectivity and reliable performance.",
                        key_features: [
                            "Network Design and Implementation: Custom solutions tailored to your business requirements.",
                            "Ongoing Management: Continuous monitoring and maintenance to ensure optimal network performance.",
                            "Troubleshooting and Support: Rapid resolution of network issues to minimize downtime."
                        ]
                    },
                    {
                        name: "Server Installation and Maintenance",
                        description: "Our services cover the installation, configuration, and ongoing maintenance of your server infrastructure to ensure stability and efficiency.",
                        key_features: [
                            "Server Setup: Professional installation and configuration of servers to meet your operational needs.",
                            "Regular Maintenance: Routine checks and updates to ensure server reliability and performance.",
                            "Performance Optimization: Enhancements to maximize server efficiency and response times."
                        ]
                    },
                    {
                        name: "Cloud Services (IaaS, PaaS, SaaS)",
                        description: "We offer a range of cloud solutions, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS), to support your business operations.",
                        key_features: [
                            "IaaS: Scalable and flexible infrastructure solutions to support your IT needs.",
                            "PaaS: Development and deployment platforms for building and managing applications.",
                            "SaaS: Access to essential software applications with minimal upfront investment."
                        ]
                    },
                    {
                        name: "Data Center Management",
                        description: "We manage and maintain your data center facilities to ensure secure, efficient, and reliable operation.",
                        key_features: [
                            "Facility Management: Comprehensive oversight of physical and virtual data center environments.",
                            "Security and Compliance: Implementing measures to protect your data and meet regulatory requirements.",
                            "Resource Optimization: Efficient use of data center resources to reduce costs and improve performance."
                        ]
                    }
                ]
            },
            {
                title: "System Integration",
                description: "At Qedami IT Solutions and Services, our System Integration services are designed to provide seamless connectivity and enhance the efficiency of your IT environment. We specialize in API Integration, Enterprise Application Integration, and Middleware Development to unify your disparate systems and applications. Our goal is to ensure smooth data exchange, improved performance, and a cohesive IT ecosystem that drives your business forward.",
                subservices: [
                    {
                        name: "API Integration",
                        description: "We enable your systems to communicate effectively by integrating various APIs, allowing for efficient data exchange and interaction between different software applications.",
                        key_features: [
                            "Custom API Development: Tailored API solutions to meet your specific integration needs.",
                            "Enhanced Connectivity: Seamless interaction between diverse applications and services.",
                            "Real-time Data Exchange: Immediate synchronization of data across systems."
                        ]
                    },
                    {
                        name: "Enterprise Application Integration",
                        description: "Our services focus on integrating your enterprise applications to streamline processes, improve data accuracy, and enhance overall efficiency.",
                        key_features: [
                            "Holistic Integration: Unified view and management of enterprise applications.",
                            "Process Optimization: Streamlined workflows and reduced redundancy.",
                            "Improved Data Consistency: Ensuring accurate and up-to-date information across applications."
                        ]
                    },
                    {
                        name: "Middleware Development",
                        description: "We develop and implement middleware solutions to facilitate communication and data exchange between different software applications and systems.",
                        key_features: [
                            "Custom Middleware Solutions: Tailored middleware to fit your specific integration requirements.",
                            "Enhanced Performance: Optimized communication channels for better system performance.",
                            "Scalability: Middleware solutions that grow with your business needs."
                        ]
                    }
                ]
            },
            {
                title: "Training and Development",
                description: "At Qedami IT Solutions and Services, our Training and Development services are designed to empower your team with the knowledge and skills needed to leverage your technology effectively. We offer tailored programs in Technical Training, Software Training, and End-User Training to ensure enhanced proficiency and optimal utilization of your systems.",
                subservices: [
                    {
                        name: "Technical Training",
                        description: "We provide specialized training for IT professionals to deepen their technical expertise and stay current with the latest technologies and practices.",
                        key_features: [
                            "In-Depth Technical Courses: Comprehensive training on advanced technical topics and tools.",
                            "Hands-On Experience: Practical sessions to apply theoretical knowledge in real-world scenarios.",
                            "Certification Preparation: Assistance with industry-recognized certifications and qualifications."
                        ]
                    },
                    {
                        name: "Software Training",
                        description: "Our software training programs are designed to help your team master the specific software applications your business uses.",
                        key_features: [
                            "Application-Specific Training: Focused sessions on the software tools relevant to your organization.",
                            "Customized Content: Tailored training materials to address your software’s unique features and functions.",
                            "Interactive Learning: Engaging methods to ensure effective learning and retention."
                        ]
                    },
                    {
                        name: "End-User Training",
                        description: "Our end-user training programs are designed to help your team master the specific software applications your business uses.",
                        key_features: [
                            "User-Friendly Training: Simple, clear instructions suited to users of all skill levels.",
                            "Practical Exercises: Real-world scenarios to help users apply what they've learned.",
                            "Ongoing Support: Resources and assistance to address any questions or issues that arise post-training."
                        ]
                    }
                ]
            },
            {
                title: "Cybersecurity Services",
                description: "At Qedami IT Solutions and Services, our Cybersecurity Services are designed to provide robust protection against digital threats and ensure the safety of your critical data and systems. Our comprehensive offerings include Security Audits and Assessments, Threat Detection and Response, Vulnerability Management, and Data Encryption and Protection. We implement advanced strategies to fortify your digital environment, proactively identify risks, and maintain the highest level of security.",
                subservices: [
                    {
                        name: "Security Audits and Assessments",
                        description: "We conduct thorough security audits and assessments to evaluate your current security posture and identify potential vulnerabilities.",
                        key_features: [
                            "Comprehensive Audits: Detailed examinations of your security infrastructure and practices.",
                            "Risk Identification: Detection of weaknesses and potential threats to your systems.",
                            "Actionable Recommendations: Practical advice for enhancing your security measures and policies."
                        ]
                    },
                    {
                        name: "Threat Detection and Response",
                        description: "Our services provide real-time monitoring and rapid response to emerging threats, minimizing potential damage and downtime.",
                        key_features: [
                            "24/7 Monitoring: Continuous surveillance of your network and systems for suspicious activities.",
                            "Immediate Response: Quick action to address and neutralize threats as they arise.",
                            "Incident Management: Detailed reporting and management of security incidents to prevent recurrence."
                        ]
                    },
                    {
                        name: "Vulnerability Management",
                        description: "We identify and manage vulnerabilities within your IT environment to reduce the risk of exploitation and ensure system integrity.",
                        key_features: [
                            "Vulnerability Scanning: Regular scans to detect potential security weaknesses.",
                            "Patch Management: Timely updates and patches to address identified vulnerabilities.",
                            "Risk Prioritization: Assessment and prioritization of vulnerabilities based on potential impact."
                        ]
                    },
                    {
                        name: "Data Encryption and Protection",
                        description: "We implement robust encryption and protection measures to safeguard your sensitive data from unauthorized access and breaches.",
                        key_features: [
                            "Data Encryption: Advanced encryption techniques to secure data both at rest and in transit.",
                            "Access Controls: Strict access management to ensure only authorized personnel can view or modify sensitive information.",
                            "Data Loss Prevention: Strategies and tools to prevent accidental or malicious data loss."
                        ]
                    }
                ]
            }
        ]
    }
};