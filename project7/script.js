document.addEventListener("DOMContentLoaded", () => {
    const messageTypeDropdown = document.getElementById("message-type");
    const dynamicInstructions = document.getElementById("dynamic-instructions");

    if (messageTypeDropdown && dynamicInstructions) {
        messageTypeDropdown.addEventListener("change", (event) => {
            const selectedValue = event.target.value;

            let instructions = "Please select a message type above to see instructions.";
            if (selectedValue === "general") {
                instructions = "For general inquiries, provide a clear description of your question.";
            } else if (selectedValue === "support") {
                instructions = "For technical support, include details about the issue you're facing.";
            } else if (selectedValue === "feedback") {
                instructions = "We appreciate your feedback! Let us know how we can improve.";
            }

            dynamicInstructions.innerHTML = `<p>${instructions}</p>`;
        });
    }
});
