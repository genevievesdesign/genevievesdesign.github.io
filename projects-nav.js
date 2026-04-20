const projectPages = [
  "against-the-current.html",
  "clark-coastals.html",
  "pyper-vision.html",
  "fad-publication.html",
  "diversity-inclusion.html",
  "summerset-signage.html",
  "studio-pacific-architecture.html",
  "summerset-calendar.html",
  "karma-eats.html"
];

// Get current page name
const currentPage = window.location.pathname.split("/").pop();
const currentIndex = projectPages.indexOf(currentPage);

// Get nav links
const prevLink = document.querySelector(".project-nav a[href='previous.html']");
const nextLink = document.querySelector(".project-nav a[href='next.html']");

// Assign real links
if(prevLink) prevLink.href = projectPages[(currentIndex - 1 + projectPages.length) % projectPages.length];
if(nextLink) nextLink.href = projectPages[(currentIndex + 1) % projectPages.length];
