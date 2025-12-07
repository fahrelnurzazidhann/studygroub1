console.log("===Tiket Masuk Zoo===")
let pengunjung = [{nama: "Rama", umur: 100}, {nama: "Joko", umur: 35}, {nama: "Sela", umur: 65}, {nama: "Zela", umur: 10}];

// Menentukan Harga Ticket normal
let hargaTicket = 50000;

// Looping
for (let i = 0; i < pengunjung. length; i++){
    let namaPengunjung = pengunjung [i].nama;
    let umur = pengunjung [i].umur;
    let pesan = "";
    
    // Percabangan
    if (umur < 5){
        pesan = "Free! Untuk balita"; // Free Balita
    } else if (umur <= 12) {
        pesan = "Diskon 50% harga Ticket: " + (hargaTicket / 2); // Diskon 50%
    } else if (umur >= 60){
        pesan = "Diskon 30% harga Ticket: " + (hargaTicket * 0.7); // Diskon 30%
    } else {
        pesan = "Harga normal:" + hargaTicket; // Harga Normal
    }
    
    console.log ("Nama pengunjung:", namaPengunjung);
    console.log ("Umur           :", umur + " tahun");
    console.log ("Keterangan     :", pesan);
}
