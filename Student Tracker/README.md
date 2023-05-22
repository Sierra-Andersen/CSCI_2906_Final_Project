# Student Tracker

## Synopsis
This program is designed to help teacher's keep track of student progress over the course of the school year.

## Motivation
I am a teacher at a competency-based school. This school currently has a tracking system that involves teachers updating
a spreadsheet biweekly. The teachers also hand out paper trackers to students who are behind. These paper trackers are often lost
and do not always adequately represent how far a student is behind in a class. I wanted to automate this process, and so I have created
this webpage to help. This code is a work in progress as there are many pieces involved in putting this together.

## How to Run
Open the file called TeacherView.html
[Main View](/Screenshots/Teacher Tracker 1.png)

Choose a csv file where the grades are stored. Then click load students.

[Students Loaded into the System](/Screenshots/Teacher Tracker 2.png)
After the students have been loaded into the webpage, select the students to add to a tracking group.
To add more than one student hold down the Command key (Mac) or Control key (Windows) and click on the name of the student.

[Students Loaded into the System](/Screenshots/Teacher Tracker 3.png)
This shows an example of where the students will appear. The Parent Meeting can have a link that will take a user to a Google
Form or other location to schedule the parent meeting. The name of the Student 1 can be clicked to show what the student tracker
looks like for that student.

[Students Loaded into the System](/Screenshots/Student Tracker 1.png)
This is the view for the student tracker. Here classes can be selected to view a students progress.

[Students Loaded into the System](/Screenshots/Student Tracker 2.png)
When math is selected, a section with information will appear to show what the student needs to work on.

## Code Example
This is a part of the TeacherView JavaScript page. This code takes names from the student list in JavaScript and sends it to
an input form on the HTML page. This code shows how the different programming languages are working together.
```
	var options = "";
	for(let i= 0; i<studentList.length; i++){
		options += "<option value=\"" + studentList[i].name+ "\">" + studentList[i].name + "</option>";
	}

	document.getElementById("advisoryStudents").innerHTML = options;
```
