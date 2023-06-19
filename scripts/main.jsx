document.getElementById("bowtie-cat").addEventListener("click", function () {
    if(document.getElementById("meow").textContent == "Meow!") {
        document.getElementById("meow").textContent = "✨ Open the Console to See What's Happening ✨"
    } else {document.getElementById("meow").textContent = "Meow!"};
  });

const catLogo = document.getElementById("bowtie-cat");


catLogo.addEventListener("mouseover", () => {catLogo.setAttribute("src", "./assets/evil-bowtie-cat.png")})
catLogo.addEventListener("mouseleave", () => {catLogo.setAttribute("src", "./assets/bowtie-cat.png")})


let myButton = document.querySelector("button");
let greeting = document.getElementById("greeting");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      greeting.textContent = `Welcome, ${myName}!`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    greeting.textContent = `Welcome, ${storedName}!`;
  }

  myButton.onclick = () => {
    setUserName();
  };

  var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

  var randomTopic = topics[Math.floor(Math.random() * topics.length)];

  function listTopics() {
for (var x = 0; x < topics.length; x++) {
    console.log(topics[x])
}
  }

  function selectTopic() {
    if (randomTopic === 'HTML') {
      console.log("Let's study HTML!");
    } else if (randomTopic === 'CSS') {
      console.log("Let's study CSS!");
    } else if (randomTopic === 'Git') {
      console.log("Let's study Git!");
    } else if (randomTopic === 'JavaScript') {
      console.log("Let's study JavaScript!");
    } else {
      console.log('Please try again!');
    }
  }

  console.log("Here is a list of topics we learned through Prework:")
  listTopics();
  console.log("Which topic should we study first?")
  selectTopic();

