function konversiSuhu() {
    // Ambil nilai dari input Celcius
    const celcius = document.getElementById('celcius').value;

    // Pastikan input bukan string kosong
    if (celcius === "" || isNaN(celcius)) {
        alert("Mohon masukkan angka suhu yang valid di Celcius.");
        document.getElementById('hasilFahrenheit').textContent = "";
        document.getElementById('kalkulasi').textContent = "";
        return;
    }

    // Konversi Celcius ke Fahrenheit: F = (C * 9/5) + 32
    const cVal = parseFloat(celcius);
    const fahrenheit = (cVal * 9/5) + 32;

    // Tampilkan hasil
    document.getElementById('hasilFahrenheit').textContent = `${fahrenheit.toFixed(2)} °F`;

    // Tampilkan kalkulasi
    const kalkulasiText = `(${cVal} * 9/5) + 32\n= (${cVal * 1.8}) + 32\n= ${fahrenheit.toFixed(2)}`
    document.getElementById('kalkulasi').textContent = kalkulasiText;
}

function resetForm() {
    // Kosongkan semua field
    document.getElementById('celcius').value = "";
    document.getElementById('hasilFahrenheit').textContent = "";
    document.getElementById('kalkulasi').textContent = "";
}
