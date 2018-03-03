import {Injectable} from '@angular/core';
import {Task} from './task';


@Injectable()
export class TaskService {

    ids = [1, 2, 3, 4, 5];

    constructor() {
    }

    async loadFile(path: string) {
        return new Promise<string>((resolve, reject) => {

            const request = new XMLHttpRequest();
            request.open('GET', path, true);
            request.responseType = 'blob';

            request.onload = () => {
                const reader = new FileReader();

                reader.onload = (e: any) => resolve(e.target.result);
                reader.onerror = err => reject(err);
                reader.readAsText(request.response);
            };

            request.send();
        });
    }

    getTasks(): Task[] {
        let tasks = [];
        for (let id of this.ids) {
            let task = new Task(id);

            this.loadFile('./assets/data/task' + id + '/lesson.html').then(text => task.lessonHtml = text);

            this.loadFile('./assets/data/task' + id + '/task.html').then(text => task.taskHtml = text);

            this.loadFile('./assets/data/task' + id + '/desc.json').then(text => {
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
