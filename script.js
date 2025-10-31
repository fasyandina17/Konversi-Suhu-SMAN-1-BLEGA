const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const STORAGE_KEY = 'todoListTasks';

// --- FUNGSI UTAMA ---

function addTask() {
    if (inputBox.value.trim() === '') {
        alert("Anda harus menuliskan tugas!");
    } else {
        // 1. Membuat elemen tugas baru (li)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // 2. Membuat tombol hapus (span)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"; // Kode HTML untuk ikon silang (x)
        li.appendChild(span);
    }
    inputBox.value = ""; // Kosongkan input setelah tugas ditambahkan
    saveData(); // Simpan data ke Local Storage
}

// Menghapus atau Menandai Selesai
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        // Menandai/Membatalkan tugas selesai
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Menghapus tugas
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// --- LOCAL STORAGE ---

function saveData() {
    // Menyimpan HTML dari listContainer ke Local Storage
    localStorage.setItem(STORAGE_KEY, listContainer.innerHTML);
}

function showTask() {
    // Memuat data dari Local Storage saat halaman dibuka
    const savedData = localStorage.getItem(STORAGE_KEY);
    if (savedData) {
        listContainer.innerHTML = savedData;
    }
}

// Panggil fungsi saat aplikasi dimuat pertama kali
showTask();
