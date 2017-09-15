/**
 * Created by piotrandrzejewski on 15.09.2017.
 */
import React from 'react'




const positionContainer = (wrappedComponent) =>
    class Possition extends React.component {

        constructor(props){
            super(props)
        }

    render(){
        return (
            <div>
                <wrappedComponent {...this.props}/>
            </div>
        )
    }

};



export default positionContainer;