/*
Bill Boysen
boysen_a10.js
INFO_2124_WW
Thoendel
2/23/2020
*/

document.getElementById('action').addEventListener('click', function() {
    //WRITE YOUR SOLUTION BETWEEN THIS COMMENT
    //Declares a variable and sets it to the element in the document with the Id of "photo"    
    let myImg = document.getElementById("photo");
    //Changes the source of the variable to "02.jpg"
    myImg.setAttribute("src", "02.jpg");
    //Declares a variable and sets it to the elements in the document with the "h1" tag
    let myTxt = document.getElementsByTagName("h1");
    //Changes the first "h1" tagged element class to "greenText"
    myTxt[0].setAttribute("class", "greenText");
    //AND THIS COMMENT
});