let image = document.getElementById("imagejus")
image.addEventListener("mouseover",function(){
    image.setAttribute("class","ajjout")
    image.removeAttribute('id',"imagejus")

})
image.addEventListener("mouseout",function(){
    image.setAttribute('id',"imagejus")
    image.removeAttribute("class","ajjout")

})

     let btn = document.querySelector("button.btnread")
     let titre = document.querySelector("h1.titre1")
    
    btn.addEventListener("click",function(){
        let ada = Math.floor(Math.random()*255)
        let ara = Math.floor(Math.random()*255)
        let asa = Math.floor(Math.random()*255)
        let ata = Math.random()

          titre.style.color = (ada,asa,ara,ata)
     
   })