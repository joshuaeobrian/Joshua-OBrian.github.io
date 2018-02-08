

export class Experiences extends React.Component{
    constructor(props){
        super(props);
        this.state = {};

    }
    render(){
        return(
            <div>
                {this.props.experiences.map(experience => (
                    <div className="experience-item shadow">
                        <h3>experience.name</h3>
                        <h3>experience.time</h3>
                        <h4>experience.title</h4>
                        <p>experience.description</p>
                    </div>
                ))}
            </div>
        );
    }
}

