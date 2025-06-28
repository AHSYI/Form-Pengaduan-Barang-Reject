document.addEventListener('DOMContentLoaded', function () {
  // Set tahun di footer
  document.getElementById('tahun').textContent = new Date().getFullYear();

  const form = document.getElementById('formPembelian');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Ambil nilai input
    const kodeBarang = document.getElementById('kodeBarang').value;
    const tanggalPembelian = document.getElementById('tanggalPembelian').value;

    // Tampilkan notifikasi
    alert(`Data disimpan:\nKode Barang: ${kodeBarang}\nTanggal Pembelian: ${tanggalPembelian}`);

    // Reset form
    form.reset();
  });
});
