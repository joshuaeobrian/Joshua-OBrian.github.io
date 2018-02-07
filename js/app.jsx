

let About = React.createClass({
    render: function () {
        return (
            <div>
                <h2>About:</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias autem, blanditiis dolorum eaque enim est quos similique veritatis. Aliquam expedita hic maxime tempora unde. Cum enim mollitia quas voluptates?</p>
            </div>
        );
    }
});

    // console.log("HEllo");

$(document).ready(function () {
     ReactDOM.render(<About/>, document.getElementById("container"));
});