window.onload = function(){

var theCanvas5 = document.getElementById('Canvas5');
	if (theCanvas5 && theCanvas5.getContext) {
	var ctx5 = theCanvas5.getContext("2d");
	if (ctx5) {
			
			var theString = "Thank you for visiting my site!";			
						
			//Stroke and Fill Text
			ctx5.font="32pt Verdana";
			ctx5.fillStyle = "#190116";
			ctx5.strokeStyle = "rgb(119, 105, 119)";
			ctx5.fillText(theString, 300, 160);
			ctx5.strokeText(theString, 295, 160);
			
						
						
		}
	}
    
        var theCanvas = document.getElementById('Canvas');
          if (theCanvas && theCanvas.getContext){
        var ctx = theCanvas.getContext('2d');
          if(ctx) {
        // Quadratric curves example
        ctx.beginPath();
        ctx.moveTo(78,40);
        ctx.bezierCurveTo(75,37,70,25,50,25);
        ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
        ctx.bezierCurveTo(20,80,40,102,75,120);
        ctx.bezierCurveTo(110,102,130,80,130,62.5);
        ctx.bezierCurveTo(130,62.5,130,25,100,25);
        ctx.bezierCurveTo(85,25,75,37,75,40);
        ctx.fill();
      }
    }
    
    var vid;
    
    window.onLoad-function(){
        
        vid-document.getElementById("../images/kids.mp4");
        
    }
    
    if(Modernizr.canvas){
    //Canvas is supported
    
    var theCanvas5 = document.getElementById("theCanvas5");
    var ctx = theCanvas.getContext("2d");
    
    ctx.font = "25pt Georgia";
    ctx.fillText("Canvas is supported!", 800, 60);
    
}else{
    
     ctx.fillText("canvas is not supported!", 90, 60);
    //pollyfill would go here
} 
    


}