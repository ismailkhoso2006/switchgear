$(document).ready(function() {
    // Array of URLs for different points
    var urls = [
      "/obix/config/Drivers/NiagaraNetwork/BMS_NC1_IS/points/Community_1/Utility/PMS/Switchgear/Power$20Meter_Feeders_IN_OUT_1/VAN_/out",
      "/obix/config/Drivers/NiagaraNetwork/BMS_NC1_IS/points/Community_1/Utility/PMS/Switchgear/Power$20Meter_Feeders_IN_OUT_1/Kwh/out",
      // Add more URLs as needed
    ];
  
      // Define the maximum number of characters to display
  var maxLength = 10;

  // Function to truncate text to the maximum length
  function truncateText(text, maxLength) {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  }

    // Loop through each URL and make AJAX requests
    urls.forEach(function(url, index) {
      $.ajax({
        type: "GET",
        url: url,
        dataType: "xml",
        success: function(xml) {
          // Get the <real> element in the response
          var realElement = xml.getElementsByTagName("real")[0];
          
          // If the <real> element is found, get its value and display it
          if (realElement) {
            var value = realElement.getAttribute("val");
            var truncatedValue = truncateText(value, maxLength);
            $("#pointk19" + (index + 1)).text("Value: " + truncatedValue);
          } else {
            $("#pointk19" + (index + 1)).text("Pointk19" + (index + 1) + ": No 'real' element found.");
          }
        },
        error: function() {
          $("#pointk19" + (index + 1)).text("Error");
        }
      });
    });
  });