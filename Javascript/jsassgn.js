var select = document.getElementById("qual");
var qualification = ["10th", "12th", "UG", "PG"];
for (var i = 0; i < qualification.length; i++) {
    var qualify = document.createElement("option");
    qualify.textContent = qualification[i];
    qualify.value = qualification[i];
    select.appendChild(qualify);
}

var select = document.getElementById("exp");
var experience = ["Fresher", "1-2yrs", "2-3yrs",">3yrs"];
for (var i = 0; i < experience.length; i++) {
    var ex = document.createElement("option");
    ex.textContent = experience[i];
    ex.value = experience[i];
    select.appendChild(ex);
}


function geeks()
{
    event.preventDefault();
    var mydiv=document.getElementById("myDiv");
    
    let language=[
    {
        name:"C/C++",
        isEnabled: function(){
            return false;
        }
    },
    {
        name:"JAVA",
        isEnabled: function(){
            return true;
        }
    },
    {
        name:"C#",
        isEnabled: function(){
            return true;
        }
    },
    {
        name:"PHP",
        isEnabled: function(){
            return false;
        }
    },
    {
        name:"Python",
        isEnabled: function(){
            return false;
        }
    }
    ];

    var p,br;

    for (let i = 0; i < language.length; i++) {
        var checkbox = document.createElement("input");

        checkbox.type = "checkbox"; 
        checkbox.value=(language[i].name);
        checkbox.id = "check" + i; 

         p =document.createElement("span");
         p.innerHTML = language[i].name + ": ";

        /*if (checkbox.value === "JAVA" || checkbox.value === "C#") {
            checkbox.checked=true;
        }*/
        if (language[i].isEnabled()) {
            checkbox.checked=true;
        }

        br =document.createElement("br");

        mydiv.appendChild(p);
        mydiv.appendChild(checkbox); 
        mydiv.appendChild(br);
    }
} 

function data() {
  event.preventDefault();
    var Employeedata={
        First_Name: document.getElementById("f_name").value,
        Last_name: document.getElementById("l_name").value,
        email_id: document.getElementById("mail").value,
        Address: document.getElementById("add").value,
        User_Name: document.getElementById("u_name").value,
        Password: document.getElementById("pwd").value,
        Gender: "None",
        Qualification: document.getElementById("qual").value,
        Experience: document.getElementById("exp").value,
        Programming_language: "C# and Java",
        
    };
    
        if (document.getElementById('male').checked) {
            Employeedata.Gender= "male";
        }
        if (document.getElementById('female').checked) {
            Employeedata.Gender= "female";
        }
        if (document.getElementById('1').checked) {
            Employeedata.Programming_language= "C/C++ " + Employeedata.Programming_language;
        }if (document.getElementById('2').checked) {
            Employeedata.Programming_language= "PHP " + Employeedata.Programming_language;
        }if (document.getElementById('3').checked) {
            Employeedata.Programming_language= "Python " + Employeedata.Programming_language;
        }
  console.log(Employeedata);  
}


