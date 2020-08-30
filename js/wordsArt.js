//Developer: Sahar Al Seesi
//Date: 03/04/2019
//Description: Script manages a page that displays images in different 
//             categories according to user choice. 

document.getElementById("update").onclick = updatePage;
document.getElementById("next").onclick = nextWord;
wordArr = [{category : "feeling", word : "HAPPY"}, 
                 {category : "feeling", word : "SAD"},
                 {category : "feeling", word : "WORRIED"},
                 {category : "inspiration", word : "LOVE"},
                 {category : "inspiration", word : "HOPE"},
                 {category : "inspiration", word : "SUCCESS"},
                 {category : "fruit", word : "APPLE"},
                 {category : "fruit", word : "BANANA"},
                 {category : "fruit", word : "MANGO"},
                 {category : "fruit", word : "ORANGE"}];

document.body.style.backgroundColor = "LemonChiffon";
displayParagraph = document.getElementById("disp");
displayParagraph.innerHTML = "LOVE";
displayParagraph.style.fontSize = "72px";
displayParagraph.style.color = "DarkGreen";
displayParagraph.style.textAlign = "center";

currentWordList = [];
wordIndex = 0;
category = "fruit";

// call back function for filtering array based on category
function checkCat(elem) {
    return elem.category == category;
}

// update page button click event handler
function updatePage()
{

    // set backgound color according to selected color in bkgcolor
    document.body.style.backgroundColor = document.getElementById("bkgcolor").value;
    
    // get the selected category
    category = document.getElementById("category").value;
    // filter the array based on selected category
    currentWordList = wordArr.filter(checkCat);
    wordIndex = 0;  //reset wordIndex to point to first image in new category
    displayParagraph = document.getElementById("disp");
    displayParagraph.innerHTML = currentWordList[wordIndex].word;
    displayParagraph.style.color = document.getElementById("txtcolor").value;
}    

function nextWord() {
    // increment index
    wordIndex++;
    // roll back to start of category images if needed
    if (wordIndex >= currentWordList.length) {
        wordIndex = 0;
    }    
    document.getElementById("disp").innerHTML=currentWordList[wordIndex].word;
}
updatePage();   

