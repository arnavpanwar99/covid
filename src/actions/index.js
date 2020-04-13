export const saveFilter = (info) => ({
    type: 'SAVE_FILTER',
    info
});

export const saveRawData = (response) => ({
    type: 'SAVE_RAW_DATA',
    response
})

export const saveBasicData = (response) => ({
    type: 'SAVE_BASIC_DATA',
    response
})