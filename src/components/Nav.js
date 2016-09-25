import React, { Component } from 'react';
import Doctor from './Doctor'
import House from './House'
import Care from './Care'
import Meal from './Meal'
import Others from './Others'
import {Tabs, Tab, MenuItem } from 'react-bootstrap';

class Nav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Tabs activeKey={this.props.tabId} onSelect={this.props.handleSelect} id="controlled-tab-nav">
                <Tab eventKey={1} title="医生与医院">
                    <Doctor/>
                </Tab>
                <Tab eventKey={2} title="住宿">
                    <House/>
                </Tab>
                <Tab eventKey={3} title="月嫂">
                    <Care/>
                </Tab>
                <Tab eventKey={4} title="餐费">
                    <Meal/>
                </Tab>
                <Tab eventKey={5} title="其他">
                    <Others/>
                </Tab>
            </Tabs>
        );
    }
}

export default Nav;
