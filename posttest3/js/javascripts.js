const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});


let text;
let nama = prompt('Masukkan Nama Terlebih Dahulu: ');
if (nama == null || nama == "") {
    text = alert("User tidak memasukkan nama :(");
} else {
    text = alert("Hello " + nama + " Selamat Datang!");
}

