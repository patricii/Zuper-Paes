function pesquisar(){

    var input, filtro, menu, menuItens, links;

    input = document.getElementById("pesquisa");
    filtro = input.value.toUpperCase();
    menu = document.getElementById("catalogo");
    menuItens = menu.getElementsByClassName("card-item");

    for(var i = 0 ; i <= menuItens.length ; i++)
    {
        links = menuItens[i].getElementsByTagName("h3")[0];
        if(links.innerHTML.toUpperCase().indexOf(filtro) >-1){
            menuItens[i].style.display = "";
        }
        else{
            menuItens[i].style.display = "none";
        }
    }
}