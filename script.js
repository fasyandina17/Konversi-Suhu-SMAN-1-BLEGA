// Nilai tukar statis (1 USD = 15000 IDR)
const EXCHANGE_RATE = 15000;

function convertCurrency() {
    const amount = parseFloat(document.getElementById('inputAmount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    const resultElement = document.getElementById('resultAmount');

    // Cek validitas input
    if (isNaN(amount) || amount <= 0) {
        resultElement.textContent = "Masukkan jumlah yang valid.";
        return;
    }

    let result = 0;
    let formattedResult = '';

    if (from === 'IDR' && to === 'USD') {
        // Konversi IDR ke USD: USD = IDR / RATE
        result = amount / EXCHANGE_RATE;
        formattedResult = result.toFixed(2) + ' USD';
    } else if (from === 'USD' && to === 'IDR') {
        // Konversi USD ke IDR: IDR = USD * RATE
        result = amount * EXCHANGE_RATE;
        // Format angka dengan pemisah ribuan (gunakan Intl.NumberFormat)
        formattedResult = new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(result);
    } else {
        // Jika mata uang yang dipilih sama
        result = amount;
        formattedResult = amount.toLocaleString('en-US') + ' ' + from;
    }

    // Tampilkan hasil
    resultElement.textContent = formattedResult;
}

function swapCurrencies() {
    const fromSelect = document.getElementById('fromCurrency');
    const toSelect = document.getElementById('toCurrency');
    
    // Tukar nilai (value) dari kedua dropdown
    const tempValue = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = tempValue;

    // Lakukan konversi ulang setelah pertukaran
    convertCurrency();
}

// Jalankan konversi saat halaman dimuat untuk menampilkan nilai default
document.addEventListener('DOMContentLoaded', convertCurrency);
