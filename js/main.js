Main = {};
Main.WordArry = [];
Main.WordUArry = [];

Main.Lives = 4;
Main.NumInWordBank = Words.Length;

Main.Word = "test";
Main.WordU = "";

// Funtions Start Here

Main.PullWord = function(){
    Main.Word = Words.List[(Math.floor(Math.random()*Main.NumInWordBank))];
}

Main.SetUnderline = function(){
    Main.PullWord();
    for(i=0; i<Main.Word.length; i++){
        Main.WordArry[i] = Main.Word.charAt(i);
        Main.WordUArry[i] = "_";
    }
    Main.WordU = Main.WordUArry.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;
    document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter){
    Main.changes = 0;
    for(i=0; i<Main.Word.length; i++){
        Main.WordArry[i] =Main.Word.charAt(i);
        if(Main.Word.charAt(i) == letter){
            Main.WordUArry[i] = letter;
            Main.changes += 1;
        }
    }

    if(Main.changes < 1){
        Main.Lives -=1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }

    Main.WordU= Main.WordUArry.join("");
    document.getElementById("WORD").innerHTML = Main.WordU;

    Main.Word1 = Main.WordArry.join("");
    Main.Word2 = Main.WordUArry.join("");

    if(Main.Word1 == Main.Word2){
        alert("You Won! Loading A New Word");
        window.location.reload();
    }

    if(Main.Lives < 1){
        document.getElementById("WORD").innerHTML ==Main.Word1;
        alert("You Have Run Out Of Lives, Please Try Again.");
        window.location.reload();
    }
}

Main.PullWord();
Main.SetUnderline();