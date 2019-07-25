export default class Task {
    constructor(id="", name="",priority="",lableArr="", membersIDArr="", status="", description=""){
        this.id = id;
        this.name = name;
        this.priority = priority;
        this.lableArr = lableArr;
        this.membersIDArr = membersIDArr;
        this.status = status;
        this.description = description;
    }
}