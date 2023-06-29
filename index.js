const main = document.querySelector(".main");
const thanks = document.querySelector(".thankYou");
const submitButtton = document.querySelector(".btnSubmit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButtton.addEventListener("click", () => {
  thanks.classList.remove("hide");
  main.classList.add("hide");

  // Also thanks.style.display = "block";
  // main.style.display="none";
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
