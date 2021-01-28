class TodoFilterItem extends React.Component {
    render() {
        const {name} = this.props
        const style = {color: 'red', cursor:'pointer'}

    return <span style={style}>{name}</span>
    }
}

export default class TodoFilter extends React.Component {
    render() {
        return (
            <div>
                <TodoFilterItem name='all' />{' / '}
                <TodoFilterItem name='active' /> {' / '}
                <TodoFilterItem name='completed'/>
            </div>
        )
    }
}