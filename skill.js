// Default skills
const defaultSkills = [
  {
    name: "HTML",
    level: "Beginner",
  },
  {
    name: "CSS",
    level: "Intermediate",
  },
];

// Get data from localStorage, otherwise use default skills
let skills = JSON.parse(localStorage.getItem("skills")) || defaultSkills;

// Selecting elements
const skillInput = document.getElementById("skill-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const skillList = document.getElementById("skill-list");
const skillCount = document.getElementById("skill-count");


function getSkillNames() {
  return skills.map(skill => skill.name);
}

console.log(getSkillNames());

// Returns beginner skills
function getBeginnerSkills() {
  return skills.filter(skill => skill.level === "Beginner");
}

console.log(getBeginnerSkills());

// Updates total number of skills
function updateCount() {
  const total = skills.reduce((count) => count + 1, 0);
  skillCount.textContent = total;
}

// Saves data in localStorage
function saveSkills() {
  localStorage.setItem("skills", JSON.stringify(skills));
}

// Displays all skills
function renderSkills() {
  skillList.innerHTML = "";

  skills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = `${skill.name} - ${skill.level}`;
    skillList.appendChild(li);
  });

  updateCount();
}

// Add new skill
addBtn.addEventListener("click", function () {
  const name = skillInput.value.trim();

  if (name === "") {
    alert("Enter a skill first!");
    return;
  }

  skills.push({
    name: name,
    level: "Beginner",
  });

  saveSkills();
  renderSkills();

  console.log(getSkillNames());
  console.log(getBeginnerSkills());

  skillInput.value = "";
});

// Clear all skills
clearBtn.addEventListener("click", function () {
  skills = [];
  localStorage.removeItem("skills");
  renderSkills();
});

// Display data when page loads
renderSkills();