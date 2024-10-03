// Set up a timer to execute a script every minute
setInterval(() => {
    // Get the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length > 0) {
        // Execute the script to click the button in the active tab
        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: clickButton
        });
      }
    });
  }, 60000); // 60000 ms = 1 minute
  
  // Function to click the button with ID 'extendSessionLink'
  function clickButton() {
    const button = document.getElementById('extendSessionLink');
    if (button) {
      button.click();
      console.log("Button clicked by extension");
    }
  }