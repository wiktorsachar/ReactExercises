//delete-from-list;
//two components: List(parent) & Person(children);

import React from "react";
import Person from "./components/Person";

class List extends React.Component {
  state = {
    people: [
      { id: 1, name: "Jan K.", active: true },
      { id: 2, name: "Piotr C.", active: true },
      { id: 3, name: "Marysia W.", active: true },
      { id: 4, name: "John S.", active: true }
    ]
  };
  handleDeleteClick = id => {
    const people = [...this.state.people];
    const index = people.findIndex(e => e.id === id);
    people[index] = { id, name: people[index].name, active: false };
    this.setState({ people });
  };
  render() {
    return (
      <ul>
        {this.state.people.map(
          e =>
            e.active && (
              <Person
                name={e.name}
                key={e.id}
                handler={() => this.handleDeleteClick(e.id)}
              />
            )
        )}
      </ul>
    );
  }
}

export default List;
