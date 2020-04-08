export const data_json = async (url) => {
    try {
        const response = await fetch(url);
        if(response.status === 200){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        return 'ERROR';
    }
}