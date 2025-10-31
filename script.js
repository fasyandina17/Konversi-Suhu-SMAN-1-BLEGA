const messageArea = document.getElementById('message-area');
let currentStage = 1;

// --- FUNGSI TAHAPAN ---

function renderStage(stage) {
    // Kosongkan area pesan dan hapus event listener klik
    messageArea.innerHTML = '';
    messageArea.onclick = null;
    messageArea.classList.remove('clickable');

    // Tambahkan efek transisi (optional, untuk reset visual)
    messageArea.style.opacity = '0';
    setTimeout(() => {
        
        switch (stage) {
            case 1:
                // TAHAP 1: Pesan Awal (Memulai)
                messageArea.innerHTML = `
                    <h1>Untuk Mbul Sayang!</h1>
                    <p>Klik di sini untuk memulai...</p>
                `;
                messageArea.onclick = () => renderStage(2);
                messageArea.classList.add('clickable');
                break;

            case 2:
                // TAHAP 2: Pertanyaan 1
                messageArea.innerHTML = `
                    <h1 class="pink-text">Seberapa sayang sama akuuuuu????</h1>
                    <input type="text" id="answer1" placeholder="Tulis di sini, Sayang">
                    <button onclick="checkAnswer1()">Lanjut</button>
                `;
                // Menambahkan event listener Enter pada input
                document.getElementById('answer1').addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        checkAnswer1();
                    }
                });
                break;

            case 3:
                // TAHAP 3: Pertanyaan 2
                messageArea.innerHTML = `
                    <p>Haaiii mbull, ini salah satu cara aku buat nunjukin segimanaaa aku sayang kamuu, 
                    kamu mau lanjut halaman selanjutnya? Jawab **'Ya'** pleaseee🥺</p>
                    <input type="text" id="answer2" placeholder="Jawab di sini (Ya/Tidak)">
                    <button onclick="checkAnswer2()">Lanjut</button>
                `;
                 document.getElementById('answer2').addEventListener('keypress', function(e) {
                    if (e.key === 'Enter') {
                        checkAnswer2();
                    }
                });
                break;

            case 4:
                // TAHAP 4: Pesan Akhir (Final)
                messageArea.innerHTML = `
                    <div class="final-message">
                        <h1>Love U Bul 🩷</h1>
                        <p>
                            Terimakasi bikin aku merasa dicintai teruuss, sehat sehat terus sayang! 
                            Aku, disini.. bakal selalu sayaaaanggg sama kamuuuuuu. 
                            Terimakasi atas semua cinta yang kamu kasi ke aku sebagaimanapun bentuknya. 
                            Website special untuk Mbul yang paling special! 🌟
                        </p>
                        <p style="margin-top: 30px; font-weight: bold;">
                            Bilang love u kalo kamu suka websitenya yaapp (⁠｡⁠•̀⁠ᴗ⁠-⁠)⁠✧
                        </p>
                    </div>
                `;
                messageArea.classList.remove('clickable'); // Nonaktifkan klik setelah selesai
                break;
        }

        // Tampilkan kembali dengan efek fade-in
        messageArea.style.opacity = '1'; 
    }, 500);
}

// --- FUNGSI VALIDASI ---

function checkAnswer1() {
    const answer = document.getElementById('answer1').value.trim();
    if (answer) {
        // Jika Mbul mengisi apa saja, langsung lanjut ke tahap 3
        renderStage(3);
    } else {
        alert("Jangan dikosongin dong, sayanggg... isi seberapa sayang kamu yaa!");
    }
}

function checkAnswer2() {
    const answer = document.getElementById('answer2').value.trim().toLowerCase();
    
    if (answer === 'ya') {
        renderStage(4); // Lanjut ke pesan akhir
    } else {
        alert("Jawab 'Ya' dong, masa gak mau lanjut ke pesan spesial dariku? Coba lagi yaa! 😊");
    }
}

// Panggil fungsi untuk menampilkan Tahap 1 saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    renderStage(1);
});
