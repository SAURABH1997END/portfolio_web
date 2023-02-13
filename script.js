console.log("hlw god");

document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", ()=>{ // ai linetar mana ho6a keu jodi hamburgera click kora tahola .........   .sidebar class ay use kora (.sidebargo) clicik korla open r close hoba ...
    document.querySelector('.sidebar').classList.toggle('sidebargo');


        if(document.querySelector('.sidebar').classList.contains('sidebargo')){
            document.querySelector('.ham').style.display ='inline'; // atar mana ham ka dakhabo
            document.querySelector('.cross').style.display ='none'; // Atar Mana H6a Cross ka Dkhabo


        }

        else{
            document.querySelector('.cross').style.display ='inline'; // atar mana Cross ka dakhabo

            setTimeout(() => { // setTimeout function use kora mana ho6a hamburgera click korla cross png ta 100milisecond pora show korba ...
                document.querySelector('.ham').style.display ='none'; // Atar Mana H6a ham ka Dkhabo
            }, 100);
            
            
   
        }
})


function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}