import React from 'react'
import { Timeline } from 'antd'
import styled from 'styled-components'
import { Card } from './index'
import { University, Airplane, Job, Certificate } from './Icons'

import { CheckOutlined, TrophyOutlined } from '@ant-design/icons'
import {iconTypes, timeList} from '../variables'


type dictType<T extends string, K>  = Record<T, K>

const dict: dictType<iconTypes, React.ReactNode> ={
    airplane: <Airplane/>,
    certificate: <Certificate/>,
    finish: <CheckOutlined/>,
    job: <Job/>,
    prize: <TrophyOutlined/>,
    university: <University/>,
}



const { Item } = Timeline
const Wrapper = styled.div`
    align-items: center;
    padding: 20px;
    flex-wrap: wrap;
`;

const Time = () => {
    return (
        <Card>
            <Wrapper>
            <Timeline mode='left' reverse={true} >
                {timeList.map( item =>(
                        <Item key={item.text} dot={dict[item.type]}>{item.text}</Item>
                    ) )}
            </Timeline>
            </Wrapper>
        </Card>
    )
}
export default Time