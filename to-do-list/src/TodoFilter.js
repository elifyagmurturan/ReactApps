class TodoFilterItem extends React.Component {
    constructor(props){
        super(props)
    }

    handleFilter(){
        const {name, filterTodos} = this.props
        filterTodos(name)
    }

    render() {
        const {name} = this.props
        const style= {
            color: 'green',
            cursor: 'pointer',
            fontWeight: (filter === name) ? 'bold' : 'normal' 
        }

    return <span style={style} onClick={this.handleFilter}>{name}</span>
    }
}

export default class TodoFilter extends React.Component {
    render() {
        const {name, filter = 'all'} = this.props
        return (
            <div>
        
                <TodoFilterItem {...this.props} name='all' />{' / '}
                <TodoFilterItem {...this.props} name='active' /> {' / '}
                <TodoFilterItem {...this.props} name='completed'/>
            </div>
        )
    }
}