import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

import LinkPreview from "../components/LinkPreview";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/capstone.css";

const Capstone = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "capstone");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Capstone | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="capstone" />
				<div className="content-wrapper">
					<div className="capstone-logo-container">
						<div className="capstone-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="capstone-container">
						<div className="title capstone-title">
                            {INFO.capstone.title}
						</div>

						<div className="subtitle capstone-subtitle">
						    {INFO.capstone.description}
						</div>

                        <div className="media-container">
                            <div className="video-wrapper">
                                <iframe
                                    width="560"
                                    height="315"
                                    src="https://www.youtube.com/embed/phO2JEbVJUA"
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                ></iframe>
                            </div>

                            <div className="pdf-wrapper">
                                <iframe
                                    src={process.env.PUBLIC_URL + "/Capstone_Final_Project_Report.pdf"}
                                    className="capstone-pdf"
                                    title="PDF Document"
                                ></iframe>
                            </div>

							<div>
								<LinkPreview url="https://engineering.virginia.edu/news-events/news/your-final-assignment-build-system-improve-uva-swim-starts" />
							</div>
							<div>
								<LinkPreview url="https://swimswam.com/uva-engineering-students-under-ken-ono-develop-smart-block-to-improve-start-efficiency/" />
							</div>
                        </div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Capstone;
