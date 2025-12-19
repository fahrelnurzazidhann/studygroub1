async function getTodo() {
    try {
        console.log("Mencoba mengambil data ...");

        let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await response.json();
        console.log("Judul Todo:", data.title);
        } catch (error) {
            console.log("delectus aut autem", error.message);
        } finally {
            console.log("--- Proses Selesai ---");
        }
    }

    getTodo();
