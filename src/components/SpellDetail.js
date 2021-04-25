import React from 'react';

const SpellDetail = ({selectedSpell}) => {

    

    return (
        <div id="spell-detail">
            <h3>{selectedSpell.name}</h3>
            <h4>Description</h4>
            {/* <p>{spellDetail.desc}</p> */}
        </div>
    )
}



export default SpellDetail;