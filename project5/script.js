document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");

    steps.forEach((step, index) => {
        step.addEventListener("click", () => {
            alert(`You clicked on Step ${index + 1}: ${step.querySelector("h3").innerText}`);
        });
    });
});
