import React from 'react'

import TabButton from '../../components/TabButton'

class Code extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: 'snippet'
        }
    }

    onChange(category) {
        this.setState({
            category
        })
    }

    render() {

        const options = [{
            id: 'snippet',
            name: '片段'
        }, {
            id: 'package',
            name: '封装'
        }, {
            id: 'demo',
            name: '作品'
        }]

        return (
            <div className="container">
                <TabButton defaultValue={this.state.category}
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

export default Code