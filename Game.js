let currentPlayer = document.getElementById("current");
let player=1;
let glob_click=0;

for(var m =1; m<43; m++){
    document.getElementById(m).classList.add("ini");
}
//The main funtion that is responsible for when the user clicks on the grid and takes the game forward.
function play(click){
    if(movement(click)){
        selected=document.getElementById(glob_click);
        console.log(glob_click);
        selected.classList.remove("ini");
        selected.classList.add("player"+player);
        if(glob_click>7){
            let opener=glob_click-7;
            document.getElementById(opener).classList.add("accept");
        }
        checkWinner();
        let full_check=0;
        for(var m =1; m<43; m++){
            if(block_check(m))
            {
                full_check=full_check+1;
            }

        }
        if(full_check==42){
            alert("It's a tie");
            location.reload();
        }
        if(player==1){
            player=2;
            currentPlayer.innerHTML=2;
            return
        }
        if(player==2){
            player=1;
            currentPlayer.innerHTML=1;
            return
        }
    }
    else{
        alert("Invalid move!! The column is full.");
    }
}

//To check if a div is occupied
function block_check(id){
    if(document.getElementById(id).classList.contains("player2") || document.getElementById(id).classList.contains("player1")){
        return true;
    }
    else{
        return false;
    }
}
//TO find the correct placement of the chip
function movement(id){
    if(block_check(id)==false)
    {
        var a = parseInt(id);
        var b = 42-a;
        while((b>=7) && block_check(a+7)==false)
        {    
             a = a + 7;
             b = 42-a;
        }
        glob_click=a;
        return true
    }
    else{
        var c = parseInt(id);
        let d=c-7;
        if(d>7){
            while((d>7) && block_check(d)==true)
            {    
                 d = d - 7;
            }
            console.log(d);
            if(block_check(d)==false){
                glob_click=d;
                return true;
            }
            else{
                return false
            }  
        }
        else if(d<8 && d >0){
            if(block_check(d)==false){
                glob_click=d;
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }

    }
}
