let header = document.getElementById("header") // puxa o id do meu header 

onscroll = function(){ //o oncroll serve para quando deslizamos a barra de scroll fazer determimnada coisa 
    if(document.body.scrolltop > 50 || document.documentElement.scrollTop > 50){ // verifica se a barra de rolagem passou de 50px caso passar ficar da cor black
                                                                                //os dois document serve para caso um nao pegar o outro vai
        header.style.backgroundColor = "black" //caso funciona ficar da cor black
    } else{
        header.style.backgroundColor = "transparent" //caso for menor que 50px volta para a cor normal.
    }
}

