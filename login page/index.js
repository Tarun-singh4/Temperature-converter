let username=document.getElementById("user");
let password=document.getElementById("password");

let btn=document.getElementById("login");

function check(){
    
    let user=username.value;
    let pass=username.value;
    if(user=="TARUN SINGH" || pass==123456){
            btn.textContent="Logged in succesfully";
            btn.style.color="green";
    }
    else{
        btn.textContent="Invalid username or password";
        btn.style.color="red";
    }
}

btn.addEventListener('click',check);