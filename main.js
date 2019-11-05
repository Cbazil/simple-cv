new Vue({
  el: "#edu-container",
  data: {
    eduDetails: [
      {
        image: "https://i.imgur.com/M1DOMlw.png",
        institution: "Life Choices Academy",
        duration: "Aug 2018 - Feb 2019",
        course: "Web Development",
        subject: ["Programming", "Professional Development", "Design Thinking"],
        skills: ["HTML", "Bootstrap", "CSS(SASS and SCSS)", "javascript"],
      },
      {
        image: "https://i.imgur.com/RQ0GNwF.jpg",
        institution: "College of Cape Town (Crawford)",
        duration: "Aug - Dec 2017",
        course: "Propel 3 (Cisco)",
        subject: ["CCNA1", "CCNA2", "Linux Essentials", "IoT", "Cyber-security"],
      },
      {
        image: "https://i.imgur.com/N3TP8EM.jpg",
        institution: "Communiveristy of South Africa",
        duration: "Jan - Jun 2017",
        course: "Pre-Professional course",
        subject: ["First Aid", " Mathematics", "English", "E-learning competence", "Entrepreneurship"],
      },
      {
        image: "https://i.imgur.com/pBnVACK.png",
        school: "Crestway High School",
        completed: "2016",
        qualification: "Higher Certificate",
      }
    ]
  },
});

new Vue({
  el: "#exp-container",
  data: {

    expDetails: [
      {
        image: "https://imgur.com/QItUUXk",
        company: "Vulcan Labs",
        postition: "Intern",
        duration: "May - Oct 2019",
        duties: "Software Developer",
      },
      {
        image: "https://i.imgur.com/5r242HO.png",
        company: "Cyber pitstop",
        postition: "Computer Assistant",
        duration: "2014 - Current",
        duties: "Assist Customers"
      },
      {
        image: "https://i.imgur.com/eq5fITu.jpg",
        company: "The Capetonian Hotel",
        postition: "Waiter",
        duration: "20 hours(2015)",
        duties: "Waitering",
      },
    ]
  }
})

new Vue({
  el: "#skills-sec",
  data: {
    skillDetails: [
      {
        image: "./imgs/html5.svg",
        description: "./imgs/html-card.jpg",
        name: "html-5",
        link: "https://html.com",
        show: false,
        color: "orange",
      },
      {
        image: "./imgs/css3.svg",
        description: "./imgs/css-card.jpg",
        name: "css-3",
        link: "https://www.tutorialspoint.com/css/what_is_css.htm",
        show: false,
      },

      {
        image: "./imgs/sass.svg",
        description: "./imgs/sass-card.jpg",
        name: "SASS",
        link: "https://sass-lang.com",
        show: false,
      },
      {
        image: "./imgs/js.svg",
        description: "./imgs/js-card.jpg",
        name: "Java-Script",
        link: "https://javascript.info/intro",
        show: false,
      },
      {
        image: "./imgs/git.svg",
        description: "./imgs/git-card.jpg",
        name: "Git",
        link: "https://git-scm.com/",
        show: false,
      },
      {
        image: "./imgs/node-js.svg",
        description: "./imgs/nodejs-card.jpg",
        name: "Node.js",
        link: "https://nodejs.org/en/about",
        show: false,
      },
      {
        image: "./imgs/react.svg",
        description: "./imgs/react-card.jpg",
        name: "ReactJS",
        link: "https://reactjs.org/",
        show: false,
      },
      {
        image: "./imgs/vuejs.svg",
        description: "./imgs/vuejs-card.jpg",
        name: "VueJS",
        link: "https://vuejs.org/",
        show: false,
      },
    ]
  },
})

new Vue({
  el: "#projects-sec",
  data: {
    projects: [
      {
        image: "./imgs/project1.jpg",
        description: "Rebuilding jonchretien.com as a form of up skilling in media-queires, grids and basic css.",
        link: "https://cbazil.github.io/Rebuilding-jonchretien.com/index.html"
      },
      {
        image: "./imgs/project2.jpg",
        description: "Code4CT Project (Life Choices project), Following wireframe and refactor website based off new wireframe.",
        link: "https://cbazil.github.io/code4ct/index.html"
      },
    ]
  }
})
