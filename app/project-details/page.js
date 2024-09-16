"use client";

import Layout from "@/components/layout/Layout"
import { useEffect, useState } from "react";
import { useSearchParams } from 'next/navigation';

export default function ProjectDetails() {
    const projectDetailsArray = [
        {
            projectName: "Yeneta School",
            description: "The Yeneta School Management System is a comprehensive platform designed to streamline the operations of the Yeneta Cultural and Language Center, enhancing efficiency in student information management, academic records, staff administration, financial transactions, and parent communication. Key features include enrollment, grade tracking, payroll processing, curriculum management, fee collection, internal messaging, library management, transport scheduling, and health records. Prioritizing user-friendliness, security, and scalability, the system integrates with existing tools and supports growth. Its development involves phases of requirement analysis, design, development, deployment, and ongoing maintenance, ensuring it meets the specific needs of the center while improving the overall educational experience.",
            client: "Ralph Edwards",
            location: "London",
            image: "https://website.backend.qedamisolution.com/uploads/project/1723106202271-Screenshot_8-8-2024_11364_yenetaschool.com.jpeg" // Added image
        },
        {
            projectName: "Print Network",
            description: "Print Network is a bulk ordering platform designed to connect large and international organizations like UNDP, FAO, AU, and Save the Children Addis Ababa Branch with top-notch marketing and advertising services. This platform streamlines the procurement process for print materials, ensuring high-quality production and timely delivery. It offers a centralized system for placing bulk orders, tracking shipments, and managing invoices, all while maintaining competitive pricing. By leveraging partnerships with leading print providers, Print Network ensures that these organizations can efficiently fulfill their marketing and advertising needs, enhancing their outreach and impact with professionally produced materials.",
            client: "Alice Johnson",
            location: "New York",
            image: "https://website.backend.qedamisolution.com/uploads/project/1723107907285-Screenshot_8-8-2024_12453_reactfirebase-88afa.web.app.jpeg" // Added image
        },
        {
            projectName: "Company Profile Website",
            description: "The Highlight Tradings Company Profile Website is a sleek and modern CMS web application designed to provide a seamless user experience. It features a highly performant and responsive design, allowing users to effortlessly manage and update company profiles with ease. The platform boasts a clean and customizable user interface, ensuring an attractive presentation of company information. With its efficient architecture, the website offers lightning-fast load times and superior SEO capabilities, making it an ideal solution for businesses seeking to enhance their online presence.",
            client: "Bob Smith",
            location: "San Francisco",
            image: "https://website.backend.qedamisolution.com/uploads/project/1723108337772-Screenshot_8-8-2024_121146_highlighttradings.com.jpeg" // Added image
        },
        {
            projectName: "Job portal",
            description: "The Job Portal is a dynamic platform designed to connect job seekers with potential employers, facilitating a seamless recruitment process. It offers a user-friendly interface where candidates can create profiles, upload resumes, and apply for jobs with just a few clicks. Employers can post job openings, review applications, and manage their hiring processes efficiently. The portal includes features such as advanced search filters, job alerts, and application tracking, ensuring that both job seekers and employers can find the best matches quickly. With a focus on enhancing the user experience, the Job Portal integrates various tools for communication and feedback, making it an essential resource for anyone looking to navigate the job market effectively.",
            client: "Charlie Brown",
            location: "Chicago",
            image: "https://example.com/images/job_portal.jpg" // Added image
        },
        {
            projectName: "Company Management",
            description: "The Company Management system is designed to streamline and enhance the operational efficiency of businesses. It provides a comprehensive suite of tools for managing various aspects of a company, including employee management, project tracking, financial oversight, and client relations. Key features include real-time reporting, task assignment, performance tracking, and integration with existing business tools. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby facilitating better decision-making and improved productivity across the organization.",
            client: "Diana Prince",
            location: "Los Angeles",
            image: "https://example.com/images/company_management.jpg" // Added image
        },
        {
            projectName: "Document Management",
            description: "The Document Management System is a comprehensive platform designed to streamline the storage, organization, and retrieval of digital documents. It offers a secure and user-friendly environment for managing various types of files, including PDFs, images, and documents. Key features include document categorization, version control, search functionality, and integration with existing office tools. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby enhancing the efficiency of document management processes. It is an essential tool for businesses and organizations looking to optimize their document handling and improve overall operational efficiency.",
            client: "Ethan Hunt",
            location: "Miami",
            image: "https://example.com/images/document_management.jpg" // Added image
        },
        {
            projectName: "E-School management system",
            description: "The E-School Management System is a comprehensive platform designed to streamline the operations of a school, enhancing efficiency in student information management, academic records, staff administration, financial transactions, and parent communication. Key features include enrollment, grade tracking, payroll processing, curriculum management, fee collection, internal messaging, library management, transport scheduling, and health records. Prioritizing user-friendliness, security, and scalability, the system integrates with existing tools and supports growth. Its development involves phases of requirement analysis, design, development, deployment, and ongoing maintenance, ensuring it meets the specific needs of the school while improving the overall educational experience.",
            client: "Fiona Gallagher",
            location: "Seattle",
            image: "https://example.com/images/e_school_management.jpg" // Added image
        },
        {
            projectName: "ERP",
            description: "The ERP system is designed to streamline and enhance the operational efficiency of businesses. It provides a comprehensive suite of tools for managing various aspects of a company, including employee management, project tracking, financial oversight, and client relations. Key features include real-time reporting, task assignment, performance tracking, and integration with existing business tools. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby facilitating better decision-making and improved productivity across the organization.",
            client: "George Clooney",
            location: "Austin",
            image: "https://example.com/images/erp.jpg" // Added image
        },
        {
            projectName: "Hospital Management System",
            description: "The Hospital Management system is designed to streamline and enhance the operational efficiency of hospitals. It provides a comprehensive suite of tools for managing various aspects of a hospital, including patient information management, appointment scheduling, billing and payment processing, and staff administration. Key features include real-time reporting, patient tracking, performance tracking, and integration with existing hospital tools. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby facilitating better decision-making and improved productivity across the organization.",
            client: "Hannah Montana",
            location: "Boston",
            image: "https://example.com/images/hospital_management.jpg" // Added image
        },
        {
            projectName: "CRM(Costumer Management)",
            description: "The CRM Customer Relationship Management system is designed to streamline and enhance the operational efficiency of businesses. It provides a comprehensive suite of tools for managing various aspects of a company, including employee management, project tracking, financial oversight, and client relations. Key features include real-time reporting, task assignment, performance tracking, and integration with existing business tools. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby facilitating better decision-making and improved productivity across the organization.",
            client: "Ian Malcolm",
            location: "Denver",
            image: "https://example.com/images/crm.jpg" // Added image
        },
        
        {
            projectName: "Book Inventory and Distribution Management System",
            description: "The Book Inventory and Distribution Management System is designed to optimize the management of book inventories and streamline the distribution process. It provides a comprehensive suite of tools for tracking book stock levels, managing orders, and facilitating efficient distribution to various locations. Key features include real-time inventory tracking, order management, reporting capabilities, and integration with existing sales platforms. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby enhancing operational efficiency and improving overall management of book resources.",
            client: "Hannah Montana",
            location: "Boston",
            image: "https://example.com/images/book_inventory.jpg" // Added image
        },
        {
            projectName: "Sacco Management System",
            description: "The Sacco Management System is designed to streamline and enhance the operational efficiency of savings and credit cooperatives. It provides a comprehensive suite of tools for managing various aspects of a cooperative, including member management, loan tracking, financial oversight, and client relations. Key features include real-time reporting, task assignment, performance tracking, and integration with existing financial tools. This system prioritizes user experience, ensuring that all functionalities are intuitive and accessible, thereby facilitating better decision-making and improved productivity across the organization.",
            client: "Ian Malcolm",
            location: "Denver",
            image: "https://example.com/images/sacco_management.jpg" // Added image
        }
    ];
    const searchParams = useSearchParams();
    const [projectDetails, setProjectDetails] = useState();
    const [projectTitle, setProjectTitle] = useState(""); // Default title

    useEffect(() => {
        const title = searchParams.get('title');
        if (title) {
            setProjectTitle(title);
        }
        const projectDetails = projectDetailsArray.find(project => project.projectName === projectTitle);
        setProjectDetails(projectDetails);
        console.log("Project Details:", projectDetails);
        console.log("Title from searchParams:", title);
    }, [searchParams]);



    useEffect(() => {
        const projectDetails = projectDetailsArray.find(project => project.projectName === projectTitle);
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
                                        <div className="row g-4 justify-content-between">
                                            <div className="col-lg-7">
                                                <div className="details-content pt-5">
                                                    <h3>{projectDetails?.projectName}</h3>
                                                    <p>{projectDetails?.description}</p>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="project-catagory">
                                                    <h3>Project Info: </h3>
                                                    <ul>
                                                        <li>Client: <span>{projectDetails?.client}</span></li>
                                                        <li>Category: <span>{projectDetails?.category}</span></li>
                                                        <li>Location: <span>{projectDetails?.location}</span></li>
                                                        <li>Share: <span>
                                                            <i className="fa-brands fa-facebook-f me-3" />
                                                            <i className="fa-brands fa-instagram me-3" />
                                                            <i className="fa-brands fa-linkedin-in" />
                                                        </span></li>
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