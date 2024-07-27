const imgList = Array.from(document.querySelectorAll(".item img")) 
const popUpContainer = document.querySelector(".popUpContainer")
const imageContainer = document.querySelector(".imageContainer")

// ==================== popUpContainer display ====================
popUpContainer.style.display = "none"

let currentIndex;
for(let i=0; i<imgList.length; i++){
    imgList[i].addEventListener("click", function(e){
        popUpContainer.style.display = "flex" // display popUpContainer
        // console.log(e.target.getAttribute("src")) // image src
        let currentSrc = e.target.getAttribute('src')
        imageContainer.style.backgroundImage = `url('${currentSrc}')`
        currentIndex = imgList.indexOf(e.target) // image index
    })
}


// ==================== popUpContainer control ====================
const closeBtn = document.getElementById("closeBtn")
const nextBtn = document.getElementById("nextBtn")
const prevBtn = document.getElementById("prevBtn")

closeBtn.addEventListener('click', closeSlider)
function closeSlider(){
    popUpContainer.style.display = "none"
    console.log('close')
}

nextBtn.addEventListener("click", function(){
    slide(1)
    console.log('next')
})
prevBtn.addEventListener("click", function(){
    slide(-1)
    console.log('prev')
})

function slide(step){
    // step => 1 & -1
    currentIndex = currentIndex + step
    if(currentIndex == imgList.length){
        currentIndex = 0
    }
    if(currentIndex < 0){
        currentIndex = imgList.length - 1
    }
    let srcImg =  imgList[currentIndex].getAttribute('src')
    imageContainer.style.backgroundImage = `url('${srcImg}')`
}

// ==================== popUpContainer control with key ====================
document.addEventListener('keydown', function(e){
    console.log(e.key)
    if(e.key == 'ArrowRight'){
        slide(1)
    }else if(e.key == 'ArrowLeft'){
        slide(-1)
    }else if(e.key == 'Escape'){
        closeSlider()
    }
})
