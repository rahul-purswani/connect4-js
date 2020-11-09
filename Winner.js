let hor= ["1","2","3","4","8","9","10","11","15","16","17","18","22","23","24","25","29","30","31","32","36","37","38","39"];
let dia1=["1","2","3","4","8","9","10","11","15","16","17","18"];
let dia2=["4","5","6","7","11","12","13","14","18","19","20","21"];

//To check if the player won in vertical direction
function verticalWin(){
    for(var i = 1; i<22; i++){
        let down_one=(i)+7;
        let down_two=(i)+14;
        let down_three=i+21;
        if(document.getElementById(i).classList.contains("player"+player) && document.getElementById(down_one).classList.contains("player"+player) && document.getElementById(down_two).classList.contains("player"+player) && document.getElementById(down_three).classList.contains("player"+player)){
            document.getElementById(i).classList.remove("player"+player);
            document.getElementById(down_one).classList.remove("player"+player);
            document.getElementById(down_two).classList.remove("player"+player);
            document.getElementById(down_three).classList.remove("player"+player);

            document.getElementById(i).classList.add("winner");
            document.getElementById(down_one).classList.add("winner") ;
            document.getElementById(down_two).classList.add("winner");
            document.getElementById(down_three).classList.add("winner");
            return true;
        }
    }
    return false;
}
//To check if the player won in horizontal direction
function horizontalWin(){
    for(var i = 0; i<hor.length; i++){
        let target=hor[i];
        let right_one=parseInt(target)+1;
        let right_two=parseInt(target)+2;
        let right_three=parseInt(target)+3;
        if(document.getElementById(target).classList.contains("player"+player) && document.getElementById(right_one).classList.contains("player"+player) && document.getElementById(right_two).classList.contains("player"+player)&& document.getElementById(right_three).classList.contains("player"+player)){
            
            document.getElementById(target).classList.remove("player"+player);
            document.getElementById(right_one).classList.remove("player"+player);
            document.getElementById(right_two).classList.remove("player"+player);
            document.getElementById(right_three).classList.remove("player"+player);

            document.getElementById(target).classList.add("winner");
            document.getElementById(right_one).classList.add("winner") ;
            document.getElementById(right_two).classList.add("winner");
            document.getElementById(right_three).classList.add("winner");
            return true;
        }
    }
    return false;
}
//To check if the player won in diagonal direction
function diagonalWin(){
    for(var i = 0; i<dia1.length; i++){
        let target_dia1=dia1[i];
        let dia1_right_one=parseInt(target_dia1)+1+7;
        let dia1_right_two=parseInt(target_dia1)+2+14;
        let dia1_right_three=parseInt(target_dia1)+3+21;
        if(document.getElementById(target_dia1).classList.contains("player"+player) && document.getElementById(dia1_right_one).classList.contains("player"+player) && document.getElementById(dia1_right_two).classList.contains("player"+player)&& document.getElementById(dia1_right_three).classList.contains("player"+player)){
           
            document.getElementById(target_dia1).classList.remove("player"+player);
            document.getElementById(dia1_right_one).classList.remove("player"+player);
            document.getElementById(dia1_right_two).classList.remove("player"+player);
            document.getElementById(dia1_right_three).classList.remove("player"+player);

            document.getElementById(target_dia1).classList.add("winner");
            document.getElementById(dia1_right_one).classList.add("winner") ;
            document.getElementById(dia1_right_two).classList.add("winner");
            document.getElementById(dia1_right_three).classList.add("winner");
            return true;
        }
    }
    for(var i = 0; i<dia2.length; i++){
        let target_dia2=dia2[i];
        let dia2_left_one=parseInt(target_dia2)-1+7;
        let dia2_left_two=parseInt(target_dia2)-2+14;
        let dia2_left_three=parseInt(target_dia2)-3+21;
        if(document.getElementById(target_dia2).classList.contains("player"+player) && document.getElementById(dia2_left_one).classList.contains("player"+player) && document.getElementById(dia2_left_two).classList.contains("player"+player)&& document.getElementById(dia2_left_three).classList.contains("player"+player)){
           
            document.getElementById(target_dia2).classList.remove("player"+player);
            document.getElementById(dia2_left_one).classList.remove("player"+player);
            document.getElementById(dia2_left_two).classList.remove("player"+player);
            document.getElementById(dia2_left_three).classList.remove("player"+player);

            document.getElementById(target_dia2).classList.add("winner");
            document.getElementById(dia2_left_one).classList.add("winner") ;
            document.getElementById(dia2_left_two).classList.add("winner");
            document.getElementById(dia2_left_three).classList.add("winner");
            return true;
        }
    }
    return false;
}
//To check if a player won
function checkWinner(){
    let a= (verticalWin());
    let b= (horizontalWin());
    let c= (diagonalWin());
    if(a || b || c){
        alert("Congratulations! Player " + player + " Won");
        setTimeout(function(){location.reload()}, 1000);
    } 

    
}
