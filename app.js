
let btn = document.querySelector('#btn');
let audio = document.querySelector('#audio');
let win = document.querySelector('.win');
let main = document.querySelector('.main');
let lose = document.querySelector('.lose');
let okBtn = document.querySelector('.ok__btn');
let alert = document.querySelector('.alert');
let image = document.querySelectorAll('.image');

let imgArrey = ['img/css.png', 'img/html.png', 'img/javascript.png', 'img/react.png']

okBtn.addEventListener('click',()=>{
    alert.style.transform = 'scale(0)'
})


btn.addEventListener('click', randomImg);

function randomImg(){
    audio.autoplay = true
    audio.src = 'img/wrong.mp3'
    main.classList.remove('mainLose')
    main.classList.remove('mainWin')
    let interval = setInterval(()=>{
        image[0].src = imgArrey[randomIndex()]
        image[1].src = imgArrey[randomIndex()]
        image[2].src = imgArrey[randomIndex()]
    
    },100)
 
    setTimeout(()=>{
        clearInterval(interval)
        if(image[0].src === image[1].src && image[1].src === image[2].src){
            win.innerHTML = 'congratulations'
            audio.autoplay = true
            audio.src = 'img/victory.mp3'
            lose.innerHTML = ''
            main.classList.add('mainWin')
        }else{
            lose.innerHTML = 'losed'
            audio.autoplay = true
            audio.src = 'img/boo.mp3'
            win.innerHTML = ''
            main.classList.add('mainLose')
        } 
        
    },2500)
    win.innerHTML = ''
    lose.innerHTML = ''

   

   
}
function randomIndex(){
    return Math.floor(Math.random()*4)
}