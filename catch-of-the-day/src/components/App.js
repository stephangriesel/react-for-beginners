import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fishes: {},
            order: {}
        }
    };
    // Methods that set state need to live in same component
    addFish = fish => {
        // 1. take copy of existing state (dont want to change original state). Aka mutation reach directly into object
        const fishes = {...this.state.fishes};
        // 2. add new array (fish) to existing array (fishes)
        fishes[`fish${Date.now()}`] = fish;
        // 3. set newly added array to state
        this.setState({
            fishes: fishes
        });
        // console.log("Add Fish")
        
    };
    // How do I call this method 2 levels deeper?
    // Things to keep in mind, it is lower that parent, think about the flow, from top to bottom when you passing props
    // Solution: Pass it to inventory which is lower down
    // Solution2: The property passed to inventory and we can push it even lower by padding the props 'this.props.addFish' to addFishForm
    loadSampleFishes = () => {
        this.setState({ fishes: sampleFishes });
    };

    addToOrder = (key) => {
        // 1. take a copy of state 
        const order = {...this.state.order};
        // 2. add to order or update the number of current order
        order[key] = order[key] + 1 || 1;
        // 3. call setState to update our current state
        this.setState({ order: order });
    };

    render() {
        return (
            <div className="catch-of-the-day">
                <div className="menu">
                    <Header tagline="Fresh Seafood Market" />
                        <ul className="fishes">
                            {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]}/>)}
                        </ul>
                </div>
                <Order working="true"/>
                <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} addToOrder={this.addToOrder}/>

            </div>
        )
    }
}

export default App;