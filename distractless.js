chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
  chrome.tabs.remove(details.tabId);
}, { url: [
  { hostEquals: 'news.ycombinator.com' },
  { hostEquals: 'news.google.com' },
  { hostEquals: 'grantland.com' },
  { hostEquals: 'deadspin.com' },
  { hostEquals: 'bleacherreport.com' },
]});
