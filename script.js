
/**
 * Toggle Password Visibility
 * Switches the input type between 'password' and 'text'
 */
function togglePasswordVisibility() {
    // 1. Get the password input and the icon element
    const passwordInput = document.getElementById("passIn");
    const icon = document.getElementById("eyeIcon");

    // 2. Check current state and toggle
    if (passwordInput.type === "password") {
        
        // Show Password
        passwordInput.type = "text";
        icon.textContent = "🙈"; // Change icon to 'Hide' state
        
    } else {
        
        // Hide Password
        passwordInput.type = "password";
        icon.textContent = "👁️"; // Change icon back to 'Show' state
        
    }
}
