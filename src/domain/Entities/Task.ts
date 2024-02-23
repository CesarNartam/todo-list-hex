export class Task {
    public uuid: string;
    public name: string;
    public description: string;
    public status: boolean;

    constructor(uuid: string, name: string, description: string, status: boolean) {
        this.uuid = uuid;
        this.name = name;
        this.description = description;
        this.status = status;
    }

}