import React from 'react'

import './index.css'

const Footer = ({children, ...props}) => (
    <p className="footer" {...props}>
        {children}
    </p>
)

export default Footer