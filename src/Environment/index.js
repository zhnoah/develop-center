import React, { Component } from 'react'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
} from 'react-bootstrap'

import './index.css'
import winData from './systems/win'
import macData from './systems/mac'
import Group from './Group'

class Environment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            system: this.getSystem()
        }
        this.onChange = this.onChange.bind(this)
    }

    getSystem() {
        let system = 'win'

        if (navigator.userAgent.indexOf('Mac') >= 0)
            system = 'mac'

        return system
    }

    onChange(system) {
        this.setState({
            system
        })
    }

    render() {

        let data = []

        if (this.state.system === 'win') data = winData
        if (this.state.system === 'mac') data = macData

        return (
            <div className="environment-container center-block">
                <ButtonToolbar>
                    <ToggleButtonGroup type="radio"
                        name="options"
                        defaultValue={this.state.system}
                        onChange={this.onChange}
                    >
                        <ToggleButton value="win">Windows</ToggleButton>
                        <ToggleButton value="mac">macOS</ToggleButton>
                    </ToggleButtonGroup>
                </ButtonToolbar>
                {
                    data.map((category) => {
                        return (
                            <Group key={category.id} category={category} />
                        )
                    })
                }
                <p className="environment-footer">
                    @历史版本：
                    <a href="./software-center_v0.1/index.html" target="_blank">v0.1</a>&nbsp;
                    <a href="./software-center_v0.2/index.html" target="_blank">v0.2</a>
                </p>
            </div>
        )
    }
}

export default Environment