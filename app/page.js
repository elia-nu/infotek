import Layout from "@/components/layout/Layout"
import About3 from "@/components/sections/About3"
import Achievement1 from "@/components/sections/Achievement1"
import Brand1 from "@/components/sections/Brand1"
import Cta1 from "@/components/sections/Cta1"
import Faq1 from "@/components/sections/Faq1"
import Hero1 from "@/components/sections/Hero1"
import Marque1 from "@/components/sections/Marque1"
import Marque2 from "@/components/sections/Marque2"
import News1 from "@/components/sections/News1"
import Pricing1 from "@/components/sections/Pricing1"
import Project1 from "@/components/sections/Project1"
import Service1 from "@/components/sections/Service1"
import Team3 from "@/components/sections/Team3"
import Testimonial1 from "@/components/sections/Testimonial1"

export default function Home() {
 
    return (
        <>

            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
          
                <About3 />
         
                <Service1 />
                <Achievement1 />
                <Project1 />
            
                <Testimonial1 />
                <Team3 />
        
                <Faq1 />
           
                <Cta1 />
             <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center " style={{color: 'white', paddingTop: '190px'}}>
                
                            <Brand1 />
                
                        </div>
                    </div>
                </div>
             </div>
          
            </Layout>
        </>
    )
}