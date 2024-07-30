<script>
document.getElementById('send-btn').addEventListener('click', async function() {
  const userInput = document.getElementById('user-input').value;
  if (userInput.trim() === '') return;
  
  // Display user message
  const messageDiv = document.createElement('div');
  messageDiv.textContent = 'You: ' + userInput;
  document.querySelector('.messages').appendChild(messageDiv);
  
  // Call your AI service
  const response = await fetch('YOUR_AI_SERVICE_ENDPOINT', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({ message: userInput })
  });
  
  const data = await response.json();
  
  // Display AI response
  const aiMessageDiv = document.createElement('div');
  aiMessageDiv.textContent = 'AI: ' + data.reply; // Adjust based on the API response format
  document.querySelector('.messages').appendChild(aiMessageDiv);
  
  // Clear user input
  document.getElementById('user-input').value = '';
});
</script>
