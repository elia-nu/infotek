import Link from "next/link"

export default function Menu() {

    return (
        <>

            <ul>
                <li className="has-dropdown active menu-thumb">
                    <Link href="/">
                        Home
          
                    </Link>
                   
                </li>
                <li>
                    <Link href="/about">About Us</Link>
                </li>
                <li>
                    <Link href="/service">
                        Services
         
                    </Link>
             
                </li>
                <li className="has-dropdown">
                    <Link href="#">
                        More
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li className="has-dropdown">
                 
                        
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Team
                                </Link>
                  
                        </li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/career">Careers</Link></li>
        
                    </ul>
                </li>
                <li>
                <Link href="/project">
                                Projects
                            </Link>
              
                
                </li>
                <li>
                    <Link href="/contact">Contact Us</Link>
                </li>
            </ul>
        </>
    )
}
