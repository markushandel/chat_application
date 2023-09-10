async function postMessage(message) {
    try {
        const response = await fetch('/messages/x', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(message)
        });
        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Function to login a user
async function getMessages() {
    try {
        const response = await fetch('/messages', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return await response.json();
    } catch (error) {
        console.error('Message fetch error:', error);
        throw error;
    }
}

export { postMessage, getMessages };