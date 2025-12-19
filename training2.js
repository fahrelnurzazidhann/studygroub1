const buatTeh = new Promise((resolve, reject)) => {
    let stockGula = true;
    if (stockGula) resolve("✅ Teh Gula Batu Siap dinikmati!");
    else reject("❌ Maaf, stok gula habis.");
});

buatTeh
    .then((hasil) => console.log(hasil))
    .catch((error) => console.log(error));

    // Fungsi buatTeh mengembalikan Promise
    function buatTeh(bahan) {
        return new Promise((resolve, reject)) => {
            console.log("⏳ Sedang merebus air... (Tunggu 2 detik)")
            
            // simulasi proses 2 detik
            setTimeout(() => {
                if (bahan === "gula batu") {
                    resolve("✅ Teh Gula Batu Siap dinikmati!");
                } else {
                    reject("❌ Maaf, stok gula habis.");
                }
            }
        }
    }