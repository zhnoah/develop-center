import React, { Component } from 'react'
import {
    // ListGroup,
    Panel,
    // ListGroupItem,
} from 'react-bootstrap'

class Group extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {

        const { stack } = this.props

        return (
            <Panel style={{marginBottom: 5}}>
                {
                    stack.name
                }
            </Panel>
        )
    }
}

export default Group