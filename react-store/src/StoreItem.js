import React from 'react';
import faker from 'faker';

const cardWidth = {
    width: "22rem",
    height: "22rem",
    margin: "30px auto"
};

const StoreItem = (props) => {
    return (
        <div class="card" style={cardWidth}>
            <img src={props.image} alt="food" class="card-image-top" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.content}</p>
                <a href="#" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    );
};

export default StoreItem;