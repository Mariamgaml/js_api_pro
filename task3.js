function Api(url,draw){
    var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       let users=JSON.parse(xhttp.responseText);
       draw(users)
       console.log(users);
    }
};
xhttp.open("GET", url, true);
xhttp.send();
}

function draw(users){
    let 
}