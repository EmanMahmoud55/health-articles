var article= document.querySelectorAll("article");
var descripe=document.querySelectorAll("description");




$(".article").click(function(){
	$(".box").animate({height:window.innerHeight},500)
	
  $(".article-container").fadeIn(1000,function(){
$(".description").fadeIn(1000,function(){
$(".articles").css("overflow","auto",);		
	
})	  
	  
  });

$(this).clone().appendTo($(".box"));	
console.log($(this));
	
		
	
	
})

$(".item").click(function(){
	$(".box").animate({height:window.innerHeight},500)
	$(".box").animate({width:window.innerWidth},500)
  $(".article-container").fadeIn(1000,function(){
$(".description").fadeIn(1000,function(){
$(".articles").css("overflow","auto",);		
	
})	  
	  
  });

$(this).clone().appendTo($(".box"));
	console.log($(this))

	
		
	
	
})





$("#close").click(function(){
	
 $(".article-container").fadeOut(1000,);
	$(".description").css("display","none");
	$(".box").empty();
	
})
document.addEventListener("keydown",function(e){
						  
	if(e.keyCode==27)
		{
		$(".article-container").fadeOut(1000,);
	$(".description").css("display","none");
		
		$(this).remove();	
		}
		
						  })