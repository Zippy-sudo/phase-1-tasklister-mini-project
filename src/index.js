document.addEventListener("DOMContentLoaded", () => {

  //selects and stores elements to be styled
  const html = document.getElementsByTagName("html")[0];
  const body = document.getElementsByTagName("body")[0];
  const contentBox = document.getElementById("main-content");
  const h2 = document.getElementsByTagName("h2")[0];
  const divlist = document.getElementById("list");

  //changes color
  body.style.background= "rgb(43,45,66)";
  contentBox.style.backgroundColor= "rgb(141,153,174)";
  h2.style.color = "rgb(227,242,253)"
  h2.style.textDecoration = "underline"
  divlist.style.backgroundColor = "rgb(93,42,66)"

  //selects and stores div with the form
  const contentbox = document.getElementById("main-content");

  //gets and stores form element 
  const form = document.querySelector("#create-task-form");

  //gets and stores ordered list element
  const toDoList = document.getElementById("tasks");

  //handles submission of form
  form.addEventListener("submit", (event) => {

    //prevents default refreshing of page
    event.preventDefault();

    //gets and stores user input from the form element with an id of new-task-description
    const inputValue = document.getElementById("new-task-description").value;
    const userName = document.getElementById("userName").value;
    const priority = document.getElementsByTagName("select")[0].value;

    //creates task element
    const task = document.createElement("li");
    if (priority === "highPriority") {
      task.style.color = "rgb(255,0,0)";
    } else if (priority === "mediumPriority") {
      task.style.color = "rgb(255,215,0)";
    } else {
      task.style.color = "rgb(0,255,0)";
    }
    task.innerText = `${userName}: ${inputValue} `;

    //creates userName element
    const user = document.createElement("p");
    user.innerText = `${userName}`;
 
    //creates button element
    const button = document.createElement("button");
    button.innerText = `${"X"}`;

    //adds remove functionality to button
    button.addEventListener("click", () => {
      button.parentNode.remove();
    })

    //adds task to DOM
    toDoList.appendChild(task);
    
    //adds button to DOM
    task.appendChild(button);

    //clears form fields
    event.target.reset();
    
  })
});
