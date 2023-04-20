

// header toggle
let MenuBtn=document.getElementById('MenuBtn')
MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})
//typing effect
let typed=new Typed('.auto-input',{
    strings:['Front-End Developer!','Studying back-End Developer!','UI Designer!','Student'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:2000,
    loop:true
})


//Active Link State On Scroll

//Get all Links

let navLinks=document.querySelectorAll('nav ul li a')
//Get All Section
let sections=document.querySelectorAll('section')
window.addEventListener('scroll',function(){
    const scrollPos=window.scrollY + 20
    sections.forEach(section => {
         if(scrollPos > section.offset && scrollPos < (section.offsetTop + section.offsetHeight)){
            navLinks.forEach(link => {
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
         }
    });
});



// Email js


const contactForm=document.getElementById('contact-form'),
      contactName=document.getElementById('contact-name'),
      contactEmail=document.getElementById('contact-email'),
      contactProject=document.getElementById('contact-project'),
      contactMessage=document.getElementById('contact-message')


const sendEmail=(e)=>{
     e.preventDefault()

     //check if field has a value

    if(contactName.value=='' || contactEmail.value === '' || contactProject.value === ''){
        //add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')


        //Show Message

        contactMessage.textContent='Write all input fields 📝'
    }else{
        //service ID -template ID --#form --public key
        emailjs.sendForm('service_hu20ltv','template_yx66t3o','#contact-form','SLj4wnplGIzw3SyIZ')
        .then(()=>{
            //show message and add color
            contactMessage.classList.add('color-blue')
            contactMessage.textContent = 'Message sent 🤙'

            //remove message after five seconds
            setTimeout(()=>{
                contactMessage.textContent = ''
            },5000)
        })
    }

    }
contactForm.addEventListener('submit', sendEmail)

//download and perview

const button=document.querySelector('button')
button.addEventListener('click',()=>{
    button.classList.add('active')
})