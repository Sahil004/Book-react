import React, { Component } from 'react';
import './App.css';

class Display extends Component{
    constructor(props){
        super(props);
        this.state={
            val:'null'
        };
        this.addshelf = this.addshelf.bind(this);

    }

    addshelf(){
        alert("Added to Shelf.");
    }
    render(){
        const list = this.props.book;
        if (list!=null){
            return(
                <div>
                    {this.props.book.map((row)=>{
                        return(
                            <div key={row.id}>
                                <div className = "CARD">
                                    <h2>{row.volumeInfo.title}</h2>
                                    <img key={row.id} src={row.volumeInfo.imageLinks.thumbnail} alt="hello"/>
                                    <div>
                                        <button onClick = {this.addshelf}>ADD to shelf</button>
                                        <div></div>                                        
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            );
        }
        else{
            return(
                <div>
                </div>
            );
        }
    }
}

export default Display;