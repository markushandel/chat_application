import { getMessages, postMessage } from './api/message.js';

// Function to add a new message to the chat box
function addMessage(user, message) {
    const chatBox = document.getElementById('chat-box');
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'alert', 'alert-secondary', 'mb-2');
    newMessage.innerHTML = `<span class="user">${user}:</span> ${message}`;
    chatBox.appendChild(newMessage);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom of the chat box
}

async function displayMessages() {
    try {
        const messages = await getMessages();
        console.log('Messages:', messages);
        messages.forEach(message => {
            addMessage(message.User.username, message.content)
        });
    } catch (error) {
        // console.error('Get messages error:', error);
    }
}


async function sendMessage() {
    console.log('Sending message');
    const message = document.getElementById('message-field').value;
    const user = sessionStorage.getItem('username');
    console.log('User:', user);
    console.log('Message:', message);
    try {
        const newMessage = await postMessage({ content: message, sender: user });
    } catch (error) {
        // console.error('Post message error:', error);
    }
}


function main() {
    displayMessages();
    document.getElementById('send-btn').addEventListener('click', sendMessage);
}

main();