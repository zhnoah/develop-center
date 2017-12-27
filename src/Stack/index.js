import React from 'react'

// import './index.css'
import Footer from '../common/Footer'
import stackData from './data/stack'
import Group from '../Tool/Group'

class Stack extends React.Component {
    
    render() {

        return (
            <div className="container">
               {
                    stackData.map((category) => {
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