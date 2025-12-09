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






    //--------------readOnly input -----------------------
    R900_1.prop("readonly", true);






    //-------------------------------Rind 610------------------------------------------------------ 

    var total =
        parseFloat(Number(R910_1.val()).toFixed(0)) +
        parseFloat(Number(R920_1.val()).toFixed(0)) +
        parseFloat(Number(R930_1.val()).toFixed(0)) +
        parseFloat(Number(R940_1.val()).toFixed(0)) +
        parseFloat(Number(R950_1.val()).toFixed(0)) +  
        parseFloat(Number(R960_1.val()).toFixed(0)) +
        parseFloat(Number(R970_1.val()).toFixed(0));
        
        

    // dacă total este 0 sau NaN → afișăm gol
    if (!total) {
        R900_1.val("");
    } else {
        R900_1.val(total.toFixed(0));
    }




}