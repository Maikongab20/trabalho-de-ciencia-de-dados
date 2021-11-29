var dados = document.getElementById('dados');
var exibir = document.getElementById('exibir');
var question = document.getElementById('question');
var per = 1;
function Enviar(){

    switch (per){

        case 1:{

            if(dados.value == 0){
                per =2;
                question.innerHTML = "o animal posui barbatana ? 1 para sim e 0 para não ";
            }
            else
            if(dados.value == 2){
                per = 3;
                question.innerHTML = "o animal possui pelos? 1 para sim e 0 para não ";
            }
            else
            if(dados.value == 4){
                per =4;
                question.innerHTML = "o animal é maminfero? 1 para sim e 0 para não";
            }
            else
            if(dados.value == 6){
                per = 5;
                question.innerHTML = "o animal é aquatico? 11para sim e 0 para não";
            }
            else
            if(dados.value == 8){
                per =9;
            }

        } break;
        
        case 2:{
            
            
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opação";
            }
            else{
                if(dados.value == 1){
                    per = 7;
                    question.innerHTML = "o animal bota ovos? 1 para sim e 0 para não";
                }
                else{
                    per = 6;
                    question.innerHTML = "o animal possui dentes? 1 para sim e 0 para não";
                }
            }
               
        } break;

        case 3:{

            
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opção";
            }
            else
            if(dados.value == 1){
                exibir.innerHTML = "o animal é um mamifero";
                document.body.style.backgroundImage = "url('./img/animais mamifero.png')";
            }
            else{
                exibir.innerHTML = "o animal é um passaro";
                document.body.style.backgroundImage = "url('./img/animais passaros.png')";
            }
        }break;

        case 4:{

            
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opção";
            }
            else
            if(dados.value == 1){
                exibir.innerHTML = "o animal é um mamifero";
                document.body.style.backgroundImage = "url('./img/animais mamifero.png')";
            }
            else{
                per =8
                question.innerHTML = "o animal é aquatico? 1 para sim e 0 para não"
            }
        }break;

        case 5:{
            
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opção";
            }
            else
            if(dados.value == 1){
                exibir.innerHTML = "o animal é um invertebrado";
                document.body.style.backgroundImage = "url('./img/animais invertebrados.png')";
            }
            else{
                exibir.innerHTML = "o animal é um inseto";
                document.body.style.backgroundImage = "url('./img/animais inseto.png')";
            }
        }break;

        case 6:{
            
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opção";
            }
            else
            if(dados.value == 1){

                exibir.innerHTML = "o animal é um reptil";
                document.body.style.backgroundImage = "url('./img/animais repteis.png')";
            }
            else{
                exibir.innerHTML = "o animal é invertebrado";
                document.body.style.backgroundImage = "url('./img/animais invertebrados.png')";
            }
        }break;

        case 7:{
            
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opção";
            }
            else
            if(dados.value == 1){
                exibir.innerHTML = "o animal é um peixe";
                document.body.style.backgroundImage = "url('./img/animais peixes.png')";
            }
            else{
                exibir.innerHTML = "o animal é um mamifero";
                document.body.style.backgroundImage = "url('./img/animais mamifero.png')";
            }
        }break;

        case 8:{
            if(dados.value == ' '){
                exibir.innerHTML = "escolha uma opção";
            }
            else
            if(dados.value == 1){
                exibir.innerHTML = "o animal é um amfibio";
                document.body.style.backgroundImage = "url('./img/animais anfibios.png')";
            }
            else{
                exibir.innerHTML = "o animal é um reptil";
                document.body.style.backgroundImage = "url('./img/animais repteis.png')";
            }
            
        }break;

        case 9:{
            exibir.innerHTML = "o animal é um ivertebrado";
            document.body.style.backgroundImage = "url('./img/animais invertebrados.png')";
        }
        
    }
    
}