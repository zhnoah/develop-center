import React from 'react'
import PropTypes from 'prop-types'
import {
    ButtonToolbar,
    ToggleButtonGroup,
    ToggleButton,
} from 'react-bootstrap'

import './index.css'

const TabButton = (props) => (
    <ButtonToolbar>
        <ToggleButtonGroup type="radio"
            name="options"
            defaultValue={props.defaultValue}
            onChange={props.onChange}
        >
            {
                props.options.map((option) => {
                    return <ToggleButton key={option.id}
                        value={option.id}>{option.name}</ToggleButton>
                })
            }
        </ToggleButtonGroup>
    </ButtonToolbar>
)

TabButton.propTypes = {
    defaultValue: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    onChange: PropTypes.func,
    options: PropTypes.array,
}

export default TabButton