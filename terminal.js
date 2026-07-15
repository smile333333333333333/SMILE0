// =======================================
// H.E.E. INTERNAL TERMINAL v2.0
// =======================================

const output = document.getElementById("output");
const command = document.getElementById("command");

function print(text){
    output.textContent = text;
}

function boot(){

print(`H.E.E. INTERNAL TERMINAL

Initializing...

Loading Employee Database........OK
Loading Archive Server...........OK
Loading Research Records.........OK
Loading Security Logs............OK

Employee Verified.

Clearance Level 2

Type HELP`);

}

boot();

command.addEventListener("keydown",function(e){

if(e.key==="Enter"){
run();
}

});

function run(){

const cmd=command.value.trim().toUpperCase();

switch(cmd){

case "HELP":

print(`AVAILABLE COMMANDS

HELP
STATUS
PROJECTS
DIRECTORY
MEMO
SITE7
NEWS
MAP
LOGS
CAMERAS
VISITORS
WHOAMI
HANDBOOK
SMILE
9123
CLEAR`);

break;

case "STATUS":

print(`SYSTEM STATUS

Research Division.......ONLINE

Archive Server..........ONLINE

Communications..........ONLINE

Security................ONLINE

Remote Monitoring.......OFFLINE

One remote location could not
be contacted.`);

break;

case "PROJECTS":

print(`KNOWN PROJECTS

ATLAS

ECHO

ORCHARD

██████████

One project has been removed
from the public database.`);

break;

case "DIRECTORY":

print(`EMPLOYEE DIRECTORY

Dr. Mason

L. Carter

R. Evans

J. Cole

One employee record is missing.`);

break;

case "MEMO":

print(`INTERNAL MEMO

Employees are reminded to
report prolonged laughter
lasting more than five minutes.

Repeated incidents should
be reported to Medical.

Thank you for your cooperation.`);

break;

case "SITE7":

print(`RESEARCH SITE 7

Status:
Inactive

Coordinates:
Unavailable

Building Plans:
Unavailable

Personnel:
Unavailable

Further information requires
Level 5 Clearance.`);

break;

case "NEWS":

print(`COMPANY NEWS

• New laboratory completed.

• Safety inspections passed.

• Team Echo received recognition.

• Site 7 remains closed for
scheduled maintenance.`);

break;

case "MAP":

print(`FACILITY MAP

Administration

Research Wing

Laboratories

Warehouse

Power Station

████████████

Map incomplete.`);

break;

case "LOGS":

print(`SYSTEM LOGS

03:11
Door Opened

03:11
Door Closed

03:12
No Badge Detected

03:13
Record Corrupted`);

break;

  // =======================================
// H.E.E. INTERNAL TERMINAL v2.0
// =======================================

const output = document.getElementById("output");
const command = document.getElementById("command");

function print(text){
    output.textContent = text;
}

function boot(){

print(`H.E.E. INTERNAL TERMINAL

Initializing...

Loading Employee Database........OK
Loading Archive Server...........OK
Loading Research Records.........OK
Loading Security Logs............OK

Employee Verified.

Clearance Level 2

Type HELP`);

}

boot();

command.addEventListener("keydown",function(e){

if(e.key==="Enter"){
run();
}

});

function run(){

const cmd=command.value.trim().toUpperCase();

switch(cmd){

case "HELP":

print(`AVAILABLE COMMANDS

HELP
STATUS
PROJECTS
DIRECTORY
MEMO
SITE7
NEWS
MAP
LOGS
CAMERAS
VISITORS
WHOAMI
HANDBOOK
SMILE
9123
CLEAR`);

break;

case "STATUS":

print(`SYSTEM STATUS

Research Division.......ONLINE

Archive Server..........ONLINE

Communications..........ONLINE

Security................ONLINE

Remote Monitoring.......OFFLINE

One remote location could not
be contacted.`);

break;

case "PROJECTS":

print(`KNOWN PROJECTS

ATLAS

ECHO

ORCHARD

██████████

One project has been removed
from the public database.`);

break;

case "DIRECTORY":

print(`EMPLOYEE DIRECTORY

Dr. Mason

L. Carter

R. Evans

J. Cole

One employee record is missing.`);

break;

case "MEMO":

print(`INTERNAL MEMO

Employees are reminded to
report prolonged laughter
lasting more than five minutes.

Repeated incidents should
be reported to Medical.

Thank you for your cooperation.`);

break;

case "SITE7":

print(`RESEARCH SITE 7

Status:
Inactive

Coordinates:
Unavailable

Building Plans:
Unavailable

Personnel:
Unavailable

Further information requires
Level 5 Clearance.`);

break;

case "NEWS":

print(`COMPANY NEWS

• New laboratory completed.

• Safety inspections passed.

• Team Echo received recognition.

• Site 7 remains closed for
scheduled maintenance.`);

break;

case "MAP":

print(`FACILITY MAP

Administration

Research Wing

Laboratories

Warehouse

Power Station

████████████

Map incomplete.`);

break;

case "LOGS":

print(`SYSTEM LOGS

03:11
Door Opened

03:11
Door Closed

03:12
No Badge Detected

03:13
Record Corrupted`);

break;
