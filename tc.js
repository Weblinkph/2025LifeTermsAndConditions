document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('terms-form');
  const agreeCheckbox = document.getElementById('agree');
  const errorMessage = document.getElementById('error-message');
  const modal = document.getElementById('modal');
  const closeBtn = document.getElementById('close');
  const submitCountDisplay = document.getElementById('submit-count'); // To display the submission count

  const redirectUrl = "https://techpcmug.blogspot.com/p/in-2025-i-embrace-terms-and-conditions.html"; // Replace with your desired URL

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    // If the checkbox is not checked, show an error message
    if (!agreeCheckbox.checked) {
      errorMessage.textContent = "You must agree to the terms and conditions.";
      return;
    }

    // AJAX request to update the database
    fetch('update_submission.php', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          submitCountDisplay.textContent = data.count; // Update the count from the database
          modal.style.display = "block"; // Show the modal if the database update is successful
        } else {
          console.error("Error updating submission count:", data.error);
          errorMessage.textContent = "An error occurred. Please try again.";
        }
      })
      .catch(error => {
        console.error("Error:", error);
        errorMessage.textContent = "An error occurred. Please try again.";
      });
  });

  // Close the modal when the user clicks the "x" button
  closeBtn.addEventListener('click', function () {
    modal.style.display = "none";
    window.location.href = redirectUrl; // Redirect when modal is closed
  });

  // Close the modal if the user clicks outside of the modal content
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      window.location.href = redirectUrl; // Redirect when modal is closed
    }
  });
});
