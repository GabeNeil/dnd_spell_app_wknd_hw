import React from 'react';
// import SpellItem from './SpellItem.js'


const SpellList = ({spells}) => {
    
    const spellOption = spells.map(spell => {
        return <option value={spell.index} key={spell.index}>{spell.name}</option>
    })

    return(
        <div id="spell-list-box">
            <select id="spell-selector" defaultValue="default">
                <option disabled value="default">Choose a spell</option>
                {spellOption}
            </select>
        </div>
    )
}


export default SpellList;