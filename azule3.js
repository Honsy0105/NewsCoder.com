class maps{
    constructor(){
        this.userA=navigator.userAgent.toLocaleLowerCase()
        if (this.userA.includes("Androind") && this.userA.includes("iPhone")){
             this.main=document.getElementById("mainOne")
             this.main.style.backgroundColor="#ccccc9a3"
        }
        if(screen.height ==740  && screen.width == 360){
            this.main=document.getElementById("mainOne")
            this.main.style.background="#ccccc9a3"
            
            }

            if(screen.orientation.type=="portrait-primary" || screen.orientation.type=="portrait-secondary"){
                this.main=document.getElementById("mainOne")
                this.main.style.background="rgb(230 234 202 / 64%)"
              
              }

              else if(screen.orientation.type=="landscape-primary" || screen.orientation.type=="landscape-secondary"){
                this.main=document.getElementById("mainOne")
                this.main.style.background="#d8e283a3"
                
              }


//----------------->
        this.worked=false;
       this.maps=document.getElementById("mapsGoogle")
        this.opens= document.getElementById("maps")

        this.opens.onclick=()=> {
            this.opned()                  
        }

    }         
    opned(){
         if(this.worked===false){
             this.opens.innerHTML+= `thank you `
                 this.worked=true;
            }
            else {
                this.worked=false
                 this.opens.innerHTML="no internet"
            }
            navigator.geolocation.watchPosition( function (){
                this.maps=document.getElementById("mapsGoogle")
                this.maps.innerHTML=` <iframe height="200" width="150" src="https://www.openstreetmap.org/export/embed.html?boxe=${position.coords.longitud},${position.coords.latitude},layer=mapnik"></iframe> `
                 
            })
         }
}
// addEventListener("load",maps);
// addEventListener("orientationonchange","mapsonchange");
onload= new maps();
