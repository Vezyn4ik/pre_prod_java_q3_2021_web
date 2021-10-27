// Работа с формой (изменения картинки при выборе категории)
$('#category').on('change', function() {
var num = $(this).children("option:selected").val();
    if(num==1)
        {
            $("#my_image").attr("src","images/img.png");
        }
    else if(num==2)
    {  
        $("#my_image").attr("src","images/not.png");
    }
    else if(num==3)
    {
        $("#my_image").attr("src","images/tech.png");
    }
    else if(num==4)
    {
        $("#my_image").attr("src","images/el.png");
    }
    else if(num==5)
    {
        $("#my_image").attr("src","images/foot.png");
    }
    else{
        $("#my_image").attr("src","");
    }
});

//Приветствие при введении имени
$('#name').on('change', function() {
var inp = $("#name").val();
    if(inp=='')
        {
            $("#item6").hide('slow');
        }    
    else{
        $("#item6").show('slow');
        $('#item6').text('Добро пожаловать,'+inp);
    }
});



//Сокрытие элементов
$('#but').on('click', function() {
    if ($('#frs').is(':hidden'))
        {
            $('#but').text('Скрыть');
            $("#frs").show('slow');
        }
    else
    {
        $('#but').text('Посмотреть все товары');
            $("#frs").hide('slow');
    }
        
});
 
//Карусель для товаров
$(document).on('click', ".carousel-button-right",function(){ 
	var carusel = $(this).parents('.carousel');
	right_carusel(carusel);
	return false;
});
$(document).on('click',".carousel-button-left",function(){ 
	var carusel = $(this).parents('.carousel');
	left_carusel(carusel);
	return false;
});
function left_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items .carousel-block").eq(-1).clone().prependTo($(carusel).find(".carousel-items")); 
   $(carusel).find(".carousel-items").css({"left":"-"+block_width+"px"});
   $(carusel).find(".carousel-items .carousel-block").eq(-1).remove();    
   $(carusel).find(".carousel-items").animate({left: "0px"}, 200); 
   
}
function right_carusel(carusel){
   var block_width = $(carusel).find('.carousel-block').outerWidth();
   $(carusel).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 200, function(){
	  $(carusel).find(".carousel-items .carousel-block").eq(0).clone().appendTo($(carusel).find(".carousel-items")); 
      $(carusel).find(".carousel-items .carousel-block").eq(0).remove(); 
      $(carusel).find(".carousel-items").css({"left":"0px"}); 
   }); 
}
//Автоматическая прокрутка
$(function() {
	auto_right('.carousel:first');
})
function auto_right(carusel){
	setInterval(function(){
		if (!$(carusel).is('.hover'))
			right_carusel(carusel);
	}, 3000)
}
// При наведении курсора на панель убирается автоматическая прокрутка 
$(document).on('mouseenter', '.carousel', function(){$(this).addClass('hover')})
$(document).on('mouseleave', '.carousel', function(){$(this).removeClass('hover')})

// Автоматическая прокрутка для slider
function right_carusel_s(slider){
   var block_width = $(slider).find('.carousel-block_s').outerWidth();
   $(slider).find(".carousel-items").animate({left: "-"+ block_width +"px"}, 1000, function(){
	  $(slider).find(".carousel-items .carousel-block_s").eq(0).clone().appendTo($(slider).find(".carousel-items")); 
      $(slider).find(".carousel-items .carousel-block_s").eq(0).remove(); 
      $(slider).find(".carousel-items").css({"left":"0px"}); 
   }); 
}

$(function() {
	auto_right_s('.slider:first');
})

function auto_right_s(slider){
	setInterval(function(){
			right_carusel_s(slider);
	}, 5000)
}


$(function Slider(){
    var width = 330;
    var margin_right = 10;
    var n = 3;
    var step=width + margin_right;
    var slider_box_width=n*step-margin_right;
    var $col_img=$("#slider_box>div>img").length;
    var col_main_left=0;
    var max_col_main_left=$col_img*step;

    $("#slider_box").width(slider_box_width);
    $("#slider_box>div>img").width(width).css("margin-right",margin_right);
   
});
