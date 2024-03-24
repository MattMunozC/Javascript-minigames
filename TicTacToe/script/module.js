board=document.getElementById("board");
var turn=true
for(let i=0;i<9;i++){
    let tile=document.createElement("div")
    tile.className="tile"
    tile.setAttribute("id",`tile${i}`)
    tile.setAttribute("valx",parseInt(i/3)+1)
    tile.setAttribute("valy",parseInt(i%3)+1)
    tile.setAttribute("empty",true)
    tile.addEventListener("click",(event)=>{
        let source=event.target
        let src=turn?"cross":"circle"
        if (source.getAttribute("empty")){
            source.innerHTML=`<img class='move ${src}'src='./TicTacToe/assets/${src}.svg'>`
            turn=!turn;
            let check=document.getElementsByClassName(src)
            let valuesx=Array.from(check).map(element=>element.parentElement.getAttribute("valx"))
            let valuesy=Array.from(check).map(element=>element.parentElement.getAttribute("valy"))
            !turn?console.log(valuesx,valuesy):NaN;
            for(let j=0;j<3;j++){
                let wonx=valuesx.filter(val=>val==(j+1).toString()).length==3?true:false;
                let wony=valuesy.filter(val=>val==(j+1).toString()).length==3?true:false;
                if (wonx || wony){
                    console.log(`${src} won`)
                }
            }
        }else{
            console.log("tile already on use")
        }
        
    })
    board.appendChild(tile)
}

