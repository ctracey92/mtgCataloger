import React, {Component} from 'react';

class FourOhFour extends Component {

    componentDidMount(){
        console.log("this worked")
    }
    render(){
        return(
            <div>
                <h1>Error 404</h1>
            </div>
        )
            
    }

}

export default FourOhFour;