import React from 'react';
import ReactDOM from 'react-dom';
import StoreItem from './StoreItem';
import faker from 'faker';

const App = () => {
    return (
        <div class="container-fluid">
            <div class="row">
                <StoreItem 
                title={faker.lorem.word()} 
                content={faker.lorem.sentence()}
                image={faker.image.food()}
                button="Buy Now"
                />
                <StoreItem 
                title={faker.lorem.word()} 
                content={faker.lorem.sentence()}
                image={faker.image.food()}
                button="Buy Now"
                />
                <StoreItem 
                title={faker.lorem.word()} 
                content={faker.lorem.sentence()}
                image={faker.image.food()}
                button="Buy Now"
                />
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));