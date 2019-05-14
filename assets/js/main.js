var id = 1;

function incId() {
  id++;
  if(id > 3) {id = 1;}
}
function decId() {
  id--;
  if(id < 1) {id = 3;}
}

function showImage(id, show) {
  if(id > 3) {id = 1;}
  if(id < 1) {id = 3;}

  if(show)
    $("#slideshow-image-" + id).show();
  else 
    $("#slideshow-image-" + id).hide();
}

$(document).ready(function() {
    showImage(1, true);
    showImage(2, false);
    showImage(3, false);

  $("#arrow-left").click(function() {
    decId();
    showImage(id - 1, false);
    showImage(id, true);
    showImage(id + 1, false);
  })
  $("#arrow-right").click(function() {
    incId();
    showImage(id - 1, false);
    showImage(id, true);
    showImage(id + 1, false);
  })
})