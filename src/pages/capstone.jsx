import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

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
				<NavBar active="contact" />
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
                                <video controls className="capstone-video">
                                    <source src={process.env.PUBLIC_URL + "/CapstoneDemoVideo.mp4"} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>

                            <div className="pdf-wrapper">
                                <iframe
                                    src={process.env.PUBLIC_URL + "/Capstone_Final_Project_Report.pdf"}
                                    className="capstone-pdf"
                                    title="PDF Document"
                                ></iframe>
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
