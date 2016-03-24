//Load google vis library  and the core chart package

google.load("visualization", "1", {packages:["corechart"]});

//Once library is loaded lets run a function.

google.setOnLoadCallback(drawChart);

//Create drawChart function

function drawChart(){
	//We will actually draw the chart
	
	//Create a data table using an array.
	
	var data = google.visualization.arrayToDataTable([
	["Brand", "Rating"], 
	["Mac", 8],
	["Chanel", 2],
	["Christian Dior", 3],
	["Urban Decay", 4],
	["Nars Cosmetics", 7]
	]);
	
	var options ={
		title: "Best Make-Up brands based off of high demand",
		//is3D:true
		//pieHole: .6
		pieSliceText: "percentage",
		pieStartAngle:45,
		//width:500,
		//height:500
		legend:{position:"labeled"},
		tooltip:{trigger:"none"}
		};
	
	
	//Create the chart variable
	var chart = new google.visualization.PieChart(document.getElementById("piechart"));
	
	//Draw The Chart
	chart.draw(data, options);
	
	
	}