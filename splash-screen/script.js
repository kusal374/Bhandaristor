// Initialize splash screen
document.addEventListener('DOMContentLoaded', function() {
    // Hide splash screen after 4 seconds
    setTimeout(() => {
        const splashScreen = document.querySelector('.splash-container');
        if (splashScreen) {
            splashScreen.classList.add('fade-out');
            setTimeout(() => {
                splashScreen.remove();
            }, 500);
        }
    }, 4000); // Updated to 4 seconds
});
