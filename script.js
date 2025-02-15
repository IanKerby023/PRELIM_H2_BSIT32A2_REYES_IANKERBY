document.addEventListener("DOMContentLoaded", function() {
    const hobbyButton = document.getElementById("hobby-btn");
    const hobbySection = document.getElementById("hobby-section");

    if (hobbyButton) {
        hobbyButton.addEventListener("click", function() {
            // Toggle visibility of the hobby section
            hobbySection.classList.toggle("hidden");
        });
    }
});
