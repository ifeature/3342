import React from 'react';
import PropTypes from 'prop-types';

const data = {};

function get(key) {
    return data[key];
}

function register(key, value) {
    data[key] = value;
}

function wire(Component, dependencies, mapper) {
    class Inject extends React.Component {
        onRegister = (key, value) => {
            register(key, value);
            this.forceUpdate();
        };
        onGet = (key) => {
          return get(key);
        };
        render() {
            const resolved = dependencies.map(this.context.get.bind(this.context));
            const props = mapper(...resolved);
            return(
                <Component {...props} {...this.props} onRegister={this.onRegister} onGet={this.onGet} />
            );
        }
    }
    Inject.contextTypes = {
        get: PropTypes.func,
        register: PropTypes.func
    };

    return Inject;
}

export { get, register, wire };