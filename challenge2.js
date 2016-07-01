function caseChanger(str) {
    var arr = str.split('');
    var result = '';
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0)
            result += arr[i].toUpperCase();
        else
            result += arr[i].toLowerCase();
    }
    return result;
}

console.log(caseChanger('buckyroberts'));
