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



