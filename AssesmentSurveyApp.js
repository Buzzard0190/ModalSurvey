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
	} else if(index >= -1){
		var radios = document.getElementsByName('aptitude');
		collectRadio(radios);
		//if user answer exists set previous answer, else set radio to novice
		answerList.incrIndex();
		setQuestionAnswer(radios);
		prevBtn.disabled = false;
	} 

};

prevBtn.onclick = function (){
	
	var index = answerList.getIndex();
	if(index >= -1){
		var radios = document.getElementsByName('aptitude');
		collectRadio(radios);
		//if user answer exists set previous answer, else set radio to novice
		answerList.decIndex();
		setQuestionAnswer(radios);
		if (answerList.getIndex() === 0){
			prevBtn.disabled = true;
		}
	}  
	
};


    
function drawChart() {
	var data = google.visualization.arrayToDataTable(answerList.averages);

	var options = {
    	//title: 'My Daily Activities',
     	pieHole: 0.6,
		legend: 'none',
		pieSliceText: 'none',
		chartArea:{width:"70%",height:"70%"},
		colors:['375d4c','375d4c','375d4c',
				'cc984f','cc984f','cc984f',
				'487875','487875','487875',
				'c18429','c18429','c18429']
	};

	var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  	chart.draw(data, options);
}

//XXX Add this into button clicks			prevBtn.disabled = false;

function collectRadio(radios){
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			answerList.addAnswer(i);
			radios[i].checked = false;			 
			break;
		}
	}
}

function setQuestionAnswer(radios){
	var prevAnswer = answerList.getAnswer(answerList.getIndex());
	if(prevAnswer != null){
		radios[prevAnswer].checked = true;
	} else {
		radios[1].checked = true;
	}
	//set new question
	document.getElementById('question').innerHTML = questions[answerList.getIndex()].Query;
}
