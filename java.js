//Celsius to Farenheit...

document.write("<h1>Convert Celsius to Farenheit</h1>")
document.write("<button id='cels' onclick='fahrenheit()'>Click to convert to farenheit</button>");
function celsius(){
    let celsius= Number(prompt("convert to farenheit"))
    document.write((celsius*1.8)*+32);
    document.getElementById("cels").innerHTML = text;
}


//Farenheit to Celsius...


document.write("<h1>Convert Farenheit to Celsius</h1>")
document.write("<button id='fahren' onclick='fahrenheit()'>Click to convert to Celsius</button>");
function fahrenheit(){
    let fahrenheit = Number(prompt("Convert to celsius"))
    document.write((fahrenheit-32)*.5566+ " °C");
    document.getElementById("fahren").innerHTML = text;
}   


