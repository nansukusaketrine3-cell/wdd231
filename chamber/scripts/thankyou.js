const applicationInfo = document.querySelector("#application-info");


const params = new URLSearchParams(window.location.search);


applicationInfo.innerHTML = `

<p>
<strong>First Name:</strong>
${params.get("fname")}
</p>


<p>
<strong>Last Name:</strong>
${params.get("lname")}
</p>


<p>
<strong>Email:</strong>
${params.get("email")}
</p>


<p>
<strong>Mobile Phone:</strong>
${params.get("phone")}
</p>


<p>
<strong>Organization:</strong>
${params.get("organization")}
</p>


<p>
<strong>Date Submitted:</strong>
${params.get("timestamp")}
</p>

`;