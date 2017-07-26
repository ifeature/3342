import React from 'react';
import PropTypes from 'prop-types';

function Tab({ label, selected, index, onClick }) {
    return(
        <div className="Tab" style={{textDecoration: selected ? 'underline' : 'none'}} onClick={() => { onClick(index); }}>
            { label }
        </div>
    )
}

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    selected: PropTypes.bool,
    index: PropTypes.number,
    onClick: PropTypes.func
};

export { Tab };