import React, { Component } from 'react'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCounterTwo from './components/HookCounterTwo'
import HookCounterThree from './components/HookCounterThree'
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'
import ClassMouse from './components/ClassMouse'
import HookMouse from './components/HookMouse'
import IntervalHookCounter from './components/IntervalHookCounter'
import DataFetching from './components/DataFetching'
class App extends Component {
	render() {
		return (
			<div className="App">
				<DataFetching />
				{/* <HookMouse /> */}
				{/* <HookCounterOne />
				<ClassCounterOne />
                <ClassMouse /> */}
                {/* <IntervalHookCounter />    */}


        {/* < HookCounterThree /> */}
        {/* < HookCounterTwo /> */}
				 {/* <ClassCounter />
				 <HookCounter /> */}
			</div>
		)
	}
}

export default App