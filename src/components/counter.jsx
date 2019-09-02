import React, {Component} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import Item from "./item";

class Counter extends Component {
    state = {
        cnt: 0,
        txt: 'React World',
        ver: '1.0.0',
        tags: ['tag 1', 'tag 2', 'tag 3'],
        btnText: "Press Me",
        items: [
            {id: 1, value: 'V1'},
            {id: 2, value: 'V2'},
            {id: 3, value: 'V3'},
        ]
    };

    render() {
        return (<div className="container">
            <h1 className="text-center">
                {this.getTxt()} <span style={{'fontSize': '1rem'}}>v{this.state.ver}</span>
            </h1>
            <ul className="list-group">
                {this.state.tags.map(tag => <li key={tag} className="list-group-item">{tag}</li>)}
            </ul>
            {this.setBtn()}
            {this.state.items.map(
                item => <Item key={item.id} onDelete={this.handleDelete} data={item}/>
                )}
            {this.addItemButton()}
        </div>)
    };


    getTxt() {
        return this.state.txt;
    };

    setBtn() {
        return <button onClick={this.handleClick} className="mt-2 btn btn-primary">
            {this.state.btnText}: {this.state.cnt}</button>;
    }

    addItemButton(){
        return <button className="mt-4 btn btn-success" onClick={this.handleAdd}><FontAwesomeIcon icon={faPlus} /> Add new Item</button>;
    }

    handleClick = () => {
        this.setState({cnt: this.state.cnt + 1});
    };

    handleAdd = () => {
        console.log(this.state.items);
        const nextN = this.state.items.length + 1;
        const items = this.state.items.concat({id: nextN, value: 'V' + nextN});
        console.log(nextN);
        console.log(items);
        this.setState({items});
    };

    handleDelete = itemId => {
        console.log(itemId);
        const items = this.state.items.filter(i => i.id !== itemId);
        this.setState({items});
    };
}

export default Counter;
