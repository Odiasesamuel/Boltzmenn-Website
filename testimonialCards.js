// Testimonial cards
const card = document.querySelector(".card");
const cardHeading = document.querySelector(".card h4");
const cardText = document.querySelector(".card-text");
const clientName = document.querySelector(".client-name p");
const clientImg = document.querySelector(".client-details img");
const clientRole = document.querySelector(".client-name span");

const cards = [
  {
    heading: "Comitted to quality",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Auctor neque sed lectus feugiat nunc",
    photo: "images/Picture.svg",
    name: "Wealth Ekanem",
    position: "CEO Martem Media",
  },

  {
    heading: "Intuitive Design",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Auctor neque sed lectus feugiat nunc",
    photo: "images/Picture 2.svg",
    name: "Jerome Bell",
    position: "President of Sales",
  },

  {
    heading: "Comitted to quality",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Auctor neque sed lectus feugiat nunc",
    photo: "images/Picture 3.svg",
    name: "Marvin McKinney",
    position: "Marketing Coordinator",
  },

  {
    heading: "Efficient Collaborating",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem. Auctor neque sed lectus feugiat nunc",
    photo: "images/Picture 4.svg",
    name: "Darrell Steward",
    position: "Dog Trainer",
  },
];

let idx = 1;

function updateCard() {
  const { heading, text, photo, name, position } = cards[idx];

  cardHeading.innerHTML = heading;
  cardText.innerHTML = text;
  clientImg.src = photo;
  clientName.innerHTML = name;
  clientRole.innerHTML = position;

  idx++;

  if (idx > cards.length - 1) {
    idx = 0;
  }
}

setInterval(updateCard, 20000);