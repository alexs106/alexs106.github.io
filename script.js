const onClick= ()=>{
    event.preventDefault();
    if(
        document.getElementById("username").value == "baby" && 
        document.getElementById("password").value == "iloveyou<3"
    ){
        location = "./map.html"
    }
}
