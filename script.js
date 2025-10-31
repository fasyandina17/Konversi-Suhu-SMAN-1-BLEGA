function revealMessage() {
    const initial = document.getElementById('initial-message');
    const hidden = document.getElementById('hidden-message');
    
    // 1. Menyembunyikan pesan awal dengan efek fade-out
    initial.classList.add('fade-out');

    // 2. Menunggu sebentar (0.5 detik) agar animasi fade-out selesai,
    // lalu tampilkan pesan rahasia
    setTimeout(() => {
        initial.style.display = 'none'; // Hilangkan sepenuhnya
        
        // Menampilkan pesan tersembunyi dengan efek revealed
        hidden.classList.remove('hidden');
        hidden.classList.add('revealed');
    }, 500); // Harus sama dengan durasi transisi di CSS (0.5s)
}
