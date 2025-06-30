const button = document.querySelector('#form-submit');



const mousehoveranimationbutton = () => {
     anime({
        targets: button, 
        width: '100%' ,
        scale : {
            delay : 0 ,
            value : 1.2,
        },
        duration : 1000
     })
}
const mouseoutanimation = () => {
     anime({
        targets: button, 
        width: '50%' ,
        scale : {
            delay : 0 ,
            value : 1,
        },
        duration : 1000
     })
}



button.addEventListener('mouseover' , mousehoveranimationbutton);
button.addEventListener('mouseout' , mouseoutanimation);