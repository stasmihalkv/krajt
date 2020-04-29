window.onload=function(){
    var header = document.querySelector('header');
    var section4 = document.querySelector('.section_4');
    var section4Img = document.querySelector(".section_4 img");
    header.classList.add('bgActive');
    

window.addEventListener('scroll', function(){
    if(pageYOffset>=0&&pageYOffset<=400){
        header.classList.add('bgActive')
    }
    else{
        header.classList.remove('bgActive')
    }

    if(pageYOffset >= section4.offsetTop - 100 && pageYOffset <= section4.offsetTop+section4.offsetHeight-200){
        section4Img.classList.add('section4__img-active')
    }
    else {
        console.log('test')
        section4Img.classList.remove('section4__img-active')
    };

    /*
    if(window.pageYOffset>2000&&window.pageYOffset<2800){
        section4Img.classList.add('section4__img-active')
    }
    else{
        section4Img.classList.remove('section4__img-active')
    };*/
   /* console.log(market.offsetHeight) - высота блока
    console.log(market.offsetTop) - верхняя граница блока
    console.log(pageYOffset) - расстояние от верхней границы страницы
    1649
    /
    3049*/

})


}