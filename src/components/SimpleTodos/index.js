const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

import {Component} from 'react'
import './index.css'
import TodoItem from '../TodoItem'
class SimpleTodos extends Component {
  state = {
    todoList: initialTodosList,
  }
  deleteUser = id => {
    const {todoList} = this.state

    const filteredList = todoList.filter(each => each.id !== id)
    this.setState({todoList: filteredList})
  }

  render() {
    const {todoList} = this.state

    return (
      <div className="bg">
        <div className="main-bg">
          <h1 className="head">Simple Todos</h1>
          <ul>
            {todoList.map(user => (
              <TodoItem
                details={user}
                key={user.id}
                deleteUser={this.deleteUser}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
