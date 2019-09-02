import React, {Component} from 'react';

class Item extends Component {
    state = {
        itemName: "ITEM"
    };

    render() {
        return (
            <div className="mt-4 card shadow-sm bg-white rounded">
                <div className="card-body align-middle">
                    <div className="d-flex bd-highlight">
                        <div className=" flex-grow-1 align-self-center">{this.state.itemName}: {this.props.data.value}</div>
                        <div className=""><button className="btn btn-danger" onClick={()=>this.props.onDelete(this.props.data.id)} >X</button></div>
                    </div>
                </div>
            </div>
        )
    };

}

export default Item;
