function calcSum(){
  var textArea = document.getElementById("inputText");
  var arrayOfLines = textArea.value.split("\n");
  for(var i = 0; i < arrayOfLines.length; i++){
    var prevValue;
    if(i===0){
      document.getElementById("outputText").value = AssemblerNL(arrayOfLines[i]);
    } else {
      prevValue = document.getElementById("outputText").value + "\n";
      document.getElementById("outputText").value = prevValue + AssemblerNL(arrayOfLines[i]);
      aInt(arrayOfLines[0])}
  }
}

function aInt (aInt){
  const asm1 = aInt.substring(1);
  // Take Substring from index [1], to remove '@'
  const asm2 = parseInt(asm1);
  // Parse the integer from string
  let value = null;
  if(aInt.includes("@") && asm2 > 0){
    // Check if the provided value is a valid A instruction
    let asm3 =  asm2.toString(2)
    let length = 16 - asm3.length
    for(let i = 0; i < length; i++){
      asm3 = 0 + asm3;
    }
    value = asm3;
    // Converts the value to binary and adds 0 at the start (index[0]) to signify that it's an A instruction.
    console.log(value);}
  // else {console.log("Enter a valid A instruction!");}
  // If the instruction is not valid, retry.
  return value;
}

function cInstruction (cInt){
  let equals = cInt.indexOf('=');
  let semiColon = cInt.indexOf(';');

  let dest = null;
  let comp = null;
  let jump = null;

  let noDest = 0;
  let noJump = 0;

  try{
    dest = cInt.substring(0, equals);
  } catch (err){
    noDest = 1;
  }

  try{
    comp = cInt.substring(Number(equals)+1, Number(semiColon));
  } catch (e) {
    console.log("lol")
  }

  try{
    if(noDest === 1){
      comp = cInt.substring(0,Number(semiColon));
    }
  }catch (e) {
    noJump = 1;
  }

  if(!cInt.includes(";")){
    comp = cInt.substring(Number(equals+1));
  }

  if(noJump === 1){
    comp = cInt;
  }

  jump = cInt.substring(semiColon+1);

  return "111" + compCheck(comp) + destCheck(dest) + jumpCheck(jump);
}

function jumpCheck(a){
  switch(a){
    case "JGT":
      return "001";

    case "JEQ":
      return "010";

    case "JGE":
      return "011";

    case "JLT":
      return "100";

    case "JNE":
      return "101";

    case "JLE":
      return "110";

    case "JMP":
      return "111";

    default:
      return "000";
  }
}

function destCheck(a){
  switch (a){
    case null:
      return "000";

    case"M":
      return "001";

    case "D":
      return "010";

    case "MD":
      return "011";

    case "A":
      return "100";

    case "AM":
      return "101";

    case "AD":
      return "110";

    case "AMD":
      return "111";

    default:
      return "000";
  }
}

function compCheck(a){
  switch (a){
    case "0":
      return "0101010";

    case "1":
      return "0111111";

    case "-1":
      return "0111010";

    case "D":
      return "0001100";

    case "A":
      return "0110000";

    case "!D":
      return "0001101";

    case "!A":
      return "0110001";

    case "-D":
      return "0001111";

    case "-A":
      return "0110011";

    case "D+1":
      return "0011111";

    case "A+1":
      return "0110111";

    case "D-1":
      return "0001110";

    case "A-1":
      return "0110010";

    case "D+A":
      return "0000010";

    case "D-A":
      return "0010011";

    case "A-D":
      return "0000111";

    case "D&A":
      return "0000000";

    case "D|A":
      return "0010101";

    case "M":
      return "1110000";

    case "!M":
      return "1110001";

    case "-M":
      return "1110011";

    case "M+1":
      return "1110111";

    case "M-1":
      return "1110010";

    case "D+M":
      return "1000010";

    case "D-M":
      return "1010011";

    case "M-D":
      return "1000111";

    case "D&M":
      return "1000000";

    case "D|M":
      return "1010101";

    default:
      return null;

  }
}

function AssemblerNL(assemblyInstruction){
  let binaryInstruction;

  if(assemblyInstruction.includes("@")){
    binaryInstruction = aInt(assemblyInstruction);
  }else {
    binaryInstruction = cInstruction(assemblyInstruction);
  }
  return binaryInstruction;
}
