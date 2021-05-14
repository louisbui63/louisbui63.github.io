function cconsent() {
    document.getElementById("cookie_consent").hidden = true;
    let d = new Date();
    d.setTime(d.getTime()+(30* 24*3600*1000));
    document.cookie = "cookieconsent;expires="+d.toUTCString()+";path=/;SameSite=Strict";
}

let a = document.cookie;
if (a.split(';').includes("cookieconsent") || a.split(';').includes(" cookieconsent")) {
    document.getElementById("cookie_consent").hidden = true;
}