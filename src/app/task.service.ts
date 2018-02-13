import {Injectable} from '@angular/core';
import {Task} from './task';


@Injectable()
export class TaskService {

    constructor() {
    }

    getTasks(): Task[] {

        return [new Task(1), new Task(2), new Task(3), new Task(4), new Task(5)];
    }

}
