// Services Card
const softwareCard = document.querySelector(".software");
const cloudCard = document.querySelector(".cloud");
const implementationCard = document.querySelector(".implementation");
const blockchainCard = document.querySelector(".blockchain");
const nextEmoji = document.querySelector(".next-emoji");

// Removes and add new Card
function changeCard() {
  softwareCard.classList.add("animate__backOutLeft");
  cloudCard.classList.add("animate__backOutRight");

  setTimeout(() => {
    softwareCard.classList.add("hide");
    cloudCard.classList.add("hide");
    implementationCard.classList.remove("hide");
    blockchainCard.classList.remove("hide");
  }, 1000);

  implementationCard.classList.add("animate__backInLeft");
  blockchainCard.classList.add("animate__backInRight");
}

// First Initial state
function firstInitialState() {
  softwareCard.classList.remove("animate__backOutLeft");
  cloudCard.classList.remove("animate__backOutRight");

  setTimeout(() => {
    softwareCard.classList.remove("hide");
    cloudCard.classList.remove("hide");
    implementationCard.classList.add("hide");
    blockchainCard.classList.add("hide");
  }, 1000);

  implementationCard.classList.remove("animate__backInLeft");
  blockchainCard.classList.remove("animate__backInRight");
}

// Reverse the changes of the Card
function reverseChangeCard() {
  implementationCard.classList.add("animate__backOutLeft");
  blockchainCard.classList.add("animate__backOutRight");

  setTimeout(() => {
    implementationCard.classList.add("hide");
    blockchainCard.classList.add("hide");
    softwareCard.classList.remove("hide");
    cloudCard.classList.remove("hide");
  }, 1000);

  softwareCard.classList.add("animate__backInLeft");
  cloudCard.classList.add("animate__backInRight");
}

// Second Inital State
function secondInitialState() {
  implementationCard.classList.remove("animate__backOutLeft");
  blockchainCard.classList.remove("animate__backOutRight");

  setTimeout(() => {
    implementationCard.classList.remove("hide");
    blockchainCard.classList.remove("hide");
    softwareCard.classList.add("hide");
    cloudCard.classList.add("hide");
  }, 1000);

  softwareCard.classList.remove("animate__backInLeft");
  cloudCard.classList.remove("animate__backInRight");
}

nextEmoji.addEventListener("click", (e) => {
  e.target.classList.toggle("clicked");

  if (nextEmoji.classList.contains("clicked")) {
    secondInitialState();
    changeCard();
  } else {
    firstInitialState();
    reverseChangeCard();
  }
});
