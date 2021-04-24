import React from 'react';
import SpellItem from './SpellItem.js'


const SpellList = ({spells, OnSpellClick}) => {
    
    const spellOption = spells.map((spell, index) => {
        return <SpellItem spell={spell} OnSpellClick={OnSpellClick} key={index}/>
    })

    const handleSpellSelected = (index) => {
        OnSpellClick(index)
    }


    return(
        <div id="spell-list-box">
            <select id="spell-selector" defaultValue="default" onChange={handleSpellSelected}>
                <option disabled value="default">Choose a spell</option>
                {spellOption}
            </select>
        </div>
    )
}


export default SpellList;