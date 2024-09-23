
import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import BrandSlider1 from "@/components/slider/BrandSlider1"
import ProjectSlider2 from "@/components/slider/ProjectSlider2"
import Link from "next/link"
export default function About() {
    const data = [
        {
          id: 1,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-1.svg",
          title: "Experience",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            " Our team boasts extensive industry experience, bringing deep technical expertise and a successful track record in delivering complex projects across various sectors. We understand the unique challenges businesses face and leverage our experience to provide solutions that work.",
        },
        {
          id: 2,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-2.svg",
          title: "Products",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "We offer a robust portfolio of innovative, scalable, and customizable software solutions. Whether you need a tailored application or an integrated system, our products are designed to enhance your business operations and drive growth.",
        },
      
        {
          id: 3,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-4.svg",
          title: "Pricing",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Our pricing models are designed to offer maximum value. We combine high-quality service with cost-effective solutions, ensuring that you receive exceptional outcomes within your budget.",
        },
        {
          id: 4,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-3.svg",
          title: "Approach",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "We believe in a client-first approach, partnering with you to fully understand your business objectives and challenges. Our collaborative process ensures that the solutions we deliver are perfectly aligned with your strategic goals.",
        },
        {
          id: 5,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-5.svg",
          title: "Delivery",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "We are committed to delivering projects on time, without compromising on quality. Our streamlined processes and meticulous project management ensure that you receive your solutions when you need them, fully operational and ready to perform.",
        },
        {
          id: 6,
          icon: "https://zrtechsolutions.com/demo/html/technoit/assets/images/icons/icon-6.svg",
          title: "Support",
          subtitle: "Lorem ipsum dolor sit amet.",
          description:
            "Our commitment to you doesn't end with delivery. We provide continuous, reliable support to keep your systems running smoothly. Our dedicated support team is always ready to assist, ensuring that you have the help you need when you need it.",
        },
      ];
        
const goals = [
    {
      icon: "🎯",
      title: "Client Satisfaction",
      description:
        "Consistently exceed client expectations by delivering high-quality, customized software solutions.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "Continuously explore and adopt cutting-edge technologies and methodologies.",
    },
    {
      icon: "🌍",
      title: "Growth and Expansion",
      description:
        "Expand our reach and impact by entering new markets, both nationally and internationally.",
    },
    {
      icon: "👥",
      title: "Employee Development",
      description:
        "Invest in the growth and development of our team, fostering a culture of learning and collaboration.",
    },
    {
      icon: "⚙️",
      title: "Operational Excellence",
      description:
        "Maintain the highest standards of operational efficiency and effectiveness.",
    },
    {
      icon: "🤝",
      title: "Strategic Partnerships",
      description:
        "Forge strong alliances with technology leaders and industry experts to enhance our capabilities and offer cutting-edge solutions to our clients.",
    },
  ];
      
    return (
        <>

            <Layout headerStyle={1} footerStyle={2} breadcrumbTitle="About Us">
                <div>
                    <section className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("assets/img/service/service-bg-2.jpg")' }}>
                        <div className="container">
                            <div className="about-wrapper style-2">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="about-image-items">
                                            <div className="circle-shape">
                                                <img src="/assets/img/about/circle.png" alt="shape-img" />
                                            </div>
                                            <div className="counter-shape float-bob-y">
                                                <div className="icon">
                                                    <img src="/assets/img/about/icon-1.svg" alt="icon-img" />
                                                </div>
                                                <div className="content">
                                                    <h3> Years</h3>
                                                    <p>Of Experience</p>
                                                </div>
                                            </div>
                                            <div className="about-image-1 bg-cover wow fadeInLeft" data-wow-delay=".3s" style={{ backgroundImage: 'url("assets/img/about/ab2.jpg")' }}>
                                                <div className="about-image-2 wow fadeInUp" data-wow-delay=".5s">
                                                    <img src="/assets/img/about/ab1.jpg" alt="about-img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 mt-4 mt-lg-0">
                                        <div className="about-content">
                                        <div className="section-title">
                                        <span className="wow fadeInUp" style={{color: '#ea8c06'}}>ABOUT QEDAMI</span>
                                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                            We Are Increasing Business Success With <span>Technology</span>
                                        </h2>
                                    </div>
                                    <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                    Qedami Software Solution and Services is a leading IT company based in Addis Ababa, Ethiopia, dedicated to providing innovative software solutions and services to both national and international clients. Since our inception, we have been committed to delivering high-quality, customized software solutions that meet the unique needs of our clients across various industries.
                                    </p>
                                    <p className="mt-2 mt-md-3 wow fadeInUp" data-wow-delay=".5s">
                                    Our team of highly skilled professionals is passionate about technology and innovation. We specialize in a wide range of IT services, including software development, system integration, IT consulting, and project management. Our goal is to help businesses leverage technology to improve efficiency, drive growth, and achieve their objectives.  </p>
                                    <div className="about-icon-items">
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".7s">
                                            <div className="icon text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src="https://infoteknextjs.vercel.app/assets/img/about/icon-4.svg" alt="icon-img" className="mx-auto" />
                                            </div>
                                            <div className="content">
                                                <h4>Problem Solving</h4>
                                                <p>
                                                    We analyze challenges and develop effective solutions.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="icon-items wow fadeInUp" data-wow-delay=".9s">
                                        <div className="icon text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                        <img src="https://infoteknextjs.vercel.app/assets/img/about/icon-5.svg" alt="icon-img" />
                                            </div>
                                            <div className="content">
                                                <h4>Mission &amp; Vision</h4>
                                                <p>
                                                    Our mission is to innovate and lead in technology solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="bg-white about-section wow fadeInUp" data-wow-delay=".5s" id="About" style={{overflow: 'hidden', backgroundColor: 'white', paddingBottom: '3rem', paddingTop: '5rem'}}>
  <div className="container ">
    <div className="row mb-5">
      <div className="col-12 text-center">
        <h1 className="display-5 fw-semibold" style={{color: '#ea8c06', margin: '4rem 2rem'}}>Why Choose Us</h1>
      
      </div>
    </div>
    <div className="row">
      <div className="col-lg-4 d-flex flex-column gap-5">
        {data.slice(0, 3).map((item) => (
          <div key={item.id} className="d-flex flex-row gap-2 wow fadeInUp" data-wow-delay=".5s">
            <div className="d-flex flex-column align-items-end justify-content-end">
              <h2 className="mb-2 fw-semibold" style={{color: '#ea8c06'}}>{item.title}</h2>
              <p className="text-end text-gray-500">{item.description}</p>
            </div>
            <div className="d-flex flex-column align-items-start justify-content-start">
              <img
                src={item.icon}
                alt="Icon"
                style={{height: '4rem', width: '20rem', filter: "hue-rotate(30deg) saturate(100%)"}}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center wow fadeInUp" data-wow-delay=".5s">
        <img
          src="https://i.ibb.co/TgKt5Rs/2024-08-08-20-42-57.jpg"
          alt="Icon"
          style={{height: '400px', width: '800px', borderRadius: '1rem'}}
        />
      </div>

      <div className="col-lg-4 d-flex flex-column gap-5">
        {data.slice(3, 6).map((item) => (
          <div key={item.id} className="d-flex flex-row gap-2 wow fadeInUp" data-wow-delay=".5s">
            <div className="d-flex flex-column align-items-start justify-content-start">
              <img
                src={item.icon}
                alt="Icon"
                style={{height: '4rem', width: '20rem', filter: "hue-rotate(30deg) saturate(100%)"}}
              />
            </div>
            <div>
              <h2 className="mb-2 fw-semibold" style={{color: '#ea8c06'}}>{item.title}</h2>
              <p className="text-gray-500">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
                <section
                className="about-section section-padding fix bg-cover fade-out"
  id="About"
  style={{
    background: 'linear-gradient(to bottom, #ffffff, #f3f4f6)',
    padding: '5rem 0',
    backgroundImage: 'url("assets/img/service/service-bg-2.jpg")'
  }}
>
  <div className="container">
    <h1 className="mb-5 text-center" style={{ color: '#ea8c06', fontSize: '2.25rem', fontWeight: 'bold', color: '#333' }}>
      
    </h1>

    <div className="row mb-5 align-items-center">
      <div className="col-lg-6 mb-4 mb-lg-0">
        <div className="row  wow fadeInUp" data-wow-delay=".5s" style={{ height: '600px' }}>
          <div className="col-8 h-100 pe-2">
            <img
              src='https://website.backend.qedamisolution.com/uploads/info/image4-1715447571688.jpg'
              alt="Qedami team"
              className="img-fluid h-100 w-100 rounded shadow"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="col-4 h-100 d-flex flex-column">
            <img
              src='https://website.backend.qedamisolution.com/uploads/info/image3-1715447571680.jpg'
              alt="Office space"
              className="img-fluid mb-2 rounded shadow"
              style={{ objectFit: 'cover', height: '50%' }}
            />
            <img
              src='https://infoteknextjs.vercel.app/assets/img/project/04.jpg'
              alt="Project meeting"
              className="img-fluid rounded shadow"
              style={{ objectFit: 'cover', height: '50%' }}
            />
          </div>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="mb-4">
          <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ea8c06' }}>
            Who We Are
          </h2>
          <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
            Qedami Software Solution and Services is a leading IT company
            based in Addis Ababa, Ethiopia, dedicated to providing
            innovative software solutions and services to both national and
            international clients. Since our inception, we have been
            committed to delivering high-quality, customized software
            solutions that meet the unique needs of our clients across
            various industries.
          </p>
            <p className="mt-3 text-muted wow fadeInUp" data-wow-delay=".5s">
            Our team of highly skilled professionals is passionate about
            technology and innovation. We specialize in a wide range of IT
            services, including software development, system integration, IT
            consulting, and project management. Our goal is to help
            businesses leverage technology to improve efficiency, drive
            growth, and achieve their objectives.
          </p>
        </div>

        <div className="mb-4">
          <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ea8c06' }}>
            Our Mission
          </h2>
          <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
            To empower businesses through innovative and reliable software
            solutions that drive growth and efficiency. We are dedicated to
            delivering exceptional value by leveraging the latest
            technologies and fostering a culture of continuous improvement.
          </p>
        </div>

        <div>
          <h2 className="mb-3" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#ea8c06' }}>
            Our Vision
          </h2>
          <p className="text-muted wow fadeInUp" data-wow-delay=".5s">
            To be the leading software solutions provider in Ethiopia and a
            trusted partner for businesses worldwide. We aim to set the
            benchmark for excellence and innovation in the IT industry
            across our region and beyond.
          </p>
        </div>
      </div>
    </div>

    <div className="bg-white rounded p-4 shadow">
      <h2 className="mb-4 text-center" style={{ fontSize: '1.875rem', fontWeight: 'bold', color: '#333' }}>
        Our Goals
      </h2>
      <div className="row">
        {goals.map((goal, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="bg-light rounded p-3 h-100 shadow-sm">
              <div className="mb-3" style={{ fontSize: '1.875rem', color: '#ea8c06' }}>{goal.icon}</div>
              <h3 className="mb-2" style={{ fontSize: '1.25rem', fontWeight: '600', color: '#333' }}>
                {goal.title}
              </h3>
              <p className="text-muted wow fadeInUp" data-wow-delay=".5s">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
                </div>

            </Layout>
        </>
    )
}