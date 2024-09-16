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
                    <Link href="/about">About</Link>
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
                            <Link href="/project">
                                Projects
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/project">Project</Link></li>
                                <li><Link href="/project-carousel">Project Carousel</Link></li>
                                <li><Link href="/project-details">Project Details</Link></li>
                            </ul>
                        </li>
                        <li className="has-dropdown">
                            <Link href="/team">
                                Team
                                <i className="fas fa-angle-down ps-1" />
                            </Link>
                            <ul className="submenu">
                                <li><Link href="/team">Our Team</Link></li>
                                <li><Link href="/team-carousel">Team Carousel</Link></li>
                                <li><Link href="/team-details">Team Details</Link></li>
                            </ul>
                        </li>
                        <li><Link href="/pricing">Pricing</Link></li>
                        <li><Link href="/faq">Faq's</Link></li>
                        <li><Link href="/404">404 Page</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/news">
                        Blog
                        <i className="fas fa-angle-down ps-1" />
                    </Link>
                    <ul className="submenu">
                        <li><Link href="/news">Blog Grid</Link></li>
                        <li><Link href="/news-standard">Blog Standard</Link></li>
                        <li><Link href="/news-details">Blog Details</Link></li>
                    </ul>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </>
    )
}
