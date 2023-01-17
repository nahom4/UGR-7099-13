const error = document.getElementById('error')
const submit_button = document.getElementById('submit')
const first_name = document.getElementById('first-name')
const last_name = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('Password')

submit_button.addEventListener('click', function(e){
    let value = []

    e.preventDefault()

    if (!first_name.value){
        value.push('Please enter your first name')
    } 

    if (!last_name.value){
        value.push('Please enter your last name')
    } 

    if (!email.value){
        value.push('Please enter your email')
    } 


  

    if (!password.value){
        value.push('Please enter your password')
    } 
    if (password.value){
    
        if (password.value.length < 8){
            value.push('length of password should be more than 8 characters')

        }
    }
    

    if (value.length > 0){

        if (value.length == 5){

      

           
            error.innerText = `Please fill all the required fields`
            error.style.display = 'block'
        }
        else{
          
          
            error.innerText = value[0]

            error.style.display = 'block'
        }
     }

     else{

        
        location.reload()
        
     }

})