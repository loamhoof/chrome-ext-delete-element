;(() => {
    chrome.commands.onCommand.addListener((command) => {
        chrome.tabs.executeScript(null, { file: 'delete.js' }, null);
    });
})();
