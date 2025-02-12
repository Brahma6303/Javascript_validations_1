function validate(){
    let x=document.getElementById("name").value;
    let y=document.getElementById("password").value;
    var z=document.getElementById("message").value;
    if (x=="siva" && y=="1234"){
        
        window.open("two.html");
        localStorage.setItem("sharedText", z);
    }
    else{
        document.getElementById("demo").innerHTML="Invalid Name and Password";
        ;
    }
}

function changing(){
    let x=document.getElementsByClassName('name');
    for(let i=0;i<x.length;i++){
        x[i].style.color="red";
    };
};