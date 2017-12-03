export class TodoItem {

    id: string;
    title: string;
    description: string;
    dueDate: string;
    done: boolean;

    constructor(data: any = {}) {
        this.assign(data);
    }

    assign(data: any) {
        Object.assign(this, data);
    }

    asJSON(): any {
        return {
            id: this.id,
            title: this.title,
            description: this.description || '',
            done: this.done || false,
            dueDate: (this.dueDate) ? this.dueDate.split('.')[0] : undefined
        };
    }

}
