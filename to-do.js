var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let ToDo = class ToDo extends Polymer.Element {
    constructor() {
        super(...arguments);
        this.toDoList = [];
        this.theScenes = [];
        this.currentScene = null;
    }
    _RemoveCurrentScene() {
    }
    _addNewScene() {
        const someScene = {
            sceneID: this.theScenes.length,
            sceneText: ""
        };
        someScene.sceneText = prompt("Create scenario", "Shopping list!");
        if (someScene.sceneText === "" || someScene.sceneText === null) {
            alert("try Again!");
        }
        else {
            this.unshift("theScenes", someScene);
        }
    }
    _activeScene(event) {
        const item = event.target.dataset.item;
        this.set("currentScene", item);
    }
    _addTask() {
        const someTask = {
            taskID: this.toDoList.length,
            sceneID: this.currentScene,
            todoText: "",
            completed: false
        };
        if (someTask.sceneID === null) {
            alert("select scenario first");
        }
        else {
            this.unshift("toDoList", someTask);
        }
    }
    _isCompleted(toDoItem) {
        return toDoItem.completed && toDoItem.sceneID === this.currentScene;
    }
    _isNotCompleted(toDoItem) {
        return !toDoItem.completed && toDoItem.sceneID === this.currentScene;
    }
    toDoValidator(toDoList, toDoItem) {
        if (toDoItem.todoText != "" || (toDoList === [] && toDoItem.todoText != "")) {
            return false;
        }
        else {
            return true;
        }
    }
};
__decorate([
    property(),
    __metadata("design:type", Array)
], ToDo.prototype, "toDoList", void 0);
__decorate([
    property(),
    __metadata("design:type", Array)
], ToDo.prototype, "theScenes", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], ToDo.prototype, "currentScene", void 0);
ToDo = __decorate([
    customElement("to-do")
], ToDo);
