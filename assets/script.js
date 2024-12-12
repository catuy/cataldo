$(document).ready(function(){
  $("img").each(function() {
      $(this).wrap("<div class='image-wrap'></div>");
      $('<div class="wrap-header"></div>').insertBefore(this);
  });
  $("video").each(function() {
      $(this).wrap("<div class='image-wrap'></div>");
      $('<div class="wrap-header"></div>').insertBefore(this);
  });
  $("iframe").each(function() {
    $(this).wrap("<div class='image-wrap'></div>");
    $('<div class="wrap-header"></div>').insertBefore(this);
});
  let i = 0;
  $(".image-wrap").mousedown(function() {
      i++;
      $(this).draggable();
      $(this).css("z-index", i + 1);
  });
  // Hide all divs
  $(".image-wrap").hide();
  // Keep track of which div to show next
  var divIndex = 0;
  $("body").click(function(event) {
      // Get the click coordinates
      var x = event.pageX;
      var y = event.pageY;
      // Show the next div
      $(".image-wrap").eq(divIndex).show();
      i++;
      $(".image-wrap").eq(divIndex).css({
          "z-index": i + 1,
          // Center the div on the click coordinates
          "left": x - ($(".image-wrap").eq(divIndex).width() / 2),
          "top": y - ($(".image-wrap").eq(divIndex).height() / 2)
      });
      $(".image-wrap").eq(divIndex).draggable();
      // Agregamos el div para contener el número consecutivo
      var numConsecutivo = $("<div class='num-consecutivo'></div>");
      numConsecutivo.html('[' + (divIndex + 1) + '/' + $(".image-wrap").length + ']');
      $(".image-wrap").eq(divIndex).append(numConsecutivo);
      // Increment the div index
      divIndex++;
       // Verifica si se han mostrado todas las imágenes y videos
       if (divIndex >= $(".image-wrap").length) {
        $("body").css("cursor", "default");
      }
  });
  $(body).css("cursor", "pointer");
  $(".image-wrap").hover(function() {
    if (divIndex < $(".image-wrap").length) {
      $(this).css("cursor", "move");
    } else {
      $(this).css("cursor", "move");
    }
  });
  
});

document.querySelectorAll('.main-content-home p a').forEach(link => {
  const img = link.querySelector('img');

  link.addEventListener('mouseenter', () => {
    if (img) {
      img.style.display = 'block'; // Asegura que la imagen se muestre
    }
  });

  link.addEventListener('mouseleave', () => {
    if (img) {
      img.style.display = 'none'; // Esconde la imagen al salir del enlace
    }
  });

  link.addEventListener('mousemove', (event) => {
    if (img) {
      img.style.left = `${event.clientX + 10}px`; // Desplazamiento horizontal
      img.style.top = `${event.clientY + 10}px`; // Desplazamiento vertical
    }
  });
});

