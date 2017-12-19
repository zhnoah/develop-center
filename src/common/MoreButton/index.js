import React, { Component } from 'react'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
} from 'react-bootstrap'

import './index.css'

class MoreButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: this.props.open
        }

        this.handleToggle = this.handleToggle.bind(this)
    }

    handleToggle() {
        this.setState({
            open: !this.state.open
        })

            // (typeof this.props.onToggled === 'function') && this.props.onToggled()
    }

    render() {
        return (
            <div className="text-center more">
                <a role="button"
                    onClick={this.handleToggle}
                > {this.props.content}
                    {
                        this.state.open ?
                            <span className="glyphicon glyphicon-menu-up" /> :
                            <span className="glyphicon glyphicon-menu-down" />
                    }
                </a>
            </div>
        )
    }
}

export default MoreButton