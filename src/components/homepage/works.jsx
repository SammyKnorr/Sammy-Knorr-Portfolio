import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<a href="https://www.asml.com/en" target="_blank" rel="noreferrer">
								<img
									src="./ASML.png"
									alt="ASML"
									className="work-image"
								/>
							</a>
							<div className="work-title">ASML, San Jose, CA</div>
							<div className="work-subtitle">
								DevOps Engineer Intern
							</div>
							<div className="work-duration">Summer 2024</div>
						</div>
						<div className="work">
							<a href="https://www.asml.com/en" target="_blank" rel="noreferrer">
								<img
									src="./ASML.png"
									alt="ASML"
									className="work-image"
								/>
							</a>
							<div className="work-title">ASML, Wilton, CT</div>
							<div className="work-subtitle">
								Software Engineer Intern
							</div>
							<div className="work-duration">Summer 2023</div>
						</div>

						<div className="work">
							<img
								src="./UVA.png"
								alt="UVA"
								className="work-image"
							/>
							<div className="work-title">University of Virginia</div>
							<div className="work-subtitle">
								Aquatic Supervisor
							</div>
							<div className="work-duration">January 2022 - May 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
