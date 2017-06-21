// JavaScript Document
function surveyAnswers(){
	this.answer = [];
	this.index = -1;
	this.totalCount = 0;
	this.averageTotal = 0;
	
	this.sectionAverages = [
		
		['Accounting', 0],
		['averageFinance', 0],
		['averageTreasury', 0],
		['averageLeadership', 0]
	],
		
	this.averages = [
		['Task', 'Score'],
		//Accounting section
		['Governance', 0],
		['Recording', 0],
		['Reporting', 0],
	
		//Finance Section
		['Planning', 0],
		['Forecasting', 0],
		['InvestAnal', 0],
	
		//Treasury Section
		['CashMgmt', 0],
		['Funding', 0],
		['RiskMgmt', 0],
	
		//Leadership Section
		['Awareness', 0],
		['Teamwork', 0],
		['Strategic', 0]
	]
}

surveyAnswers.prototype.addAnswer = function(aptitude){
	this.answer[this.index] = aptitude;
};

surveyAnswers.prototype.incrIndex = function(){
	this.index++;
};

surveyAnswers.prototype.decIndex = function(){
	this.index--;
};

surveyAnswers.prototype.getIndex = function(){
	return this.index;
};

surveyAnswers.prototype.getCountTotal = function(){
	return this.totalCount;
};

surveyAnswers.prototype.getAnswer = function(index){
	return this.answer[index];
};

surveyAnswers.prototype.solve = function(){
	this.averageAllSkills();
	this.solveAccounting();
	this.solveFinance();
	this.solveLeadership();
	this.solveTreasure();
};

surveyAnswers.prototype.averageAllSkills = function() {
	var total = 0;
	for(var i = 0; i < this.answer.length; i++){
		total += this.answer[i];
	}
	this.averageTotal = (total/this.answer.length);
	console.log(this.averageTotal);
};

surveyAnswers.prototype.solveAccounting = function() {
	var govCount = 0;
	for(var i=0; i < 7; i++){
		govCount += this.answer[i];
	}
	this.averages[1][1] = (govCount/7);
	
	var recCount = 0;
	for(i=7; i < 12; i++){
		recCount += this.answer[i];
	}
	this.averages[2][1] = (recCount/5);
	
	var repCount = 0;
	for(i=12; i < 18; i++){
		repCount += this.answer[i];
	}
	this.averages[3][1] = (repCount/6);
	
	this.sectionAverages[0][1] = ((repCount+recCount+govCount)/18);
	this.totalCount += (repCount+recCount+govCount);
};

surveyAnswers.prototype.solveFinance = function() {
	var planCount = 0;
	for(var i=18; i < 23; i++){
		planCount += this.answer[i];
	}
	this.averages[4][1] = (planCount/5);
	
	var forecstCount = 0;
	for(i=23; i < 27; i++){
		forecstCount += this.answer[i];
	}
	this.averages[5][1] = (forecstCount/4);
	
	var investCount = 0;
	for(i=27; i < 32; i++){
		investCount += this.answer[i];
	}
	this.averages[6][1] = (investCount/5);
	
	this.sectionAverages[1][1] = ((planCount+forecstCount+investCount)/14);
	this.totalCount += (planCount+forecstCount+investCount);
};

surveyAnswers.prototype.solveTreasure = function() {
	var cashCount = 0;
	for(var i=32; i < 36; i++){
		cashCount += this.answer[i];
	}
	this.averages[7][1] = (cashCount/4);
	
	var fundCount = 0;
	for(i=36; i < 43; i++){
		fundCount += this.answer[i];
	}
	this.averages[8][1] = (fundCount/7);
	
	var riskCount = 0;
	for(i=43; i < 48; i++){
		riskCount += this.answer[i];
	}
	this.averages[9][1] = (riskCount/5);
	
	this.sectionAverages[2][1] = ((cashCount+fundCount+riskCount)/16);
	this.totalCount += (cashCount+fundCount+riskCount);
};

surveyAnswers.prototype.solveLeadership = function() {
	var selfCount = 0;
	for(var i=48; i < 53; i++){
		selfCount += this.answer[i];
	}
	this.averages[10][1] = (selfCount/5);
	
	var teamCount = 0;
	for(i=53; i < 58; i++){
		teamCount += this.answer[i];
	}
	this.averages[11][1] = (teamCount/5);
	
	var stratCount = 0;
	for(i=58; i < 63; i++){
		stratCount += this.answer[i];
	}
	this.averages[12][1] = (stratCount/5);
	
	this.sectionAverages[3][1] = ((selfCount+teamCount+stratCount)/15);
	this.totalCount += (selfCount+teamCount+stratCount);
};

