// Anggota Kelompok :
// Benhard Simanullang - 24060120140136
// Charisto Marc Gybran - 24060120140133
// Sabdiel Tarigan - 24060120120028
// Julius Adrian - 24060120130127
// Andira Faqih Muhammad - 24060120140142

// fungsi untuk menghapus list contoh
function remElmt(el) {
    var element = el;
    element.parentNode.remove();

    //notofikasi delete 1 elemen
    document.getElementById("Delete").style.display = "block";

    //menghilangkan warning
    document.getElementById("warning").style.display = "none";

    //menghilangkan notifikasi delete semua elemen
    document.getElementById("DeleteAll").style.display = "none";

    //menghilangkan notifikasi sukses
    document.getElementById("success").style.display = "none";
}

function remAllElmt() {
    var arr = '';

    let output = document.getElementById('list-action')
    output.innerHTML = arr

    //notifikasi detele semua elemen
    document.getElementById("DeleteAll").style.display = "block";

    //menghilangkan warning
    document.getElementById("warning").style.display = "none";

    //menghilangkan notifikasi delete 1 elemen
    document.getElementById("Delete").style.display = "none";

    //menghilangkan notifikasi sukses
    document.getElementById("success").style.display = "none";

}

function welcome() {
    alert("Selamat Datang di To Do List Sederhana");
    const contents = document.getElementById("container");
    contents.removeAttribute("hidden");
}

function welcome() {
    alert("Selamat Datang di To Do List Sederhana");
    const contents = document.getElementById("container");
    contents.removeAttribute("hidden");
}

// fungsi bekerja pada saat tombol add di tekan
function addActivity() {
    // mengambil nilai yang ditulis dalam tag input
    var val = document.getElementById("kegiatan").value;

    // mengecek apakah isi input kosong atau tidak
    if (val === "") {
        // menampilkan notif warning
        document.getElementById("warning").style.display = "block";
        // menghilangkan notif success
        document.getElementById("success").style.display = "none";
        //menghilangkan notifi delete semua elemen
        document.getElementById("DeleteAll").style.display = "none";
        //menghilangkan notifikasi delete
        document.getElementById("Delete").style.display = "none";
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
        newBtn.innerHTML = "remove";
        // menambahkan atribute id pada button dan mengisi atribut tersebut dengan 'remove'
        newBtn.setAttribute('id', 'remove');

        // menambahkakn event listener click pada tombol remove dan
        //  membuang list yang dibuat apabila button di click
        newBtn.addEventListener('click', function () {
            newList.remove()

            //menghilangkan notifikasi delete 1 elemen
            document.getElementById("Delete").style.display = "block";

            //menghilangkan warning
            document.getElementById("warning").style.display = "none";

            //menghilangkan notifikasi sukses
            document.getElementById("success").style.display = "none";

            //menghilangkan warning
            document.getElementById("warning").style.display = "none";
        })


        // memasukkan element baru yang dibuat kedalam element dengan ID list-action
        document.getElementById("list-action").appendChild(newList);

        // memasukkan button yang baru dibuat sebagain child dari list yang baru dibuat
        newList.appendChild(newBtn);

        // menghilangkan text pada tag input
        document.getElementById("kegiatan").value = "";

        // menghilangkan warning
        document.getElementById("warning").style.display = "none";

        //menghilangkan notifikasi delete semua elemen 
        document.getElementById("DeleteAll").style.display = "none";

        //menghilangkan notifikasi delete 1 elemen
        document.getElementById("Delete").style.display = "none";
    }
}

window.addEventListener("load", welcome());