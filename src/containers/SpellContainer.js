import React, {useState, useEffect} from 'react';
import SpellList from '../components/SpellList.js'
import SpellDetail from '../components/SpellDetail.js'

const SpellContainer = () => {
    const [spells, setSpells] = useState([]);
    const [selectedSpellIndex, setSelectedSpellIndex] = useState("")
    const [selectedSpell, setSelectedSpell] = useState(null);


    
    useEffect(() => {
        getSpells()
    }, [])

    useEffect(() => {
        let spell = spells.find(spell => spell.index === selectedSpellIndex)
        setSelectedSpell(spell);
    }, [spells, selectedSpellIndex])

    const getSpells = () => {
        fetch("https://www.dnd5eapi.co/api/spells")
        .then(res => res.json())
        .then(spells => setSpells(spells.results))
    }

    const handleSpellSelected = (event) => {
        setSelectedSpellIndex(event.target.value)
    }


    return(
        <>
        <div id="spell-container">
        <h3>List of Spells</h3>
        <SpellList spells={spells} handleSpellSelected={handleSpellSelected}/>
        </div>
        {selectedSpell? <SpellDetail selectedSpell={selectedSpell} /> : null}
        </>
    )

}

export default SpellContainer;