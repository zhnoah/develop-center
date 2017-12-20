import React from 'react'

import {
    categories,
    tools,
} from './data'
import Group from './Group'

const Tool = () => (
    <div className="container">
        {
            categories.map((category) => {
                return (
                    <Group key={category.id}
                        category={category}
                        tools={tools}
                    />
                )
            })
        }
    </div>
)

export default Tool