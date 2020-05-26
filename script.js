function Ce() {
    let cels = prompt('Podaj temperaturę w stopniach Celsjusza');
    let convert = cels * 1.8 + 32;
    if (cels != null) {
        document.getElementById("tryV1").innerHTML = cels + " stopni Celsjusza, czyli" + " " + convert + " stopni Fahrenheita.";
    }
}

function Fa() {
    let Fahr = prompt('Podaj temperaturę w stopniach Celsjusza');
    let convert2 = [Fahr - 32] / 1.8;
    if (Fahr != null) {
        document.getElementById("tryV2").innerHTML = Fahr + " stopni Fahrenheita, czyli" + " " + convert2 + " stopni Celsjusza.";
    }
}