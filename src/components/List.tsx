import React, { useEffect, useState } from 'react'
import { List, Button, Image, Carousel } from 'antd'
import styled, { StyledFunction } from 'styled-components'


const getSizes = (i: number) => {
    // const n = 6;

    // for (let i = 0; i < n; i++) {
    return {
        width: Math.pow(2, Math.floor((i + 2) / 2)),
        height: Math.pow(2, Math.floor((i + 1) / 2))
    }
    // console.log(i, Math.pow(2, Math.floor((i + 2) / 2)), Math.pow(2, Math.floor((i + 1) / 2)))
    // }


}
const getRows = (i: number) => {
    return Math.floor((i + 1) / 2) + 1
}
const getColumns = (i: number) => {
    return Math.floor((i + 2) / 2) + 1
}
const fragmentString = (ammount: number): string => {
    console.log({ ammount })
    let strAcum: string = ''
    for (let i = 0; i < ammount; i++) {
        strAcum = strAcum + `${1/Math.pow(2, i )}fr `
    }
    return strAcum
}
const buildGrid = (): any[] => {
    const n = testData[0].src.length
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
    console.log(cssGrid)
    return cssGrid
}

const [dWidth, dHeight] = ['250px', '250px'];
const Container = styled.div<IpropsContainer>`
   cursor: pointer;
   display: grid;
   grid-template-rows: ${props => props.rows};
   grid-template-columns: ${props => props.columns};
   /* width: ${dWidth};  */
   width: 100%; 
   height: ${dHeight};
   max-width: 250px;
`;

interface IpropsContainer {
    rows: string,
    columns: string,
}
interface Iprops {
    grid: { row: string, column: string }
    children: React.ReactNode,
}

interface IpropsItem {
    grid: {
        row: string,
        column: string,
    }
}

const ItemImage = styled.div<IpropsItem>`
    padding: 2px;
    grid-row: ${props =>  props.grid.row };
    grid-column: ${props => props.grid.column};
`;

// const ItemImage = ({ grid, children }: Iprops) => (
//     <div style={{
//         gridColumn: grid.column,
//         gridRow: grid.row,
//         padding: '2px',
//     }}>
//         {children}
//     </div>
// )

const testData = [
    {
        title: 'Proyecto de vigilancia cientifica',
        description: 'Descripcion del proyectoDescripcion del proyecto',
        dates: 'Febrero 2020 - Octubre 2020 ',
        src: [
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        ],

    },
]
const handlePrint = () => {
    console.log(buildGrid())

}
const ProjectList = () => {
    // testGrid()
    const [grid, setGrid] = useState<any[]>([])
    useEffect(() => {
        setGrid(buildGrid())
    }, [])

    return (
        <>
            <List
                size='large'
                itemLayout='vertical'
                dataSource={testData}

                renderItem={item => {

                    return (
                        <List.Item
                            key={item.description}
                            style={{ padding: 20 }} extra={
                                <Container rows={fragmentString(getRows(item.src.length) - 1)} columns={fragmentString(getColumns(item.src.length) - 1)}>
                                    {Object.keys(item.src).map((key) => {
                                        const keyInt = parseInt(key)
                                        console.log(grid[keyInt])

                                        return (<>

                                            {grid[keyInt] && <ItemImage  grid={grid[keyInt]} >
                                                <Image
                                                    width={'100%'} 
                                                    height={'100%'}
                                                    src={item.src[keyInt]}
                                                />
                                            </ItemImage>
                                            }
                                        </>
                                        )


                                    })}
                                </Container>

                            }
                        >

                            <List.Item.Meta description={item.dates} key={item.title} title={item.title} />

                            {item.description}
                        </List.Item>

                    )
                }}
            />
            <Button onClick={handlePrint}  > Print</Button>
        </>

    )
}
export default ProjectList