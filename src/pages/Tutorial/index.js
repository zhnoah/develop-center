import React from 'react'

import TabButton from '../../components/TabButton'
import blogData from './data/blog'
import noteData from './data/note'
import Group from '../Tool/Group'

class Tutorial extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'blog'
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

        if (this.state.category === 'blog') data = blogData
        if (this.state.category === 'note') data = noteData

        const options = [{
            id: 'blog',
            name: '博文'
        }, {
            id: 'note',
            name: '笔记'
        }]

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

export default Tutorial