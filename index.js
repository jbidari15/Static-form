// pattern="\+358[\d]{10}"
// pattern="[a-z ]{3,}" 
// email:pattern="\S+@\S+\.\S+"
// pattern="[a-z]{3,}"-city

const pattern={
    telephone:/^\+358\d{9}$/,
    fullName:/^[a-z]{3,}$/i,
    email:/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
    city:/^[a-z]{3,}$/i,
    state:/^[a-z]{3,}$/i,
    country:/^[a-z]{3,}$/i,
    zip:/^[\d]{4}$/,
    hear:/^.{10,500}$/
}
function validate(field,regex){
if (regex.test(field.value)) {
    field.className="valid";
    }else{
  field.className="invalid";

    }
}


function validateInputs(){
    let inputs= document.querySelectorAll("input");
inputs.forEach((input)=>{
   value="";
    input.addEventListener("keyup",(e)=>{
        if(e.target.attributes.name.value==="email"){
            value=e.target.value;
            validate(e.target,pattern[e.target.attributes.name.value]);
            }
        else if(e.target.attributes.name.value==="confirmEmail"){
           if(e.target.value===value){
              e.target.className="valid";
           }
           else{
               e.target.className="invalid";
           }
        }
        else{
            validate(e.target,pattern[e.target.attributes.name.value]);

        }
    })
  })

}


function validateTextAreas(){
    let textAreas= document.querySelectorAll("textarea");
textAreas.forEach((textArea)=>{
    textArea.addEventListener("keyup",(e)=>{
     validate(e.target,pattern[e.target.attributes.name.value]);
    })
  })
}
console.log(document.getElementById("submitIt"));


function validateDisciplineCheckBox(){
  //  let button=document.getElementById("submitIt");
  let submitIt=document.getElementById("submitIt");
    let checkDisciplines=document.getElementsByClassName("checkme");
    submitIt.addEventListener("click",function(){
       for (let i=0;i<checkDisciplines.length;i++){
            if(checkDisciplines[i].checked){
                return true;
                
            }
         }
         alert("please select at least one discipline");
         return false;
        
    })

}
function validatePlacesCheckBox(){
    //  let button=document.getElementById("submitIt");
    let submitIt=document.getElementById("submitIt");
      let checkPlaces=document.getElementsByClassName("checkPlaces");
      submitIt.addEventListener("click",function(){
         for (let i=0;i<checkPlaces.length;i++){
              if(checkPlaces[i].checked){
                  return true;
                 
              }
            }
              alert("please select at least one place");
              return false;            
          
      })
  
  }
validateInputs();
validateTextAreas();
validateDisciplineCheckBox();
validatePlacesCheckBox();