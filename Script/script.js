window.onload = function(){
  const corfundo = document.querySelector("body")
  const corfonteh4 = document.querySelectorAll("h4")
  const corfonteh2 = document.querySelector("h2")
  const bnt = document.getElementById("contraste")
  var count = 0

  bnt.addEventListener("click", function() {
    count++
    count = count % 2
    console.log(count)
  if(count == 1){
  corfundo.style.backgroundColor = "#000"
  corfonteh4[0].style.color = "#FFF"
  corfonteh4[1].style.color = "#FFF"
  corfonteh4[2].style.color = "#FFF"
  corfonteh2.style.color = "#FFF"
  }else{
    corfundo.style.backgroundColor = "#FFF"
    corfonteh4[0].style.color = "#212529"
    corfonteh4[1].style.color = "#212529"
    corfonteh4[2].style.color = "#212529"
    corfonteh2.style.color = "#212529"
  }
})
}


function validacao(){

    var nome = document.getElementById("name").value
    var email = document.getElementById("email").value
    var sugest = document.getElementById("sugest").value

if(nome == "" || email == "" || sugest == ""){
        alert("Informações faltando")

}
if(nome == ""){
    document.getElementById("name").style.borderColor = "red"
    setTimeout(temponame, 5000)

}if(email == ""){
    document.getElementById("email").style.borderColor = "red"
    setTimeout(tempoemail, 5000)
}
if(sugest == ""){
    document.getElementById("sugest").style.borderColor = "red"
    setTimeout(temposugest, 5000)
}

if(nome != "" &&  email != "" && sugest != ""){
    alert("Parabens sugestão enviada")
    document.getElementById("name").value = null
    document.getElementById("email").value = null
    document.getElementById("sugest").value = null
}
}

if (!localStorage.getItem("cookiesAccepted")) { 
    var cookieMessage = document.getElementById('cookie-notification');  
    var closeCookie = document.getElementById('cookie-notification-close');
    
    cookieMessage.style.display = 'block';  
    closeCookie.addEventListener("click", function(e) {  
      e.preventDefault();
      localStorage.setItem("cookiesAccepted", true);
      
      cookieMessage.style.display = 'none';
    });
  }

  function temponame(){
    document.getElementById("name").style.borderColor = "#ced4da"
  }
  function tempoemail(){
    document.getElementById("email").style.borderColor = "#ced4da"
  }
  function temposugest(){
    document.getElementById("sugest").style.borderColor = "#ced4da"
  }
  function corpadraonome(){
    var cornome = document.getElementById("name")
    cornome.style.borderColor =  "#ced4da"
  }
  function corpadraoemail(){
    var cornome = document.getElementById("email")
    cornome.style.borderColor =  "#ced4da"
  }
  function corpadraosugest(){
    var cornome = document.getElementById("sugest")
    cornome.style.borderColor =  "#ced4da"
  }

  function mudarcornovo(color){
    document.body.style.backgroundColor = color
  }
  document.addEventListener('keypress', function(e){
    if(e.key == "Enter"){
      validacao()
       
    }
 });



 