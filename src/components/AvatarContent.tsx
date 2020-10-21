import React from 'react'
import { Avatar, Typography, Divider, Space } from 'antd'
import styled from 'styled-components'
import { LinkedinOutlined, createFromIconfontCN, PhoneOutlined, GithubOutlined } from "@ant-design/icons";
import DynamicTags from './DynamicTag'
import { Idiom, Coding } from './Icons'

import { Card } from './index'

import { data, languageList, idiomList } from '../variables'

const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_2142157_hvnclfs5q2t.js'
    ],
});
export const University = () => (
    <IconFont type='iconuniversity1'
        style={{ fontSize: 20 }}
    />
)
export const Certificate = () => (
    <IconFont type='iconcertificate'
        style={{ fontSize: 20 }}
    />
)

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Row = styled.div`
    display: flex;
    flex-wrap:  wrap ;
    justify-content: space-between;

`;

const AvatarContent = () => (
    <Card>
        <Wrapper>

            <Avatar
                src={data.src}
                size={125}
            />
            <Typography.Title level={5}>
                {data.name}
            </Typography.Title>
            <Space direction='vertical' align='start'  >
                <Typography.Text>
                    <Certificate />{data.cerificate}
                </Typography.Text>
                <Typography.Text>
                    <University /> {data.university}
                </Typography.Text>
                <Typography.Text>
                    <PhoneOutlined style={{ fontSize: 20 }} /> {data.phone}
                </Typography.Text>
                <Typography.Link href={data.repository} target='_blank' >
                    <GithubOutlined style={{ fontSize: 20 }} /> Perfil GitHub
            </Typography.Link>
                <Typography.Link href={data.linkedin} target='_blank' >
                    <LinkedinOutlined style={{ fontSize: 20 }} /> Linkedin
            </Typography.Link>

            </Space>
            <Divider dashed style={{ fontSize: '11px' }} > <Coding /> Lenguajes</Divider>
            <Row>
                <DynamicTags data={languageList}  type='language' />
            </Row>
            <Divider dashed style={{ fontSize: '11px' }} > <Idiom /> Idiomas</Divider>
            <Row>
                <DynamicTags data={idiomList} />
            </Row>
        </Wrapper>
    </Card>

)
export default AvatarContent
