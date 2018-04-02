/// <reference path="../bower_components/polymer/types/polymer.d.ts" />
/// <reference path="../bower_components/polymer-decorators/polymer-decorators.d.ts" />

@customElement("to-do")
class ToDo extends Polymer.Element {
    @property()
    toDoList: Array<string> = []

    @property()
    theScenes: Array<string> = []

    @property()
    currentScene: string = null

    // @property()
    // activeRefresh: {
    //     void,
    //     computed: '_activeScene(event)'
    // }

    _RemoveCurrentScene() {

    }

    _addNewScene() {
        const someScene = {
            sceneID: this.theScenes.length,
            sceneText: ""
        }
        someScene.sceneText = prompt("Create scenario", "Shopping list!")
        if (someScene.sceneText === "" || someScene.sceneText === null) {
            alert("try Again!")
        } else {
            this.unshift("theScenes", someScene)
        }
    }

    _activeScene(event) {
        const item = event.target.dataset.item
        this.set("currentScene", item)
    }

    _addTask() {
        const someTask = {
            taskID: this.toDoList.length,
            sceneID: this.currentScene,
            todoText: "",
            completed: false
        }
        if (someTask.sceneID === null) {
            alert("select scenario first")
        }
        else {
            this.unshift("toDoList", someTask)
        }
    }

    // displayFilter(toDoItem){
    //     toDoItem.meArr.filter(elem => elem.sceneID === "0")

    // }

    _isCompleted(toDoItem) {
        return toDoItem.completed && toDoItem.sceneID === this.currentScene
    }

    _isNotCompleted(toDoItem) {
        return !toDoItem.completed && toDoItem.sceneID === this.currentScene
    }

    toDoValidator(toDoList, toDoItem) {
        if (toDoItem.todoText != "" || (toDoList === [] && toDoItem.todoText != "")) {
            return false
        } else {
            return true
        }
    }
} 