$(document).ready(function() {



  $('nav a').click(function(event) {
    event.preventDefault();
    var relatedClass = "." + $(this).attr('rel');

    $(this).closest("li").siblings().removeClass("activeNav");
    $(this).closest("li").addClass("activeNav");
    $(relatedClass).siblings().removeClass("active");
    $(relatedClass).addClass('active');

    console.log(relatedClass);

    if(relatedClass === "AlbumGallery_Wrapper") {
      $('aside').hide();
    } else {
      $('aside').show();
    };

  });


$ ('.Albumphoto').on ('click', 'img', function(event) {
  event.preventDefault();
  $(this).toggleClass("detailView");

  if ($(this).hasClass('detailView')) {
    $('aside').hide();
    $(this).first().parent().siblings().hide();
  } else {
    $('aside').show();
    $(this).first().parent().siblings().show();
  };

});


});
