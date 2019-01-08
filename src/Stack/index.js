import React from 'react'

import Footer from '../common/Footer'
import TabButton from '../common/TabButton'
import frontData from './data/front'
import backData from './data/back'
import Group from '../Tool/Group'

class Stack extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            category: 'front'
        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(category) {
        this.setState({
            category
        })
    }

    render() {

        let data = []

        if (this.state.category === 'front') data = frontData
        if (this.state.category === 'back') data = backData

        const options = [{
            id: 'front',
            name: 'Web'
        }, {
            id: 'mobile',
            name: 'Mobile'
        }, {
            id: 'back',
            name: 'Server'
        },]

        return (
            <div className="container">
                <TabButton defaultValue={this.state.category}
                    onChange={this.onChange}
                    options={options}
                />
                {
                    data.map((category) => {
                        return (
                            <Group key={category.id}
                                category={category}
                            />
                        )
                    })
                }
                <Footer>
                    @历史版本：
                    <a href="./stacks_v0.1/index.html" target="_blank">v0.1</a>&nbsp;
                    <a href="./stacks_v0.2/stacks.pdf" target="_blank">v0.2</a>
                </Footer>
            </div>
        )
    }
}

export default Stack