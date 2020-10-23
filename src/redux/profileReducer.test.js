import profileReducer, { addPostAC, delPost } from "./profileReducer";

let state = {
    posts: [
        {
            id: 1,
            msg: 'Пост 1333',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 23
        },
        {
            id: 2,
            msg: 'Пост 2. Бла бла бла. Я сказал бла блаблабла',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 12
        },
        {
            id: 3,
            msg: 'Пост 3',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 6
        },
        {
            id: 4,
            msg: 'Пост 4',
            name: 'Макар',
            date: '25 августа в 13:42',
            likesCount: 17
        }
    ]
};

it('lenght of posts should be incremented', () => {
    let action = addPostAC('Пост для тестирования');
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(5);
});

it('text of new post should be correct', () => {
    let action = addPostAC('Пост для тестирования');
    let newState = profileReducer(state, action);
    expect(newState.posts[4].msg).toBe('Пост для тестирования');
});

it('after deleting length of posts array should be decremented', () => {
    let action = delPost(1);
    let newState = profileReducer(state, action);
    expect(newState.posts.length).toBe(3);
});