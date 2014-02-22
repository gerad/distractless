chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  chrome.tabs.remove(details.tabId);
}, { url: [
  { hostEquals: 'news.ycombinator.com' },
  { hostEquals: 'news.google.com' },
]});
