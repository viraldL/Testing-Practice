function caesarCipher(string, shift) {
    if(shift > 25 || shift < 0) return "Shift from 0 to 25";
    let stringToArray = string.toLowerCase().split("");
    let newArray = [];
    stringToArray.forEach(char => {
        newArray.push(convertChar(char, shift));
    })
    return newArray.join("");
}

function convertChar(char, shift) {
    if(char.charCodeAt(0) < 97 || char.charCodeAt(0) > 122){
        return char;
    } else {
        if((char.charCodeAt(0) + shift) > 122) return  String.fromCharCode(char.charCodeAt(0) + shift - 26);
        return String.fromCharCode(char.charCodeAt(0) + shift); 
    }
}

module.exports = caesarCipher;