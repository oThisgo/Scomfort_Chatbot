// static/chat_script.js
document.addEventListener('DOMContentLoaded', () => {
    // Elementos do DOM
    const chatBubble = document.getElementById('chat-bubble');
    const chatWindow = document.getElementById('chat-window');
    const closeBtn = document.getElementById('close-btn');
    const chatBody = document.getElementById('chat-body');
    const chatInput = document.getElementById('chat-input');
    const sendBtn = document.getElementById('send-btn');

    // Toggle da janela de chat
    chatBubble.addEventListener('click', () => {
        chatWindow.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        chatWindow.classList.remove('active');
    });

    // Enviar mensagem com Enter ou botão
    sendBtn.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    async function sendMessage() {
        const messageText = chatInput.value.trim();
        if (messageText === '') return;

        // Limpa o input e adiciona a mensagem do usuário
        chatInput.value = '';
        addMessage(messageText, 'user');

        try {
            // Envia a mensagem para o backend Flask
            const response = await fetch('/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageText }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            addMessage(data.response, 'bot');

        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            addMessage('Ops! Tive um problema para me conectar. Tente novamente.', 'bot');
        }
    }

    function addMessage(text, type) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('chat-message', `${type}-message`);
        messageElement.innerHTML = text; // Usamos innerHTML para renderizar possíveis formatações do bot
        chatBody.appendChild(messageElement);

        // Rolagem automática para a última mensagem
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Adiciona uma mensagem de boas-vindas
    addMessage('Olá! Sou o ChatScomfort, seu assistente virtual. Como posso te ajudar a encontrar o conforto perfeito hoje? 👟', 'bot');
});