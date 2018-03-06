export class Task {

    id: number;
    shortName: string;
    lessonHtml: string;
    taskHtml: string;
    inputText: string [];
    regex: string;
    output: string [];
    expectedOutput: string [];

    constructor(id: number) {
        this.id = id;
    }


    isFinished() {
        return this.expectedOutput != null
            && this.output != null
            && this.expectedOutput.length === this.output.length
            && this.expectedOutput.every((v, i) => v === this.output[i]);
    }
}
