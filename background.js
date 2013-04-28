function checkForValidUrl(tabId, changeInfo, tab) {
  // If the letter 'g' is found in the tab's URL...
	console.log(tab.url);
	console.log(tab.url.indexOf('www\.amazon\.com\/gp\/digital\/fiona\/manage'));
  if (tab.url.indexOf('www\.amazon\.com\/gp\/digital\/fiona\/manage') > -1) {
    // ... show the page action.
    chrome.pageAction.show(tabId);
  }
};

// Listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(checkForValidUrl);
