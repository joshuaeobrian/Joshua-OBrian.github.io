
export class About extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h2>About:</h2>
                <p>{this.props.about}</p>
            </div>
        );
    }
}