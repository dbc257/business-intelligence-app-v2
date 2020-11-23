import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function DropdownMenu() {
    const router = useRouter();
    const { company, year } = router.query;

    return (
        <div id="navbar" className="height-setter">
            <div className="main-nav dropdown123" style={{height: "50px", padding: "0px 0px", border: "none"}}>
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">

                        <div id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {/* <Link href={{
                                            pathname: "#", 
                                            query: "#",
                                            }} */}
                                    {/* // href="#" as="#"
                                    // > */}
                                        <a className="nav-link-1234">
                                            Other metrics <i className="fas fa-chevron-down"></i>
                                        </a>
                                    {/* </Link> */}

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href={{
                                            pathname: "/charts/[company]", 
                                            query: { company: `${company}`},
                                            }}
                                            // as={`/charts/${company}`} 
                                            >
                                                <a className="nav-link">All years</a>
                                            </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link href={{
                                                pathname: '/charts/[company]/[year]',
                                                // query: { company: `${company}`, year: `${year}` },
                                                query: { company: `${company}`, year: '2019' },
                                            }}
                                            // href="/charts/[company]/[year]" as={`/charts/${company}/2019`} 
                                            >
                                                <a className="nav-link">2019-2020</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href={{
                                                pathname: '/charts/[company]/[year]',
                                                // query: { company: `${company}`, year: `${year}` },
                                                query: { company: `${company}`, year: '2018' },
                                            }}
                                            // href="/charts/[company]/[year]" as={`/charts/${company}/2018`} 
                                            >
                                                <a className="nav-link">2018</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href={{
                                                pathname: '/charts/[company]/[year]',
                                                query: { company: `${company}`, year: '2017' },
                                                // query: { company: `${company}`, year: `${year}` },
                                            }}
                                            // href="/charts/[company]/[year]" as={`/charts/${company}/2017`} 
                                            >
                                                <a className="nav-link">2017</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                </ul>
                        </div>
                    </nav>
                    </div>
            </div>
        <style jsx>
            {`
                .navbarSupportedContent {
                    position: relative !important;
                }
                .nav-link-1234 {
                    color: black !important;
                }
                .height-setter {
                    height: 
                }
            `}
        </style>
        </div>
        );
}