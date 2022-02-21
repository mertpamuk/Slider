let slides = document.querySelectorAll('.slide');
let nextBtn = document.querySelector('.nextBtn');
let prevBtn = document.querySelector('.prevBtn');

slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`
});

let counter = 0;

nextBtn.addEventListener('click', function(){
    counter++;
    
    carousel();
});

prevBtn.addEventListener('click', function(){
    counter--;
    if(counter <=0){
        counter = 0;
    }
    carousel();
});


function carousel(){
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`;
    })
}