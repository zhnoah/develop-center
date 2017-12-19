import React, { Component } from 'react'
import {
    ListGroup,
} from 'react-bootstrap'

import './Group.css'
import Item from './Item'
import MoreButton from '../common/MoreButton'

class Group extends Component {
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
                <h2 className="title">{category.caption}&nbsp;({count})</h2>
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
                    !!category.more.length && <MoreButton content="更多" open={this.state.open} />
                }
                <div className="text-center more">
                    {
                        !!category.more.length && (
                            <a role="button"
                                onClick={this.handleToggle}
                            > 更多
                            {this.state.open ? <span className="glyphicon glyphicon-menu-up" /> :
                                    <span className="glyphicon glyphicon-menu-down" />}
                            </a>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Group