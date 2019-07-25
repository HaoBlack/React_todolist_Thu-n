import ListOfTasks from './ListOfTask';
import TaskData from './TaskData';
import Task from './Task';

let listOfTasks = new ListOfTasks();

for(let task of TaskData){
    let id = task.id;
    let name = task.name;
    let lableArr = task.lableArr;
    let priority = task.priority;
    let membersIDArr = task.membersIDArr;
    let status = task.status;
    let description = task.description;

    let newTask = new Task(id, name, priority, lableArr, membersIDArr, status, description);
    listOfTasks.addTask(newTask);
}

export default listOfTasks;