import React, { useState } from 'react'
import { createFromIconfontCN, GithubOutlined } from "@ant-design/icons";
import { Tooltip } from 'antd'
import styled from 'styled-components'


const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_2142157_24nydt0969n.js'
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
export const Airplane = () => (
    <IconFont type='iconairplane'
        style={{ fontSize: 20 }}
    />
)
export const Programming = () => (
    <IconFont type='iconprogramming'
        style={{ fontSize: 20 }}
    />
)
export const Job = () => (
    <IconFont type='iconjob1'
        style={{ fontSize: 20 }}
    />
)
export const Coding = () => (
    <IconFont type='iconprogramming2'
        style={{ fontSize: 15 }}
    />
)
export const Idiom = () => (
    <IconFont type='iconidiom'
        style={{ fontSize: 15 }}
    />
)
export const Url = ({ title, href }: { title: string, href?: string }) => {
    // const [hover, setHover] = useState(false)
    const StyledIcon = styled(IconFont)`
        font-size: 15;
        &:hover {
            color: #007991;
        }
    `;
    return (
        <Tooltip title={title}>
            <a href={href || ''} target='_blank'>
                <StyledIcon type='iconURL'  />
            </a>
        </Tooltip>
    )
}
export const Repo = ({ title, href }: { title: string, href?: string }) => {
    // const [hover, setHover] = useState(false)
    const StyledIcon = styled(IconFont)`
        font-size: 15;
        &:hover {
            color: #007991;
        }
    `;
    return (
        <Tooltip title={title}>
            <a href={href || ''} target='_blank'>
                <GithubOutlined />
            </a>
        </Tooltip>
    )
}