let email2 = <HTMLInputElement>document.querySelector(".input")
let password2 = <HTMLInputElement>document.querySelector(".input2")
//let username2 = <HTMLInputElement>document.querySelector(".input3")
let button2 = <HTMLButtonElement>document.querySelector(".button");
let form2 = <HTMLFormElement>document.querySelector("form");
let forcusState2 = 1;
let stage2 = 1;
let level12 = 1;
let level22 = 2;
let level32 = 3;

email2.focus();
email2.readOnly = true;
window.addEventListener("keydown", (e)=>{
      if(stage2 === 1){

          if(e.key === "s"){
            
              if(forcusState2<3){
  
                  forcusState2++
              }
              console.log(forcusState2)
  
          }
          
          if(e.key === "w"){
            
              if(forcusState2>1){
  
                  forcusState2--
              }
              console.log(forcusState2);
          }

          if(forcusState2 === 1){
            email2.focus();
            email2.readOnly = true;
            nextStage2();
          }
          if(forcusState2 === 2){
            password2.focus();
            password2.readOnly = true;
            nextStage2();
          }
         if(forcusState2 === 3){
            button2.focus();
            if(e.key === "Enter"){
                console.log("enter")
                form2.submit();
            }
          }

          

        }
       
    if(stage2 === 2){
        setInterval(()=>{     
            email2.readOnly = false;
            password2.readOnly = false;
            //username2.readOnly = false;
        }, 100)
        if(e.key === "Enter"){
            email2.readOnly = true;
            password2.readOnly = true;
            //username2.readOnly = true;
            
            stage2 = 1;
            console.log("goto level12")
        }
    }

 
})

function nextStage2(){

    
    window.addEventListener("keydown",(e)=>{
        if(e.key === "e"){
            stage2 = 2
            
        }
    })
}
