// =====================================
// H.E.E. Research Solutions
// Main Website Script
// =====================================

// Employee Login Button
const employeeButton = document.getElementById("employeeButton");

employeeButton.addEventListener("click", () => {
    window.location.href = "employees.html";
});

// Welcome Message
console.log("H.E.E. Research Solutions");
console.log("Authorized personnel only.");
console.log("If you are not authorized, close this console.");

// Hidden ARG Hint
console.log("%cEmployee Notice", "color:red;font-size:18px;font-weight:bold;");
console.log("Reminder:");
console.log("Project 9123 remains restricted.");
console.log("Only personnel with Level 2 clearance may continue.");

// Secret Console Command
window.secret = function(code){

    code = String(code);

    switch(code){

        case "2234":
            console.log("%cACCESS TOKEN ACCEPTED","color:lime;font-size:18px;");
            console.log("Use this number:");
            console.log("%c9123","color:cyan;font-size:28px;font-weight:bold;");
            break;

        case "9123":
            console.log("%cERROR","color:red;font-size:18px;");
            console.log("Incident reports are archived.");
            console.log("Archive location unavailable.");
            break;

        case "help":
            console.log("Available:");
            console.log("secret(2234)");
            console.log("secret(9123)");
            break;

        default:
            console.log("Unknown access code.");
    }

};

// Tiny Easter Egg
let clicks = 0;

document.querySelector(".logo").addEventListener("click", () => {

    clicks++;

    if(clicks === 7){

        alert("Employee Notice:\nPortal location confirmed.");

        window.location.href = "employees.html";

    }

});
