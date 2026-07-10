const courses = [

{
subject:"CSE",
number:110,
title:"Introduction to Programming",
credits:2,
completed:true
},

{
subject:"WDD",
number:130,
title:"Web Fundamentals",
credits:2,
completed:true
},

{
subject:"CSE",
number:111,
title:"Programming with Functions",
credits:2,
completed:true
},

{
subject:"CSE",
number:210,
title:"Programming with Classes",
credits:2,
completed:false
},

{
subject:"WDD",
number:131,
title:"Dynamic Web Fundamentals",
credits:2,
completed:true
},

{
subject:"WDD",
number:231,
title:"Web Frontend Development I",
credits:2,
completed:false

}

];

const courseContainer = document.querySelector("#course-container");

const totalCredits = document.querySelector("#credits");

function displayCourses(courseList){

courseContainer.innerHTML="";

courseList.forEach(course=>{

const card=document.createElement("section");

card.classList.add("course");

if(course.completed){
card.classList.add("completed");
}

card.innerHTML=`
<h3>${course.subject} ${course.number}</h3>
<p>${course.title}</p>
<p>${course.credits} Credits</p>
`;

courseContainer.appendChild(card);

});

const credits = courseList.reduce((sum,course)=>sum+course.credits,0);

totalCredits.textContent=`Total Credits: ${credits}`;

}

displayCourses(courses);

document.querySelector("#all").addEventListener("click",()=>{

displayCourses(courses);

});

document.querySelector("#wdd").addEventListener("click",()=>{

displayCourses(

courses.filter(course=>course.subject==="WDD")

);

});

document.querySelector("#cse").addEventListener("click",()=>{

displayCourses(

courses.filter(course=>course.subject==="CSE")

);

});