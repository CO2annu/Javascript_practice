const API_BASE = 'http://localhost:8000/api/users';

function hitGetApi(userId){
    fetch(`${API_BASE}/${userId}`)
    .then((response) => {
        if (!response.ok) throw new Error('User not found');
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('getResult').innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('getResult').innerText = 'Error fetching data';
    });
}

function hitPostApi(name, password){
    fetch(API_BASE, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        document.getElementById('postResult').innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('postResult').innerText = 'Error posting data';
    });
}

function hitDeleteApi(userId){
    fetch(`${API_BASE}/${userId}`, {
        method: 'DELETE'
    })
    .then((response) => {
        if (!response.ok) throw new Error('User not found');
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('deleteResult').innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('deleteResult').innerText = 'Error deleting data';
    });
}

function hitPutApi(userId, name){
    fetch(`${API_BASE}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name })
    })
    .then((response) => {
        if (!response.ok) throw new Error('User not found');
        return response.json();
    })
    .then((data) => {
        console.log(data);
        document.getElementById('putResult').innerText = JSON.stringify(data, null, 2);
    })
    .catch((error) => {
        console.error('Error:', error);
        document.getElementById('putResult').innerText = 'Error updating data';
    });
}

document.getElementById('getForm').addEventListener('submit', function(event){
    event.preventDefault();
    const userId = document.getElementById('getInput').value;
    hitGetApi(userId);
});

document.getElementById('postForm').addEventListener('submit', function(event){
    event.preventDefault();
    const name = document.getElementById('postName').value;
    const password = document.getElementById('postPassword').value;
    hitPostApi(name, password);
});

document.getElementById('deleteForm').addEventListener('submit', function(event){
    event.preventDefault();
    const userId = document.getElementById('deleteInput').value;
    hitDeleteApi(userId);
});

document.getElementById('putForm').addEventListener('submit', function(event){
    event.preventDefault();
    const userId = document.getElementById('putInput').value;
    const name = document.getElementById('putName').value;
    hitPutApi(userId, name);
});