$(document).ready(function () {
    form = $("#formDenShort").val();
    fASA_CAP9();
});

$(function () {
    // OnKeyPress ```````````````````````````````````````````````````````````````````````````````
    $("input:not([type='button']):not([readonly]):not([disabled])").on("change", function (e) {
        fASA_CAP9();
    });
});

function fASA_CAP9() {

    var R900_1 = $("#64_1214_111931_900_1");
    var R910_1 = $("#64_1214_111932_910_1");
    var R920_1 = $("#64_1214_111933_920_1");
    var R930_1 = $("#64_1214_111934_930_1");
    var R940_1 = $("#64_1214_111935_940_1");
    var R950_1 = $("#64_1214_111936_950_1");
    var R960_1 = $("#64_1214_111937_960_1");
    var R970_1 = $("#64_1214_111938_970_1");

    //-------------- readOnly inputs -----------------------
    // Rd.900 și Rd.910 sunt rezultate de autosumă
    R900_1.prop("readonly", true);
    R910_1.prop("readonly", true);

    // Rd.900 = Rd.910 + Rd.920 + Rd.930 + Rd.940 + Rd.950 + Rd.960 + Rd.970
    var total900 =
        parseFloat(Number(R910_1.val()).toFixed(0)) +
        parseFloat(Number(R920_1.val()).toFixed(0)) +
        parseFloat(Number(R930_1.val()).toFixed(0)) +
        parseFloat(Number(R940_1.val()).toFixed(0)) +
        parseFloat(Number(R950_1.val()).toFixed(0)) +
        parseFloat(Number(R960_1.val()).toFixed(0)) +
        parseFloat(Number(R970_1.val()).toFixed(0));

    // dacă total este 0 sau NaN → afișăm gol
    if (!total900) {
        R900_1.val("");
    } else {
        R900_1.val(total900.toFixed(0));
    }

    // Rd.910 = Rd.920 + Rd.930
    var total910 =
        parseFloat(Number(R920_1.val()).toFixed(0)) +
        parseFloat(Number(R930_1.val()).toFixed(0));

    if (!total910) {
        R910_1.val("");
    } else {
        R910_1.val(total910.toFixed(0));
    }
}
