/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Build the navigation menu by declaring sections
const sections = document.querySelectorAll("section");
// Build navigation bar 
document.addEventListener("DOMContentLoaded", buildNavbar);
function buildNavbar() {
  //unordered list
  const list = document.querySelector("ul#navbar__list");
  const documentFragment = document.createDocumentFragment();
  //Loop for section of sections 
  for(const section of sections){
  // Add li under ul ( list of sections)
  const listItem = document.createElement("li");
  // Add link and text content to li elements 
  const listLink = document.createElement("a");
  listLink.href =`#${section.id}`;
  //Add class list to the link
  listLink.classList.add("menu__link");
  // Add the text content to the link
  listLink.textContent = section.dataset.nav;
  // Add the li to the node of the DOM under ul 
  listItem.appendChild(listLink);
  // Smooth scroll when user clicks the nav link, page smoothly scroll into selected section
  listItem.addEventListener("click", (e) =>{
    e.preventDefault();
    section.scrollIntoView({behavior:"smooth"});
  })
  // Add the list item to the node of the DOM by using documentFragment to avoid reload and repaint
  documentFragment.appendChild(listItem);
}
// Add the doc fragment to the node of the DOM
list.appendChild(documentFragment);
}
//Add scroll as event listener to highlight viewed section and its corrsponding nav link using scrollTO event
window.addEventListener("scroll", highlightSectionsAndLinks);
function highlightSectionsAndLinks(){
  for(const section of sections){
    const sectionTop = section.getBoundingClientRect().top;
    // console.log(sectionTop);
    // Add class 'active' to section when near top of viewport
    const link = document.querySelector(`a[href="#${section.id}"]`);
    if(sectionTop >0 && sectionTop <= 300){
      section.classList.add("your-active-class");
      link.classList.add("active");
    }else {
      section.classList.remove("your-active-class");
      link.classList.remove("active");
    }
  }
} 











/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


