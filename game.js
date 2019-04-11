var p = 1;
var cells = [];  
for (var i = 1; i < 10; i++) {
    cells[i] = {
        click: false,
        player: 0
    };
}
function cellClick(cell) {
    var m = document.getElementById("message");
    m.innerHTML = "";
    var c = cell.getAttribute("id");
    c = parseInt(c[c.length - 1]);
    if (cells[c].click == false) {
        str = "cell" + String(c);
        cells[c].click = true;
        cells[c].player = p;
        if (p == 1) {
            var ce = document.getElementById(str);
            ce.innerHTML = "X";
            p = 2;
        } else if (p == 2) {
            var ce = document.getElementById(str);
            ce.innerHTML = "O";
            p = 1;
        }
    } 
    else {
        var m = document.getElementById("message");
        m.innerHTML = "It's already clicked";
    }
    checkWin(cells);
}
function checkWin(cells) {
    var tb = document.getElementById("tb");
    if(cells[1].player!=0 && cells[1].player==cells[2].player && cells[2].player==cells[3].player){
        gameOver(cells[1].player, cells);
    }
    else if(cells[4].player!=0 && cells[4].player==cells[5].player && cells[5].player==cells[6].player){
        gameOver(cells[4].player, cells);
    }
    else if(cells[7].player!=0 && cells[7].player==cells[8].player && cells[8].player==cells[9].player){
        gameOver(cells[7].player, cells);
    }
    else if(cells[1].player!=0 && cells[1].player==cells[4].player && cells[4].player==cells[7].player){
        gameOver(cells[1].player, cells);
    }
    else if(cells[2].player!=0 && cells[2].player==cells[5].player && cells[5].player==cells[8].player){
        gameOver(cells[2].player, cells);
    }
    else if(cells[3].player!=0 && cells[3].player==cells[6].player && cells[6].player==cells[9].player){
        gameOver(cells[3].player, cells);
    }
    else if(cells[1].player!=0 && cells[1].player==cells[5].player && cells[5].player==cells[9].player){
        gameOver(cells[1].player, cells);
    }
    else if(cells[3].player!=0 && cells[3].player==cells[5].player && cells[5].player==cells[7].player){
        gameOver(cells[3].player, cells);
    }
    else{
        var tie = true;
        for(var i=1; i<10; i++){
            if(cells[i].click==false){
                tie = false;
            }
        }
        if(tie){
            gameOver(0, cells);
        }
    }
}
function gameOver(player, cells){
    if(player!=0){
        for(var i=1; i<10; i++){
            cells[i].click=true;
        }
        var m = document.getElementById("message");
        m.innerHTML = "Game Over!" + " Player " + player + " Won!";
        var b = document.getElementById("startOver");
        b.style.display="initial";
    }
    else{
        var m = document.getElementById("message");
        m.innerHTML = "Game Over! No One Won!";
        var b = document.getElementById("startOver");
        b.style.display="initial";
    }
}
function startOver(){
    location.reload();
}