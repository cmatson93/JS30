// const topWords = document.getElementsByClassName("top");
// for (let i=0;i<topWords.length; i++){
//     topWords[i].style.height = '0px'
// }

// const bottomWords = document.getElementsByClassName("bottom");
// for (let i=0;i<bottomWords.length;i++){
//     bottomWords[i].style.height = '0px';
// }


function clickHandler(){
    console.log(this);
    console.log("CLICK HANDLER");
    var pannelNum = this.getAttribute('id');
    console.log(pannelNum);


    const pannel = document.getElementById(pannelNum);
    // const words = document.getElementsByClassName(pannelNum);
    // for(let i=0;i<words.length;i++){
        if (!pannel.classList.contains('open')){
            pannel.style['flex-grow'] = '2';
            console.log("closed");
            pannel.classList.add('open');
        } else {
            pannel.style['flex-grow'] = '1';
            pannel.classList.remove("open");
            console.log("open")
        }
    

    
}

const pannels = document.getElementsByClassName("pannel");
for(let i=0;i<pannels.length;i++){
    pannels[i].onclick = clickHandler;
}
