//pagina 1 - index

var modal = document.getElementById('myModal');


var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    modal.style.display = "none";
}


// pagina dois - next



// Loop 30 times:
for (var i = 0; i < 30; i++) {
    // Create a circle shaped path at a random position
    // in the view:
    var path = new Path.Circle({
        center: Point.random() * view.size,
        radius: 25,
        fillColor: 'black',
        strokeColor: 'white'
    });

    // When the mouse is pressed on the item, remove it:
    path.onMouseDown = function(event) {
        this.remove();
    }
}