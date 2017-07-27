import React from 'react';
import {wire} from '../../../di';
import { Store } from '../../../store';

function TabTemplate({children, value, onRegister, onGet}) {
    let val;
    function handleClick(type) {
        onRegister(value, type);
        val = Store.get();
        Store.set(val);
    }

    const icons = React.Children.map(children, child => {
        return React.cloneElement(child, {
            onClick: () => {
                handleClick(child.props.type);
            },
            active: onGet(value) === child.props.type
        });
    });
    return (
        <div className="TabTemplate">
            {icons}
        </div>
    );
}

const wired = wire(TabTemplate, ['faceHair'], function (faceHair) {
    return {faceHair};
});

export {wired as TabTemplate};