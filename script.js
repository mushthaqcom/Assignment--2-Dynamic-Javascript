// Project Database
const projects = [
  {
    title: "Building a website for an agency",
    description: "I built a website for an agency using WordPress.",
    category: "Web Design",
    image: "https://images.pexels.com/photos/890065/pexels-photo-890065.jpeg",
    link: "#"
  },
  {
    title: "E-commerce App",
    description: "A fully functional store using React with payment integration.",
    category: "Development",
    image: "https://images.pexels.com/photos/3098683/pexels-photo-3098683.jpeg",
    link: "#"
  },
  {
    title: "Mobile Banking Application",
    description: "A mobile app for financial transactions built with React Native.",
    category: "Mobile Development",
    image: "https://images.pexels.com/photos/29052901/pexels-photo-29052901.jpeg",
    link: "#"
  },
  {
    title: "Brand Identity Design",
    description: "Complete branding package including logo and style guide.",
    category: "Graphic Design",
    image: "https://images.pexels.com/photos/12200696/pexels-photo-12200696.jpeg",
    link: "#"
  },
  {
    title: "SaaS Dashboard",
    description: "Analytics dashboard for tracking business metrics in real-time.",
    category: "Development",
    image: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg",
    link: "#"
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio site showcasing creative work.",
    category: "Web Design",
    image: "https://images.pexels.com/photos/1368484/pexels-photo-1368484.jpeg",
    link: "#"
  }
];

// Function to render projects to the DOM
function renderProjects(projectsToRender) {
  const cardSection = document.querySelector('.card-section');
  
  if (projectsToRender.length === 0) {
    cardSection.innerHTML = '<p style="text-align: center; padding: 2rem;">No projects found.</p>';
    return;
  }

  const cardsHTML = projectsToRender.map(project => `
    <article class="card">
      <div class="card-image">
        <img src="${project.image}" alt="${project.title}">
        <span class="badge">${project.category}</span>
      </div>
      <div class="card-content">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <button><a href="${project.link}" style="text-decoration: none; color: inherit;">View Project</a></button>
      </div>
    </article>
  `).join('');

  cardSection.innerHTML = cardsHTML;
}

// Function to filter projects based on search term
function filterProjects(searchTerm) {
  const filteredProjects = projects.filter(project => 
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  renderProjects(filteredProjects);
}

// Event Listener for search input
const searchBar = document.getElementById('searchBar');
searchBar.addEventListener('input', (event) => {
  const searchTerm = event.target.value;
  filterProjects(searchTerm);
});

// Initial render on page load
document.addEventListener('DOMContentLoaded', () => {
  renderProjects(projects);
});
