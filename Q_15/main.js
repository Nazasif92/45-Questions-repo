var guests = ["Wali", "Ramzan", "Sohail", "Akber"];
var unableToAttend = "Wali";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Jibran";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
