let isCancel= false;
function Saludar() {
  let texto;
  let persona = prompt("Cual es tu fruta favorita?:");
  //if (persona == null || persona == "") {
  if (!persona) { 
    texto = "El usuario canceló el promp.";
    document.getElementById("demo").innerHTML = texto;
    //
    isCancel= true;
    
  } else {
    texto = persona;
    if(isCancel){
      document.getElementById("demo").innerHTML = texto;
      isCancel = false;
      return;
    }
    document.getElementById("demo").innerHTML +=  texto + ", ";
  }
}