//show menu
const showMenu=(toggleId,navId)=>{
    const toggle=document.getElementById(toggleId),
    nav=document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show')
        });
    }
}
showMenu('nav_toggle','nav_menu')

//active & remove active

const navLink=document.querySelectorAll('.nav_link')
navLink.forEach(n=> n.classList.remove('active'))
function linkAction(){
    navLink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    const navMenu=document.getElementById('nav_menu')
    navMenu.classList.remove('show')
}

navLink.forEach(n=>n.addEventListener('click', linkAction))

//email functioning
function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,


    }
    const serviceId="service_nw05a9i";
const templateId="template_5yk5r9n";
emailjs
.send(serviceId,templateId,params)
    .then(
        res =>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            alert("Message Sent Successfully")
        }
    )
.catch((err)=> console.log(err))
}
