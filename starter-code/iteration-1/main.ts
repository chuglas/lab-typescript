// Iteration 1
// 1. Create an array of strings
let myArray: Array<string> = [];

// 2. Create a function to add a task in to the array, call it `addTask`, the function has to accept a string and don't have to return anything.
const addTask = function(task) {
  myArray.push(task);
  return myArray.length;
}

// 3. Create a function to list all tasks, it must show in the console de task.

const listAllTasks = function() {
    myArray.forEach(task => {
      console.log(task);
    });
};

// 4. Create a function to delete a task, you must find the task inside the array and delete it.

const deleteTask = function() {
  var i = myArray.indexOf('Finish this iteration 1!! 🤓');
  myArray.splice(i, 1);
  return myArray.length;
}


// Execution
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
