function remElmt(el){
    var element = el;
    element.remove();
}

function addActivity() {
    // mengambil nilai yang ditulis dalam tag input
    var val = document.getElementById("kegiatan").value;

    if (val === '') {
        document.getElementById("warning").style.visibility = "visible";
    } else {
        // membuat element list baru
        var newList = document.createElement("li");

        // membuat isi dari list element baru dengan nilai yang ditulis
        // dalam element input
        newList.innerHTML = val;
        newList.onclick = remElmt;

        // memasukkan element baru yang dibuat kedalam element dengan ID list-action
        document.getElementById("list-action").appendChild(newList);

        // menghilangkan text pada tag input
        document.getElementById("kegiatan").value = '';

        // menghilangkan warning
        document.getElementById("warning").style.visibility = "hidden";
    }


}