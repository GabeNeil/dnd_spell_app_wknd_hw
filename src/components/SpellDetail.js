import React from 'react';

const SpellDetail = ({selectedSpell, spellDetail}) => {

    

    return (
        <div id="spell-detail">
            <h3>{selectedSpell.name}</h3>
            <h4>Description:</h4>
            <p>{spellDetail.desc}</p>
            <h5>At Higher Levels:</h5>
            <p>{spellDetail.higher_level}</p>
            <h5>Level:</h5>
            <p>{spellDetail.level}</p>
            <h5>Range:</h5>
            <p>{spellDetail.range}</p>
            <h5>Components:</h5>
            <p>{spellDetail.components}</p>
            <h5>Material:</h5>
            <p>{spellDetail.material}</p>
            <h5>Casting Time:</h5>
            <p>{spellDetail.casting_time}</p>
            <h5>Duration:</h5>
            <p>{spellDetail.duration}</p>
        </div>
    )
}



export default SpellDetail;