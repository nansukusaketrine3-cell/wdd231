const courses = [

{
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    completed: true,
    description: "Introduction to programming concepts using problem solving and basic algorithms.",
    certificate: "Web and Computer Programming",
    technology: ["Python"]
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
    subject: "WDD",
    number: 231,
    title: "Web Frontend Development I",
    credits: 2,
    completed: false,
    description: "Build responsive websites using HTML, CSS and JavaScript.",
    certificate: "Web and Computer Programming",
    technology: ["HTML", "CSS", "JavaScript"]
}

];

const courseDetails = document.querySelector("#course-details");

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

card.addEventListener("click", () => {
    displayCourseDetails(course);
});

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

function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>

        <h2>${course.subject} ${course.number}</h2>

        <h3>${course.title}</h3>

        <p><strong>Credits:</strong> ${course.credits}</p>

        <p><strong>Certificate:</strong> ${course.certificate}</p>

        <p>${course.description}</p>

        <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
        courseDetails.close();
    });

    courseDetails.addEventListener("click", (event) => {
        const rect = courseDetails.getBoundingClientRect();

        if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
        ) {
            courseDetails.close();
        }
    });
}