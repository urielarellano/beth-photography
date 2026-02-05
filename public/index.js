/* Review Carousel Functionality */
const reviews = [
  {
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit error delectus adipisci labore eos, unde facere repudiandae voluptate, dolorem excepturi quasi reprehenderit, ex earum. Nemo illum quo soluta, architecto suscipit similique labore placeat at quaerat incidunt dolorem reprehenderit quam, itaque quasi in, assumenda officia cumque. Obcaecati corporis adipisci tempore tempora!",
    author: "Alisha Conlin, Melbourne"
  },
  {
    text: "This is a second review. Amazing experience, highly recommended! This is a second review. Amazing experience, highly recommended!",
    author: "John Doe, New York"
  },
  {
    text: "Another fantastic testimonial from our happy client. Will use again.",
    author: "Sarah Smith, London"
  }
];

let currentIndex = 0;

const reviewText = document.getElementById("review-text");
const reviewAuthor = document.getElementById("review-author");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function showReview(index, direction = "next") {
  // Determine classes
  const outClass = direction === "next" ? "slide-out-left" : "slide-out-right";
  const inClass  = direction === "next" ? "slide-in-right" : "slide-in-left";

  // Animate old text out
  reviewText.classList.add(outClass);
  reviewAuthor.classList.add(outClass);

  setTimeout(() => {
    // Update content after "slide out"
    reviewText.textContent = reviews[index].text;
    reviewAuthor.textContent = reviews[index].author;

    // Remove old out class
    reviewText.classList.remove(outClass);
    reviewAuthor.classList.remove(outClass);

    // Add "slide in" class
    reviewText.classList.add(inClass);
    reviewAuthor.classList.add(inClass);

    // Remove "slide in" class after animation ends
    setTimeout(() => {
      reviewText.classList.remove(inClass);
      reviewAuthor.classList.remove(inClass);
    }, 400); // match CSS duration

  }, 200); // slightly shorter delay for smooth overlap
}

// Initial display
showReview(currentIndex);

// Event listeners
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
  showReview(currentIndex, "prev");
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % reviews.length;
  showReview(currentIndex, "next");
});



/* FAQ dropdown functionality */
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const icon = question.querySelector(".icon");

    const isOpen = answer.style.maxHeight;

    if (isOpen) {
    answer.style.maxHeight = null;
    icon.textContent = "+";
    question.classList.remove("active");
    } else {
    answer.style.maxHeight = answer.scrollHeight + "px";
    icon.textContent = "−";
    question.classList.add("active");
    }
});
});


