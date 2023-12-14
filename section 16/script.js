const passeord = prompt("Enter a new password");

if (passeord.length >= 6) {
    if (passeord.indexOf(' ') === -1) {
        console.log("Valid password!");
    } else {
        console.log("Password cannot contain spaces!");
    }
} else {
    console.log("Password too short");
}