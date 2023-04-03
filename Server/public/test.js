const socket = io()
// const form = document.getElementById('form')

// socket.on('message', (input) => {
//     console.log(input);
// })

// socket.on('message', (message) => {
//     console.log(message);
// })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     let input = document.getElementById('inp').value;
//     socket.emit('sendMessage', input, () => {
//         console.log('Message Delivered ✔✔');
//     });
//     document.getElementById('inp').value = ''

// })

// document.getElementById('location').addEventListener('click', () => {
//     if (!"geolocation" in navigator) {
//         return alert('Geolocation is Not Supported')
//     }
//     navigator.geolocation.getCurrentPosition((position) => {
//         const locationData = `https://google.com/maps?q=${position.coords.latitude},${position.coords.longitude}`;
//         socket.emit('location', locationData, () => {
//             console.log('Location Send Successfully');
//         });
//     });
// })

// socket.on('location', (locationData) => {
//     console.log(locationData);
// })
