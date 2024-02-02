import React,{Component} from 'react';
import './App.css';
import Book from './component/Book'


class App extends Component{
  //state
  state ={
    books:
    [
      {bookname: "Nahj al-Balagha", writer:"Imam Ali Ibn Abi Taleb, Farouk Ebeid"},
      {bookname: "Stealing from the Saracens", writer :"Diana Darke"},
      {bookname: "Islamic Empires", writer:"Justin Marozzi"}
    ],
    other: "I am other"
  };

  changeState = (newBook) => {

    //wrong this.state.books[0].bookname = "some book";
    this.setState({
      books:
      [
        {bookname: newBook, writer:"George Orwell"},
        {bookname: "Don't No!", writer :"Reyazon Shuvro"},
        {bookname: "Islamic Empires", writer:"Justin Marozzi"}
      ]
    });
  };

changeWithInput = event =>{

  this.setState({
    books:
    [
      {bookname: event.target.value, writer:"George Orwell"},
      {bookname: "Don't No!", writer :"Reyazon Shuvro"},
      {bookname: "Islamic Empires", writer:"Justin Marozzi"}
    ]
  });
}

//<button onClick={()=> this.changeState("1984")}>Change State</button> we can also write this way
  render() {

    const style ={
      border: "1px solid red",
      borderRadius: "5px",
      backgroundColor:"black",
      color: "white"

    }




    console.log(this.state);
    return (
      <div className="App">
        <h1 style={style}>Book List</h1>
        <button onClick={this.changeState.bind(this, "1984")}>Change State</button>
        <input type = "text" onChange={this.changeWithInput} />
        <Book bookname = {this.state.books[0].bookname} 
        writer ={this.state.books[0].writer}
        inputName = {this.changeWithInput}/>

        <Book bookname = {this.state.books[1].bookname} 
        writer ={this.state.books[1].writer}/>

        <Book bookname = {this.state.books[2].bookname} 
        writer ={this.state.books[2].writer}
        change ={this.changeState.bind(this, "don't know")}/>
       
      </div>
    );
  }
}

export default App;
