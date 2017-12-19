import React from 'react'
import PropTypes from 'prop-types'

import './index.css'

const PanelTitle = (props) => (
    <h2 className="title">{props.caption}&nbsp;({props.count})</h2>
)

PanelTitle.propTypes = {
    caption: PropTypes.string.isRequired,
    count: PropTypes.number,
}

PanelTitle.defaultProps = {
    count: 0,
}

export default PanelTitle