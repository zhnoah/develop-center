import React from 'react'
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

export default TabButton