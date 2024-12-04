/*
 *  Comments and/or function signature HERE
 */
function isDivisible(a, b){
    return (a%b == 0);
}

/*
 *  Callback function for 'click' event on button
 */
function checkDivisibility(){
    // get divider
    const divider=document.getElementById("myInput").value;
    // init result string (empty)
    let result="";
    tab.forEach(n => {
        result += (isDivisible(n,divider)? n + " ": "");
    })
    alert(result);
}