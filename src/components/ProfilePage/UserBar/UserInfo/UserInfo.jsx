import React, { useState } from 'react';
import s from './UserInfo.module.css';
import defaultPhoto from '../../../../assets/images/user-photo.jpg';
import UserData from './UserData';
import UserDataForm from './UserDataForm';

const UserInfo = (props) => {
    
    const [editMode, setEditMode] = useState(false);

    const editModeOn = () => {
        setEditMode(true);
    }

    const editModeOff = () => {
        setEditMode(false);
        // props.updateUserInfo(formData);
    }

    const userPhoto = {
        backgroundImage: `url(${props.photo ? props.photo : defaultPhoto})`
    }

    const onMainPhotoSelected = (e) => {
        props.savePhoto(e.target.files[0]);
    }

    return (
        <div className={s.info}>
            <div className={s.photo}
                style={userPhoto}>
                {props.isOwner &&
                    <label>
                        <div className={s.editPhoto}>
                            <input type="file" onChange={onMainPhotoSelected} />
                        </div>
                    </label>
                }
            </div>
            {editMode ? <UserDataForm {...props} editModeOff={editModeOff} /> 
                      : <UserData {...props} editModeOn={editModeOn}  />}
        </div>
    )
}

export default UserInfo;