export class Task {

    id: number;
    shortName: string;
    lessonHtml: string;
    taskHtml: string;
    inputText: string;
    solution: string;
    expectedOutput: string;

    constructor(id: number) {
        this.id = id;
    }
}
