const h2 = document.getElementsByTagName("h2");
for (const h2Tag of h2) {
  h2Tag.style.color = "#1a4958";
}
const backpackSection = document.getElementById("backpack");
backpackSection.style.backgroundColor = "tomato";

const cardClasses = document.getElementsByClassName("card");
// for (const card of cardClasses) {}
for (let i = 0; i < cardClasses.length; i++) {
  const card = cardClasses[i];
  card.style.backgroundColor = "#dbdedf";
}

// carousel btn
const testBtn = document.getElementById("test");

testBtn.addEventListener("click", function () {
  console.log("Slider Button Clicked");
});
function handleBtn() {
  console.log("Button Clicked");
}

// selecting all card buttons
const cardButtons = document.querySelectorAll(".cardBtn");
for (const cardBtn of cardButtons) {
  cardBtn.addEventListener("click", function () {
    // cardBtn.style.background = "red";
    cardBtn.style.display = "none";
  });
}

// button disabled enabled
const submitInput = document.querySelector("#submitInput");
submitInput.addEventListener("keyup", function (event) {
  // const submitBtn = document.querySelector(".submit-button");
  const submitBtn = document.getElementById("submitBtn");
  if (event.target.value == "email") {
    submitBtn.removeAttribute("disabled");
    submitBtn.classList.remove("disabled-button");
  } else {
    submitBtn.setAttribute("disabled", true);
    submitBtn.classList.add("disabled-button");
  }
});
submitInput.addEventListener("change", function (event) {
  // const submitBtn = document.querySelector(".submit-button");
  const submitBtn = document.getElementById("submitBtn");
  if (event.target.value == "email") {
    submitBtn.removeAttribute("disabled");
  } else {
    submitBtn.setAttribute("disabled", true);
  }
});
// change image when mouseenter
const supplyImg = document.getElementById("supplyImg");
supplyImg.addEventListener("mouseenter", function () {
  supplyImg.src = "images/shoes/shoe-3.png";
});
supplyImg.addEventListener("mouseout", function () {
  supplyImg.src = "images/shoes/shoe-1.png";
});

//doubleClick
const subscribeArea = document.getElementById("subscribeBox");
subscribeArea.addEventListener("dblclick", function () {
  subscribeArea.style.backgroundColor = "#eb9980";
});
document.body.addEventListener("click", function () {
  subscribeArea.style.backgroundColor = "#fceae8";
});
