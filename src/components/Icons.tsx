import React from 'react'
import { createFromIconfontCN} from "@ant-design/icons";




const IconFont = createFromIconfontCN({
    scriptUrl: [
        '//at.alicdn.com/t/font_2142157_9icjur76pwc.js'
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
        style={{ fontSize:15  }}
    />
)
export const Idiom = () => (
    <IconFont type='iconidiom'
        style={{ fontSize:15  }}
    />
)