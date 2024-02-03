var guess=[]
var sequence=[];
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function start(){
    sequence.forEach(element=>{
        document.getElementById(element).style="";
    })
    for(let element of document.getElementsByClassName("tile")){
        element.addEventListener('click',()=>{select(element)})

    }
    sequence=[]
    var i=0;
    while(i<3){
        var random_number=getRandomInt(9);
        if (!sequence.includes()){
            sequence.push(random_number);
            i++;
            document.getElementById(random_number).style=`animation: blink 0.5s ease-in-out; animation-delay: ${i*0.5}s`
        }
    }
    console.log(sequence)
}
function load_data(){
    var content=document.getElementById("board")
    for(let i=0;i<9;i++){
        content.innerHTML+=`<div id="${i}" class="tile"><div>`
    }
}  
function select(caller){
    var selected=document.getElementById(caller.id)
    selected.className="tile selected"
    guess.push(caller.id)
    check()
}
function check(){
    for(let i=0;i<guess.length;i++){
        if(guess[i]!=sequence[i]){
            document.body.style="background-color:red";
        }
    }

}

load_data();
document.getElementById("start_button").addEventListener('click',start)