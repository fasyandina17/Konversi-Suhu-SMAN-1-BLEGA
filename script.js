// Fungsi untuk memajukan langkah (step)
function nextStep(stepNumber) {
    // Sembunyikan semua step
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // Tampilkan step yang diminta
    const currentStep = document.getElementById('step' + stepNumber);
    if (currentStep) {
        currentStep.classList.add('active');
    }

    // Aksi Khusus untuk Step 5 (Animasi Final)
    if (stepNumber === 5) {
        // Biarkan CSS menjalankan animasi bunga
        // Setelah animasi bunga selesai, tampilkan teks ucapan.
        setTimeout(() => {
            document.querySelector('.birthday-text-container').classList.add('show');
        }, 300); // Penundaan kecil sebelum class 'show' ditambahkan
    }
}

// Fungsi untuk menolak akses di Step 1
function rejectAccess() {
    alert("Maaf, website ini dibuat khusus untuk Indah Try Cahyani. Anda tidak bisa melanjutkan.");
    // Opsional: bisa diarahkan ke halaman lain atau refresh
    // window.location.reload();
}

// --- Logika Step 2 ---

// Mengaktifkan/menonaktifkan input umur
function toggleAgeInput() {
    const isBirthday = document.getElementById('isBirthday').value;
    const ageInputGroup = document.getElementById('ageInputGroup');
    const nextButton = document.getElementById('next2');

    if (isBirthday === 'yes') {
        ageInputGroup.style.display = 'block';
        nextButton.disabled = !document.getElementById('ageInput').value; // Aktifkan/nonaktifkan tombol berdasarkan input umur
    } else if (isBirthday === 'no') {
        ageInputGroup.style.display = 'none';
        nextButton.disabled = false; // Jika tidak ultah, tetap bisa lanjut
    } else {
        ageInputGroup.style.display = 'none';
        nextButton.disabled = true;
    }
}

// Memeriksa dan melanjutkan dari Step 2
function checkBirthdayAndNext() {
    const isBirthday = document.getElementById('isBirthday').value;
    let message = "";

    if (isBirthday === 'yes') {
        const age = document.getElementById('ageInput').value;
        if (!age || isNaN(age) || parseInt(age) <= 0) {
            alert("Tolong masukkan umur yang valid.");
            return;
        }
        message = `Wah, Indah sedang ulang tahun ke-${age}! Selamat! 🎉`;
    } else if (isBirthday === 'no') {
        message = "Oh, Indah belum ulang tahun hari ini. Semoga di hari-hari biasa ini tetap bahagia! 😊";
    } else {
         alert("Tolong pilih jawaban terlebih dahulu.");
         return;
    }

    // Tampilkan pesan konfirmasi sebelum lanjut ke step 3
    if (confirm(message + "\n\nLanjut ke pertanyaan berikutnya?")) {
        nextStep(3);
    }
}

// --- Logika Step 3 ---

// Validasi input di Step 3 secara real-time
document.addEventListener('DOMContentLoaded', () => {
    const creatorNameInput = document.getElementById('creatorName');
    const descriptionTextarea = document.getElementById('description');
    const nextButton = document.getElementById('next3');

    // Listener untuk input umur di Step 2
    const ageInput = document.getElementById('ageInput');
    ageInput.addEventListener('input', toggleAgeInput);

    // Listener untuk Step 3
    const checkStep3Inputs = () => {
        const nameValid = creatorNameInput.value.trim().length > 2;
        const descValid = descriptionTextarea.value.trim().length > 10;
        nextButton.disabled = !(nameValid && descValid);
    };

    creatorNameInput.addEventListener('input', checkStep3Inputs);
    descriptionTextarea.addEventListener('input', checkStep3Inputs);
});
