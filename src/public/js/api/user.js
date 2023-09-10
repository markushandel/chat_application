async function registerUser(user) {
    try {
        const response = await fetch('/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });
        return await response.json();
    } catch (error) {
        console.error('Registration error:', error);
        throw error;
    }
}

// Function to login a user
async function loginUser(user) {
    try {
        const response = await fetch('/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
        if (!response.ok) {
            throw new Error('Login failed');
          }
          
        return await response.json();
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export { registerUser, loginUser };