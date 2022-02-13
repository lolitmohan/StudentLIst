let studentName = document.getElementById("name");
let courseName = document.getElementById("course");
let amount = document.getElementById("amount");
let addBtn = document.querySelector(".btn");

const studentList = document.getElementById("studentList");

addBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(studentName.value == "" || courseName.value == "" ||amount.value == ""){
        alert("Please fill out all the field in the form");
    } else {
        // console.log(studentName.value, courseName.value, amount.value);
        // Creating new table Row

        const newRow = document.createElement('tr');
        const newStudentName = document.createElement("td");
        const newCourseName = document.createElement("td");
        const newAmount = document.createElement("td");


        newStudentName.innerHTML = studentName.value;
        newRow.appendChild(newStudentName);

        newCourseName.innerHTML = courseName.value;
        newRow.appendChild(newCourseName);

        newAmount.innerHTML = amount.value;
        newRow.appendChild(newAmount);


        studentList.appendChild(newRow);

        studentName.value = "";
        courseName.value = "";
        amount.value = "";
    }

    let studentList = document.getElementById("studentList");
    console.log(studentList);
    let studentListItem = document.createElement()
})
