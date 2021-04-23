import React, {useState, useEffect} from 'react';

const SpellContainer = () => {
    const [spells, setSpells] = useState([]);
    const [selectedSpell, setSelectedSpell] = useState(null);


    useEffect(() => {
        getSpells()
    }, [])

    const getSpells = () => {
        fetch("https://www.dnd5eapi.co/api/spells")
        .then(res => res.json())
        .then(spells => console.log(spells))
    }

    return(
        <p>this is the spell container</p>
    )

}

export default SpellContainer