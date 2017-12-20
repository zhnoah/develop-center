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
                category.items.map(tool => {
                    return (
                        <ListGroupItem key={tool.id}
                            className="clearfix"
                            href={tool.url}
                            target="_blank"
                        >
                            <div className="pull-left">
                                <b>{tool.name}</b>
                            </div>
                            <div className="pull-right">
                                <small className="text-muted">{tool.describe}</small>
                            </div>
                        </ListGroupItem>
                    )
                })
            }
        </ListGroup>
    </React.Fragment>
)

export default Group