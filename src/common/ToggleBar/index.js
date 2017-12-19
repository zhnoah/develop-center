import React, { Component } from 'react'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
} from 'react-bootstrap'

import './index.css'

class ToggleBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <ButtonToolbar>
                <ToggleButtonGroup type="radio"
                    name="options"
                    defaultValue={this.props.defaultValue}
                    onChange={this.props.onChange}
                >
                    {
                        this.props.options.map((option) => {
                            return <ToggleButton key={option.id}
                                value={option.id}>{option.name}</ToggleButton>
                        })
                    }
                </ToggleButtonGroup>
            </ButtonToolbar>
        )
    }
}

export default ToggleBar