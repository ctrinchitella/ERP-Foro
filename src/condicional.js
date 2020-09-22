import React, { Component } from 'react'

class ComponentA extends Component {
    render(){
        return <p>Component A</p>
    }
}

class ComponentB extends Component {
    render(){
        return <p>Component B</p>
    }
}

function useCondicionalRendering (mostrarA) {
    if(mostrarA){
        return <ComponentA/>
    }
    return <ComponentB/>
}

export default class conditionalSection extends Component {
    constructor(){
        super()
        this.state = {mostrarA: true}
    }
    render(){
        return(
            <div>
                <h4> conditional rendering</h4>
                {useCondicionalRendering(this.state.mostrarA)}

            </div>
        )
    }
}