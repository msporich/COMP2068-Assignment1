/* Mark Sporich */
/* Student# 200399323 */
/* File: Functions for JQuery */
/* Site: IT Company Portfolio */

//Targeting each panel/button in the "Projects" page
//Each panel is "hidden" upon loading of the script
//They can be revealed again by clicking on each button

$("#panel1").hide();
$('#button1').click(function () {
    $("#panel1").toggle();
});

$("#panel2").hide();
$('#button2').click(function () {
    $("#panel2").toggle();
});

$("#panel3").hide();
$('#button3').click(function () {
    $("#panel3").toggle();
});

$("#panel4").hide();
$('#button4').click(function () {
    $("#panel4").toggle();
});