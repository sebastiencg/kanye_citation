let lancer= document.querySelector('.lancer')
let citation= document.querySelector('.citation');

lancer.addEventListener('click',()=>{
    fetch('https://api.kanye.rest/')
        .then((citation)=>(citation.json()))
        .then(citationDeserialisee=>{
            citation.innerHTML=citationDeserialisee.quote
        })
})