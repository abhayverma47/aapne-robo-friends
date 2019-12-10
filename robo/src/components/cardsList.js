import React from 'react';
import Cards from './cards';

const CardsList = ({ robots }) => {

    return (
        < div >
            {robots.map((units, i) => {
                return (
                    <Cards key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
                );

            })}
        </div >
    );
}
export default CardsList;