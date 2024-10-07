(function() {
    // Function to click the Extend button
    function clickExtendButton() {
      const button = document.getElementById('extendSessionLink');
      if (button) {
        button.click();
        console.log('Extend button clicked.');
      }
    }
  
    // Click the button immediately
    clickExtendButton();
  
    // Click the button every 10 seconds
    setInterval(clickExtendButton, 10 * 1000); // 10 seconds
  })();