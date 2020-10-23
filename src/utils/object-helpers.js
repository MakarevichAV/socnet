export const updateObjectInArray = (items, itemId, propName, newProps) => {
    return items.map((item) => {
        if (item[propName] === itemId) {
            return { ...item, ...newProps }
        }
        return item;
    })
}