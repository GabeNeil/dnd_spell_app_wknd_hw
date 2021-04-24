import React from 'react';
import SpellItem from './SpellItem.js'


const SpellList = ({spells, handleSpellSelected}) => {
    
    const spellOption = spells.map((spell, index) => {
        return <SpellItem spell={spell} key={index}/>
    })

    const onSpellSelected = (index) => {
        handleSpellSelected(index)
    }


    return(
        <div id="spell-list-box">
            <select id="spell-selector" defaultValue="default" onChange={onSpellSelected}>
                <option disabled value="default">Choose a spell</option>
                {spellOption}
            </select>
        </div>
    )
}


export default SpellList;