import * as readLine from 'node:readline/promises';
import {stdin as input, stdout as output} from 'node:process';

const rl = readLine.createInterface({ input, output });

async function main(){
    console.log("Welcome to the password generator!\n");
    console.log("1. Enter the length of the password you want to generate (minimum 8 characters):");
    const length = await rl.question("Length: ");
    console.log("2. Do you want to include uppercase letters? (y/n):");
    const includeUppercase = await rl.question("Include uppercase letters: ");
    console.log("3. Do you want to include lowercase letters? (y/n):");
    const includeLowercase = await rl.question("Include lowercase letters: ");
    console.log("4. Do you want to include numbers? (y/n):");
    const includeNumbers = await rl.question("Include numbers: ");
    console.log("5. Do you want to include special characters? (y/n):");
    const includeSpecialChars = await rl.question("Include special characters: ");

    const passwordString = generateRandomString(includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, length);

    const password = generatePassword(passwordString, length);
    console.log(`Generated password: ${password}`);
}

function generateRandomString(includeUppercase, includeLowercase, includeNumbers, includeSpecialChars, length) {

    let characters = '';
    if(includeUppercase.toLowerCase() === 'y') {
        characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if(includeLowercase.toLowerCase() === 'y') {
        characters += 'abcdefghijklmnopqrstuvwxyz';
    }
    if(includeNumbers.toLowerCase() === 'y') {
        characters += '0123456789';
    }
    if(includeSpecialChars.toLowerCase() === 'y') {
        characters += '!@#$%^&*()_+[]{}|;:,.<>?';
    }

    return characters;
}

function generatePassword(characters, length) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

main();





