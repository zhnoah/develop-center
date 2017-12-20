import React from 'react'
import {
    ListGroup,
    ListGroupItem,
} from 'react-bootstrap'

import PanelTitle from '../common/PanelTitle'

class Group extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {

        const { id, caption } = this.props.category

        return (
            <React.Fragment>
                <PanelTitle caption={caption} count={this.state.count} />
                <ListGroup>
                    {
                        this.props.tools.map(tool => {

                            if (tool.categories.indexOf(id) >= 0) {
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
                            }

                            return null
                        })
                    }
                </ListGroup>
            </React.Fragment>
        )
    }
}

export default Group