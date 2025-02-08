document.getElementById('replaceCheckbox').addEventListener('change', function() {
    document.getElementById('replaceOptions').style.display = this.checked ? 'block' : 'none';
});

function processText() {
    const inputText = document.getElementById('input').value;
    let processedText = inputText;

    // Capitalize first letters if checked
    if (document.getElementById('capitalize').checked) {
        processedText = processedText.split(' ')
            .map(word => word.length > 0 
                ? word[0].toUpperCase() + word.slice(1).toLowerCase() 
                : '')
            .join(' ');
    }

    // Replace characters if checked
    if (document.getElementById('replaceCheckbox').checked) {
        const charsToReplace = document.getElementById('charsToReplace').value;
        const replacementChar = document.getElementById('replacementChar').value;
        processedText = replaceCharacters(processedText, charsToReplace, replacementChar);
    }

    document.getElementById('output').value = processedText;
}

function replaceCharacters(text, charsToReplace, replacementChar) {
    const replaceSet = new Set(charsToReplace.split(''));
    const replacement = replacementChar.length > 0 ? replacementChar[0] : '';
    return text.split('')
        .map(c => replaceSet.has(c) ? replacement : c)
        .join('');
}

// Copy Button Functionality
document.getElementById('copyButton').addEventListener('click', function() {
    const outputText = document.getElementById('output');
    outputText.select();
    document.execCommand('copy');
    alert('Copied to clipboard!');
});
