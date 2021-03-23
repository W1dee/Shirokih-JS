import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

function BtnDelCard(props) {
    return (
        <label className="labelBtn" onClick={props.deleteCard}>
            <AiOutlineDelete
                size="50px"
                color="white"
                style={{ margin: 'auto 0' }}
            />
            <h2>УДАЛИТЬ</h2>
        </label>
    );
}

export default BtnDelCard;