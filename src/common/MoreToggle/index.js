import React from 'react'
import PropTypes from 'prop-types'

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
                <button
                    className="btn btn-xs btn-link"
                    onClick={this.onToggle}
                > {this.props.content}
                    {
                        this.props.open ?
                            <span className="glyphicon glyphicon-menu-up" /> :
                            <span className="glyphicon glyphicon-menu-down" />
                    }
                </button>
            </div>
        )
    }
}

MoreToggle.propTypes = {
    handleToggle: PropTypes.func.isRequired,
    content: PropTypes.string,
    open: PropTypes.bool,
}

MoreToggle.defaultProps = {
    content: '更多',
    open: false,
}

export default MoreToggle