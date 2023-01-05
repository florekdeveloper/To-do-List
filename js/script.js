{
    const tasks = [];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindRemoveEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
          <li class="task">
          <button class="buttonDone js-done">${task.done ? " &#10003;" : ""}
          </button>
          <span class="newtask${task.done ? " task--done" : ""}">${task.content}
          </span>
          <button class="buttonRemove js-remove">&#128465;
          </button>           
          </li>`;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindRemoveEvents();

    };

    const onFormsSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();


        if (newTaskContent !== "") {
            addNewTask(newTaskContent);
            newTaskInput.value = "";
        }

        newTaskInput.focus();
    };

    const init = () => {

        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormsSubmit);

    };
    init();
};