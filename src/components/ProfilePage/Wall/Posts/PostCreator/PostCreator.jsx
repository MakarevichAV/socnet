import React from 'react';
import s from './PostCreator.module.css';
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthCreator } from '../../../../utils/validators';
import { Textarea } from '../../../../common/FormsControls/FormsControls';

const PostCreator = (props) => {

    const onAddPost = (formData) => {
        props.addPost(formData.newPostText);
    }

    return (
        <AddPostFormRedux onSubmit={onAddPost} />
    )

}

const maxLength = maxLengthCreator(10);
const PostCreatorForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.newPost}>
                <div className={s.photo}></div>
                <Field name="newPostText" component={Textarea} className={s.textarea} 
                    validate={[required, maxLength]} placeholder="Что у Вас нового?" />
            </div>
            <button className={`${s.btn} ${s.type1}`}>
                Опубликовать
            </button>
        </form>
    )
}

const AddPostFormRedux = reduxForm({ form: 'addPostForm' })(PostCreatorForm);

export default PostCreator;