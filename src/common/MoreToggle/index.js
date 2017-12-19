import React from 'react'

import './index.css'

class MoreToggle extends React.Component {
    constructor(props) {
        super(props)

        this.onToggle = this.onToggle.bind(this)
    }

    onToggle() {
        this.props.handleToggle()
    }

    render() {
        return (
            <div className="text-center more">
                <a role="button"
                    onClick={this.onToggle}
                > {this.props.content}
                    {
                        this.props.open ?
                            <span className="glyphicon glyphicon-menu-up" /> :
                            <span className="glyphicon glyphicon-menu-down" />
                    }
                </a>
            </div>
        )
    }
}

export default MoreToggle