document.getElementById("alertname").onclick = function () {
    document.getElementById("outputstatement").innerHTML = "alert ('Muhammad Zohaib')"
    document.getElementById("outputbox").innerHTML = ""
    alert("Muhammad Zohaib")
}
document.getElementById("alertnumber").onclick = function () {
    document.getElementById("outputstatement").innerHTML = "alert ('123')"
    document.getElementById("outputbox").innerHTML = ""
    alert("123")
}
document.getElementById("showvar").onclick = function () {
    document.getElementById("outputstatement").innerHTML = ""
    document.getElementById("outputbox").innerHTML = "var <br> let <br> const"
}
document.getElementById("showcamel").onclick = function () {
    document.getElementById("outputstatement").innerHTML = ""
    document.getElementById("outputbox").innerHTML = "thisIsCamelCase"
}
document.getElementById("sum").onclick = function () {
    let a = 12;
    let b = 5;
    let sum = a + b;
    document.getElementById("outputstatement").innerHTML = "let a = 12; <br> let b= 5; <br> let sum = a+b;"
    document.getElementById("outputbox").innerHTML = sum
}
document.getElementById("sub").onclick = function () {
    let a = 12;
    let b = 5;
    let sub = a - b;
    document.getElementById("outputstatement").innerHTML = "let a = 12; <br> let b= 5; <br> let sub = a-b;"
    document.getElementById("outputbox").innerHTML = sub
}
document.getElementById("mul").onclick = function () {
    let a = 12;
    let b = 5;
    let mul = a * b;
    document.getElementById("outputstatement").innerHTML = "let a = 12; <br> let b= 5; <br> let mul = a*b;"
    document.getElementById("outputbox").innerHTML = mul
}
document.getElementById("div").onclick = function () {
    let a = 12;
    let b = 5;
    let div = a / b;
    document.getElementById("outputstatement").innerHTML = "let a = 12; <br> let b= 5; <br> let div = a/b;"
    document.getElementById("outputbox").innerHTML = div
}
document.getElementById("cal").onclick = function () {
    let cal = 36 / 6 * 5 + 2 ** 4 - (3 + 5);
    document.getElementById("outputstatement").innerHTML = "let cal= 36/6*5+2**4-(3+5);"
    document.getElementById("outputbox").innerHTML = cal
}
document.getElementById("clearstatement").onclick= function(){
    document.getElementById("outputstatement").innerHTML= ""
}
document.getElementById("clearoutput").onclick= function(){
    document.getElementById("outputbox").innerHTML= ""
}