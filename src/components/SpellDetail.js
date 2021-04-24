import React from 'react';

const SpellDetail = ({selectedSpell}) => {
    return (
        <div id="spell-detail">
            <h3>{selectedSpell.name}</h3>
        </div>
    )
}



export default SpellDetail;