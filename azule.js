class azuleOne{
    constructor(){
         this.email=document.getElementById("email")
         this.login=document.getElementById("login")
          this.login.onclick=()=> {
            this.azuleLogin()
          }
         this.app=document.getElementById("app")
         this.app.onclick=()=> {
            this.azuleSin()
         }

    }
    azuleLogin(){
    
      if(this.email.validity.valueMissing){
        this.email.setCustomValidity("email doesn't write")
      }
      else if (this.email.validity.typeMismatch){
        this.email.setCustomValidity("email incorrect")
      }
      else{
        this.email.setCustomValidity("")
        return true
        
      }
    }
    azuleSin (){
        if(window.ononline===true){
            this.footer=document.getElementById("footer")
            this.footer.style.backgroundColor="rgba(186, 170, 133, 0.575)"
        }
        else {
             this.article=document.getElementById("articleOne")
             this.article.innerHTML=`<div id="inputDivInternet">
             <h1 id="internet"> no internet</h1>
             </div>`
        }

        
    }


}
onload= new azuleOne()

// --------
// this.userA=navigator.userAgent.toLocaleLowerCase()
// if (this.user.includes("Androind") && this.userA.includes("iphone")){
//      this.main=document.getElementById("mainOne")
//      this.main.style.backgroundColor="#bec38ea3"
// }
// if(this.userA.incluldes(""))

if(screen.height<=800  && screen.width<=400){
this.main=document.getElementById("mainOne")
this.main.style.border="2px solid teal"

}

// if(screen.orientation.type==="portrait-primary" && screen.orientation.type==="portrait-secondary" ){
//   this.main=document.getElementById("mainOne")
//   this.main.style.backgroundColor="#83c64585"

// }
// else(screen.orientation.type==="landscape-primary" && screen.orientation.type==="landscape-secondary"){
//   this.main=document.getElementById("mainOne")
//   this.main.style.backgroundColor="#e8f292"
  
// }

addEventListener("load",orientation);
// addEventListener("orientationonchange",onorientationchange);
