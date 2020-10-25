import React from 'react'
import { Timeline } from 'antd'
import styled from 'styled-components'
import { Card } from './index'
import { University, Airplane, Job } from './Icons'

import { CheckOutlined, TrophyOutlined } from '@ant-design/icons'



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
                <Item dot={<University />}> 2014 - Pregrado Universidad Nacional</Item>
                <Item dot={<TrophyOutlined />}>2017 IronHacks Purdue</Item>
                <Item dot={<Airplane />}> 2014 - Pregrado Universidad Nacional</Item>
                <Item dot={<CheckOutlined />}> 2020 -   Finalizacion pregrado</Item>
                <Item dot={<Job />}> 2020 - Trabajo en x empresa</Item>
            </Timeline>
            </Wrapper>
        </Card>
    )
}
export default Time