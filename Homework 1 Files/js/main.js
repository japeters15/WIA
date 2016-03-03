/*
     Name:Janay Peters
     Date:03/01/2016
     Class & Section:  WIA333-O
     Comments: "HTML5 Canvas Drawing"
 */

/*
PART 1- Rectangle
*/

window.onload = function(){

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
			
          

/*******************************************
PART 2- Circle

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/

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


/*******************************************
PART 3- Star

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/
                   
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
				
				//Stroke a simple bezier curve
				ctx4.beginPath();
				ctx4.moveTo(50,200);
				
				//bezierCurveTo(cx1, cy1, cx2, cy2, x, y )
				ctx4.bezierCurveTo(50,100, 200, 300, 200, 150);
				
				ctx4.stroke();	
                   
                   //quadratic curve
				ctx4.beginPath();
				ctx4.moveTo(400,200);
				
				//quadraticCurveTo(cx, cy, x, y)
				
				ctx4.quadraticCurveTo(500,100, 600, 150);
				ctx4.stroke();
				
				
		}
	}

    
/*PART 5- Text
*/


    var theCanvas5 = document.getElementById('Canvas5');
	if (theCanvas5 && theCanvas5.getContext) {
	var ctx5 = theCanvas5.getContext("2d");
	if (ctx5) {
			
			var theString = "Drawing text on a canvas";
			
			//Simple text using defaults
			ctx5.fillText(theString, 20,20);			
			
			//Style the font
			ctx5.font = "25pt Georgia";
			ctx5.fillStyle = "blue";
			ctx5.fillText(theString, 20, 60);			
						
			//Stroke and Fill Text
			ctx5.font="32pt Verdana";
			ctx5.fillStyle = "yellow";
			//ctx.textBaseline= "middle";
			ctx5.strokeStyle = "rgba(0, 255, 0, .5)";
			ctx5.fillText(theString, 20, 160);
			ctx5.strokeText(theString, 20, 160);
			
						
						
		}
	}

/*******************************************
PART 6- Pixel Manipulation

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7- Putting it all together

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


}