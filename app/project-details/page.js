"use client";

import Layout from "@/components/layout/Layout"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function ProjectDetails() {
  const projectDetailsArray = {
    "Print Network": {
        "projectName": "Print Network",
        "Description": [
            "Print Network is a bulk ordering platform designed to connect large and international organizations like UNDP, FAO, AU, and Save the Children Addis Ababa Branch with top-notch marketing and advertising services. This platform streamlines the procurement process for print materials, ensuring high-quality production and timely delivery. It offers a centralized system for placing bulk orders, tracking shipments, and managing invoices, all while maintaining competitive pricing. By leveraging partnerships with leading print providers, Print Network ensures that these organizations can efficiently fulfill their marketing and advertising needs, enhancing their outreach and impact with professionally produced materials."
        ],
        "Benefits": [
            "Streamlined Procurement: Simplify the ordering process with a centralized platform that enhances efficiency and reduces time spent on procurement.",
            "Cost-Effective Solutions: Benefit from competitive pricing and bulk order discounts, maximizing your budget for marketing and advertising.",
            "Enhanced Collaboration: Foster better communication and coordination between organizations and print providers for smoother project execution.",
            "Quality Assurance: Ensure high-quality production standards through partnerships with reputable print providers.",
            "Timely Delivery: Rely on efficient logistics and tracking systems to guarantee that materials arrive on schedule, supporting your campaign timelines."
        ],
        "image": "https://website.backend.qedamisolution.com/uploads/project/1723107907285-Screenshot_8-8-2024_12453_reactfirebase-88afa.web.app.jpeg" // Added image
    },
    "Yeneta School": {
        "projectName": "Yeneta School",
        "Description": [
            "The Yeneta School Management System is a comprehensive platform designed to streamline the operations of the Yeneta Cultural and Language Center, enhancing efficiency in student information management, academic records, staff administration, financial transactions, and parent communication. Key features include enrollment, grade tracking, payroll processing, curriculum management, fee collection, internal messaging, library management, transport scheduling, and health records. Prioritizing user-friendliness, security, and scalability, the system integrates with existing tools and supports growth. Its development involves phases of requirement analysis, design, development, deployment, and ongoing maintenance, ensuring it meets the specific needs of the center while improving the overall educational experience."
        ],
        "Benefits": [
            "Enhanced Operational Efficiency: Streamline administrative tasks, allowing staff to focus on core educational activities.",
            "User-Centric Design: Create an intuitive interface that simplifies navigation for all users, including students, parents, and staff.",
            "Data-Driven Insights: Utilize analytics to monitor student performance and operational metrics, facilitating informed decision-making.",
            "Seamless Integration: Ensure compatibility with existing systems and tools, promoting a cohesive technological environment.",
            "Scalable Solutions: Adapt to the growing needs of the institution, accommodating more users and features as required."
        ],
        "image": "https://website.backend.qedamisolution.com/uploads/project/1723106202271-Screenshot_8-8-2024_11364_yenetaschool.com.jpeg" // Added image
    },
    "Company Profile Website": {
        "projectName": "Company Profile Website",
        "Description": [
            "The Highlight Tradings Company Profile Website is a sleek and modern CMS web application designed to provide a seamless user experience. It features a highly performant and responsive design, allowing users to effortlessly manage and update company profiles with ease. The platform boasts a clean and customizable user interface, ensuring an attractive presentation of company information. With its efficient architecture, the website offers lightning-fast load times and superior SEO capabilities, making it an ideal solution for businesses seeking to enhance their online presence."
        ],
        "Benefits": [
            "Professional Presentation: Showcase your company’s strengths and offerings with a modern and visually appealing design.",
            "Improved User Experience: Ensure visitors can easily navigate and find information, enhancing engagement and satisfaction.",
            "SEO Optimization: Boost your online visibility and attract more potential clients through effective search engine optimization strategies.",
            "Content Management: Effortlessly update and manage your company information, ensuring that all content is current and relevant.",
            "Brand Consistency: Maintain a cohesive brand image across all digital platforms, reinforcing your company’s identity and values."
        ],
        "image": "https://website.backend.qedamisolution.com/uploads/project/1723108337772-Screenshot_8-8-2024_121146_highlighttradings.com.jpeg" // Added image
    },
    "Customizable ERP System": {
        "projectName": "Customizable ERP System",
        "Description": [
            "At Qedami Software Solution and Services, we provide a fully customizable Enterprise Resource Planning (ERP) System tailored to meet the distinct needs of any industry. Our solution integrates various business processes into a seamless platform enhancing productivity and operational efficiency for organizations of all sizes from manufacturing and retail to healthcare and education.",
            "Our ERP system features comprehensive modules for finance, human resources, procurement, inventory, sales, and customer relationship management ensuring streamlined processes and data consistency across departments. By breaking down data silos, our system offers real-time visibility into essential financial and operational data empowering organizations to make informed decisions and optimize resource allocation.",
            "Automation of repetitive tasks reduces manual effort and errors allowing employees to focus on high-value work. Advanced data analysis capabilities transform raw data into actionable insights while detailed reporting modules provide visual representations that help identify trends and optimize business processes.",
            "Our ERP solution also simplifies financial management, integrates CRM capabilities, and enhances sales and marketing efforts ensuring a holistic approach to business operations."
        ],
        "Benefits": [
            "Increased Efficiency: Automate manual tasks, reduce errors, and boost overall operational efficiency.",
            "Scalability: Our ERP system grows with your business, accommodating the needs of small startups and large enterprises alike.",
            "Enhanced Collaboration: Break down departmental silos and foster seamless collaboration with real-time data access.",
            "Data Security: Protect sensitive business data with top-tier security features and compliance with industry regulations.",
            "Integration Capabilities: Easily integrate the ERP system with third-party tools and services, creating a unified and powerful technology ecosystem."
        ],
        "image": "/assets/img/project/ERP.jpg" // Added image
    },
    "School Management System (SMS)": {
        "projectName": "School Management System (SMS)",
        "Description": [
            "Qedami Software Solution and Services presents the School Management System (SMS), a comprehensive and intuitive platform designed to streamline the daily operations of educational institutions. Our system provides a centralized solution for managing all aspects of school administration from student records and attendance tracking to academic performance monitoring and fee management.",
            "Our system enables schools to manage detailed student information including enrollment history, health records, and disciplinary actions. Teachers and administrators can easily access and update this information ensuring data is always up-to-date.",
            "Additionally, SMS offers automated attendance tracking for both students and staff with the ability to generate detailed reports and send absence notifications to parents."
        ],
        "Benefits": [
            "Increased Efficiency: Reduces administrative workload and streamlines daily operations, allowing educators to focus on teaching.",
            "User-Friendly Interface: Designed for ease of use, requiring no technical expertise for smooth adoption by schools.",
            "Customizable and Scalable: Adapts to the unique needs of different institutions and scales for schools of all sizes.",
            "Advanced Security Features: Protects sensitive student and staff data ensuring compliance with data protection standards.",
            "Comprehensive Analytics and Reporting: Provides valuable insights into student performance and operational trends, enhancing decision-making."
        ],
        "image": "/assets/img/project/sms.webp"  // Added image
    },
    "Sacco Management System": {
        "projectName": "Sacco Management System",
        "Description": [
            "At Qedami Software Solution and Services, we introduce our Sacco Management System (SMS), a robust and user-friendly platform designed to streamline the operations of Savings and Credit Cooperative Organizations (Saccos). Our solution provides a comprehensive approach to managing all aspects of Sacco administration from member enrollment and loan management to financial reporting and member communication.",
            "Our SMS enables organizations to efficiently handle detailed member information including savings, loans, and repayment histories. Administrators can easily access and update this data ensuring that records are always accurate and current.",
            "The SMS also automates loan application processing and approval workflows, significantly reducing the time taken to disburse loans and enhancing member satisfaction."
        ],
        "Benefits": [
            "Increased Efficiency: Automates manual processes, reducing paperwork and administrative burden, allowing staff to focus on member services.",
            "User-Friendly Interface: Designed for ease of use, ensuring that both staff and members can navigate the system without extensive training.",
            "Customizable Solutions: Adapts to the unique needs of different Saccos with features that can be tailored to suit specific operational requirements.",
            "Data Security: Implements advanced security measures to protect sensitive member information ensuring compliance with data protection regulations.",
            "Real-Time Access: Provides real-time data access enabling administrators to monitor operations and make informed decisions quickly."
        ],
        "image": "/assets/img/project/sacco.jpg"  // Added image
    },
    "Document Management System (DMS)": {
        "projectName": "Document Management System (DMS)",
        "Description": [
            "At Qedami Software Solution and Services, we are excited to present our Document Management System (DMS), a powerful and efficient solution designed to streamline the organization, storage, and retrieval of documents within any organization. Our DMS enhances productivity by providing a centralized platform for managing both digital and physical documents ensuring that information is easily accessible and securely stored.",
            "Our Document Management System allows organizations to capture, store, and track documents throughout their lifecycle from creation to archival. With features that facilitate version control, audit trails, and document sharing, users can collaborate effectively while maintaining compliance with industry regulations."
        ],
        "Benefits": [
            "Increased Efficiency: Automates document workflows and reduces manual processes enabling employees to focus on higher-value tasks.",
            "Improved Compliance: Ensures adherence to industry regulations and standards by maintaining organized records and audit trails.",
            "Cost Savings: Reduces storage costs and minimizes paper usage contributing to a more sustainable and environmentally friendly operation.",
            "User-Friendly Interface: Designed for simplicity allowing users of all technical levels to navigate the system effortlessly.",
            "Scalability: Adapts to the needs of organizations of all sizes from small businesses to large enterprises, accommodating growing document management requirements."
        ],
        "image": "/assets/img/project/DM.jpeg"  // Added image
    },
    "Company Management System (CMS)": {
        "projectName": "Company Management System (CMS)",
        "Description": [
            "At Qedami Software Solution and Services, we are proud to introduce our Company Management System (CMS), a comprehensive platform designed to streamline the administration and operation of businesses across various industries. Our CMS provides an integrated approach to managing all aspects of a company from project management and employee performance to finance and customer relationship management.",
            "The Company Management System enables organizations to centralize their operations, improve communication, and enhance overall efficiency. With features that support real-time reporting, task assignment, and resource allocation, our CMS helps businesses make informed decisions and drive growth."
        ],
        "Benefits": [
            "Increased Efficiency: Automates repetitive tasks and centralizes information, allowing employees to focus on strategic initiatives.",
            "Improved Collaboration: Facilitates communication and collaboration across departments, breaking down silos and promoting teamwork.",
            "Scalability: Adapts to the needs of businesses of all sizes from startups to large enterprises, accommodating growth and changes in operational requirements.",
            "Enhanced Security: Implements robust security measures to protect sensitive company data ensuring compliance with industry standards.",
            "User-Friendly Interface: Designed for ease of use, ensuring that employees can navigate the system without extensive training."
        ],
        "image": "/assets/img/project/CMS.jpeg" // Added image
    },
    "Job Portal": {
        "projectName": "Job Portal",
        "Description": [
            "At Qedami Software Solution and Services, we are excited to present our Job Portal, a dynamic platform designed to connect job seekers with employers across various industries. Our Job Portal streamlines the recruitment process making it easier for organizations to find the right talent while providing job seekers with a user-friendly experience to search and apply for positions.",
            "The Job Portal enables companies to post job openings, manage applications, and track candidate progress all in one centralized location. For job seekers, the portal offers personalized job recommendations, application tracking, and resources to enhance their job search."
        ],
        "Benefits": [
            "Streamlined Recruitment Process: Simplifies the hiring process for employers allowing them to manage job postings and applications efficiently.",
            "Enhanced Candidate Experience: Provides job seekers with a user-friendly interface to search for jobs, apply online, and receive notifications improving their overall experience.",
            "Increased Visibility: Helps employers reach a larger pool of candidates boosting their chances of finding the right fit for their organization.",
            "Data-Driven Insights: Offers analytics and reporting features that enable employers to assess recruitment effectiveness and optimize their hiring strategies.",
            "Mobile Accessibility: Ensures that both employers and job seekers can access the portal anytime, anywhere, enhancing convenience and flexibility."
        ],
        "image": "/assets/img/project/JP.png"  // Added image
    },
    "Hospital Management System (HMS)": {
        "projectName": "Hospital Management System (HMS)",
        "Description": [
            "At Qedami Software Solution and Services, we are proud to introduce our Hospital Management System (HMS), a comprehensive platform designed to enhance the operational efficiency of healthcare institutions. Our HMS streamlines the management of various hospital functions from patient admissions and appointment scheduling to billing and medical record management ensuring that healthcare providers can focus on delivering high-quality patient care.",
            "The Hospital Management System integrates critical processes into a single user-friendly interface enabling healthcare professionals to access real-time information and collaborate effectively across departments. With advanced features tailored to meet the needs of modern healthcare facilities, our HMS is a vital tool for improving patient outcomes and optimizing administrative workflows."
        ],
        "Benefits": [
            "Improved Operational Efficiency: Automates administrative tasks, reducing paperwork and enhancing workflow efficiency across departments.",
            "Enhanced Patient Care: Provides healthcare professionals with quick access to patient information enabling informed decision-making and improved care delivery.",
            "Data Security and Compliance: Implements robust security measures to protect sensitive patient information ensuring compliance with healthcare regulations and standards.",
            "Real-Time Analytics and Reporting: Offers insightful analytics and reporting tools that help hospital management monitor performance, track key metrics, and make data-driven decisions.",
            "Scalability: Designed to meet the needs of hospitals of all sizes, our HMS can grow with your organization accommodating increasing patient volumes and service offerings."
        ],
        "image": "/assets/img/project/HMS.jpg" // Added image
    },
    "Book Inventory and Distribution Management System (BIDMS)": {
        "projectName": "Book Inventory and Distribution Management System (BIDMS)",
        "Description": [
            "At Qedami Software Solution and Services, we are excited to introduce our Book Inventory and Distribution Management System (BIDMS), a comprehensive solution designed to streamline the management of book inventories and distribution processes for libraries, bookstores, and educational institutions. Our system enhances operational efficiency ensuring that organizations can effectively track, manage, and distribute their book collections.",
            "The Book Inventory and Distribution Management System provides a centralized platform for managing all aspects of book inventory from acquisition and cataloging to circulation and reporting. With features tailored to meet the needs of various stakeholders, our BIDMS simplifies workflows and improves accessibility to information."
        ],
        "Benefits": [
            "Increased Efficiency: Automates manual processes, reducing administrative workload and allowing staff to focus on enhancing user experiences.",
            "Enhanced Accessibility: Provides users with easy access to book availability and locations, improving the overall service quality and satisfaction.",
            "Accurate Data Management: Maintains real-time inventory records ensuring that organizations can effectively manage their collections and make informed decisions.",
            "Cost Savings: Optimizes inventory management processes, reducing losses and improving resource utilization.",
            "Scalability: Designed to accommodate the needs of organizations of all sizes, from small libraries to large educational institutions, ensuring flexibility as your collection grows."
        ],
        "image": "/assets/img/project/Book.png"  // Added image
    },
    "Customer Relationship Management (CRM) System": {
        "projectName": "Customer Relationship Management (CRM) System",
        "Description": [
            "At Qedami Software Solution and Services, we proudly present our Customer Relationship Management (CRM) System, a powerful tool designed to enhance customer interactions, improve sales processes, and foster long-term relationships with clients. Our CRM solution provides a centralized platform for managing customer data, tracking interactions, and analyzing performance metrics, ensuring that organizations can deliver exceptional service and drive business growth.",
            "The CRM System empowers businesses to streamline their sales and marketing efforts, enabling better communication across teams and a more personalized approach to customer engagement. With advanced features tailored to meet the unique needs of various industries, our CRM system is essential for building and maintaining successful customer relationships."
        ],
        "Benefits": [
            "Improved Customer Engagement: Enables personalized interactions and timely communication, fostering stronger relationships and customer loyalty.",
            "Increased Sales Efficiency: Streamlines sales processes, reducing administrative tasks and allowing sales teams to focus on closing deals and nurturing leads.",
            "Enhanced Collaboration: Facilitates better communication and collaboration among sales, marketing, and support teams, breaking down silos and improving overall efficiency.",
            "Data-Driven Insights: Provides actionable insights through analytics, helping businesses understand customer needs and market trends to inform strategic decisions.",
            "Scalability: Designed to grow with your organization, our CRM system accommodates the needs of small businesses and large enterprises alike, ensuring flexibility and adaptability."
        ],
        "image": "/assets/img/project/CRM.jpg" // Added image
    },
};
    const searchParams = useSearchParams();
    const [projectDetails, setProjectDetails] = useState();
    const [projectTitle, setProjectTitle] = useState("Book Inventory and Distribution Management System (BIDMS)"); // Default title

    useEffect(() => {
      const title = searchParams.get('title');
      if (title) {
          setProjectTitle(title);
      }
      const projectDetails = projectDetailsArray[projectTitle];
      setProjectDetails(projectDetails);
      console.log("Project Details:", projectDetails);
      console.log("Title from searchParams:", title);
  }, [searchParams, projectTitle]);
  
  useEffect(() => {
      const projectDetails = projectDetailsArray[projectTitle];
      setProjectDetails(projectDetails);
  }, [projectTitle]);

    return (
        <>
            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Project Details">
                <section className="Project-details-section fix section-padding">
                    <div className="container">
                        <div className="project-details-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="project-details-items">
                                        <div className="details-image">
                                            <img src={projectDetails?.image} alt="img" />
                                        </div>
                                        <div className="row g-4 justify-content-between" >
                                            <div className="">
                                                <div className="details-content pt-5">
                                                    <h3>{projectDetails?.projectName}</h3>
                                                    {projectDetails?.Description.map((paragraph, index) => (
                                                    <p key={index} style={{ margin: '10px 0' }}>{paragraph}</p>
                                                ))}
                                                <h4 style={{ margin: '10px' }}>Benefits</h4>
                                                <ul>
                                                    {projectDetails?.Benefits.map((benefit, index) => (
                                                 
                                                          
                                               
                                                        <li key={index} style={{ display: 'flex' , flexDirection:'row', gap :'5px', marginLeft:'10px'}}>  <span className="star-icon">⭐</span> <div>{benefit}</div></li>
                                                    ))}
                                                </ul>
                                                </div>
                                            </div>
                                           
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}