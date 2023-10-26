function generate() {
  let passwordLength = document.getElementById("passLen").value;
  let lowerCase = document.getElementById("lowCase").checked;
  let upperCase = document.getElementById("uppCase").checked;
  let symbol = document.getElementById("symbol").checked;
  let chiffre = document.getElementById("chiffre").checked;

  let charset = " ";
  let password = " ";
  if (upperCase) {
    charset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } if (lowerCase) {
    charset+="abcdefghijklmnopqrstuvwxyz";
  } if (symbol) {charset+="&~#{[|`\^@]}="  }
   if(chiffre){charset+="0123456789"}
  for(var i=0,n=charset.length;i<passwordLength;i++){
password+=charset.charAt(Math.floor(Math.random()*n));
  }
  document.getElementById("rep").innerHTML=password;
}
