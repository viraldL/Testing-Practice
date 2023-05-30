function analyzeArray(arr) {
    if(arr.length < 1) return { average: 0, min: 0, max: 0, length: 0};

    const average = (arr.reduce((prev, curr) => (+prev) + (+curr), 0)) / arr.length;

    return { average: average, min: Math.min(...arr), max: Math.max(...arr), length: arr.length};
}

module.exports = analyzeArray;