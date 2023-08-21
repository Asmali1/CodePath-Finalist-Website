//Used for dark/light mode
const toggle = document.getElementById('toggleDark');
const body = document.querySelector('body');
var icon=document.getElementById("toggleDark");
icon.classList.toggle("dark-theme")
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");

}
toggle.set
toggle.addEventListener('click', function(){
    
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }else{
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }
});
// accesses tab links in biography section
    var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab")
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }

//side menu for mobile screens
    var sidem=document.getElementById("sidemenu");
    function openmenu(){
        sidem.style.right="0";

    }
    function closemenu(){
        sidem.style.right="-200px";
    }
//contact form
  const scriptURL = 'https://script.google.com/macros/s/AKfycbzrorP9bRKFegT1JJlsWSeBJT8n2s-F-PPbP7uSkD6zsXkrCNTOPPGfh1whaRm_qL6O/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML="";
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

 
    