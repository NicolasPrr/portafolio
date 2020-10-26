import { ILayoutImage } from "./Interfaces"

export const getRows = (i: number) => {
    return Math.floor((i + 1) / 2) + 1
}
export const getColumns = (i: number) => {
    return Math.floor((i + 2) / 2) + 1
}
export const fragmentString = (ammount: number): string => {
    // console.log({ ammount })
    let strAcum: string = ''
    let fibo = [0, 1, 1]

    for (let i = 0; i < ammount; i++) {
        strAcum = strAcum + `${1 / Math.pow(2, i)}fr `
        const lastOne = fibo.length -1
        fibo.push(fibo[lastOne] + fibo[lastOne - 1] )
    }
    // console.log('fr:', fibo.reverse().slice(0, ammount).join('fr ') + 'fr')
    // console.log(strAcum)
    return strAcum
    // return fibo.reverse().slice(0, ammount).join('fr ') + 'fr'
}
export const buildGrid = (data: any): ILayoutImage[] => {
    const n = data.src.length
    const rows = getRows(n)
    const columns = getColumns(n)
    // console.log({n})
    // console.log({rows, columns})
    // let i = 0
    let cssGrid = []
    let rCounter = 2
    for (let i = 0; i < n; i++) {
        if (i % 2 === 0) {
            const strRow = `${getRows(i - 1)}/${rows}`
            const strCol = `${getColumns(i - 1)}/${rCounter}`
            // console.log('r',i , strRow, 'C', strCol )
            cssGrid.push({ row: strRow, column: strCol })
        } else {
            const strRow = `${getRows(i - 1)}/${rCounter}`
            const strCol = `${getColumns(i - 1)}/${columns}`
            // console.log('r',i , strRow, 'C', strCol)
            cssGrid.push({ row: strRow, column: strCol })
            rCounter++
        }
    }
    return cssGrid
}