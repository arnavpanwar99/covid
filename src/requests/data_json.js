export const data_json = async () => {
    try {
        const response = await fetch('https://api.covid19india.org/data.json');
        if(response.status === 200){
            const data = await response.json();
            return data;
        }
    } catch (error) {
        return 'ERROR';
    }
}