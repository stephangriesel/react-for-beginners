import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

    // constructor() {
    //     super();
    //     this.goToStore = this.goToStore.bind(this);
    // }

    myInput = React.createRef();

    goToStore = (event) => { // Alternative from using constructor above is to use arrow function. Declare property which will bound to instance
    // goToStore(e){ // Constructor approach

        // 1. Stop form from submitting
        event.preventDefault();
        // 2. Get text from input
        const storeName = this.myInput.current.value; // Check why not value as per video?
        // 3. Change the page to store whatever input submitted
        this.props.history.push(`/store/${storeName}`);  
    };

    render() {
        return (
        <form className="store-locator" onSubmit={this.goToStore}>
            <h2>Please enter store</h2>
            <input 
                type="text" 
                ref={this.myInput}
                required placeholder="Store Name" 
                defaultValue={getFunName()} 
            />
            <button type="submit">> Visit store</button>
        </form>
        )
    }
}

export default StorePicker;