import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import TabDoor from './tab-nav/TabDoor'
import TabDevices from './tab-nav/TabDevices'
import TabPrice from './tab-nav/TabPrice'
import '../css/TabNav.css'
import TabContentOne from './TabContentOne'
import TabContentTwo from './TabContentTwo'
import TabContentThree from './TabContentThree'
class TabComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             tabIndex: 1
        }
    }
    
    render() {
        return (
            <div>
                <Tabs className = "tabs">
                <TabList className ="tabs-nav-container"  
                onSelect = {(index, lastIndex, event)  => console.log(event)}>
                <Tab selectedTabClassName="active">
                <TabDoor />
                <p ><strong>No comitment <br/>
                cancel online at anyime
                </strong></p>
                <p style = {{display: 'none ', marginBottom: '0.3rem' , marginTop:'2rem'}}>Cancel</p>
                </Tab>
                <Tab ><TabDevices />
                <p /*style={{marginTop : '-4.2rem'}}*/><strong>Watch anywhere
                </strong></p>
                <p style = {{display: 'none '}}>Devices</p>
                </Tab>
                <Tab ><TabPrice />
                <p ><strong>Pick your price
                </strong></p>
                <p style = {{display: 'none '}}>price</p>
                </Tab>
               
                </TabList>
                {/* tab content*/}
                <TabPanel>
                <TabContentOne />
                </TabPanel>
                <TabPanel>
                <TabContentTwo />
                </TabPanel>
                <TabPanel>
                <TabContentThree />
                </TabPanel>
                </Tabs>
            </div>
        );
    }
}

export default TabComponents;
