function randomStrElem(theArray) {
    var randomIndex = Math.floor(Math.random() * theArray.length);
    return theArray[randomIndex];
}
var colors = ['violet', 'indigo', 'blue', 'green'];
var randomColor = randomStrElem(colors);
