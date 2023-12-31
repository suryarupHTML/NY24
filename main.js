function addUser() {
    username = document.getElementById("username").value;
    
    if(username != "") {
        localStorage.setItem("username", username);
        window.location = "win2.html";
        document.getElementById("a1").play();
    }
}
