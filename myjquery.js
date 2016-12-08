$(document).ready(function(){
    $("input[type=checkbox]").click(function(){
     if($(this).is(":checked"))
     {$(this).next().addClass("tachar");}else {
         $(this).next().removeClass("tachar");
       }

    });
  });
