let student_name=[];
let student_mark=[];
function AddStudent(){
 
     document.getElementById("out").style.background="#d3d3d31a";
    let name=document.getElementById("stdname").value;
    let mark=Number(document.getElementById("mark").value);

    if (!name||!mark) {
      alert("Please fill all fields.");
      return;
    }
    
     if (!isNaN(name.charAt(0))) {
         alert("Please fill again., name should not start with a number.");
          return;
    }
    // if(mark<=35&&mark>=0){
    //   document.getElementById("output2").style.color="red";
    // }
    if(mark<=100 && mark>=1){
       document.getElementById("stdname").value="";
       document.getElementById("mark").value="";
       document.getElementById("notvalid").innerText=""
     //  document.getElementById("notvalid").style.color="red";
     student_name.push(name);
    student_mark.push(Number(mark));
    document.getElementById("output1").innerHTML+=name +"<br>" +"<br>";
    document.getElementById("output2").innerHTML+=mark +"<br>"+"<br>" ;
    }
    else{
      document.getElementById("notvalid").innerText="Enter Valid Mark Only"
      document.getElementById("notvalid").style.color="red";
      alert("Again type enter the valid mark range between (0 to 100)")
    }
    
       //average
    let avg=student_mark.reduce((acc,num)=>acc+num)
    avg=avg/student_mark.length;
    document.getElementById("avg").innerHTML=avg;
    document.getElementById("avg").style.color="Darkblue";
     document.getElementById("one").style.background=" rgba(77, 79, 224, 0.4)";
     //high
     let high=Math.max(...student_mark);
     document.getElementById("high").innerHTML=high;
    document.getElementById("high").style.color="Green";
     document.getElementById("two").style.background="rgba(120, 250, 120, 0.4)";
     //low
     if(student_mark.length!=1){
     let low=Math.min(...student_mark);
     document.getElementById("low").innerHTML=low;
    document.getElementById("low").style.color="red";
     document.getElementById("three").style.background="rgba(255, 30, 0, 0.4)";
     }
     else{
           document.getElementById("low").innerHTML=0;
    document.getElementById("low").style.color="red";
     document.getElementById("three").style.background="rgba(255, 30, 0, 0.4)";
     }
// document.getElementById("stdname").value="";
// document.getElementById("mark").value="";
    console.log(student_name);
    console.log(student_mark);
}
