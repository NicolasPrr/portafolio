import React from 'react'

import { Card, WrapperIns } from './index'
import {Typography, Divider} from 'antd'

type Props ={
    title: string,
    children: string | React.ReactNode,

}
const Description = ({title, children}: Props) => {

    return (
        <Card>
            <WrapperIns>
                <Typography.Title level={5}>
                    {title}
                </Typography.Title>
                <Divider/>
                <Typography.Text>
                    {children}
                </Typography.Text>
            </WrapperIns>
        </Card>

    )
}


export default Description