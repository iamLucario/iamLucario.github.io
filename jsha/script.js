function calcSum(){
    var textArea = document.getElementById("inputText");
    var arrayOfLines = textArea.value.split("\n");
for(var i = 0; i < arrayOfLines.length; i++){
    var prevValue;
    if(i==0){
        document.getElementById("outputText").value = arrayOfLines[i];
    } else {
    prevValue = document.getElementById("outputText").value + "\n";
    document.getElementById("outputText").value = prevValue + arrayOfLines[i];
    aInt(arrayOfLines[0])}
}}

function aInt (aInt){
    var asm1 = aInt.substring(1);
        // Take Substring from index [1], to remove '@'
        var asm2 = parseInt(asm1);
        // Parse the integer from string
        var value = null;
        if(aInt.charAt(0) == '@' && asm2 > 0){
            // Check if the provided value is a valid A instruction
        value = 0 + decimalToBinary(asm2);
        // Converts the value to binary and adds 0 at the start (index[0]) to signify that it's an A instruction.
        console.log(value);}
        else {console.log("Enter a valid A instruction!");}
        // If the instruction is not valid, retry.
        return value;
}