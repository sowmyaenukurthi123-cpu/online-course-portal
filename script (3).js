// ========== 1. COURSE DATA ==========
// To add a new course, copy one block below and change the values.
const courses = [
  {
    id: 1,
    name: "HTML & CSS Basics",
    instructor: "Anita Sharma",
    duration: "4 weeks",
    level: "Beginner",
    lessons: 16,
    icon: "🌐",
    color: "lavender",
    description: "Learn how to build and style your first web pages from scratch."
  },
  {
    id: 2,
    name: "JavaScript for Beginners",
    instructor: "Rahul Verma",
    duration: "6 weeks",
    level: "Beginner",
    lessons: 24,
    icon: "⚡",
    color: "lemon",
    description: "Make your web pages interactive with variables, functions and events."
  },
  {
    id: 3,
    name: "Python Programming",
    instructor: "Priya Nair",
    duration: "8 weeks",
    level: "Beginner",
    lessons: 30,
    icon: "🐍",
    color: "mint",
    description: "Start coding with Python by building small, useful programs."
  },
  {
    id: 4,
    name: "Graphic Design Basics",
    instructor: "Karthik Raj",
    duration: "5 weeks",
    level: "Beginner",
    lessons: 18,
    icon: "🎨",
    color: "pink",
    description: "Understand color, layout and fonts, and design simple posters."
  },
  {
    id: 5,
    name: "Digital Marketing",
    instructor: "Meera Iyer",
    duration: "4 weeks",
    level: "Intermediate",
    lessons: 14,
    icon: "📣",
    color: "peach",
    description: "Learn social media, email and search basics to reach more people."
  },
  {
    id: 6,
    name: "Data Analysis with Excel",
    instructor: "Arjun Menon",
    duration: "3 weeks",
    level: "Intermediate",
    lessons: 12,
    icon: "📊",
    color: "sky",
    description: "Use formulas, tables and charts to make sense of your data."
  }
];

// Keeps track of which courses the user has enrolled in
let enrolledIds = [];

// The course currently shown in the details section (null = none yet)
let selectedId = null;

// Timer used to hide the enrollment message
let messageTimer;


// ========== 2. FIND THE HTML ELEMENTS WE NEED ==========
const courseList = document.getElementById("course-list");
const searchInput = document.getElementById("search");
const noResults = document.getElementById("no-results");
const detailsBox = document.getElementById("details-box");
const message = document.getElementById("message");


// ========== 3. SHOW THE COURSE CARDS ==========
function showCourses(list) {
  courseList.innerHTML = "";

  // Show the "no results" text only when the list is empty
  noResults.hidden = list.length > 0;

  for (const course of list) {
    const isEnrolled = enrolledIds.includes(course.id);

    courseList.innerHTML += `
      <article class="card">
        <div class="card-top ${course.color}">${course.icon}</div>
        <div class="card-body">
          <h3>${course.name}</h3>
          <p>Instructor: ${course.instructor}</p>
          <p>Duration: ${course.duration}</p>
          <div class="card-buttons">
            <button class="btn btn-light" onclick="showDetails(${course.id})">
              View details
            </button>
            <button class="btn btn-primary" onclick="enrollCourse(${course.id})" ${isEnrolled ? "disabled" : ""}>
              ${isEnrolled ? "Enrolled" : "Enroll"}
            </button>
          </div>
        </div>
      </article>
    `;
  }
}


// ========== 4. SEARCH ==========
function searchCourses() {
  const text = searchInput.value.toLowerCase().trim();

  // Keep only the courses whose name or instructor contains the typed text
  const results = courses.filter(function (course) {
    return (
      course.name.toLowerCase().includes(text) ||
      course.instructor.toLowerCase().includes(text)
    );
  });

  showCourses(results);
}

// Search every time the user types a letter
searchInput.addEventListener("input", searchCourses);


// ========== 5. COURSE DETAILS ==========
function showDetails(id) {
  selectedId = id;
  renderDetails();

  // Scroll down so the user can see the details
  document.getElementById("details").scrollIntoView();
}

function renderDetails() {
  // Nothing chosen yet: show a friendly hint
  if (selectedId === null) {
    detailsBox.innerHTML = `
      <p class="details-empty">
        Pick a course above and press "View details" to see more here.
      </p>
    `;
    return;
  }

  const course = courses.find(function (c) {
    return c.id === selectedId;
  });
  const isEnrolled = enrolledIds.includes(course.id);

  detailsBox.innerHTML = `
    <div class="details-icon ${course.color}">${course.icon}</div>
    <div class="details-info">
      <h3>${course.name}</h3>
      <p class="instructor">Taught by ${course.instructor}</p>
      <p class="description">${course.description}</p>
      <div class="facts">
        <span class="fact">Duration: ${course.duration}</span>
        <span class="fact">Level: ${course.level}</span>
        <span class="fact">${course.lessons} lessons</span>
      </div>
      <button class="btn btn-primary" onclick="enrollCourse(${course.id})" ${isEnrolled ? "disabled" : ""}>
        ${isEnrolled ? "Enrolled" : "Enroll"}
      </button>
    </div>
  `;
}


// ========== 6. ENROLL ==========
function enrollCourse(id) {
  // Do nothing if the user already enrolled
  if (enrolledIds.includes(id)) {
    return;
  }

  enrolledIds.push(id);

  const course = courses.find(function (c) {
    return c.id === id;
  });

  showMessage("Enrollment Successful! You joined " + course.name + ".");

  // Refresh the cards and details so the button changes to "Enrolled"
  searchCourses();
  renderDetails();
}

function showMessage(text) {
  message.textContent = text;
  message.classList.add("show");

  // Hide the message after 3 seconds
  clearTimeout(messageTimer);
  messageTimer = setTimeout(function () {
    message.classList.remove("show");
  }, 3000);
}


// ========== 7. START THE PAGE ==========
showCourses(courses);
renderDetails();
