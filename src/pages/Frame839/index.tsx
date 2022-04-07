import React, { useState, useEffect } from 'react';



import {
Frame839,
InputNumber,
InputNumber1,
InputNumber2,
InputNumber3,
ButtonKenerry1,
ButtonKenerry2,
} from './styles';

const Frame839Page = () => {






const handleButtonsButton = () => {
console.log(handleButtonsButton )
};



return (
        <Frame839    >
    <Design2CodeButton
                size='large'
                placeholder='3'
    />
    <Design2CodeButton
                size='large'
                placeholder='3'
    />
    <Design2CodeButton
                size='large'
                placeholder='3'
    />
    <Design2CodeButton
                size='large'
                placeholder='3'
    />
    <ButtonKenerry1
        type='primary'
        size='large'
        onClick={handleButtonKenerry1}>
            Hello!
    </ButtonKenerry1>
    <ButtonKenerry2
        type='primary'
        size='large'
        onClick={handleButtonKenerry2}>
            World!
    </ButtonKenerry2>
</Frame839>

    )

}

export default Frame839Page
