import moment from 'moment';
const defaultState = {
    url: 'https://images.unsplash.com/photo-1577214250144-73af4b7364f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
}

const defaultFilter = {
    nationality: false,
    maxAge: 100,
    minAge: 0,
    gender: false, 
    area: [],
    date: moment().subtract(1, 'day').toDate(),
    current: moment().unix()
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

export const filterReducer = (state=defaultFilter, action) => {
    const { type, info } = action;
    switch (type) {
        case 'SAVE_FILTER':
            return { info };
        default:
            return state;
    }
}

export const rawDataReducer = (state={}, action) => {
    const { type, response } = action;
    switch (type) {
        case 'SAVE_RAW_DATA':
            return { response };
        default:
            return state;
    }
}

export const basicDataReducer = (state=false, action) => {
    const { type, response } = action;
    switch (type) {
        case 'SAVE_BASIC_DATA':
            return { response };
        default:
            return state;
    }
}