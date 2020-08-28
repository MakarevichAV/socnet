let state = {
    profilePage: {
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
    },
    dialoguesPage: {
        dialogues: [
            { id: 1, name: 'Ксения' },
            { id: 2, name: 'Игорь' },
            { id: 3, name: 'Марина' },
            { id: 4, name: 'Галина' },
            { id: 5, name: 'Твикс' }
        ],
        msgs: [
            {
                id: 1,
                txt: 'Отправленное сообщение 1. Бла бла бла. Бла бла бла',
                direction: 'sended'
            },
            {
                id: 2,
                txt: 'Отправленное сообщение 2. Бла бла бла. Бла бла бла',
                direction: 'sended'
            },
            {
                id: 3,
                txt: 'Отправленное сообщение 3. Бла бла бла. Бла бла бла. Кто понял жизнь, работать перестал',
                direction: 'sended'
            },
            {
                id: 4,
                txt: 'Принятое сообщение 1. Бла бла бла. Бла бла бла',
                direction: 'received'
            },
            {
                id: 5,
                txt: 'Отправленное сообщение 4. Бла бла бла. Бла бла бла',
                direction: 'sended'
            },
            {
                id: 6,
                txt: 'Принятое сообщение 2. Бла бла бла. Бла бла бла',
                direction: 'received'
            }
        ]
    }
};

export default state;