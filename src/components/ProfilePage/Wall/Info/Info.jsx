import React from 'react';
import s from './Info.module.css';

class Info extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    editModeOn = () => {
        this.setState({
            editMode: true
        })
    }

    editModeOff = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }

    changeStatusInputVal = (e) => {
        this.setState({
            status: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <p className={s.status} onClick={this.editModeOn}>
                        <span className={s.key}>Статус:</span> {this.props.status}
                    </p>}
                {this.state.editMode &&
                    <input className={s.input} value={this.state.status} autoFocus={true}
                        onBlur={this.editModeOff} onChange={this.changeStatusInputVal} />}
                <div className={s.infoBlock}>
                    <p className={s.head}>Работа</p>
                    <p className={s.jobStatus}>
                        {this.props.jobFlag ? 'Ищу работу' : 'Трудоустроен'}
                    </p>
                    <p className={s.description}>
                        {this.props.jobDescription ? this.props.jobDescription : null}
                    </p>
                </div>
            </>
        )
    }
}

export default Info;