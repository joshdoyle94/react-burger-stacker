// this displays an individual ingredient
import React from 'react'

// this component receives ONE ingredient as a prop and displays said ingredient
const Ingredient = ({ ingredient, itemKey, clickFunc }) => {
        const { name, color } = ingredient

        return (
            <p
                style={{backgroundColor: color}}
                id={itemKey}
                onClick={clickFunc}
            >
                {name}
            </p>
        )
}

export default Ingredient