//console.log("Hello I'm Working");

const password=document.getElementById('password');
const cocpIcon=document.getElementById('copy-icon');
const btnGenerate=document.getElementById('btn-generate');
const notification=document.querySelector(".notification");

btnGenerate.addEventListener('click',()=>{
    generatePassword();
});

cocpIcon.addEventListener('click',()=>{
    if(password.value){
        coppyPassword();
        notification.classList.remove('active');
        setTimeout(()=>{
            notification.classList.add('active');
        },2000);
    }
});

function generatePassword(){
    const symbols="1234567890!@#$%^&*()-=_+qwertyuio?plkjhgfdsazxcvbnm,.<>:QWERTYUIOPLKJHGFDSAZXCVBNM?";
    const passwordLength=14;
    let pass="";
    let lenth=symbols.length;
    //console.log(lenth)
    
    for(let i=0;i<passwordLength;i++){
        const randomnum=Math.floor(Math.random()*lenth);
        //console.log(randomnum);
        pass+=symbols.substring(randomnum,randomnum+1);
        //console.log(randomnum,pass);
    }
    password.value=pass;

    notification.innerText=`${password.value} Copied !`;
}

function coppyPassword(){
    var textToCopy = password.value;

    navigator.clipboard.writeText(textToCopy)
    .then(function() {
      console.log("Text copied to clipboard successfully!");
    })
    .catch(function(error) {
      console.error("Error copying text to clipboard:", error);
    });  
}