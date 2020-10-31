import React from 'react'
import { createFromIconfontCN, GithubOutlined, YoutubeOutlined } from "@ant-design/icons";
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
const StyledIconURL = styled(IconFont)`
        font-size: 15;
        &:hover {
            color: #007991;
        }
    `;
export const Url = ({ title, href }: { title: string, href?: string }) => {
    // const [hover, setHover] = useState(false)
    return (
        <Tooltip title={title}>
            <a href={href || ''} rel="noopener noreferrer" target='_blank'>
                <StyledIconURL type='iconURL' />
            </a>
        </Tooltip>
    )
}
const StyledIconGit = styled(GithubOutlined)`
        font-size: 15;
        &:hover {
            color: #007991;
        }
    `;
export const Repo = ({ title, href }: { title: string, href?: string }) => {
    // const [hover, setHover] = useState(false)
    return (
        <Tooltip title={title}>
            <a href={href || ''} rel="noopener noreferrer" target='_blank'>
                <StyledIconGit />
            </a>
        </Tooltip>
    )
}
const StyledIconY = styled(YoutubeOutlined)`
        font-size: 15;
        &:hover {
            color: #007991;
        }
    `;
export const Youtube = ({ title, href }: { title: string, href?: string }) => {
    // const [hover, setHover] = useState(false)
    return (
        <Tooltip title={title}>
            <a href={href || ''} target='_blank' rel="noopener noreferrer">
                <StyledIconY />
            </a>
        </Tooltip>
    )
}