export interface IpropsContainer {
    boxes: number,
    full?: boolean
}

export interface IpropsItem {
    grid: ILayoutImage
}
export interface ILayoutImage {
    row: string,
    column: string,
}