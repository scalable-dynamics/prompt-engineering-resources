document.addEventListener('DOMContentLoaded', function() {
    const promptInput = document.getElementById('prompt-input');
    const submitPrompt = document.getElementById('submit-prompt');
    const resultDisplay = document.getElementById('result-display');
    const promptHistory = document.getElementById('prompt-history');

    // Mock function to simulate AI response
    function generateResult(prompt) {
        return `Generated result for: ${prompt}`;
    }

    // Function to handle prompt submission
    function handleSubmitPrompt() {
        const prompt = promptInput.value;
        if (prompt.trim() === '') return;

        // Generate and display result
        const result = generateResult(prompt);
        resultDisplay.textContent = result;

        // Save prompt to history
        const historyItem = document.createElement('li');
        historyItem.textContent = prompt;
        promptHistory.appendChild(historyItem);
    }

    submitPrompt.addEventListener('click', handleSubmitPrompt);

    // Ensure submit button can be activated with Enter key when textarea is focused
    promptInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmitPrompt();
        }
    });
});
