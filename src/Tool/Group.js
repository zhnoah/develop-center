import React from 'react'
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap'

import PanelTitle from '../common/PanelTitle'

const Group = ({ category }) => (
    <React.Fragment>
        <PanelTitle
            caption={category.caption}
            count={category.items.length}
        />
        <ListGroup>
            {
                category.items.map((tool, index) => {

                    if (tool.translation) {

                        return (
                            <ListGroupItem style={{ display: 'flex' }} key={index}>
                                <div style={{ flex: 1 }}>
                                    <a href={tool.url} target="_blank"><b>{tool.name}</b></a>
                                </div>
                                <div>
                                    <a href={tool.translation} target="_blank">译文</a>
                                </div>
                            </ListGroupItem>
                        )
                    } else {
                        return (
                            <ListGroupItem key={index}
                                href={tool.url}
                                target="_blank"
                            >
                                <b>{tool.name}</b>
                            </ListGroupItem>
                        )
                    }

                })
            }
        </ListGroup>
    </React.Fragment>
)

export default Group