import database from "../assets/database.svg";
// import ecommerce from "../assets/ecommerce.svg";
import performance from "../assets/performance.svg";
// import wordpress from "../assets/wordpress.svg";
import api from "../assets/api.svg";
import webdevelopment from "../assets/web-development.svg";
import support from "../assets/support.svg";
import docker from "../assets/docker.svg";
//portfolio images
import Hoobank from "../assets/Hoobank.jpg";
// import memories from "../assets/memories.jpg";
// import auth from "../assets/auth.jpg";
// import krypto from "../assets/krypto.jpg";
// import questionnaire from "../assets/questionnaire.jpg";
// import nextcrud from "../assets/next-crud.jpg";
// import techoverflow from "../assets/techoverflow.jpg";
// import weather from "../assets/weather.jpg";
import dockline from "../assets/dockline.png";
import beehive from "../assets/beehive.png";
import whistleit from "../assets/whistleit.png";
import kyb from "../assets/kyb.png";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import product5 from "../assets/product5.jpg";

export const PROJECTS = [
  {
    imageSrc: product1,
    title: "Frontend Development",
    subtitle: "Dockline Web App",
    description:
      "Implemented key features such as search filters, Google Maps integration, Firebase notifications, Stripe for payments, and authentication. Additionally, designed and built the UI using Vue.js, Astro.js, TypeScript, and Tailwind CSS.",
    description2:
      "Also converted the existing Ionic mobile app into a web application to enhance accessibility. The project is currently under development, with ongoing improvements planned to optimize functionality and user experience across platforms.",
    link1: "https://github.com/Abdullahbhatti77/HooBank-LandingPage.git",
    link2: "https://www.dockline.io/",
    delay: 100,
  },
  {
    imageSrc: product2,
    title: "Frontend Development",
    subtitle: "Whistle It Chat App",
    description:
      "Improved the user experience of the Whistle It admin panel by fixing UI bugs and implementing persistent scrolling in chats. Enhancements included adding loaders when hitting APIs, providing feedback on API success or errors, and improving the responsiveness of previously unresponsive designs.",
    description2:
      "Additionally, implemented scrolling for large data in tables to prevent vertical overflow on pages, enhancing usability.",
    link1: "https://github.com/Abdullahbhatti77/HooBank-LandingPage.git",
    link2: "https://whistleit.io/",
    delay: 300,
  },
  {
    imageSrc: product3,
    title: "Frontend Development",
    subtitle: "Beehive Web App",
    description:
      "Implemented responsive UI designs, integrated live Google reviews, and developed forms, along with utilizing the Google Maps API to calculate distances. The project was built using Vue.js, TypeScript, Tailwind CSS, and PrimeVue to ensure a smooth and efficient user interface.",
    description2:
      "Additionally, fixed several UI bugs and made significant improvements to the overall user experience, ensuring the application is user-friendly and visually appealing across all devices.",
    link1: "https://github.com/Abdullahbhatti77/HooBank-LandingPage.git",
    link2: "https://www.beehivepros.com/",
    delay: 500,
  },
  {
    imageSrc: product4,
    title: "Full Stack Development",
    subtitle: "KYB Web App",
    description:
      "Redesigned the complete website's UI, ensuring a modern and user-friendly interface. In addition, performed web scraping using Python and Selenium, documented the code thoroughly for future reference, and optimized the code for better performance.",
    description2:
      "I also implemented responsive designs using Vue.js, Vuetify, and Vuex, ensuring seamless functionality across all devices.",
    link1: "https://github.com/Abdullahbhatti77/HooBank-LandingPage.git",
    link2: "https://thekyb.com/",
    delay: 100,
  },
  {
    imageSrc: product5,
    title: "Frontend Development",
    subtitle: "HooBank Landing Page",
    description:
      "Converted a Figma design into a static landing page for a fictional bank.",
    description2:
      "Used React JS and Tailwind CSS. Its a complete responsive website. Click the button below to visit the website.",
    link1: "https://github.com/Abdullahbhatti77/HooBank-LandingPage.git",
    link2: "https://hoobank4u.vercel.app/",
    delay: 300,
  },
  // {
  //   imageSrc: techoverflow,
  //   title: "Frontend Design",
  //   subtitle: "Techoverflow Website",
  //   description:
  //     "Developed this responsive static website during my internship. Converted Figma design into a web interface. Used React JS and Bootstrap.",
  //   description2:
  //     "The website is fully responsive and mobile-friendly. The website is hosted on Netlify. Click the button below to visit the website.",
  //   link1: "https://github.com/Abdullahbhatti77/techoverflow_website.git",
  //   link2: "https://techoverflow.netlify.app/",
  //   delay: 300,
  // },
  // {
  //   imageSrc: krypto,
  //   title: "Frontend Design",
  //   subtitle: "Krypto Landing Page",
  //   description:
  //     "Developed a static landing page for a fictional cryptocurrency website.",
  //   description2:
  //     "Used pure HTML and CSS. Click the button below to visit the website.",
  //   link1: "https://github.com/Abdullahbhatti77/krypto-landingpage.git",
  //   link2: "https://kryptolandingpage.netlify.app/",
  //   delay: 500,
  // },
  // {
  //   imageSrc: weather,
  //   title: "Web App",
  //   subtitle: "Weather App",
  //   description:
  //     "Developed a weather app using React JS. Used OpenWeatherMap API to fetch weather data.",
  //   description2:
  //     "The app displays the current weather and forecast of current day. Click the button below to visit the website.",
  //   link1: "https://github.com/Abdullahbhatti77/PWA-Weather-App.git",
  //   link2: "https://check-ur-weather.netlify.app/",
  //   delay: 100,
  // },
  // {
  //   imageSrc: memories,
  //   title: "Web App",
  //   subtitle: "Memories App",
  //   description:
  //     "Developed a memories app using MERN Stack and Tailwind CSS. Used MongoDB Atlas for database.",
  //   description2:
  //     "The app allows users to create, read, update, and delete memories. You can also like the memories. The backend is deployed on railway and frontend on vercel.",
  //   link1: "https://github.com/Abdullahbhatti77/memories-frontend.git",
  //   link2: "https://mymemoriies.vercel.app/",
  //   delay: 300,
  // },
  // {
  //   imageSrc: nextcrud,
  //   title: "Web App",
  //   subtitle: "Notes App",
  //   description:
  //     "Developed a notes app using Next JS and Tailwind CSS. Used MongoDB Atlas for database.",
  //   description2:
  //     "The app allows users to create, read, update, and delete notes. The app is hosted on vercel.",
  //   link1: "https://github.com/Abdullahbhatti77/NextJS-Crud.git",
  //   link2: "https://my-notes12.vercel.app/",
  //   delay: 500,
  // },
  // {
  //   imageSrc: healthcare,
  //   title: "Frontend Design",
  //   subtitle: "Healthcare Landing Page",
  //   description: "Developed a landing page for a fictional healthcare website. Did api inetegration for fetching results of patients.",
  //   description2: "Currently you can live results of Jessica Taylor by clicking on Jessica Taylor from left sidebar. Used React JS and Tailwind CSS.",
  //   link1: "https://github.com/Abdullahbhatti77/HealthCare-Dashboard.git",
  //   link2: "https://healthcarepage.netlify.app/",
  //   delay: 300,
  // },
  // {
  //   imageSrc: questionnaire,
  //   title: "Web App",
  //   subtitle: "Questionnaire App",
  //   description:
  //     "Developed a questionnaire app using Vue JS and Vuetify. I developed this as an assessment for Hybrid Media Technologies. ",
  //   description2:
  //     "The app allows users to create, read, update, and delete questions. The app is hosted on netlify.",
  //   link1: "https://github.com/Abdullahbhatti77/vue-js-app.git",
  //   link2: "https://hybridvueapp.netlify.app/",
  //   delay: 100,
  // },
  // {
  //   imageSrc: auth,
  //   title: "Full Stack Development",
  //   subtitle: "Authentication App",
  //   description:
  //     "Developed an authentication app using MERN Stack. You can login, regsiter, logout, reset password. Currently reset password is not working due to vercel issue.",
  //   description2:
  //     "Used node mailer for sending reset password link. Used Bcrypt for password hashing and JWT for authentication.",
  //   link1: "https://github.com/Abdullahbhatti77/authentication-frontend.gita",
  //   link2: "https://ab-authentication.vercel.app/",
  //   delay: 300,
  // },
];

export const FEATURES = [
  {
    title: "Flooring Tiles",
    description:
      "Durable and stylish tiles for residential and commercial floors.",
    image: webdevelopment,
    delay: 100,
  },
  // {
  //   title: "API Dev & Integration",
  //   description:
  //     "Build and integrate APIs for seamless data exchange between systems.",
  //   image: api,
  //   delay: 300,
  // },
  {
    title: "Wall Tiles",
    description: "Sleek designs to enhance your walls with a touch of luxury.",
    image: api,
    delay: 300,
  },
  {
    title: "Bathroom Tiles",
    description:
      "Water-resistant tiles that combine functionality with beauty.",
    image: database,
    delay: 500,
  },
  // {
  //   title: "E-commerce Solutions",
  //   description:
  //     "Develop robust e-commerce platforms with secure payment integrations.",
  //   image: ecommerce,
  //   delay: 100,
  // },
  {
    title: "Custom Tiles",
    description: "Unique cuts and patterns tailored to your design needs",
    image: docker,
    delay: 100,
  },
  // {
  //   title: "Website Performance",
  //   description:
  //     "Enhance website speed for faster load times and better user experience.",
  //   image: performance,
  //   delay: 300,
  // },
  // {
  //   title: "Consulting & Support",
  //   description:
  //     "Provide technical guidance and support for web development projects.",
  //   image: support,
  //   delay: 500,
  // },
];
export const REVIEWS = [
  {
    title: "Fatimah Al-Harbi",
    stars: 5,
    description:
      "The marble tiles transformed our living room into a luxurious space. The quality and service were outstanding!",
    delay: 100,
  },
  {
    title: "Abdullah Al-Qahtani",
    stars: 4,
    description:
      "Their custom tiles fit perfectly in our design project. Highly recommend for anyone looking for unique and elegant solutions.",
    delay: 300,
  },
  {
    title: "Noura Al-Fahad",
    stars: 5,
    description:
      "The durability and finish of their tiles are exceptional. We’re thrilled with the results!",
    delay: 500,
  },
];

export const ACHIVEMENTS = [
  {
    title: "Community Service Completion",
    subtitle: "University of Management and Technology (July 2021)",
    description:
      "I worked as a social worker for my society. I planted 50 plants in my society and also taught the children how to plant trees. I also gave a lecture on the importance of planting trees.",
    rating: "4.30/5",
  },
  {
    title: "Scolarship Holder",
    subtitle: "Punjab College Sheikhupura (Sep 2017)",
    description:
      "I was awarded a scholarship at Punjab College Sheikhupura for my outstanding performance in the matriculation exams. I scored 85% marks in the final exams.",
    rating: "4.80/5",
  },
  {
    title: "Best Student of the Year",
    subtitle: "Glasgow Public High School (Aug 2015)",
    description:
      "I was awarded the best student of the year award for my outstanding performance in the class. I scored 95% marks in the final exams and also participated in the science exhibition.",
    rating: "4.50/5",
  },
];
export const EDUCATION = [
  {
    title: "Bachelor's in Computer Science",
    subtitle: "University of Management and Technology (2019 - 2023)",
    description:
      "At UMT, my majors were web development, app development, cloud computing, and data sciences. I also worked as a social worker and earned a certificate.",
    rating: "4.30/5",
  },
  {
    title: "Intermediate in Science",
    subtitle: "Punjab Group of Colleges Sheikhupura (2017 - 2019)",
    description:
      "At PGC, I proved myself as a hardworking student and got a certificate of appreciation. I earned an A grade in my final results and was highly regarded by my teachers.",
    rating: "4.50/5",
  },
  {
    title: "Matriculation in Science",
    subtitle: "Glasgow Public High School (2015 - 2017)",
    description:
      "At Glasgow Public High School, besides studying, I also participated in extracurricular activities such as singing and sports. I earned an A+ grade in my final results.",
    rating: "4.80/5",
  },
];

export const EXPERIENCE = [
  {
    title: "Associate Software Engineer",
    subtitle: "Sumato Solutions (July 2024 - Present)",
    description: [
      "Creating responsive UI designs using Vue JS.",
      "Implementing new features in projects.",
      "Integrated Google Maps, Google Places etc apis for data fetching.",
      "Identify issues, analyze information and provide solutions to problems",
    ],
    rating: "4.30/5",
  },
  {
    title: "Associate Software Engineer",
    subtitle: "Programmers Force Private Limited (Oct 2023 - Mar 2024)",
    description: [
      "Managed multiple tasks, delivering all on time.",
      "Created reusable components and responsive UI.",
      "Enhanced UI/UX of a product, and implemented new designs for two products with API integration.",
      "Contributed to improving code quality and maintained documentation for future reference.",
    ],
    rating: "4.30/5",
  },
  {
    title: "Full Stack Developer",
    subtitle: "EdTest Testing Services (Sep 2022 - July 2023)",
    description: [
      "Worked as a FYP student.",
      "Gained exposure to different technologies, including MERN Stack, Next.js, Tailwind CSS, Git, Cloudinary, etc.",
      "Created custom APIs, developed and maintained user interfaces, and ensured quality assurance.",
      "Mentored junior team members who continued this project.",
    ],
    rating: "4.50/5",
  },
  {
    title: "Frontend Developer Trainee",
    subtitle: "Techoverflow (Mar 2023 - May 2023)",
    description: [
      "Contributed in three projects primarily using React JS, Vue JS, Tailwind CSS, Bootstrap.",
      "Cooperated with a team of 4 developers, gaining valuable teamwork experience.",
      "Expanded knowledge of front-end development technologies.",
      "Successfully created responsive frontend design of Techoverflow website using React JS and Bootstrap.",
    ],
    rating: "4.80/5",
  },
];

export const SKILLS = [
  { name: "HTML & CSS", percentage: 80, currentPercentage: 0 },
  { name: "Next JS", percentage: 50, currentPercentage: 0 },
  { name: "Bootstrap", percentage: 80, currentPercentage: 0 },
  { name: "MongoDB", percentage: 40, currentPercentage: 0 },
  { name: "Vue JS", percentage: 80, currentPercentage: 0 },
  { name: "Node JS", percentage: 40, currentPercentage: 0 },
  { name: "React JS", percentage: 70, currentPercentage: 0 },
  { name: "Docker", percentage: 40, currentPercentage: 0 },
  { name: "Javascript", percentage: 70, currentPercentage: 0 },
  { name: "Python", percentage: 30, currentPercentage: 0 },
  { name: "Tailwind CSS", percentage: 70, currentPercentage: 0 },
  { name: "AWS", percentage: 30, currentPercentage: 0 },
  { name: "Wordpress", percentage: 50, currentPercentage: 0 },
];
