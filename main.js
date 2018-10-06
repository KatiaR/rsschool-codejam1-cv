window.onload = function() {
  const summary = document.getElementsByClassName("summary")[0];
  summary.addEventListener("click", () => {
    const description = summary.getElementsByClassName("description")[0];
    description.classList.toggle("slideInUp");
    const angleDown = summary.getElementsByClassName("fa-angle-down")[0];
    const angleUp = summary.getElementsByClassName("fa-angle-up")[0];
    if (angleDown) {
        angleDown.classList.replace("fa-angle-down", "fa-angle-up");
    }
    if (angleUp) {
        angleUp.classList.replace("fa-angle-up", "fa-angle-down");
    }
  });
};
