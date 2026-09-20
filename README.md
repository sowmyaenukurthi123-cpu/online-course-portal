# 📚 Online Course Portal

A simple, beginner-friendly website where students can browse courses, search for them, read details, and enroll. Built with plain HTML, CSS and JavaScript. There are no frameworks, no Node.js and no database.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Difficulty](https://img.shields.io/badge/Difficulty-Easy-brightgreen)

---

## ✨ Features

- **Home page** with the site title and a navigation bar
- **Course cards** showing the course name, instructor, duration, and an Enroll button
- **Search bar** that filters courses by name or instructor as you type
- **Course details section** showing the description, duration, level and number of lessons
- **Enroll button** that shows an "Enrollment Successful" message, then changes to "Enrolled"
- **Soft pastel design** with simple cards and rounded buttons
- **Responsive layout** that works on mobile and desktop

---

## 🛠️ Technologies Used

| Technology | Purpose |
| --- | --- |
| HTML | Page structure |
| CSS | Pastel design and responsive layout |
| JavaScript | Course data, search, details and enrollment |

---

## 📁 Project Structure

```
online-course-portal/
├── index.html    # Page structure (header, sections, footer)
├── style.css     # Pastel design and responsive layout
├── script.js     # Course data, search, details and enrollment
└── README.md     # Project documentation
```

---

## 🚀 Getting Started

No installation or server is needed.

1. **Clone the repository**
```bash
   git clone https://github.com/your-username/online-course-portal.git
```
2. **Open the folder**
```bash
   cd online-course-portal
```
3. **Open `index.html`** in any modern browser (Chrome, Edge, Firefox, Safari).

You can also just download the files and double-click `index.html`.

---

## 📖 How to Use

1. Scroll through the course cards in the **Courses** section.
2. Type in the search box to find a course, for example `python` or `Anita`.
3. Click **View details** on a card to see more information in the **Course Details** section.
4. Click **Enroll** to join a course. A green "Enrollment Successful" message appears at the bottom of the screen.

> **Note:** Enrollments are stored in memory only, so they reset when you refresh the page.

---

## 🧠 How the Code Works

| File | What it does |
| --- | --- |
| `index.html` | Sets up the header, navigation, hero, empty course list, details box and message area. |
| `style.css` | Colors are stored as variables at the top. Cards use CSS Grid, and a media query adjusts the layout for phones. |
| `script.js` | Holds the `courses` list and all the functions below. |

**Main functions in `script.js`:**

- `showCourses(list)` builds the course cards on the page
- `searchCourses()` filters the courses based on what the user types
- `showDetails(id)` and `renderDetails()` fill the details section
- `enrollCourse(id)` marks a course as enrolled and shows the message
- `showMessage(text)` displays the message for 3 seconds

---

## 🎨 Customizing the Project

### Add a new course

Open `script.js` and copy one block inside the `courses` list, then change the values:

```js
{
  id: 7,
  name: "Photography Basics",
  instructor: "Your Name",
  duration: "3 weeks",
  level: "Beginner",
  lessons: 10,
  icon: "📷",
  color: "sky",
  description: "Learn how to take great photos with any camera."
}
```

Each course needs a unique `id`. Available colors: `lavender`, `mint`, `peach`, `sky`, `pink`, `lemon`.

### Change the colors

Open `style.css` and edit the variables at the top:

```css
:root {
  --lavender: #e6e0ff;
  --mint: #d8f3e6;
  --button: #c9c0fb;
}
```

---

## 💡 Ideas for Improvement

- [ ] Save enrollments with `localStorage` so they stay after a refresh
- [ ] Add a "My Courses" page that lists enrolled courses
- [ ] Add category filters (for example Programming, Design, Business)
- [ ] Add a login or signup form
- [ ] Add course images instead of emoji icons

---

## 🌐 Browser Support

Works in all modern browsers. An internet connection is only needed for the optional Google Font (Nunito). Without it, the page uses a fallback font and still works normally.

---

## 📄 License

This project is free to use for learning and practice.

---

## 👤 Author

Made by **Your Name**. Replace this with your name and GitHub profile link.
