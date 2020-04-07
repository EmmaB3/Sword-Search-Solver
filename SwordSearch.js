let ROW_LENGTH = 20;
let SWORD_SEARCH = [
    ['a', 'w', 'a', 'k', 'i', 'i', 'h', 't', 'o', 'h', 's', 'l', 'd', 'q', 't', 'e', 'a', 'u', 's', 'p'],
	['y', 'g', 's', 's', 'd', 'f', 'c', 'o', 'f', 'i', 'r', 'e', 'g', 'u', 'e', 'k', 't', 'l', 'g', 'u'],
	['a', 's', 'a', 'o', 'l', 'z', 'r', 'f', 's', 'e', 'r', 'i', 'l', 'w', 't', 'h', 's', 'i', 'u', 's'],
	['l', 'b', 'c', 'z', 'j', 'e', 'l', 't', 'f', 'a', 'i', 'd', 'd', 't', 'l', 'n', 'i', 'h', 'p', 'i'],
	['t', 'a', 'o', 's', 'b', 'l', 'm', 'c', 's', 'i', 'h', 'c', 'a', 'd', 'o', 'o', 'n', 'j', 'n', 'z'],
	['p', 'l', 'a', 'a', 'i', 'c', 'h', 's', 's', 'e', 's', 'd', 'o', 'o', 'i', 'p', 'a', 'o', 'e', 'u'],
	['i', 'n', 'w', 'b', 'd', 't', 'i', 'd', 'w', 's', 'm', 's', 'a', 'e', 'h', 'e', 'y', 'e', 'w', 'e'],
	['o', 's', 'r', 'i', 'z', 'w', 's', 'e', 'i', 'h', 'a', 'n', 'd', 'e', 'r', 's', 's', 'w', 'a', 'o'],
	['l', 'a', 'o', 'a', 'h', 'a', 'l', 'c', 'h', 'i', 't', 'l', 't', 'f', 'f', 'h', 'v', 'o', 'y', 'e'],
	['e', 'i', 't', 'e', 'q', 'k', 't', 'n', 'i', 'v', 'h', 'b', 't', 'n', 'i', 's', 't', 'a', 'a', 'b'],
	['e', 'o', 'm', 't', 'l', 'a', 'i', 'h', 'u', 'd', 's', 'e', 'i', 'b', 'o', 's', 'd', 'd', 's', 'r'],
	['w', 'e', 'm', 'e', 'h', 'i', 't', 'c', 'i', 'n', 'n', 'v', 'l', 'n', 'u', 's', 'c', 'n', 'u', 'e'],
	['a', 'j', 'g', 'a', 'i', 'z', 'h', 'a', 'n', 'e', 'b', 't', 'a', 'a', 't', 'c', 's', 'a', 'e', 'i'],
	['u', 'g', 'g', 'l', 't', 'a', 'd', 'i', 'u', 's', 's', 'i', 'm', 'b', 'l', 't', 'l', 'h', 'i', 'h'],
	['u', 'd', 'r', 'r', 'l', 's', 'i', 'o', 'k', 'n', 'r', 'e', 's', 'i', 'e', 'q', 's', 'i', 'o', 'v'],
	['p', 'e', 'e', 's', 't', 'h', 'e', 'n', 'b', 'a', 'y', 'o', 'c', 'h', 'n', 't', 'o', 'p', 'o', 'e'],
	['i', 'a', 'e', 't', 'u', 'i', 'l', 'e', 'x', 'e', 'c', 'd', 'l', 'i', 'e', 'e', 'v', 'o', 'd', 's'],
	['a', 'u', 'p', 'i', 'o', 'd', 'o', 'e', 'g', 'r', 'e', 'b', 'm', 'e', 'a', 'l', 'f', 's', 's', 'e'],
	['t', 'l', 'm', 'i', 'h', 'y', 'o', 'u', 'm', 'c', 'c', 'g', 'd', 'l', 'g', 'l', 'n', 't', 'a', 'e'],
	['u', 'i', 'e', 'a', 'r', 'd', 'o', 'd', 'r', 's', 's', 'e', 'v', 't', 'p', 's', 'o', 'z', 'l', 'e']
];

let HTMLSearch = [];

function findWord(isWeird){
    let word = prompt("Enter Word:").toLowerCase();
    let wordInstances = searchFor(word, isWeird);
    eraseFindings();

    instancesCount = wordInstances.length;
    for(let a = 0; a < wordInstances.length; a++){
        showWord(wordInstances[a], word.length + (isWeird ? 1 : 0), 0);
    }
    document.getElementById("message").innerHTML = instancesCount + (instancesCount == 1 ? " instance" : " instances") + " found";
}

function drawSearch(){
    for(let a = 0; a < ROW_LENGTH; a++){
        let rowArr = [];
        let row = document.createElement("tr");
        for(let b = 0; b < ROW_LENGTH; b++){
            let char = document.createElement("td");
            char.innerHTML = SWORD_SEARCH[a][b];
            rowArr.push(char);
            row.appendChild(char);
        }
        HTMLSearch.push(rowArr);
        document.getElementById("searchDisplay").appendChild(row);
    }
}

function eraseFindings(){
    for(let a = 0; a < ROW_LENGTH; a++){
        for(let b = 0; b < ROW_LENGTH; b++){
            HTMLSearch[b][a].classList.remove("redText");
        }
    }
    document.getElementById("message").innerHTML = "";
}

function showWord(currentLetter, wordLength, currentIndex){
    if(currentIndex < wordLength){
        HTMLSearch[currentLetter.yCoord][currentLetter.xCoord].className = "redText";
        showWord({ xCoord: currentLetter.xCoord + currentLetter.direction.xOffset , yCoord: currentLetter.yCoord + currentLetter.direction.yOffset, direction: currentLetter.direction}, wordLength, currentIndex + 1)
    }
    
}

function searchFor(word, isWeird) {
    let instances = [];
	for (let y = 0; y < ROW_LENGTH; y++) {
		for (let x = 0; x < ROW_LENGTH; x++) {
			if (SWORD_SEARCH[y][x] == word.charAt(0)) {
                let possibleNextLetters = searchSurroundings(x, y, word.charAt(1), isWeird);
                for(let a = 0; a < possibleNextLetters.length; a++){
                    if (recursiveSearch(possibleNextLetters[a], word, 1, isWeird ? 0 : 1)){
                        instances.push({xCoord:x, yCoord:y, direction: possibleNextLetters[a].direction});
                    }
                }
            }
        }
    }
    return instances;
}

function validPosition(x, y) {
	return x >= 0 && x < ROW_LENGTH && y >= 0 && y < ROW_LENGTH;
}

function recursiveSearch(currentLetter, word, checkingIndex, incorrectCount){
	if(checkingIndex >= word.length){
		return true;
	}
	if (!validPosition(currentLetter.xCoord, currentLetter.yCoord)) {
		return false;
    }
	if(word.charAt(checkingIndex) == SWORD_SEARCH[currentLetter.yCoord][currentLetter.xCoord]){
		return recursiveSearch({ xCoord: currentLetter.xCoord + currentLetter.direction.xOffset , yCoord: currentLetter.yCoord + currentLetter.direction.yOffset, direction: currentLetter.direction}, word, checkingIndex + 1, incorrectCount);
    }
    if(incorrectCount == 0){
        return recursiveSearch({ xCoord: currentLetter.xCoord + currentLetter.direction.xOffset , yCoord: currentLetter.yCoord + currentLetter.direction.yOffset, direction: currentLetter.direction}, word, checkingIndex, 1);
    }
	return false;
}

function searchSurroundings(x, y, letter, isWeird) {
    let possibleWords = [];
    let range = isWeird ? 2 : 1;
	for (let yOffset = -range; yOffset <= range; yOffset++) {
		for (let xOffset = - range; xOffset <= range; xOffset++) {
			if (validPosition(x + xOffset, y + yOffset) && !(xOffset == 0 && yOffset == 0)) {
				if (SWORD_SEARCH[y + yOffset][x + xOffset] == letter) {
					possibleWords.push( {xCoord: (x + Math.sign(xOffset)), yCoord: (y + Math.sign(yOffset)), direction: {xOffset: Math.sign(xOffset), yOffset: Math.sign(yOffset)} });	
				}
			}
		}
	}
	return possibleWords;
}