var blockedIds = [
];
fetch("https://file-nathandegrandpr.replit.app/").then(data=>data.json()).then(li => blockedIds = li)
function checkLink () {
    fetch("https://file-nathandegrandpr.replit.app/").then(data=>data.json()).then(li => blockedIds = li)
    if (blockedIds.find(i => location.host.includes(i))) {
        location.replace(chrome.runtime.getURL('warn/warn.html') + '?' + location.host);
   } 
 }
checkLink();
setInterval(function(){
checkLink()
},1000)