import React from 'react';

const SpellItem = ({spell, index}) => {


    return (
        <option value={spell.index} key={index}>{spell.name} </option>
    )

}




export default SpellItem