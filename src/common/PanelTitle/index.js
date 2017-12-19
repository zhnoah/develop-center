import React from 'react'

import './index.css'

const PanelTitle = (props) => (
    <h2 className="title">{props.caption}&nbsp;({props.count})</h2>
)

export default PanelTitle