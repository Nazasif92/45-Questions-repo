var guests = ["Wali", "Ramzan", "Sohail"];
console.log("GreatNews! I found a bigger dinner table!");
//Adding more guests
guests.unshift("Akber");
guests.splice(guests.length / 2, 0, "Akhter");
guests.push("Rehmat");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for a dinner?"));
});
