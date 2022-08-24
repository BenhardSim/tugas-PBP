function addActivity(){
    // mengambil nilai yang ditulis dalam tag input
    var val = document.getElementById("kegiatan").value;

    // membuat element list baru
    var newList = document.createElement("li");

    // membuat isi dari list element baru dengan nilai yang ditulis
    // dalam element input
    newList.innerHTML = val;

    // memasukkan element baru yang dibuat kedalam element dengan ID list-action
    document.getElementById("list-action").appendChild(newList);
}