
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Pricing() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Careers">
          
            <section className="offer-section fix section-bg-2 section-padding">
                <div className="line-shape">
                    <img src="/assets/img/team/line-shape.png" alt="shape-img" />
                </div>
                <div className="mask-shape">
                    <img src="/assets/img/team/mask-shape.png" alt="shape-img" />
                </div>
                <div className="container " style={{height: "50vh"}}>
                    <div className="section-title text-center">
                        <span className="wow fadeInUp">Our offering</span>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s" style={{fontSize: "40px"}}>
                        No Vacancies Available
                        </h2>
                <p className=" text-white text-center" style={{fontSize: "20px", margin: "20px"}}>Currently, there are no job openings. Please check back later for updates.</p>
             
                    </div>
                    <div className="text-center">
                    <Link href="/contact" className="theme-btn">Contact Us</Link>
                </div>
                </div>
            </section>

            </Layout>
        </>
    )
}