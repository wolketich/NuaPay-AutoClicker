chrome.runtime.onInstalled.addListener(() => {
  console.log("Auto Extend Session extension installed.");
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Inject the content script when the tab is fully loaded
  if (changeInfo.status === 'complete') {
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      files: ['contentScript.js']
    });
  }
});