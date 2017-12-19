import React from 'react'
import {
    ListGroup,
} from 'react-bootstrap'

import './Group.css'
import Item from './Item'
import PanelTitle from '../common/PanelTitle'
import MoreToggle from '../common/MoreToggle'

class Group extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false
        }
        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        })
    }

    render() {
        const { category } = this.props

        const count = category.softwares.length + category.more.length

        return (
            <div>
                <PanelTitle caption={category.caption} count={count} />
                <ListGroup>
                    {
                        category.softwares.map((software) => {
                            return (
                                <Item key={software.id}
                                    software={software} />
                            )
                        })
                    }
                    {
                        (this.state.open && category.more.length) &&
                        category.more.map((software) => {
                            return (
                                <Item key={software.id}
                                    software={software} />
                            )
                        })
                    }
                </ListGroup>
                {
                    !!category.more.length && <MoreToggle
                        content="更多"
                        open={this.state.open}
                        handleToggle={this.handleToggle}
                    />
                }
            </div>
        )
    }
}

export default Group