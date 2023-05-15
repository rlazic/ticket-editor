//Defining the ticket class with its components
class Ticket {
 constructor(title, description, assignee, dueDate, labels) {
  this.title = title;
  this.description = description;
  this.assignee = assignee;
  this.dueDate = dueDate;
  this.labels = labels;
  }
}

//Editable ticket title
const editable = document.querySelector('.editable');

editable.addEventListener('input', function() {
  console.log('Text changed:', editable.innerText);
});

//Due date selected from a dropdow calendar
const dueDateInput = document.getElementById('due-date');

dueDateInput.addEventListener('change', function(event) {
  const selectedDate = event.target.value;
  console.log('Selected due date:', selectedDate);
});
