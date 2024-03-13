const nextButton = document.querySelector(".btn-next");
const prevButton = document.querySelector(".btn-prev");
const steps = document.querySelectorAll(".step");
const form_steps = document.querySelectorAll(".form-step");
let active = 1;
nextButton.addEventListener("click", () => {
  active++;
  if (active > steps.length) {
    active = steps.length;
  }
  updateProgress();
});
prevButton.addEventListener("click", () => {
  active--;
  if (active < 1) {
    active = 1;
  }
  updateProgress();
});
const updateProgress = () => {
  console.log("steps.length => " + steps.length);
  console.log("active => " + active);

  // togle .active class for each list item
  form_steps.forEach((step, i) => {
    if (i == active - 1) {
      step.classList.add("active");
      console.log("i => " + i);
    } else {
      step.classList.remove("active");
      form_steps[i].classList.remove("active");
    }
  });
  // togle .active class for each list item
  steps.forEach((step, i) => {
    if (i == active - 1) {
      step.classList.add("active");
      console.log("i => " + i);
    } else {
      step.classList.remove("active");
      form_steps[i].classList.remove("active");
    }
  });
  // enable or disable prev and next buttons
  if (active === 1) {
    prevButton.disabled = true;
  } else if (active === steps.length) {
    nextButton.disabled = true;
  } else {
    prevButton.disabled = false;
    nextButton.disabled = false;
  }
};

const mediaQuery = window.matchMedia('(max-width: 768px)');

const handleMediaQueryChange = (mediaQuery) => {
  if (mediaQuery.matches) {
    const bodyElement = document.querySelector('body');
    bodyElement.removeAttribute('id');
    console.log('removed');
  }
};

handleMediaQueryChange(mediaQuery);

mediaQuery.addListener(handleMediaQueryChange);