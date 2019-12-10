import React, { Component } from 'react';
//import { robots } from './robots';
import CardsList from '../components/cardsList';
import Searchbox from '../components/searchbox';
import Scroll from '../components/scroll';
import './App.css';

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: "",
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))

    }

    onSearchChange = (event) => {

        this.setState({ searchfield: event.target.value })

    }

    render() {
        const { robots, searchfield } = this.state;
        const filterer = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        return !robots.length ?
            (<h1>Loading</h1>)
            :
            (

                <div className="tc" >
                    <h1 className="f1">Hamare Robo Friends</h1>
                    <Searchbox searchchange={this.onSearchChange} />
                    <Scroll>
                        <CardsList robots={filterer} />
                    </Scroll>

                </div>
            )
    }


}


export default App;