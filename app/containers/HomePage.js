/**
 * Created by vison on 17/3/20.
 */
import React from 'react';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';

export default class AppContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Button type="primary" size="large">Primary</Button>
                <Input placeholder="Basic usage" />
            </div>
        );
    }
}