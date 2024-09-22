
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function Team() {

    const teamMembers = [

        { name: "Mekdelawit Mamushet", position: "Senior Backend Engineer", img: "/assets/img/team/021.jpg" },
        { name: "Kalab Tenadeg", position: "Senior Full Stack Engineer", img: "/assets/img/team/010.jpg" },
         { name: "Elias Nuru", position: "Senior Frontend Engineer", img: "/assets/img/team/003.jpg" },
        { name: "Abdi Aliko", position: "Senior Project Manager", img: "/assets/img/team/014.jpg" },
        { name: "Boni Birassa", position: "Senior Product Manager", img: "/assets/img/team/015.jpg" },
        { name: "Dawit Haile ", position: "Senior Business Analyst", img: "/assets/img/team/016.jpg" }
    ];
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="Team">
                <section className="team-section-4 section-padding">
                    <div className="container">
                        <div className="row g-4">
                        
                            {teamMembers.map((member, index) => (
                                <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * index}s`} key={index}>
                                    <div className="team-card-items mt-0">
                                        <div className="team-image" style={{ height: '600px'}}>
                                            <img src={member.img} alt="team-img" />
                                            <div className="social-profile">
                                                <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                                <ul>
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="team-content text-center">
                                            <h3>
                                                <Link href="/team-details">{member.name}</Link>
                                            </h3>
                                            <p>{member.position}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                                                  </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}