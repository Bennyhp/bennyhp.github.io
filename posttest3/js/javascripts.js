// alert("Welcome To Sekiro Guides Online!");
const press = document.getElementById("btn-theme");
press.addEventListener("click", function(){
    const x = document.getElementById("info");
    if(x.style.display == "none"){
        x.style.display = "block";
    }
    else{
        x.style.display = "none";
    }
});