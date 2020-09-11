// Валидатор
export const required = value => {
    if (value) return undefined;
    return 'Заполните поле';
}

// Создатель валидатора
export const maxLengthCreator = (maxLength) => (value) => {
    if (value.length > maxLength) {
        return "Максимальное количество символов " + maxLength;
    }
    return undefined;
}

