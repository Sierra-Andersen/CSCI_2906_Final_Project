

function readCSV(){
	var files=document.querySelector('#gradebook').files;

	if(files.length>0){
		var file = files[0];
		var fileReader = new FileReader();
		fileReader.readAsText(file);
		
		fileReader.onload = function(event){
			var gradebookData = event.target.result;
			makeStudentList(gradebookData);
			}
			
		}
}


function makeStudentList(gradebookData){
	var rowData = gradebookData.split('\n');

		const studentList = [];

		for(var row=0; row<rowData.length; row++){
			var rowColData= rowData[row].split(',');

			
			for(var col=0; col<rowColData.length; col++){
				if(row==0){
					var test1Index = rowColData.indexOf("Standard 1 Test");
					var test2Index = rowColData.indexOf("Standard 2 Test");
					var test3Index = rowColData.indexOf("Standard 3 Test");
				}
			}

			var studentName = rowColData[0];
			if(rowColData[test1Index]==""){
				var studentTest1Score = 0;
				var studentTest2Score = 0;
				var studentTest3Score = 0;
				var studentTest4Score = 0;
			}
			else{
				var studentTest1Score = Number.parseFloat(rowColData[test1Index]);
				var studentTest2Score = Number.parseFloat(rowColData[test2Index]);
				var studentTest3Score = Number.parseFloat(rowColData[test3Index]);
			}
			var newStudent = {name:studentName, test1Score:studentTest1Score, test2Score:studentTest2Score,
				test3Score:studentTest3Score};
			if(row!=0){
				studentList.push(newStudent);
			}
		}
		
		for(var i = 0; i < studentList.length; i++){
		console.log(studentList[i]);
		}
	var options = "";
	for(let i= 0; i<studentList.length; i++){
		options += "<option value=\"" + studentList[i].name+ "\">" + studentList[i].name + "</option>";
	}

	document.getElementById("advisoryStudents").innerHTML = options;
}

