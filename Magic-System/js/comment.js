
	var a = true;
	$(".topLeft .aaaa i").click(function(){
		console.log(111111111)
		if(a ==true){
			$(".topLeft div").stop(true).animate("height", "200px");
			a=false;
		}else{
			$(".topLeft div").stop(true).animate("height", "0");
			a=true;
		}
				
	})
	
	
