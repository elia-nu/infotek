
import Link from 'next/link'

export default function Team3() {
    const teamMembers = [

        { name: "Mekdelawit Mamushet", position: "Senior Backend Engineer", img: "/assets/img/team/905.jpg" },
        { name: "Kalab Tenadeg", position: "Senior Full Stack Engineer", img: "/assets/img/team/010.jpg" },
         { name: "Elias Nuru", position: "Senior Frontend Engineer", img: "/assets/img/team/904.jpg" },
        { name: "Abdi Aliko", position: "Senior Project Manager", img: "/assets/img/team/901.jpg" },
        { name: "Boni Birassa", position: "Senior Product Manager", img: "/assets/img/team/903.jpg" },
        { name: "Dawit Haile ", position: "Senior Business Analyst", img: "/assets/img/team/902.jpg" }
    ];
    return (
        <>
            <section className="team-section-3 fix section-padding section-bg" id="team">
                <div className="line-shape">
                    <img src="/assets/img/team/line-shape.png" alt="shape-img" />
                </div>
                <div className="mask-shape">
                    <img src="/assets/img/team/mask-shape-2.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="section-title-area">
                        <div className="section-title">
                            <span className="wow fadeInUp">Team Members</span>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Our Dedicated Team <br /> Members
                            </h2>
                        </div>
                        <Link href="/team" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                            All Member
                            <i className="fa-solid fa-arrow-right-long" />
                        </Link>
                    </div>
                    <div className="row">
           
                        {teamMembers.slice(0, 4).map((member, index) => (
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.2 * (index + 3)}s`} key={index}>
                                <div className="single-team-items">
                                    <div className="team-image" style={{height:'400px'}}>
                                        <img src={member.img} alt="team-img" />
                                        <div className="social-profile">
                                            <ul>
                                            <li><Link href="https://www.facebook.com"><i className="fab fa-facebook-f" /> </Link></li>
                                            <li><Link href="https://twitter.com"><i className="fa-brands fa-twitter" /> </Link></li>
                                            <li><Link href="https://www.linkedin.com"><i className="fab fa-linkedin-in" /> </Link></li>
                                        </ul>
                                            <span className="plus-btn"><i className="fas fa-share-alt" /></span>
                                        </div>
                                    </div>
                                    <div className="team-content text-center">
                                        <h3 style={{color:'white'}}>
                                            {member.name}
                                        </h3>
                                        <p>{member.position}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
