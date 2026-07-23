function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars) {
    let password = '';
    let characterSet = '';

    if (includeUppercase) {
        characterSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (includeLowercase) {
        characterSet += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (includeNumbers) {
        characterSet += '0123456789';
    }
    if (includeSpecialChars) {
        characterSet += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    if (characterSet.length === 0) {
        return 'Please select at least one character type.';
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterSet.length);
        password += characterSet[randomIndex];
    }

    return password;
}

function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const length = Number(form.length.value);
    const includeUppercase = form.includeUppercase.checked;
    const includeLowercase = form.includeLowercase.checked;
    const includeNumbers = form.includeNumbers.checked;
    const includeSpecialChars = form.includeSpecialChars.checked;

    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSpecialChars);
    document.getElementById('passwordResult').textContent = password;
}

document.getElementById('passwordForm').addEventListener('submit', handleSubmit);