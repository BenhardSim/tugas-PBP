// fungsi untuk menghapus list contoh
function remElmt(el){
    var element = el;
    element.parentNode.remove();
}

// fungsi bekerja pada saat tombol add di tekan
function addActivity() {
    // mengambil nilai yang ditulis dalam tag input
    var val = document.getElementById("kegiatan").value;

    // mengecek apakah isi input kosong atau tidak
    if (val === '') {
        // menampilkan notif warning
        document.getElementById("warning").style.display = "block";
        // menghilangkan notif succes
        document.getElementById("success").style.display = "none";
    } else {
        // notifikasi sukses
        document.getElementById("success").style.display = "block";
        // membuat element list baru
        var newList = document.createElement("li");
        // membuat element button baru
        var newBtn = document.createElement("button");

        // membuat isi dari list element baru dengan nilai yang ditulis
        // dalam element input
        newList.innerHTML = val;
        // membuat text dari button berubah menjadi "remove"
        newBtn.innerHTML = "remove"
        // menambahkan atribute id pada button dan mengisi atribut tersebut dengan 'remove'
        newBtn.setAttribute('id','remove');

        // menambahkakn event listener click pada tombol remove dan 
        //  membuang list yang dibuat apabila button di click
         newBtn.addEventListener('click', function() {newList.remove()});

        // memasukkan element baru yang dibuat kedalam element dengan ID list-action
        document.getElementById("list-action").appendChild(newList);
       
        // memasukkan button yang baru dibuat sebagain child dari list yang baru dibuat
        newList.appendChild(newBtn);

        // menghilangkan text pada tag input
        document.getElementById("kegiatan").value = '';

        // menghilangkan warning
        document.getElementById("warning").style.display = "none";
    }

}