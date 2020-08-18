$(document).ready(function(){
	var kaisPage= '<h1 class="RA"> </h1><img id="imgg"src="" width="1300">'

$("#res").click(function(){	

	var n=$("#numPer").val()
	console.log( typeof n)
    if(parseInt(n)<8){
    	console.log("fff")
    	$("body").html("")
    	$(kaisPage).appendTo($("body"))
        $(".RA").append("Reservation Approved")
        $("#imgg").attr("src","validee.jpg")
    }else{
        $("body").html("")
    	$(kaisPage).appendTo($("body"))
        $(".RA").append("No Place!! Choose Another")
         $("#imgg").attr("src","croi rouge.jpg")
    }

})

})



