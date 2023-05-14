import React from 'react';

type PropsType = {
    callBack: () => void
}
export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickHandler}>+</button>
    );
};

