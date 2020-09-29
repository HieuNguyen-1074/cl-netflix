import React, { Component } from 'react'

import Header from '../components/Header';
import TabCompoments from '../components/TabComponents'
import Footer from '../components/Footer'
 class Main extends Component {
    render() {
        return (
            <div>
              <Header /> 
              <TabCompoments />
              <Footer />
            </div>
        )
    }
}
export default Main
