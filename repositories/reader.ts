export interface myReader<T> {

    readItem(key: string): Promise<string>

}