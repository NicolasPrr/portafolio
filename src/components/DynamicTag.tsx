import React, { useState } from 'react'
import { Tag, Tooltip } from 'antd'

import { TIdiom, TLanguage } from '../variables'
import { InfoCircleOutlined } from "@ant-design/icons";


const tagColor = ["pink", "red", "orange", "cyan", "green", "blue", "purple", "geekblue", "yellow", "magenta", "volcano", "gold", "lime"];

const DynamicTag = (props: any) => {

    const data: TLanguage[] & TIdiom[] = props.data

    const [current, setCurrent] = useState<number>(-1)
    return (
        <>
            {Object.keys(data).map((key) => {
                const keyInt = parseInt(key)
                const color = current === keyInt ? '#007991' : tagColor[keyInt % (tagColor.length - 1)]
                return (
                    <Tooltip visible={current === keyInt}
                        key={key}
                        title={ props.type === 'language' ?
                            data[keyInt].frameworks.join(' | ') : data[keyInt].level}   >
                        <Tag color={color} style={{ cursor: 'pointer' }}
                            onClick={() => current === keyInt ? setCurrent(-1) : setCurrent(keyInt)}>
                            <InfoCircleOutlined /> {data[keyInt].name}
                        </Tag>
                    </Tooltip>

                )
            })}
        </>
    )
}
export default DynamicTag