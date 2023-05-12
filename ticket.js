class Ticket {
  constructor(title, description, assignee, dueDate, labels) {
    this.title = title;
    this.description = description;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.labels = labels;
  }
}

const editable = document.querySelector('.editable');

editable.addEventListener('input', function() {
  console.log('Text changed:', editable.innerText);
});

const dueDateInput = document.getElementById('due-date');

dueDateInput.addEventListener('change', function(event) {
  const selectedDate = event.target.value;
  console.log('Selected due date:', selectedDate);
});
