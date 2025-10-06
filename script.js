
document.addEventListener("DOMContentLoaded", function () {

  const banner = document.createElement("div");
  banner.className = "welcome-banner";
  banner.textContent = "Welcome to XYZ College!";
  document.body.prepend(banner);

 
  const navItems = ["Home", "About Us", "Departments", "Admissions", "Contact"];
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  navItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    li.className = "nav-item";
    li.addEventListener("click", () => {
      alert(`You clicked on ${item}`);
    });
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  document.body.appendChild(nav);

 
  const coursesSection = document.createElement("section");
  coursesSection.className = "courses";

  const heading = document.createElement("h2");
  heading.textContent = "Featured Courses";
  coursesSection.appendChild(heading);

  const courses = ["Computer Science", "Business Administration", "Psychology", "Mechanical Engineering"];
  const courseList = document.createElement("ul");

  courses.forEach(course => {
    const courseItem = document.createElement("li");
    courseItem.textContent = course;
    courseItem.className = "course-item";
    courseList.appendChild(courseItem);
  });

  coursesSection.appendChild(courseList);
  document.body.appendChild(coursesSection);


  const footer = document.createElement("footer");
  footer.textContent = "© 2025 XYZ College. All rights reserved.";
  document.body.appendChild(footer);
});