import React from 'react';

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const Card = (props) => (
    <div className="card cardGroup__card">
            <div className="card__description cardGroup__cardDescription">
                <div className={props.icon} />
                <div className="card__descriptionText">
                    {props.descirption}
                    <br/>
                    {props.hint}
                </div>
            </div>
            <div className="card__price">{props.price}</div>
        </div>
)

const App = () => (
    <CardGroup>
        <Card icon="icon fa fa-thumbs-o-up card__descriptionIcon" descirption="Trial" price="Free!"/>
        <Card icon="icon fa fa-trophy card__descriptionIcon" descirption="Basic tier" hint="(most popular)" price="$10.00"/>
        <Card icon="icon fa fa-bolt card__descriptionIcon" descirption="Advanced tier" hint="(only for enterprise-level professionals)" price="$6,000"/>
    </CardGroup>
);

export default App;
