var isValid = false;

function validParentheses(arr){
    if (arr[0] == '(' && arr[arr.length - 1] == ')'){
        if (arr.length == 2)
            isValid = true;
        else
            validParentheses(arr.slice(1, arr.length - 1));
    }
    return isValid;
}

var parentheses = '((()))';
console.log(validParentheses(parentheses.split('')));
