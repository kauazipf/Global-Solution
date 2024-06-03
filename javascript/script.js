function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}



function publicar(){
    document.getElementById("form-artigos").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var title = document.getElementById("title").value;
    var content = document.getElementById("content").value;
    
    var articleElement = document.createElement("div");
    articleElement.classList.add("article");
    articleElement.innerHTML = "<h2>" + title + "</h2><p>" + content + "</p>";
    
    document.getElementById("articles").appendChild(articleElement);
    
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
});
}