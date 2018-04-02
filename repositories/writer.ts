export interface myWriter<T> {

    update(key: string, item: string): Promise<void>

    delete(key: string): Promise<void>

}