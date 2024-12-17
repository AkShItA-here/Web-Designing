// Function to validate the login form
function validateForm() {
    // Get the username and password values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Check if both fields are filled
    if (username === "" || password === "") {
        // Show error message if fields are empty
        document.getElementById('error-message').style.display = 'block';
        return false;  // Prevent form submission
    }
    
    // If both fields are filled, hide the error message
    document.getElementById('error-message').style.display = 'none';
    return true;  // Allow form submission
}
