import React from "react";
import ReactDOM from "react-dom";

import GroceryList from "./components/GroceryList";
import ListForm from "./components/ListForm";
import "./styles.css";

const groceries = [
  {
    name: "Bananas",
    id: 123,
    purchased: false
  },
  {
    name: "Torillas",
    id: 124,
    purchased: false
  },
  {
    name: "Milk",
    id: 1235,
    purchased: false
  },
  {
    name: "Pizza Sauce",
    id: 1246,
    purchased: false
  },
  {
    name: "Raw Honey",
    id: 1237,
    purchased: false
  },
  {
    name: "Granola",
    id: 1248,
    purchased: false
  }
];

class App extends React.Component {
  // Constructor with state
  // this.state
  //this.setState
  //lifecycle methods
  constructor() {
    super();
    this.state = {
      groceryList: groceries
    };
  }
  // state is always an object
  // Class methods to update state

  toggleItem = clickedId => {
    // no mutating current state
    // for every array and every object - create a new one (..., or array methods)
    const newGroceryList = this.state.groceryList.map(item => {
      // loop through the array
      // find the item we clicked on (id,maybe index)
      // toggle that item's purchased property
      if (item.id === clickedId) {
        // toggle purchase
        return {
          ...item,
          purchased: !item.purchased
        };
      } else {
        return item;
      }
    });

    // Update state with the new array
    this.setState({
      groceryList: newGroceryList
    });
  };

  // THE 'this' KEYWORD

  // const [someData, setSomeData] = useState('')
  // const [moreData, setMoreData] = useState([])

  render() {
    console.log("rendering...");
    return (
      <div className="App">
        <div className="header">
          <h1>Shopping List</h1>
          <ListForm />
        </div>
        <GroceryList
          groceries={this.state.groceryList}
          toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
