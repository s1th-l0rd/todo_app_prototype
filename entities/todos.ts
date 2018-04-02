import { scenario } from './scenario'

export class toDos extends scenario {
    public taskText: string
    public taskID: number

    constructor(sceneText:string, sceneID:number, todoText:string, todoID: number ) {
        super(sceneText,sceneID)
        this.taskText = todoText
        this.taskID = todoID
    }
}