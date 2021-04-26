import React from 'react';



const SpellList = ({spells, handleSpellSelected}) => {
    
    const spellOptions = spells.map((spell, index) => {
        return <option value={spell.index} key={index} url={spell.url}>{spell.name} </option>
    })

    const onSpellSelected = (event) => {
        handleSpellSelected(event.target.value)
    }


    return(
        <div id="spell-list-box">
            <select id="spell-selector" defaultValue="default" onChange={onSpellSelected}>
                <option disabled value="default">Choose a spell</option>
                {spellOptions}
            </select>
        </div>
    )
}


export default SpellList;