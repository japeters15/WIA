/*
     Name:Janay Peters
     Date:03/01/2016
     Class & Section:  WIA333-O
     Comments: "HTML5 Canvas Drawing"
 */   

/*
Modernizr
*/

window.onload = function(){
    
    if(Modernizr.canvas){
    //Canvas is supported
    
    var theCanvas = document.getElementById("Canvas1");
    var ctx = theCanvas.getContext("2d");
    
    ctx.font = "25pt Georgia";
    ctx.fillText("Canvas is supported!", 90, 60);
    
}else{
    
     //canvas is not supported
    //pollyfill would go here
} 

/*
PART 1- Rectangle
*/

				var theCanvas = document.getElementById("Canvas1");
				if (theCanvas && theCanvas.getContext) {
				var ctx = theCanvas.getContext("2d");
				//theCanvas.width = 150;
				//theCanvas.height = 150;

					if(ctx){

						ctx.strokeStyle = "black";
						ctx.fillStyle = "blue";
						ctx.lineWidth = "10";

						//Draw rectangle
                        //strokeRect(posX, posY, Width, Height)
						ctx.strokeRect(0, 0,50, 100);
						ctx.fillRect(0, 0,50,100);

						//Clearing a rectangle
						//ctx.clearRect(15, 75, 450, 50);
					}
				}
			          

/*
PART 2- Circle
*/

 var theCanvas2 = document.getElementById("Canvas2");
				//theCanvas.width = 150;
				//theCanvas.height = 150;

				if(theCanvas2 && theCanvas2.getContext) {
					//Get context
					var ctx2 = theCanvas2.getContext("2d");

					if(ctx2){
                        
                        ctx2.strokeStyle= "black";
						ctx2.fillStyle = "red";
						ctx2.lineWidth = 5;
                        
                        //Full Circle
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
						
						ctx2.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx2.arc(50, 50, 20, 0, radians);
						ctx2.fill();
						ctx2.stroke();
                    }
                    
                }


/*
PART 3- Star
*/
                   
var theCanvas3 = document.getElementById('Canvas3');
				if (theCanvas3 && theCanvas3.getContext) {
					var ctx3 = theCanvas3.getContext("2d");
					if (ctx3) {
						ctx3.strokeStyle = "black";
						ctx3.fillStyle= "black";
						ctx3.lineWidth = 5;
						
						ctx3.lineJoin = "miter";

						//ctx3.miterLimit = 1;

						ctx.beginPath();
						ctx3.moveTo(100,100);
						ctx3.lineTo(115,50);
						ctx3.lineTo(140,100);
                        ctx3.lineTo(200,100);
                        ctx3.lineTo(140,140);
                        ctx3.lineTo(170,190);
                        ctx3.lineTo(120,150);
                        ctx3.lineTo(80,195);
                        ctx3.lineTo(100,140);
                        ctx3.lineTo(40,110);
                        ctx3.lineTo(100,100);
						ctx3.stroke();
					
						
					}
				}


/*
PART 4- Bezier Curve
*/

    var theCanvas4 = document.getElementById('Canvas4');
	           if (theCanvas4 && theCanvas4.getContext) {
	           var ctx4 = theCanvas4.getContext("2d");
	           if (ctx4) {
				ctx4.strokeStyle = "blue";
				ctx4.lineWidth = 5;	
                   
                //quadratic curve
				ctx4.beginPath();
				ctx4.moveTo(100,100);
                   
                ctx4.beginPath();
				//arc(x,y, r, sA, eA, Clockwise or counter);
				ctx4.arc(200,190, 150, 1 * Math.PI , 2*Math.PI);
				ctx4.stroke();   
				
				//quadraticCurveTo(cx, cy, x, y)
				
				ctx4.quadraticCurveTo(300,100, 250, 200);
                ctx4.quadraticCurveTo(190,90, 150, 200);
                ctx4.quadraticCurveTo(100,90, 50, 190);
				ctx4.stroke();
				
				
		}
	}

    
/*PART 5- Text
*/


    var theCanvas5 = document.getElementById('Canvas5');
	if (theCanvas5 && theCanvas5.getContext) {
	var ctx5 = theCanvas5.getContext("2d");
	if (ctx5) {
			
			var theString = "Full Sail University";
			
			//Simple text
			ctx5.fillText(theString, 20,20);					
						
			//Stroke and Fill Text
			ctx5.font="32pt Verdana";
			ctx5.fillStyle = "white";
			ctx5.strokeStyle = "rgba(255, 106, 0, 1)";
			ctx5.fillText(theString, 20, 160);
			ctx5.strokeText(theString, 20, 160);
			
						
						
		}
	}

/*
PART 6- Pixel Manipulation
*/

//Draw images here
    var theCanvas6 = document.getElementById('Canvas6');
	if (theCanvas6 && theCanvas6.getContext) {
	var ctx6 = theCanvas6.getContext("2d");
	if (ctx6) {

			//Create a variable to hold our image
			var  srcImg = document.getElementById("img1");
			
			//Draw an image directly onto the canvas
			//ctx6.drawImage(srcImg, 0,0);

			//Draw a scaled down image
			//drawImage(srcImg, dx, dy, dw, dh)
			ctx6.drawImage(srcImg, 50, 50, 350, 250);
			
			//Draw a slice image
			//drawImage    (srcImg, sx, sy, sw, sh, dx, dy, dw, dh)
            //ctx6.drawImage(srcImg, 300, 250,800,290,100, 50,250, 200 );
				
     						
		}
	}



/*
PART 7- Putting it all together
*/

// Draw scene here
 var theCanvas7 = document.getElementById("Canvas7");
				//theCanvas.width = 150;
				//theCanvas.height = 150;

				if(theCanvas7 && theCanvas7.getContext) {
					//Get context
					var ctx7 = theCanvas7.getContext("2d");

					if(ctx7){
                        
                        ctx7.strokeStyle= "green";
						ctx7.fillStyle = "green";
						ctx7.lineWidth = 5;
                        
                        //The Circles for the flowers
						var degrees = 360;
						var radians = (degrees/180)*Math.PI;
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(180, 17, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(135, 37, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(128, 85, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
						
						ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(150, 130, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(200, 140, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(245, 120, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(250, 73, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(230, 30, 20, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        //The center circle
                        ctx7.beginPath();
                        //arc(x,y,r,sA,eA,Clockwise or counter)
						ctx7.arc(190, 75, 50, 0, radians);
						ctx7.fill();
						ctx7.stroke();
                        
                        //line
                        ctx7.strokeStyle = "green";
						ctx7.lineWidth = "5";
                        
                        ctx7.beginPath();
                        ctx7.quadraticCurveTo(200,90, 200, 300);
				        ctx7.stroke();
                        
                        //leaf
                        ctx7.lineJoin = "round";

						ctx7.beginPath();
						ctx7.moveTo(200,200);
						ctx7.lineTo(300,100);
						ctx7.lineTo(110,500);
						ctx7.stroke();
                        
                        //grass
                        ctx7.strokeStyle = "yellow";
						ctx7.fillStyle = "green";
						ctx7.lineWidth = "5";
                        
                        ctx7.strokeRect(0, 270,10, 50);
						ctx7.fillRect(0, 270,10,50);
                        
                        ctx7.strokeRect(20, 270,10, 50);
						ctx7.fillRect(20, 270,10,50);
                        
                        ctx7.strokeRect(40, 270,10, 50);
						ctx7.fillRect(40, 270,10,50);
                        
                        ctx7.strokeRect(60, 270,10, 50);
						ctx7.fillRect(60, 270,10,50);
                        
                        ctx7.strokeRect(80, 270,10, 50);
						ctx7.fillRect(80, 270,10,50);
                        
                        ctx7.strokeRect(100, 270,10, 50);
						ctx7.fillRect(100, 270,10,50);
                        
                        ctx7.strokeRect(120, 270,10, 50);
						ctx7.fillRect(120, 270,10,50);
                        
                        ctx7.strokeRect(140, 270,10, 50);
						ctx7.fillRect(140, 270,10,50);
                        
                        ctx7.strokeRect(160, 270,10, 50);
						ctx7.fillRect(160, 270,10,50);
                        
                        ctx7.strokeRect(180, 270,10, 50);
						ctx7.fillRect(180, 270,10,50);
                        
                        ctx7.strokeRect(200, 270,10, 50);
						ctx7.fillRect(200, 270,10,50);
                        
                        ctx7.strokeRect(220, 270,10, 50);
						ctx7.fillRect(220, 270,10,50);
                        
                        ctx7.strokeRect(240, 270,10, 50);
						ctx7.fillRect(240, 270,10,50);
                        
                        ctx7.strokeRect(260, 270,10, 50);
						ctx7.fillRect(260, 270,10,50);
                        
                        ctx7.strokeRect(280, 270,10, 50);
						ctx7.fillRect(280, 270,10,50);
                        
                        ctx7.strokeRect(300, 270,10, 50);
						ctx7.fillRect(300, 270,10,50);
                        
                        ctx7.strokeRect(320, 270,10, 50);
						ctx7.fillRect(320, 270,10,50);
                        
                        ctx7.strokeRect(340, 270,10, 50);
						ctx7.fillRect(340, 270,10,50);
                        
                        ctx7.strokeRect(360, 270,10, 50);
						ctx7.fillRect(360, 270,10,50);
                        
                        ctx7.strokeRect(380, 270,10, 50);
						ctx7.fillRect(380, 270,10,50);
                        
                        ctx7.strokeRect(400, 270,10, 50);
						ctx7.fillRect(400, 270,10,50);
                        
                        ctx7.strokeRect(420, 270,10, 50);
						ctx7.fillRect(420, 270,10,50);
                        
                        ctx7.strokeRect(440, 270,10, 50);
						ctx7.fillRect(440, 270,10,50);
                        
                        ctx7.strokeRect(460, 270,10, 50);
						ctx7.fillRect(460, 270,10,50);
                        
                        ctx7.strokeRect(480, 270,10, 50);
						ctx7.fillRect(480, 270,10,50);
                    }
                    
                }

}