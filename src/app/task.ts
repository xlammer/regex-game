export class Task {

    id: number;
    shortName: string;
    lessonHtml: string;
    taskHtml: string;
    inputText: string;
    expectedOutput: string;

    constructor(id: number) {
        this.id = id;
    }
}
