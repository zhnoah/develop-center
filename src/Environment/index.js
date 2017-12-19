import React from 'react'

import './index.css'
import TabButton from '../common/TabButton'
import Footer from '../common/Footer'
import winData from './systems/win'
import macData from './systems/mac'
import Group from './Group'

class Environment extends React.Component {
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

        const options = [{
            id: 'win',
            name: 'Windows'
        }, {
            id: 'mac',
            name: 'macOS'
        }]

        return (
            <div className="container">
                <TabButton defaultValue={this.state.system}
                    onChange={this.onChange}
                    options={options}
                />
                {
                    data.map((category) => {
                        return (
                            <Group key={category.id} category={category} />
                        )
                    })
                }
                <Footer>
                    @历史版本：
                    <a href="./software-center_v0.1/index.html" target="_blank">v0.1</a>&nbsp;
                    <a href="./software-center_v0.2/index.html" target="_blank">v0.2</a>
                </Footer>
            </div>
        )
    }
}

export default Environment