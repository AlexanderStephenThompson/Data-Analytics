// Cookies, local storage and sessions: https://www.youtube.com/watch?v=GihQAC1I39Q
// These are being stored within the user's browser. 

// Cookie Storage
document.cookie = "key=Value; expires=Thu, 01 Jan 2023 00:00:00 GMT"; // Setting with expiration

// Local Storage - Retains information after the browser closes/refreshes. Accessible from any window.
localStorage.setItem("Key", "Value");
localStorage.getItem("Key")
localStorage.removeItem("Key")

// Session Storage Accessible from the same tab only -- useful for shopping
sessionStorage.setItem("Key", "Value");
sessionStorage.getItem("Key")
sessionStorage.removeItem("Key")