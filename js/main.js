let container = document.querySelector(".container-main");

fetch("../challenge.json")
  .then(response => response.json())
  .then(data => popularHtml(data));

function popularHtml(data) {
  let html = "";

  data.map(item => {
    html += ` <div class="sidenav">
    <img src="../img/Perfil.jpg" alt="Profile Pic" class="img">

    <div class="perfil">
    <h1 class="perfil-h1">${item.profile.name}<h1/>
    <p class="perfil-p">${item.profile.profession}</p>

    </div>
    <hr>
    <div class="profile">

    <h3 class="profile-h3">Profile</h3>
    <p class="profile-p">${item.profile.description}</p>

    <h3 class="h3-contact">Contact</h3>
    <p class="p-contact-tel">${item.profile.contact.tel}</p>
    <p class="p-contact-cel">${item.profile.contact.cel}</p>
    <p class="p-contact-address">${item.profile.contact.address}</p>
    <p class="p-contact">${item.profile.contact.website}</p>
    <p class="p-contact">${item.profile.contact.mail}</p>

    <h3 class="h3-skills">Skills</h3>
    <p class="p-skills">${item.profile.skills[0].name}</p>
    <p class="p-skills-all">${item.profile.skills[0].value}</p>
    <p class="p-skills">${item.profile.skills[1].name}</p>
    <p class="p-skills-all">${item.profile.skills[1].value}</p>
    <p class="p-skills">${item.profile.skills[2].name}</p>
    <p class="p-skills-all">${item.profile.skills[2].value}</p>

    </div>
    </div>
    
    <div class="main">
    <h1 class="main-h1">WORK EXPERIENCE</h1>
    <h3 class="main-h3">${item.profile.experience[0].name}</h3>
    <p class="main-p-date">${item.profile.experience[0].date}</p>
    <p class="main-p">${item.profile.experience[0].description}</p>

    <h3 class="main-h3">${item.profile.experience[1].name}</h3>
    <p class="main-p-date">${item.profile.experience[1].date}</p>
    <p class="main-p">${item.profile.experience[1].description}</p>

    <h3 class="main-h3">${item.profile.experience[2].name}</h3>
    <p class="main-p-date">${item.profile.experience[2].date}</p>
    <p class="main-p">${item.profile.experience[2].description}</p>

    <h1 class="main-h1">Education</h1>
    <h3 class="main-h3">${item.profile.education[0].name}</h3>
    <p class="main-p-date">${item.profile.education[0].date}</p>
    <p class="main-p">${item.profile.education[0].description}</p>

    <h3 class="main-h3">${item.profile.education[1].name}</h3>
    <p class="main-p-date">${item.profile.education[1].date}</p>
    <p class="main-p">${item.profile.education[1].description}</p>

    </div>`;
  });

  container.innerHTML = html;
}
