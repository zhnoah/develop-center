import React from 'react'

import TabButton from '../common/TabButton'
import codeData from './data/code'
import imageData from './data/image'
import Group from './Group'


class Tool extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'code'
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

        if (this.state.category === 'code') data = codeData
        if (this.state.category === 'image') data = imageData

        const options = [{
            id: 'code',
            name: '代码'
        }, {
            id: 'image',
            name: '图片'
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
            </div>
        )
    }
}

export default Tool