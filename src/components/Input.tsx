import React, { ChangeEvent, useState } from 'react';

type PropsType = {
    setNewTitle: (newTitle: string) => void
    newTitle: string

}
export const Input = (props: PropsType) => {

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setNewTitle(event.currentTarget.value)
    }

    return (
        <input value={props.newTitle} onChange={onChangeHandler} />

    );
};

