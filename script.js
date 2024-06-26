document.getElementById('cekForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get the input value
    var nama = document.getElementById('nama').value;
  
    // Display the result
    var hasilDiv = document.getElementById('hasil');
    hasilDiv.innerHTML = '';
    hasilDiv.innerHTML = `<p>Khodam untuk <strong>${nama}</strong> adalah <strong>${generateKhodam(nama)}</strong></p>`;
  });
  
  function generateKhodam(nama) {
    // Logic to generate khodam result based on the name
    // Example logic (you can modify this as per your requirement)
    var khodamList = ['Jin Ifrit', 'Jin Qarin', 'Jin Marid', 'Jin Ghul', 'Jin Nasnas', 'Khodam Kaki Kuntilanak', 'Khodam Singa Terbang', 'Khodam Alang-Alang', 'Khodam Pocong Kidal', 'Khodam Media Sosial', 'Khodam Pocong Lucu', 'Khodam Hantu Jepang', 'Khodam Tuyul Kejepit', 'Khodam Upil Ipin', 'Khodam Kali Imun', 'Khodam Hidung Belang'];
    var index = Math.floor(Math.random() * khodamList.length);
    return khodamList[index];
  }
  