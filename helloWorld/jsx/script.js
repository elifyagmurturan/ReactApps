const react = require("react");

class HelloWorld extends React.Component{
    render(){
        return (
            <div>
                <h1>1. Hello world! </h1>
                <h2>2. Hello world!</h2>
            </div>
        )
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById('content')
)