let guests :string[] = ["Wali","Ramzan","Sohail","Akber"];
let unableToAttend = "Wali";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Jibran";
guests[guests.indexOf(unableToAttend)] = newGuest;
//New invitation
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});