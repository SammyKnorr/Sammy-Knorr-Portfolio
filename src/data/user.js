const INFO = {
	main: {
		title: "Samuel Knorr's Portfolio",
		name: "Samuel Knorr",
		email: "knorrsammy@gmail.com",
		logo: "../logo.png",
	},

	socials: {
		github: "https://github.com/SammyKnorr?tab=repositories",
		linkedin: "https://www.linkedin.com/in/samuel-knorr-8b924216a/",
	},

	homepage: {
		title: "Future Software Engineer and Project Manager",
		description:
			"I am an aspiring software engineer and project manager, currently pursuing a B.S. in Computer Engineering with a minor in Engineering Business at the University of Virginia. My academic and professional experiences have equipped me with a strong foundation in React, Python, and Java. I have honed my software and devops skills through internships, such as my roles at ASML Holding. My passion for technology is further demonstrated in my personal projects, like developing a job application tracking website and a class review application. Recognized for my problem-solving abilities and a proactive approach, I am eager to take on challenging projects that push the boundaries of technological innovation.",
	},

	about: {
		title: "My name is Samuel Knorr and I am looking to build my career!",
		description:
			"I am Samuel Knorr, an aspiring software engineer and project manager with a deep-rooted passion for technology and community service. My journey in the world of computers began at a young age when I built my own computer, and I have been pursuing this interest ever since. Currently, I am advancing my skills and knowledge at the University of Virginia, where I am studying Computer Engineering with a minor in Engineering Business. Outside of technology, I am Eagle Scout, a testament to my dedication, leadership, and community spirit. My time in the Boy Scouts of America showed me how much I value helping my communities and it is my goal to work for a company which shares this value. Traveling is another passion that enriches my life. Exploring new places and cultures broadens my perspective and I believe working with peopel from different backgrounds is a great way to enrich a project. In my free time, I enjoy getting active by either playing basketball, going to the gym, or hiking in nature. I aspire to develop software solutions that not only solve complex problems but also contribute positively to society.",
	},

	projects: [
		{
			title: "Artifactory Build Info",
			description:
				"Implemented JFrog Artifactory build info feature into build pipeline. Displays build metadata to assist in analysis. Employed PowerShell scripting to automate data collection, and publishing processes of dozens of builds. Build metadata included environment variables, associated Jira issues, git logs, artifacts, and dependencies.",
			logo: "./powershell.png",
			linkText: "Project Not Viewable, it is part of ASML's GitHub",
			link: "",
		},
		{
			title: "Stock Sight",
			description:
				"Trained a Llama 3 8b model with 30,000 instructions to predict ETF stock closing prices. Deployed model with AWS and used on a Django-based website including users, portfolio management, REST API capabilities, and real-time stock data visualization. Implemented REST API feature for users to add portfolio information.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/SammyKnorr/DjangoProject",
		},
		{
			title: "Git Runner Health Wallboard",
			description:
				"During my internship at ASML I developed a wallboard using JavaScript, Github Actions, and Github Pages to test the health of github runners and display the real time results on an office TV. Using GitHub actions I tested for mountpoint existence and writeability of runners automatically every six hours. Then using jquery and the GitHub API my wallboard code automatically read the results of the tests and updated a visual screen. After completion it was pushed to production.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "Project Not Viewable, it is part of ASML's GitHub",
			link: "",
		},
		{
			title: "JIRA Ticket Automation",
			description:
				"Another project during my internship at ASML which I led had me use Python, Github Actions, and REST API to automatically create git release reminder tickets for AI's and TL's. My Github Actions script was triggered when a release began and it started a Python script which used the REST API to automatically create outlined JIRA tickets. After completion my project was pushed to production.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "Project Not Viewable, it is part of ASML's GitHub",
			link: "",
		},
		{
			title: "Job Application Management",
			description:
				"Developed job application tracking website with React and deployed using AWS Amplify, included log in screen leveraging AWS for a backend to store users/saved job applications, included export to CSV feature to download applications to users' computer, implemented ability to give job recommendations using OpenAI's API.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png",
			linkText: "View Project",
			link: "https://github.com/SammyKnorr/amplify-react",
		},

		{
			title: "Class Review Project",
			description:
				"Designed project with Java, JavaFX GUI, and SQlite. Developed an app allowing users to sign in or make an account and then leave a review for a class or see already created reviews. Used SQL to check if a class was already added by a user. Usernames and classes stored in two databases.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/SammyKnorr/CourseReview",
		},

		{
			title: "Mock Wordle",
			description:
				"Utilized Java and JavaFX GUI to build a functioning wordle game similar to the NYT web game. Employed both white and black box unit testing to ensure a polished project free of bugs and provide positive user experience.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
			linkText: "View Project",
			link: "https://github.com/SammyKnorr/MockWordle",
		},

		{
			title: "Two-Player Python Game",
			description:
				"Collaborated with another developer to build a two player Python game. Utilized sprites, tracking, and key inputs to form a 1v1 'shooter' game including moving sprites and health bars along with a game over screen allowing for seamless replayability.",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "https://github.com/SammyKnorr/ShooterGame",
		},

	],
	capstone: {
		title: "Undergaduate Capstone Project",
		description:
			"During my Fall 2024 Semester I completed my engineering capstone project. My team of five worked with the University of Virginia Swim and Dive team to produce a modified diving block. This uses force sensors to measure the force a swimmer dives off with and relays that data to a web app. A video demo and report of this project can be found below.",
	},
};

export default INFO;
