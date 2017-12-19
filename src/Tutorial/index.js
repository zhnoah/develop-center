import React, { Component } from 'react'

import ToggleBar from '../common/ToggleBar'

class Tutorial extends Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'doc'
        }
    }

    onChange(category) {
        this.setState({
            category
        })
    }

    render() {

        const options = [{
            id: 'doc',
            name: '文档'
        }, {
            id: 'blog',
            name: '博文'
        }, {
            id: 'note',
            name: '笔记'
        }]

        return (
            <div className="container">
                <ToggleBar defaultValue={this.state.category}
                    onChange={this.onChange}
                    options={options}
                />
                {/* {
                    data.map((category) => {
                        return (
                            <Group key={category.id} category={category} />
                        )
                    })
                } */}
                {/* <p className="environment-footer">

                </p> */}
            </div>
        )
    }
}

export default Tutorial