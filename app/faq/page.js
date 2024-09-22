
import Accordion1 from "@/components/elements/Accordion1"
import Layout from "@/components/layout/Layout"
export default function Faq() {

    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Faq">
                <section className="faq-section-2 fix section-padding">
                    <div className="container">
                        <div className="faq-wrapper">
                            <div className="row g-4">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="faq-image">
                                        <img src="/assets/img/faq/faq3.jpg" alt="faq-img" />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-content style-2">
                                        <div className="section-title">
                                            <span className="wow fadeInUp">See Our Faqs</span>
                                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                                Keep Your Business Safe &amp; <br /> Ensure High Availability
                                            </h2>
                                        </div>
                                        <div className="faq-accordion mt-4 mt-md-0">
                                            <Accordion1 />
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