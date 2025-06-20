 let cart =[];
let req =new XMLHttpRequest()
req.open("GET","https://dummyjson.com/products")
req.send()
req.onreadystatechange=function(){
    if(req.readyState==4 && req.status==200){
        let myProduct= JSON.parse(req.responseText).products
       let mainDiv =document.createElement("div")
       document.getElementById('div').innerHTML='';
       mainDiv.setAttribute("class","mainDiv")
       console.log(JSON.parse(req.responseText));
        console.log(myProduct);
        for(let i =0 ; i< myProduct.length;i++){
        let div =document.createElement("div")
        let img =document.createElement("img")
        img.src=myProduct[i].thumbnail
    
        
        
        div.setAttribute("class","childDiv")
        mainDiv.appendChild(div)
        document.getElementById('div').appendChild(mainDiv)
        let p=document.createElement("p")
        p.textContent="Brand :" + myProduct[i].title
        let btn =document.createElement("button")
        btn.textContent="add to cart"
        btn.setAttribute("class","btn")
        div.append(img,p,btn)
        btn.onclick=function(){
            cart.push(myProduct[i])

            console.log(myProduct[i])
           // localStorage.clear()
             localStorage.setItem("products",JSON.stringify(cart))
        }

        }
        
        
    }
}


function search(){
    var input =document.getElementById('search').value;
    console.log(input)
    var url="https://dummyjson.com/products/search?q="+input

req.open("GET",url)
req.send()
}