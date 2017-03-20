/**
 * Created by vison on 17/3/20.
 */
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import routes from '../routes';

export default class Root extends React.Component {

    render () {
        return (
            <Provider store={this.props.store}>
                <Router history={this.props.history} routes={routes} />
            </Provider>
        );
    }
}
