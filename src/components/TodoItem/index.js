// Write your code here
import './index.css'
const TodoItem = props => {
  const {details, deleteUser} = props
  const {title, id} = details
  const onDelete = () => {
    deleteUser(id)
  }
  return (
    <li className="list-item">
      <p>{title}</p>
      <button className="btn" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
