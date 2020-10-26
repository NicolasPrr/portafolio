import React from 'react'
import { List, Image, Tag, Divider } from 'antd'
import { Url, Repo} from './Icons'
import { Container, ItemImage } from './FiboImage'
import { buildGrid } from './FiboImage/helpers'
import { projectData } from '../variables'




const ProjectList = () => {
    
    return (
        <List
        size='large'
            itemLayout='vertical'
            dataSource={projectData}
            renderItem={item => {
                const actions = []
                item.url  && actions.push(<Url title='Ir al proyecto' href={item.url}/>)
                item.repo  && actions.push(<Repo title='Ir al repositorio' href={item.repo}/>)
                
                return (
                    <List.Item
                    actions={actions}
                        style={{ padding: 20 }} extra={
                            <Container boxes={item.src.length} >
                                {Object.keys(item.src).map((key) => {
                                    const keyInt = parseInt(key)
                                    const grid = buildGrid(item)
                                    return (<React.Fragment key={key}>
                                        {grid[keyInt] && <ItemImage grid={grid[keyInt]} key={key} >
                                            <Image
                                                style={{objectFit: 'contain'}}
                                                // width={'100%'}
                                                height={'100%'}
                                                src={item.src[keyInt]}
                                            />
                                        </ItemImage>
                                        }
                                    </React.Fragment>
                                    )


                                })}
                            </Container>

                        }
                    >

                        <List.Item.Meta description={item.dates} key={item.title} title={item.title} />
                        {item.description}
                        {item?.libraries && item.libraries.length > 0 &&  <Divider orientation='left' style={{fontSize: 13}}>Librerias</Divider>}
                        {item.libraries?.map( lib => <Tag>{lib}</Tag>)}
                    </List.Item>

                )
            }}
        />
    )
}
export default ProjectList