export class Task {

    id: number;
    shortName: string;
    lessonHtml: string;
    taskHtml: string;
    inputText: string [];
    regex: string;
    solution: string;
    output: string [];
    expectedOutput: string [];

    constructor(id: number) {
        this.id = id;
    }
}
