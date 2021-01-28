export const generateID = () => {
    const S4 = () =>(((1+Math.random())*0x10000)|0).toString(16).substring(1)
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}

export const fetchAPITodos = () => {
    new Promise((resolve) => 
    setTimeout(() => resolve([
        {id:1, title:'Do not procrastinate', completed:true},
        {id:2, title:'Learn Flutter', completed:false},
        {id:3, title:'Do abstract algebra hw', completed:false}
    ]), 100)
    )
}