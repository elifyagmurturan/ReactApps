export const generateID = () => {
    const S4 = () =>(((1+Math.random())*0x10000)|0).toString(16).substring(1)
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4())
}

export const fetchAPITodos = () => 
    new Promise((resolve) => 
    setTimeout(() => resolve([
        {id:generateID(), title:'Do not procrastinate', completed:true},
        {id:generateID(), title:'Learn Flutter', completed:false},
        {id: generateID(), title:'Do abstract algebra hw', completed:false}
    ]), 100)
    )