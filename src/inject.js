var script=document.createElement("script");
script.src=chrome.extension.getURL("chromiumPreventions.js");
script.async=false;
document.documentElement.appendChild(script);
console.log("Succesfully injected headless detection prevention script!")
