const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');


//transition of page when i click a button
function pageTransition() {
    for(let i=0;i<sectBtn.length;i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn')
            currentBtn[0].className = currentBtn[0].className.replace('active-btn','')
            this.className += ' active-btn'
        });
    }

    //activate and access content

    allSections[0].addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id) {
            //remove selected 
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })
            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
    //toggle between dark and bright theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click',() => {
        let element = document.body
        element.classList.toggle('light-mode')
    });
}

function submitform(){
    alert(`Query Submitted !`);
    window.onbeforeunload = function(e) {
    // For IE and Firefox 
    if (e) {
        e.returnValue = message;
    }
    // For Safari
    return message;
    };
}


 pageTransition();

