    function sendMessage() {
      var messageInput = document.getElementById("message-input");
      var message = messageInput.value;
      appendMessage("user", message);
      messageInput.value = "";

      // Simulating bot reply after 1 second
      setTimeout(function () {
        var reply = "Bot: I received your message: " + message;
        appendMessage("bot", reply);
      }, 1000);
    }

    function appendMessage(sender, message) {
      var chatContainer = document.getElementById("chat-message");
      var messageElement = document.createElement("div");
      messageElement.classList.add("message");

      var senderClass = sender === "user" ? "user-message" : "bot-message";
      messageElement.classList.add(senderClass);

      messageElement.textContent = message;
      chatContainer.appendChild(messageElement);

      // Scroll to the bottom of the chat container
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    // Event listener
  document.getElementById('send-button').addEventListener('click', sendMessage);
  document.getElementById('message-input').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });