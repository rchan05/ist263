// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
    /**
     * Initialize Event Listeners for Steps
     */
    const initializeStepListeners = () => {
        const steps = document.querySelectorAll(".step");
        if (!steps.length) {
            console.warn("No steps found on the page.");
            return;
        }

        steps.forEach((step, index) => {
            step.addEventListener("click", () => handleStepClick(step, index));
        });
    };

    /**
     * Handle Step Click
     * @param {HTMLElement} step - The clicked step element
     * @param {number} index - The index of the clicked step
     */
    const handleStepClick = (step, index) => {
        const heading = step.querySelector("h3");
        const stepTitle = heading ? heading.innerText : "No title available";

        alert(`You clicked on Step ${index + 1}: ${stepTitle}`);
        highlightStep(step);
    };

    /**
     * Highlight the Clicked Step
     * @param {HTMLElement} step - The clicked step element
     */
    const highlightStep = (step) => {
        // Remove highlight from all steps
        const steps = document.querySelectorAll(".step");
        steps.forEach((s) => s.classList.remove("highlight"));

        // Add highlight to the clicked step
        step.classList.add("highlight");
    };

    /**
     * Utility: Smooth Scroll to Element
     * @param {string} selector - The CSS selector of the target element
     */
    const smoothScrollTo = (selector) => {
        const target = document.querySelector(selector);
        if (!target) {
            console.error(`No element found for selector: ${selector}`);
            return;
        }

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    // Initialize all step listeners
    initializeStepListeners();

    // Example usage of smooth scrolling (optional: remove if unused)
    const scrollToButton = document.querySelector("#scrollToSteps");
    if (scrollToButton) {
        scrollToButton.addEventListener("click", () => smoothScrollTo("#stepsSection"));
    }
});
