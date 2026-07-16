const courses = [
  { title: "React Basics", seats: 0 },
  { title: "Node.js", seats: 12 },
  { title: "PostgreSQL", seats: 5 },
];

// Destructuring second course
const { title, seats } = courses[1];

console.log("Second Course:");
console.log(title);
console.log(seats);

// Function using object destructuring
function describeCourse({ title, seats }) {
  return `${title} has ${seats} seats available.`;
}

console.log("\nCourse Details:");
for (const course of courses) {
  console.log(describeCourse(course));
}

// Copy array using spread operator
const archivedCourses = [...courses];

// Add a new course only to copied array
archivedCourses.push({
  title: "JavaScript Advanced",
  seats: 20,
});

console.log("\nOriginal Courses:");
console.log(courses);

console.log("\nArchived Courses:");
console.log(archivedCourses);

// Using nullish coalescing
console.log("\nSeat Information:");

for (const course of courses) {
  console.log(`${course.title}: ${course.seats ?? "No seats data"}`);
}

/*
React Basics has seats = 0.
Since 0 is a valid value, ?? will not replace it.
The fallback is used only when the value is null or undefined.
*/

// Parent class
class Course {
  constructor(title, seats) {
    this.title = title;
    this.seats = seats;
  }

  isAvailable() {
    return this.seats > 0;
  }

  describe() {
    return `${this.title} has ${this.seats} seats available.`;
  }
}

const allCourses = [];

for (const course of courses) {
  allCourses.push(new Course(course.title, course.seats));
}

console.log("\nAvailability:");

for (const course of allCourses) {
  console.log(`${course.title}: ${course.isAvailable()}`);
}

// Child class
class PremiumCourse extends Course {
  constructor(title, seats, mentor) {
    super(title, seats);
    this.mentor = mentor;
  }

  describe() {
    return `${this.title} has ${this.seats} seats available. Mentor: ${this.mentor}`;
  }
}

const premiumCourse = new PremiumCourse(
  "Full Stack Development",
  15,
  "Rahul Sharma"
);

console.log("\nPremium Course:");
console.log(premiumCourse.describe());

// Optional chaining
const courseInfo = {
  title: "MongoDB",
  seats: 10,
};

console.log("\nInstructor:");
console.log(courseInfo.instructor?.name ?? "No instructor assigned");