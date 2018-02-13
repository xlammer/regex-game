import {Injectable} from '@angular/core';
import {Task} from './task';


@Injectable()
export class TaskService {

    ids = [1, 2, 3, 4, 5];

    constructor() {
    }

    getTasks(): Task[] {
        let tasks = [];
        for (let id of this.ids) {
            let task = new Task(id);

            fetch('/assets/data/task' + id + '/lesson.html')
                .then(response => response.text())
                .then(text => task.lessonHtml = text);

            fetch('/assets/data/task' + id + '/task.html')
                .then(response => response.text())
                .then(text => task.taskHtml = text);

            fetch('/assets/data/task' + id + '/desc.json')
                .then(response => response.text())
                .then(text => {
                    let json = JSON.parse(text);

                    task.shortName = json['shortName'];
                    task.expectedOutput = json['expectedOutput'];
                    task.inputText = json['inputText'];
                    task.solution = json['solution'];
                });

            tasks.push(task);
        }


        return tasks;
    }

}
