// @flow

import { TodosViewModel } from '~/models/todosView'

export function TodosForm ({ todos, pushTodo, updateInput, setPriority, setSortType, setOrder }: { todos: TodosViewModel, pushTodo: Function, updateInput: Function, setPriority: Function, setSortType: Function, setOrder: Function }) {
  return (
    <div className="navbar-default navbar-collapse collapse">
      <form className="navbar-form navbar-right" onSubmit={ e => e.preventDefault() } >
        <input className="form-control" type="text" onChange={ (e) => updateInput(e.target.value) } />
        <button className="btn btn-primary active" onClick={ () => pushTodo() }>add todo</button>
      </form>
      <SortDropdown todos={ todos } setSortType={ setSortType } />
      <OrderDropdown todos={ todos } setOrder={ setOrder } />
      <PriorityDropdown todos={ todos } setPriority={ setPriority } />
    </div>
  )
}
// _____________________________________________

function SortDropdown ({ todos, setSortType }: { todos: TodosViewModel, setSortType: Function }) {
  return (
    <ul className="nav navbar-nav navbar-left">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todos.getSortTypeSelectLabel() }
        />
        <SortDropdownMenu
          options={ todos.getSortTypeLabels() }
          setSortType={ setSortType }
        />
      </li>
    </ul>
  )
}

function SortDropdownMenu ({ options, setSortType }: { options: string[], setSortType: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setSortType(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
  )
}
// _____________________________________________

function OrderDropdown ({ todos, setOrder }: { todos: TodosViewModel, setOrder: Function }) {
  return (
    <ul className="nav navbar-nav navbar-left">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todos.getOrderSelectLabel() }
        />
        <OrderDropdownMenu
          options={ todos.getOrderLabels() }
          setOrder={ setOrder }
        />
      </li>
    </ul>
  )
}

function OrderDropdownMenu ({ options, setOrder }: { options: string[], setOrder: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setOrder(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
  )
}
// _____________________________________________

function PriorityDropdown ({ todos, setPriority }: { todos: TodosViewModel, setPriority: Function }) {
  return (
    <ul className="nav navbar-nav navbar-right">
      <li className="dropdown">
        <a role="button"
          className="dropdown-toggle"
          data-toggle="dropdown"
          aria-expanded="false"
          dangerouslySetInnerHTML={ todos.getPrioritySelectLabel() }
        />
        <PriorityDropdownMenu
          options={ todos.getPriorityLabels() }
          setPriority={ setPriority }
        />
      </li>
    </ul>
  )
}

function PriorityDropdownMenu ({ options, setPriority }: { options: string[], setPriority: Function }) {
  const items = options.map((n, i) => <li key={i}><a onClick={ () => setPriority(i) }>{ n }</a></li>)
  return (
    <ul className="dropdown-menu" role="menu">
      { items }
    </ul>
  )
}
