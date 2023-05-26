function capitalize(string) {
    let stringToArray = string.split(" ")
    let newArr = [];
    stringToArray.forEach(word => {
        newArr.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    })
    return newArr.join(" ");
}

module.exports = capitalize;