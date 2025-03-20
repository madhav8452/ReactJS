// Success Data

function success(){
  document.getElementById("success").style.right = "20px"
  document.getElementById("notification").style.zIndex = "1"

  document.getElementById("Sclose").addEventListener("click", ()=>{
    document.getElementById("success").style.right = "-430px"
    document.getElementById("notification").style.zIndex = "-1"
  })  
}

//Error Data

function error(){  
  document.getElementById("error").style.right = "20px"
  document.getElementById("notification").style.zIndex = "1"

  document.getElementById("Eclose").addEventListener("click", ()=>{
    document.getElementById("error").style.right = "-430px"
    document.getElementById("notification").style.zIndex = "-1"
  })  
}

//Info Data

function info(){  
  document.getElementById("info").style.right = "20px"
  document.getElementById("notification").style.zIndex = "1"
  
  document.getElementById("Iclose").addEventListener("click", ()=>{
    document.getElementById("info").style.right = "-430px"
    document.getElementById("notification").style.zIndex = "-1"
  })  
}

