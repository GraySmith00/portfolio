const projects = [
  {
    title: 'TalentBuyer',
    description:
      "A full service organizational tool for music talent buyers to browse artists at all the major agencies, keep track of their venue's calendar and create and edit offers to send out to agents.",
    tech: [
      'React',
      'Router',
      'Redux',
      'Redux-thunk',
      'JWT',
      'Ruby on Rails',
      'Node',
      'Postgres'
    ],
    image: './images/talentBuyerDash.jpg',
    github: 'https://github.com/GraySmith00/talent-buyer-client',
    live: 'https://talent-buyer.netlify.com'
  },
  {
    title: 'BeakSeeker',
    description:
      'BeakSeeker is the most fun way to go birding! Find the best local hotspots. See which birds have been recently seen in your area. Earn badges for spotting birds and compete against your fellow birders to see who is the ultimate beak seeker!',
    tech: [
      'React',
      'Router',
      'Redux',
      'Redux-thunk',
      'Node',
      'Express',
      'MongoDB'
    ],
    image: './images/beakSeekerImg.jpg',
    github: 'https://github.com/GraySmith00/beak-seeker-client',
    live: 'https://beakseeker.netlify.com'
  },
  {
    title: 'StarWarsAwakens',
    description:
      'StarWarsAwakens is dynamic single page application that lets users interact with data from the Star Wars API in order to brush up on their favorite characters, planets, and vehicles. Users can save their favorite items for later viewing, as well as read random intro movie quotes at the bottom of the screen. Over 95% test coverage.',
    tech: ['React', 'Router', 'Enzyme', 'Jest'],
    image: './images/swapiBoxImg.jpg',
    github: 'https://github.com/GraySmith00/gs-ml-swapibox',
    live: 'https://gs-swapibox.herokuapp.com/'
  },
  {
    title: 'Tron Arcade Game',
    description:
      'Classic 2 Player Tron arcade game built in Vanilla JS using OOP.',
    tech: ['Vanilla JS', 'OOP'],
    image: './images/tronGame.jpg',
    github: 'https://github.com/GraySmith00/gs-bp-game-time',
    live: 'https://graysmith00.github.io/gs-bp-game-time'
  },
  {
    title: 'Weatherly',
    description:
      'Weatherly is a dynamic real-time weather app built in React. Data for this app is pulled from the WeatherUnderground API and the background photo matches the weather. Search autocomplete is implemented with a custom Binary Search Trie and user preferences are saved to local storage. The design for this app was made in Figma.',
    tech: ['React', 'VanillaJS', 'Figma'],
    image: './images/weatherlyImage.jpg',
    github: 'https://github.com/GraySmith00/gs-jm-weatherly',
    live: 'https://gs-jm-weatherly.herokuapp.com/'
  }
];

function renderSlide({ title, description, tech, image, github, live }) {
  const project = document.querySelector('.project');
  const technologies = tech.join(' / ');
  project.innerHTML = `
    <h3>${title}</h3>
    <p class="tech">${technologies}</p>
    <div class="project-links">
      <a href="${github}" target="_blank">
        <i class="fab fa-github"></i>
      </a>
      <a href="${live}" target="_blank" class="live-link">Live</a>
    </div>
    <p>${description}</p>
    <img src="${image}" alt="${title}" />
  `;
  renderDots();
}

function renderDots() {
  const dots = document.querySelector('.dots');
  const dotString = projects
    .map((project, i) => {
      return i === currentSlide
        ? `<i class="fas fa-circle"></i>`
        : `<i class="far fa-circle"></i>`;
    })
    .join('');
  dots.innerHTML = dotString;
}

const left = document.querySelector('.left');
let currentSlide = 0;

left.addEventListener('click', slideBack);
function slideBack() {
  if (currentSlide > 0) {
    currentSlide--;
    renderSlide(projects[currentSlide]);
  }
}

const right = document.querySelector('.right');
right.addEventListener('click', slideForward);
function slideForward() {
  if (currentSlide < projects.length - 1) {
    currentSlide++;
    renderSlide(projects[currentSlide]);
  }
}

renderSlide(projects[0]);
