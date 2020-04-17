import React from 'react';
import Card from './Card'
import './style.css'

class CardList extends React.Component {
    constructor(props) {
        super(props);
        this.state = { list: props.list, clicked: [], highestScore: 0 }
    }

    /**
     * cards click listenr
     * return the click card's name
     */
    handleClick = (name) => {
        // console.log(name);
        if (this.state.clicked.includes(name)) {
            this.gameOver();
        } else {
            this.setState({clicked: [...this.state.clicked, name]},()=>{ // check game score
                if(this.state.list.length===this.state.clicked.length){
                    this.gameWin();
                }else{
                    this.shuffle();
                } 
            });
        }
    }

    gameOver = () =>{
        alert("GameOver!");
        this.stratGame();
    }

    gameWin = () =>{
        alert("Congratulation, you win the game!")
        this.stratGame();
    }

    stratGame = () => {
        let score = this.state.clicked.length;
        if (score > this.state.highestScore) this.setState({ highestScore: score })
        this.setState({ clicked: [] }) // reset clicked record
    }

    shuffle = () =>{
        let newList = [...this.state.list];
        for (let i = newList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [newList[i], newList[j]] = [newList[j], newList[i]];
        }
        this.setState({ list: newList });
    }


    render() {
        return (
            <div>
                <div className="row justify-content-md-center">
                    <div className="col-2">Score <span>{this.state.clicked.length}/{this.state.list.length}</span></div>
                    <div className="col-2">Highest Score <span>{this.state.highestScore}</span></div>
                </div>
                <br></br>
                <div className="row">
                    {this.state.list.map(x => <Card key={x} image={x} handleClick={this.handleClick}></Card>)}
                </div>
            </div>
        )
    }
}

export default CardList;