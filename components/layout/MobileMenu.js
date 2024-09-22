'use client'
import Link from "next/link"
import { useState } from 'react'

export default function MobileMenu() {
    const [activeItem, setActiveItem] = useState(1)
    console.log(activeItem)

    const handleActiveItem = (index) => {
        setActiveItem(index)
    }

    return (
        <>
            <div className="mobile-menu fix mb-3 mean-container" >
                <div className="mean-bar">
                    <Link href="/#nav" className="meanmenu-reveal" style={{ right: 0, left: 'auto', display: 'inline' }}>
                        <span>
                            <span><span />
                            </span>
                        </span>
                    </Link>
                    <nav className="mean-nav">
                        <ul>
                            <li className="has-dropdown active menu-thumb">
                                <Link href="/">
                                    Home
                                    <i className="fas fa-angle-down" />
                                </Link>
                               
                              
                            </li>
                            <li>
                                <Link href="/about">About Us</Link>
                            </li>
                            <li>
                                <Link href="/service">
                                    Services
                                    <i className="fas fa-angle-down" />
                                </Link>
                         
                            </li>
                            <li className="has-dropdown">
                                <Link href="#">
                                   More
                                    <i className="fas fa-angle-down" />
                                </Link>
                                <ul className="submenu" style={{ display: `${activeItem === 3 ? "block" : "none"}` }}>
                    
                                    <li><Link href="/team">Our Team</Link></li>
                                    <li><Link href="/faq">Faq's</Link></li>
                                    <li><Link href="/career">Careers</Link></li>
                                </ul>
                                <a className={`mean-expand ${activeItem === 3 ? "mean-clicked" : ""}`} onClick={() => handleActiveItem(3)}>
                                    <i className="far fa-plus" />
                                </a>
                            </li>
                            <li>
                                <Link href="/project">
                                    Project
                                    <i className="fas fa-angle-down" />
                                </Link>
                            
                            </li>
                            <li className="mean-last">
                                <Link href="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </nav></div></div>

        </>
    )
}
