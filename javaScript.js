const humberger = document.getElementById('humberger')

const nav_list = document.getElementById('nav-list')

const active  = window.location.pathname





humberger.addEventListener('click', function(){

    nav_list.classList.toggle('nav__list--show')
    

})


// for (i in document.getElementsByClassName('nav__link') ){
//     let element = document.getElementsByClassName('nav__link')[i].href
//     if (element && element.includes(`${active}`)){

//        if (document.getElementsByClassName('nav__link')[i].parentNode.textContent !=`logout`){


//        }
       
//        console.log(document.getElementsByClassName('nav__link')[i].parentNode.textContent)
        

//         document.getElementsByClassName('nav__link')[i].parentNode.classList.add('selected')
        


//     }
// }
















    
    



