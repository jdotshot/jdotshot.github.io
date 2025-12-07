let myProjects = [
    {
        title: "Bed Frame",
        description: "This bed frame was made from white oak. It was the first project working with a planer and jointer. It was fun to explore new tooling!",
        image: "./images/bedframe.jpeg",
        specialNote: "This was my favorite!",
        projectNumber: "01"
    },
    {
        title: "Picture Frame",
        description: "From the extra white oak used in the bed frame, I created a picture frame to hold a stained glass window that will hang on the bed.",
        image: "./images/pictureframe.jpeg",
        projectNumber: "02"
    }
]

myProjects.sort((a, b) => Number(a.projectNumber) - Number(b.projectNumber));

let projectsMiddle = document.querySelectorAll(".projects_middle");
let projectsRight = document.querySelectorAll(".projects_right");

myProjects.forEach( (project, index) => {
    let html;
    if('specialNote' in project){
        console.log("specialNote")
        console.log(project)
        html = `
            <div class="project_card">
                <div class="project_card_desc_row">
                    <img src="${project.image}">
                    <p class="project_card_description">${project.description}</p>
                </div>
                <div class="project_card_title_row">
                    <p class="project_card_title">${project.title}</p>
                    <p class="project_card_number">${project.projectNumber}</p>
                </div>
                <div class="project_card_accent">
                    <p>${project.specialNote}</p>
                </div>
            </div>
        `
        console.log(html)
    } else {
        console.log("no special note")
        html = `
            <div class="project_card">
                <div class="project_card_desc_row">
                    <img src="${project.image}">
                    <p class="project_card_description">${project.description}</p>
                </div>
                <div class="project_card_title_row">
                    <p class="project_card_title">${project.title}</p>
                    <p class="project_card_number">${project.projectNumber}</p>
                </div>
            </div>
        `

    }
    if(index % 2 != 0) {
        projectsRight[0].innerHTML += html;
    } else {
        projectsMiddle[0].innerHTML += html;
    }

})


const emailButtons = document.querySelectorAll(".action_button");

emailButtons.forEach( button => {
    button.addEventListener('mousedown', () => {
        button.innerHTML = 'Email Me :D'
    });
    button.addEventListener('mouseup', () => {
        button.innerHTML = 'Email Me :)'
    });
});