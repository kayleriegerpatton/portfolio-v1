import stockscape from "../gifs/stockscape.gif";
import soundArtSmart from "../images/project-screenshots/soundArtSmart.png";
import ecommerceBackEnd from "../gifs/ecommerceBackEnd.gif";
import employeeManagement from "../gifs/employeeManagement.gif";
import dayPlanner from "../images/project-screenshots/dayPlanner.png";
import readmeGenerator from "../gifs/readmeGenerator.gif";
import techTalk from "../images/project-screenshots/techTalk.png";
import weatherDashboard from "../images/project-screenshots/weatherDashboard.png";
import noteTaker from "../images/project-screenshots/noteTaker.png";
import passwordGenerator from "../images/project-screenshots/passwordGenerator.png";
import javaScriptCodeQuiz from "../images/project-screenshots/javaScriptCodeQuiz.png";
import teamProfileGeneratorGif from "../gifs/teamProfileGeneratorGif.gif";
import unified from '..images/project-screenshots/unified.png'

export const projects = [
  {
    id: 12,
    title: "Stockscape",
    technologies: [
      "Chart.js",
      "Bootstrap CSS",
      "Express.js",
      "Handlebars.js",
      "JavaScript",
      "MySQL",
      "REST API",
    ],
    description:
      "Gamified investing application testing users' skills as they build portfolios and compete for highest year-end earnings.",
    imageSrc: stockscape,
    altText: "Website run-through including pie chart animation gif",
    githubUrl: "https://github.com/kayleriegerpatton/stockscape",
    deployedUrl: "",
    featured: true,
  },
  {
    id: 10,
    title: "Sound Art Smart",
    technologies: ["CSS", "HTML", "JavaScript", "web APIs"],
    description:
      "A visual questionnaire to discover artworks based on your interests.",
    imageSrc: soundArtSmart,
    altText: "Webpage with artist quote and intro text",
    githubUrl: "https://github.com/kayleriegerpatton/sound-art-smart",
    deployedUrl: "https://kayleriegerpatton.github.io/sound-art-smart/",
  },
  {
    id: 8,
    title: "E-Commerce Back-End",
    technologies: ["Express.js", "JavaScript", "Node.js", "MySQL"],
    description:
      "Manage category, product, and tags data with an Express server and MySQL database.",
    imageSrc: ecommerceBackEnd,
    altText: "code run-through and data interaction demo gif",
    githubUrl: "https://github.com/kayleriegerpatton/ecommerce-back-end",
    deployedUrl: "",
  },
  {
    id: 7,
    title: "Employee Management System",
    technologies: ["Inquirer.js", "Node.js", "MySQL", "Sequelize"],
    description:
      "Command line app prompts user questions about employees, roles and departments to interact with MySQL database.",
    imageSrc: employeeManagement,
    altText: "command line run-through of coded question prompts",
    githubUrl: "https://github.com/kayleriegerpatton/employee-tracker",
    deployedUrl: "",
  },
  {
    id: 1,
    title: "Day Planner",
    technologies: ["CSS", "HTML", "JavaScript", "jQuery"],
    description:
      "A daily planner that stores events in color-coded time blocks.",
    imageSrc: dayPlanner,
    altText: "Daily planner webpage with color-coded business hour time blocks",
    githubUrl: "https://github.com/kayleriegerpatton/work-day-planner",
    deployedUrl: "https://kayleriegerpatton.github.io/work-day-planner/",
  },
  {
    id: 5,
    title: "README Generator",
    technologies: ["CSS", "HTML", "Node.js"],
    description:
      "Node.js app taking user input via the inquirer package and returning a formatted markdown README file.",
    imageSrc: readmeGenerator,
    altText:
      "command line run-through of coded question prompts and resulting markdown file",
    githubUrl: "https://github.com/kayleriegerpatton/readme-generator",
    deployedUrl: "",
  },
  {
    id: 13,
    title: "Unified",
    technologies: [
      "React",
      "AWS S3",
      "Apollo Client",
      "JavaScript",
      "MongoDB",
      "GraphQL",
    ],
    description:
      "A full-stack student services site featuring user-authentication, subscription polling, and AWS image uploading.",
    imageSrc: unified,
    altText: "Unified landing page",
    githubUrl: "https://github.com/kayleriegerpatton/unified-client",
    deployedUrl: "",
  },
  {
    id: 11,
    title: "Tech Talk",
    technologies: [
      "Bootstrap CSS",
      "Handlebars.js",
      "Express.js",
      "JavaScript",
      "MySQL",
      "REST API",
    ],
    description:
      "A full-stack, CMS-style micro blog site featuring user-authentication, MVC structure, and Handlebars.js templating.",
    imageSrc: techTalk,
    altText: "Lavender and orange webpage with list of blogs",
    githubUrl: "https://github.com/kayleriegerpatton/tech-blog-cms",
    deployedUrl: "",
  },
  {
    id: 9,
    title: "Weather Dashboard",
    technologies: ["CSS", "HTML", "JavaScript", "jQuery", "web APIs"],
    description:
      "Search by city to display the current weather and 5-day forecast.",
    imageSrc: weatherDashboard,
    altText:
      "Weather dashboard with search box, and current and 5-day forecast weather",
    githubUrl: "https://github.com/kayleriegerpatton/weather-dashboard",
    deployedUrl: "https://kayleriegerpatton.github.io/weather-dashboard/",
  },
  {
    id: 4,
    title: "Note Taker",
    technologies: ["CSS", "HTML", "Express.js", "JavaScript"],
    description:
      "Note-taking app using an Express.js back-end to save and retrieve note data from a JSON file.",
    imageSrc: noteTaker,
    altText:
      "Webpage with note title and contents, and list of other note titles on left-hand side",
    githubUrl: "https://github.com/kayleriegerpatton/note-taker/",
    deployedUrl: "",
  },
  {
    id: 3,
    title: "Random Password Generator",
    technologies: ["CSS", "HTML", "JavaScript"],
    description:
      "Generate strong random passwords with this simple application.",
    imageSrc: passwordGenerator,
    altText:
      "Webpage titled Password Generator with box containing string of random text characters",
    githubUrl:
      "https://github.com/kayleriegerpatton/employee-random-password-generator",
    deployedUrl:
      "https://kayleriegerpatton.github.io/employee-random-password-generator/",
  },
  {
    id: 2,
    title: "JavaScript Code Quiz",
    technologies: ["CSS", "HTML", "JavaScript", "jQuery"],
    description: "A timed, multiple choice JavaScript fundamentals quiz.",
    imageSrc: javaScriptCodeQuiz,
    altText: "Quiz question webpage with question and purple answer buttons",
    githubUrl: "https://github.com/kayleriegerpatton/javascript-code-quiz",
    deployedUrl: "https://kayleriegerpatton.github.io/javascript-code-quiz/",
  },
  {
    id: 6,
    title: "Team Profile Generator",
    technologies: ["CSS", "HTML", "Node.js"],
    description:
      "Node.js app taking user input via the inquirer package and returning a styled HTML page with individual member cards.",
    imageSrc: teamProfileGeneratorGif,
    altText:
      "command line run-through of coded question prompts and resulting webpage",
    githubUrl: "https://github.com/kayleriegerpatton/team-profile-generator",
    deployedUrl: "",
  },
];
