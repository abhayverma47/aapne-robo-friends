import React from 'react';
import './Robot.css';
import 'tachyons';

//class Cards extends Component {
//    render() {

const Cards = ({ id, name, email }) => {
    //    const { id, name, email } = props;
    return (
        <div className="tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='robots_photo' src={`https://robohash.org/${id}?200x200`} />
            <h1>{name}</h1>
            <p>{email}</p>
        </div>
    );
}



export default Cards;