function setActive(element) {
    // Remove active class from all panels
    const panels = document.querySelectorAll('.panel');
    panels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Add active class to clicked panel
    element.classList.add('active');
}

// Set up event listeners for panels
document.addEventListener('DOMContentLoaded', function() {
    const panels = document.querySelectorAll('.panel');
    
    // Add click event to all panels
    panels.forEach(panel => {
        panel.addEventListener('mouseenter', function() {
            setActive(this);
        });
    });
});
