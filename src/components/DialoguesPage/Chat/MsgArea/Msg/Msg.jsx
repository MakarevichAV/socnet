import React from 'react';
import s from './Msg.module.css';
import cn from 'classnames';

const Msg = (props) => {
    const styles = cn(
        s.msg,
        {[s.sended]: props.sended},
        {[s.received]: props.received}
    );
    return (
        <div className={styles}>{props.text}</div>
    )
}

export default Msg;