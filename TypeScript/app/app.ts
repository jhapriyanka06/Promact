///<reference path="students.ts" />
///<reference path="schools.ts" />

function startGame()
{
    let studentName:string|undefined=getInputValue('name');
    let studentAge:string|undefined=getInputValue('age');
    let studentClass:string|undefined=getInputValue('class');
    let studentFavSub:string|undefined=getInputValue('favsub');
    let schoolName:string|undefined=getInputValue('school');

     postdetail(schoolName,studentName,studentClass,studentFavSub,studentAge);
   // var messagesElement=document.getElementById('result');
   //const details:HTMLElement|null=document.getElementById('result');
   // details!.innerText=`${studname}-${schoolname}`;
}
function getInputValue(sname:string):string{
    const inputElement:HTMLInputElement=<HTMLInputElement>document.getElementById(sname);
    if(inputElement.value==='')
    {
        return "nothing";
    }
    else
    {
        return inputElement.value;
    }
}

function postdetail(schoolname:string,studentName:string='no one',studentclass:string,favsub:string,age:string):void{
    const details:HTMLElement|null=document.getElementById('result');
    details!.innerText=`${schoolname}-${studentName}-${studentclass}-${favsub}-${age}`;
}
document.getElementById('submit')!.addEventListener('click',startGame);
const firststudent:Student=new Student();
const firstschool:School=new School();

/*window.onload = function() {
    let submit = document.querySelector("submit");
    
    function validateAge(age) {
       return (age>=3 && age<=19) ?  true :  false;
    }
    function validateName(name){
        let i:number=0;
        for (;i<name.length;i++)
        {
            if((name.charAt(i)>='A' && name.charAt(i)<='Z') ||(name.charAt(i)>='a' && name.charAt(i)<='z') )
            {
                return true;
            }
        }
    }
     function validateSchoolame(sname){
        let i:number=0;
        for (;i<sname.length;i++)
        {
            if((sname.charAt(i)>='A' && sname.charAt(i)<='Z') ||(sname.charAt(i)>='a' && sname.charAt(i)<='z') )
            {
                return true;
            }
        }
    }
    submit.onclick = function() {
        let Age = document.querySelector("#age").value;
        let name=document.querySelector("#name").value;
        let sname=document.querySelector("#school").value;
        if(validateAge(Age) && validateName(name) && validateSchool(sname))
            return  true;
        else {
            alert("Invalid data");
            return false;
        }
    }
    
} */