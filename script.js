// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Get the button element by its ID
    var button = document.getElementById("myButton");
    
    // Add a click event listener to the button
    button.addEventListener("click", function() {
        // Get the message element
        var message = document.getElementById("message");
        
        // Set the text content of the message element
        message.textContent = "Button was clicked!";
    });
});
