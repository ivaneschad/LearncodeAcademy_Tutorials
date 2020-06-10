/* var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML = "Your sum is: " + (one + two);
} */

var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", showAndHidePicture);
bruce.addEventListener("click", showAndHidePicture);
ben.addEventListener("click", showAndHidePicture);


function showAndHidePicture() {
    let allImages = document.querySelectorAll("img");
    for (let i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }
    let pictureId = this.attributes["data-img"].value;
    let picture = document.getElementById(pictureId);
    if (picture.className === "hide") {
        picture.className = "";
    } else {
        picture.className = "hide";
    }
}


/* function showOrHideImage() {
    if ()
} */


/*function go(name,age){
    if(age<20){
        return name+"!";
    }else{
        return name;
    }
}

function add(first,second){
    return first+second;
}

var myList = ['apples','oranges','bananas'];

myList[3] = 'pineapples';
myList[0] = 'watermelon';

myList.forEach((value,index)=>{
    console.log("This array contains: " + value + " position: " + index);
});*/