'use client'
import { useState } from 'react';
export default function Accordion1() {
    const [activeItem, setActiveItem] = useState(1);

    const handleClick = (index) => {
      setActiveItem(index);
    };
    return (
        <>
            <div className="accordion" id="accordion">
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".3s">
                    <h5 className="accordion-header" onClick={() => handleClick(1)}>
                        <button className={activeItem  == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq1" aria-expanded="true" aria-controls="faq1">
                        What services does Qedami Software Solution and Services offer?
                        </button>
                    </h5>
                    <div id="faq1" className={activeItem  == 1 ? "accordion-collapse  show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        We provide a comprehensive range of IT solutions, including software development, managed services, infrastructure services, system integration, cybersecurity services, and training and development. Additionally, we specialize in enterprise resource planning (ERP) systems and school management systems, along with custom web and mobile applications. Our expertise lies in delivering tailored solutions to meet the unique needs of various industries.                        </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".5s">
                    <h5 className="accordion-header" onClick={() => handleClick(2)}>
                        <button className={activeItem  == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq2" aria-expanded="false" aria-controls="faq2">
                        Can Qedami Software customize ERP solutions for my industry?
                        </button>
                    </h5>
                    <div id="faq2" className={activeItem  == 2 ? "accordion-collapse  show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        Yes, we specialize in creating customizable ERP systems that can be adapted to meet the specific requirements of any industry. Whether you need modules for finance, HR, inventory, or any other business process, we can develop a solution that fits seamlessly into your operations. </div>
                    </div>
                </div>
                <div className="accordion-item mb-3 wow fadeInUp" data-wow-delay=".7s">
                    <h5 className="accordion-header" onClick={() => handleClick(3)}>
                        <button className={activeItem  == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#faq3" aria-expanded="false" aria-controls="faq3">
                        How does the School Management System help in streamlining operations?
                        </button>
                    </h5>
                    <div id="faq3" className={activeItem  == 3 ? "accordion-collapse  show" : "accordion-collapse collapse"} data-bs-parent="#accordion">
                        <div className="accordion-body">
                        Our School Management System is designed to automate and streamline various administrative tasks, including student enrollment, attendance tracking, grading, and communication with parents. It also includes features for managing faculty, scheduling, and reporting, helping schools to operate efficiently and effectively.   </div>
                    </div>
                </div>
            </div>
        </>
    )
}
