function fn_ValForm() {
    var sMsg = "";
    var regexEmail = /^[a-z0-9][a-z0-9_.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9.-]{0,}[a-z0-9][.][a-z0-9]{2,4}$/i;
    var namaValue = document.getElementById("name").value;
    var emailValue = document.getElementById("email").value;
    var messageValue = document.getElementById("message").value;

    if (namaValue == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    if (emailValue == "") {
        sMsg += "\n* Anda belum mengisikan email";
    }else if(!regexEmail.test(emailValue)) {
        sMsg += "\n* Format email yang Anda masukkan tidak valid";
    }

    if (messageValue == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg !="") {
        alert("Peringatan: \n" + sMsg);
        return false;
    } else {
        return true;
    }
}