// JavaScript Document
//Chris Hight
//June 10, 2017

var modalBtn = document.getElementById('modalBtn');
var nextBtn = document.getElementById('nextBtn');
var prevBtn = document.getElementById('prevBtn');
var modal = document.getElementById('modalView');
var answerList;

function showModal () {
	modal.style.display = "block";
	this.answerList = new surveyAnswers();
}

nextBtn.onclick = function(){
	//questionnaire.changeQuestion("n");
	//check which question number
	var index = answerList.getIndex();
	//collect input from user
	if(index >= 63){					//XXXX Change this so that its reading number of questions, this will make it so that questions are mutable.
		answerList.solve();
		document.getElementById('quiz').style.display = "none";
		document.getElementById('percTotal').innerHTML = Math.floor((answerList.getAverageTotal()/((index+1)*5))*100)+"%";
		document.getElementById('responseChart').style.display = "block";
		google.charts.load("current", {packages:["corechart"]});
		google.charts.setOnLoadCallback(drawChart);
	} else if(index > -1){
		var radios = document.getElementsByName('aptitude');
		for(var i = 0; i < radios.length; i++){
			if(radios[i].checked){
				answerList.addAnswer(i);
				//radios[i].checked = false;			//XXXX undo this 
				break;
			}
		}
		//if user answer exists set previous answer
		answerList.incrIndex();
		//set new question
		document.getElementById('question').innerHTML = questions[answerList.getIndex()].Query;
	}

};

prevBtn.onclick = function (){
	questionnaire.changeQuestion("p");
};


    
function drawChart() {
	var data = google.visualization.arrayToDataTable(answerList.averages);

	var options = {
    	//title: 'My Daily Activities',
     	pieHole: 0.6,
		legend: 'none',
		pieSliceText: 'none',
		chartArea:{width:"70%",height:"70%"}
		
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  	chart.draw(data, options);
}

//XXX Add this into button clicks			prevBtn.disabled = false;




