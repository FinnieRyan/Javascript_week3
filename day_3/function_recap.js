var tasks = [
    {
      description: 'Wash Dishes',
      completed: false,
      duration: 10,
    },
    {
      description: 'Clean Windows',
      completed: false,
      duration: 15,
    },
    {
      description: 'Make Dinner',
      completed: true,
      duration: 30,
    },
    {
      description: 'Feed Cat',
      completed: false,
      duration: 5,
    },
    {
      description: 'Walk Dog',
      completed: true,
      duration: 60,
    },
  ];
  
  
  
  function countTasks(list) {
    return list.length;
  }
  
  var numberOfTasks = countTasks(tasks);
  // console.log(`There are ${numberOfTasks} tasks.`);
  
  
  
  function getIncompleteTasks(list) {
    var incompleteTasks = [];
  
    for (var taskItem of list) {
      if (taskItem.completed === false) {
        incompleteTasks.push(taskItem);
      }
    }
  
    return incompleteTasks;
  }
  
  // var incompleteTasks = getIncompleteTasks(tasks);
  // console.log('incompleteTasks', incompleteTasks);
  
  
  
  function countIncompleteTasks(list) {
    var incompleteTasks = getIncompleteTasks(list);
    return incompleteTasks.length;
  }
  
  var incompleteTaskCount = countIncompleteTasks(tasks);
  // console.log(`There are ${incompleteTaskCount} incomplete tasks`);
  
  
  
  function getTasksLongerThan(list, queryDuration) {
    var tasksWithDuration = [];
  
    for (var task of list) {
      if (task.duration >= queryDuration) {
        tasksWithDuration.push(task);
      }
    }
  
    return tasksWithDuration;
  }
  
  var tasksLongerThan30 = getTasksLongerThan(tasks, 10);
  // console.log('tasks longer than 30', tasksLongerThan30);
  
  
  
  function getTasksByDescription(list, queryDescription) {
    var tasksWithDescription = [];
    for (var task of list) {
      if (task.description.toLowerCase() === queryDescription.toLowerCase()) {
        tasksWithDescription.push(task);
      }
    }
    return tasksWithDescription;
  }
  
  var feedCat = getTasksByDescription(tasks, 'feed cat');
  // console.log('feedCat', feedCat);
  
  
  
  function printFormattedTask(task) {
    console.log('Description:', task.description);
    console.log('Duration:', task.duration, 'minutes');
    if (task.completed) {
      console.log('Complete');
    }
    else {
      console.log('Incomplete');
    }
  }
  
  // printFormattedTask(tasks[0]);
  
  
  
  function createTask(description, duration) {
    var newTask = {
      description: description,
      duration: duration,
      completed: false,
    };
    return newTask;
  }
  
  var newTask = createTask('Wash clothes', 120);
  // console.log('newTask', newTask);
  
  
  
  function calculateTotalDurationOfIncompleteTasks(list) {
    var incompleteTasks = getIncompleteTasks(list);
    var totalDuration = 0;
    for (var task of incompleteTasks) {
      totalDuration += task.duration;
    }
    return totalDuration;
  }
  
  var durationOfIncomplete = calculateTotalDurationOfIncompleteTasks(tasks);
  // console.log('durationOfIncomplete', durationOfIncomplete);
  
  
  
  function calculateAverageDuration(list) {
    var totalDuration = 0;
    for (var task of list) {
      totalDuration += task.duration;
    }
    return totalDuration / list.length;
  }
  
  var averageDuration = calculateAverageDuration(tasks);
  // console.log('averageDuration', averageDuration);