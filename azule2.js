
class azuleCoder{
    constructor(){
      var text = document.getElementById("text")
      var result = document.getElementById("result")
      var decode = document.getElementById("decode")
      var encode = document.getElementById("encode")
        
      encode.addEventListener("click",()=>{  
       result.value=window.btoa(text.value)       
      })
      
      decode.addEventListener("click",()=>{
       result.value=window.btoa(text.value)
  
              
      })
  
      text.oninput=()=> {   
       result.value=window.btoa(text.value)
       result.value=window.atob(text.value)
      }
  
    }
  }
  onlaod=new azuleCoder()