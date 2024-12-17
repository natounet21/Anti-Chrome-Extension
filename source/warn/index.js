(() => {
	document.getElementById('back-btn').addEventListener('click', () => {
			chrome.tabs.getCurrent(tab => chrome.tabs.remove(tab.id));
	});

})();