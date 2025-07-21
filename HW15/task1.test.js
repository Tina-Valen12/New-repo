const axios = require('axios');

async function invalidUrl() {
    try {
        await axios.get("https://jsonplaceholder.typicode.com/invalid");
    } catch (error) {
        console.log('Error messege:', "Invalid URL");
        return `Error: ${error.message}`;   
    }
}

test('invalid URL', async () => {
    const result = await invalidUrl();
    expect(result).toMatch(/Error:/);
}
);

