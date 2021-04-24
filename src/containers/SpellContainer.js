import React, {useState, useEffect} from 'react';
import SpellList from '../components/SpellList.js'

const SpellContainer = () => {
    const [spells, setSpells] = useState([]);
    const [selectedSpell, setSelectedSpell] = useState(null);


    useEffect(() => {
        getSpells()
    }, [])

    const getSpells = () => {
        fetch("https://www.dnd5eapi.co/api/spells")
        .then(res => res.json())
        .then(spells => setSpells(spells.results))
    }

    const OnSpellClick = function (spell) {
        setSelectedSpell(spell);
    }

    return(
        <div id="spell-container">
        <h3>List of Spells</h3>
        <SpellList spells={spells} OnSpellClick={OnSpellClick}/>
        </div>
    )

}

export default SpellContainer;