// =======================================
// H.E.E. Internal Research Terminal
// Version 1.0
// =======================================

const output = document.getElementById("output");
const command = document.getElementById("command");

function print(text){
    output.textContent = text;
}

function run(){

    const cmd = command.value.trim().toUpperCase();

    switch(cmd){

        case "HELP":

            print(`AVAILABLE COMMANDS

HELP
STATUS
PROJECTS
DIRECTORY
MEMO
SITE7
9123
CLEAR

`);

        break;

        case "STATUS":

            print(`SYSTEM STATUS

Research Division.......ONLINE

Archive Server..........ONLINE

Communications..........ONLINE

Remote Monitoring.......OFFLINE

Reason:
Unknown`);

        break;

        case "PROJECTS":

            print(`KNOWN PROJECTS

ATLAS
ECHO
ORCHARD

One project has been removed from this list.`);

        break;

        case "DIRECTORY":

            print(`EMPLOYEE DIRECTORY

Dr. Mason
L. Carter
R. Evans
J. Cole

One employee record could not be loaded.`);

        break;

        case "MEMO":

            print(`Internal Memo

Employees are reminded that rumors regarding
unregistered facilities are harmful to company morale.

Please report repeated laughter lasting longer
than twenty minutes.

Thank you for your cooperation.`);

        break;

        case "SITE7":

            print(`Research Site 7

Status:
Inactive

Coordinates:
Unavailable

Building Plans:
Unavailable

Personnel:
Unavailable

Reason:
Level 5 Clearance Required.`);

        break;

        case "9123":

            print(`ACCESS TOKEN ACCEPTED

Loading Incident 9123...

------------------------------------------------

INTERVIEW EXCERPT

Interviewer:
"What happened inside?"

Subject:
"..."

Interviewer:
"Can you remember anything?"

Subject:
"..."

Interviewer:
"Why are you smiling?"

Interview terminated.

------------------------------------------------

File Locked.`);

        break;

        case "CLEAR":

            output.textContent = "";

        break;

        default:

            print("Unknown command.");

    }

    command.value = "";

}

command.addEventListener("keydown",function(e){

    if(e.key==="Enter"){
        run();
    }

});

// Startup Message
print(`H.E.E. INTERNAL TERMINAL

Employee Verified

Clearance Level 2

Type HELP`);
