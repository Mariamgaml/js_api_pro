function save(){
    var user=document.getElementById("user");
    var pass=document.getElementById("pass");
    var x=localStorage.setItem("username", user);
    localStorage.setItem("password",pass);
    document.cookie = "username=" + encodeURIComponent(user) + "; "

console.log(x);

}



                                                                                                                                                                                    