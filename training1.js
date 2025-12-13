console.log ("=== LATIHAN PENJAGA ZOOTOPIA ===")
console.log("");
let namapenjaga = [{nama: "Juddy Hopps"}, {nama: "Nick Wilde"}]

let jarakJuddy = 3; // km per hari
let jarakNick = 2; // km per hari

let totalJuddy = 0; 
let totalNick = 0;

// Untuk Menentukan km per hari penjaga
console.log("Jarak lari per hari: ");
console.log("Juddy Hoops: " + jarakJuddy + " Km");
console.log("Nick Wilde: " + jarakNick + " Km");
console.log("");

// Looping
for (let i = 1; i <= 5; i++){
    console.log("Hari: " + i);
    console.log("Juddy Hoops lari " + jarakJuddy + " Km");
    console.log("Nick Wilde lari " + jarakNick + " Km");
    console.log("");

    totalJuddy = totalJuddy + jarakJuddy;
    totalNick = totalNick + jarakNick;

}
    console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
    console.log("Jarak Hoops: " + totalJuddy + " Km");
    console.log("Jarak Wilde: " + totalNick + " Km");