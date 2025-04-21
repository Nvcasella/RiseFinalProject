document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("volunteerBtn");


    // Create the form (initially hidden)
    const formContainer = document.createElement("div");
    formContainer.innerHTML = `
        <form id="volunteerForm" style="display:none; margin-top: 20px;">
            <h3>Volunteer Registration</h3>
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email" required><br><br>
            
            <button type="submit">Submit</button>
        </form>
    `;

    const profileContainer = document.querySelector(".profile-container");
    profileContainer.appendChild(formContainer);

    const form = document.getElementById("volunteerForm");

    // Show form on button click
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        form.style.display = "block";
        btn.style.display = "none"; // Hide the button after click
    });

    // Handle form submission
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Thank you for volunteering!");
        form.reset();
        form.style.display = "none";
    });

    // --- Bonus Interactive Feature: Show more info on hover ---
    const charityInfo = document.createElement("p");
    charityInfo.textContent = "Hover over this section to learn a fun fact about Charity A!";
    charityInfo.style.marginTop = "30px";
    profileContainer.appendChild(charityInfo);

    charityInfo.addEventListener("mouseover", () => {
        charityInfo.textContent = "Fun Fact: Charity A has helped over 10,000 people in the last year!";
    });

    charityInfo.addEventListener("mouseout", () => {
        charityInfo.textContent = "Hover over this section to learn a fun fact about Charity A!";
    });
});
