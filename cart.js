function draw(){
    let mainDiv =document.createElement("div")
mainDiv.setAttribute("class","mainDiv")
document.getElementById('div').appendChild(mainDiv)
console.log("kdlsjfkl")

    myProduct=JSON.parse(localStorage.getItem("products"))
    console.log(localStorage.getItem("products"))
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
        btn.textContent="remove from cart"
        btn.setAttribute("class","btn")
        div.append(img,p,btn)
        btn.setAttribute("id",i)

        btn.onclick=function(){
            myProduct.splice(i,1)
            localStorage.setItem("products",JSON.stringify(myProduct))
            mainDiv.innerHTML ='';
            draw()

        }

        }
        
        

}
draw();