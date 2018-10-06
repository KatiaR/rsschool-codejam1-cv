window.onload = function() {
  const summaries = document.getElementsByClassName("summary");
  [...summaries].forEach((summary) => {
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
  })
  const buttonAllFields = document.getElementsByClassName("open-each-field")[0];
  buttonAllFields.addEventListener("click", () => {
    // open all field if someone are closed
    const anglesDown = document.getElementsByClassName("fa-angle-down");
    if (anglesDown.length) {
      [...anglesDown].forEach((angleDown) => {
        const summary = angleDown.parentElement.parentElement
        const description = summary.getElementsByClassName("description")[0];
        description.classList.toggle("slideInUp");
        angleDown.classList.replace("fa-angle-down", "fa-angle-up");
      })
      return // to interrupt the execution of a function
    }

    // close all fields
    const summaries = document.getElementsByClassName("summary");
    [...summaries].forEach((summary) => {
      const description = summary.getElementsByClassName("description")[0];
      description.classList.toggle("slideInUp");
      const angleUp = summary.getElementsByClassName("fa-angle-up")[0];
      if (angleUp) {
          angleUp.classList.replace("fa-angle-up", "fa-angle-down");
      }
    })
  })
};
