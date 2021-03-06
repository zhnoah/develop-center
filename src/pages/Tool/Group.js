import React from 'react'
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap'

import PanelTitle from '../../components/PanelTitle'

const Group = ({ category }) => (
    <>
        <PanelTitle
            caption={category.caption}
            count={category.items.length}
        />
        <ListGroup>
            {
                category.items.map((tool, index) => {

                        return (
                            <ListGroupItem style={{ display: 'flex' }}
                                key={index}
                                href={tool.url}
                                target="_blank"
                            >
                                <div style={{ flex: 1 }}>
                                    <b>{tool.name}</b>
                                </div>
                                {
                                    tool.describe && (
                                        <div className="text-muted">
                                            <small>{tool.describe}</small>
                                        </div>
                                    )
                                }
                            </ListGroupItem>
                        )

                })
            }
        </ListGroup>
    </>
)

export default Group