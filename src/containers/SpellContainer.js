import React, {useState, useEffect} from 'react';
import SpellList from '../components/SpellList.js'
import SpellDetail from '../components/SpellDetail.js'

const SpellContainer = () => {
    const [spells, setSpells] = useState([]);
    const [selectedSpellIndex, setSelectedSpellIndex] = useState("")
    const [selectedSpell, setSelectedSpell] = useState(null);
    const [spellDetail, setSpellDetail] = useState([]);


    
    useEffect(() => {
        getSpells()
    }, [])

    useEffect(() => {
        let spell = spells.find(spell => spell.index === selectedSpellIndex)
        setSelectedSpell(spell);
    }, [spells, selectedSpellIndex])

    useEffect(() => {
        getSpellDetail()
    }, [selectedSpell]);

    const getSpells = () => {
        fetch("https://www.dnd5eapi.co/api/spells")
        .then(res => res.json())
        .then(spells => setSpells(spells.results))
    }

    const getSpellDetail = () => {
        if(selectedSpell) {
            fetch(`https://www.dnd5eapi.co${selectedSpell.url}`)
            .then(res => res.json())
            .then(spellDetail => setSpellDetail(spellDetail))
    }
    }

    const handleSpellSelected = (index) => {
        const foundSpell = spells.find((spell) => {
            return spell.index === index
        })
        setSelectedSpell(foundSpell)
    }


    return(
        <>
        <div id="spell-container">
        <h3>List of Spells</h3>
        <SpellList spells={spells} handleSpellSelected={handleSpellSelected} />
        </div>
        {selectedSpell ? <SpellDetail selectedSpell={selectedSpell} spellDetail={spellDetail}/> : null}
        </>
    )

}

export default SpellContainer;