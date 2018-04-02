import { myReader } from './reader'
import { myWriter } from './writer'
/// <reference path="../../bower_components/iron-localstorage/iron-localstorage.d.ts" />


export abstract class IORepository<T> implements myReader<T>, myWriter<T> {

    constructor(parameters) {
        
    }
    async readItem(key: string): Promise<string> {

        const result = localStorage.getItem(key)
        return result
        
    }
    async update(key: string, item: string): Promise<void> {

        const result = localStorage.setItem(key, item)
        return result

    }
    async delete(key: string): Promise<void> {

        const result = localStorage.removeItem(key)
        return result

    }
}