var cars = document.querySelectorAll(".posts div")
var select = document.querySelector("select")
select.addEventListener("change", ()=>{
    for(var car of cars){
    if(select.value == "all"){
        car.style.display = "flex"
    }else if(car.getAttribute("value") != select.value){
            car.style.display = "none"
        }else{
            car.style.display = "flex"
        }
    }
})