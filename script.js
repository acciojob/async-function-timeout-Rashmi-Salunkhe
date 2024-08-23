//your JS code here. If required.
// Waits for the specified delay and then resolves
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

document.getElementById('btn').addEventListener('click', async function() {
    // Get the user input values
    const text = document.getElementById('text').value;
    const delayTime = document.getElementById('delay').value;

    // Clear the output div before showing the new text
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '';

    // Wait for the specified delay using async/await
    await delay(delayTime);

    // Display the text after the delay
    outputDiv.innerText = text;
});
