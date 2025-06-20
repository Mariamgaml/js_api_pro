function save(event){
    event.preventDefault(); // 🛑 يمنع الفورم من التحديث

    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    document.cookie = "username=" + encodeURIComponent(user) + ";";

    window.location.replace("home.html");
}







                                                                                                                                                                                    