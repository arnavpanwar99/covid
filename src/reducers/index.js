const defaultState = {
    url: 'https://images.unsplash.com/photo-1577214250144-73af4b7364f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
}

export const urlReducer = (state = defaultState, action) => {
    const { type, url } = action;
    switch (type) {
        case 'SAVE_URL':
            return { url };
        default:
            return state;
    }
}