const panels = document.querySelectorAll('.panels');


panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removelClassActive();
        panel.classList.add('active');
    })
})

function removelClassActive(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}