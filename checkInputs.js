//check if the textInput is empty the function get an input element as a parameter\
//check if it empty return false eles return true
//retrun * requird if the parameter textInput IsEmpty
// else return true

function IsNoEmpty(textInput) {
    if (textInput.value.length == 0) {
        return false;
    } else
        return true;
};

//check the name length , the function get an input element as a parameter
// return false if the value length is less than  3 characters 
//else return true
function checkInputLength(textInput) {
    if (textInput.value.length < 3) {
        return false;
    } else
        return true;
};

//check the email  , the function get an input element as a parameter
// return true if the value is a valid email 
//else return false
//valid mail = aaa@aaa.aaa
function checkEmail(textInput) {
    let st = textInput.value;
    let arr = st.split('@');
    if (arr.length != 2) {
        return false;
    } else {
     arr = arr[1].split('.');
     if(arr.length!=2){
         return false;
     }else{
         return true;
     }
    }
    return true
};

//check if the Number grther than 0 , the function get an input element as a parameter
//return true if number>0
//else false

function checkNumber(textInput) {
    if(isNaN(textInput.value))
    return false;
    else{
        if(textInput.value<=0){
            return false;
        }
    }
return true;
};

//check the URL ,  the function get an input element as a parameter
// return true if the URL is valid, 
//else return true
//valid URL = stret with www. or https://www. or https:// and 
//endsWith .gif , .bmp , .jpg
function checkURL(textInput) {
    let st=textInput.value;
    if(("".startsWith('www.') ||"".startsWith('https://www.') || "".startsWith('https://'))
    &&(("".endsWith(".gif")) || "".endsWith(".bmp") || "".endsWith(".jpg")))
    return true;
    else
    return false;
}



