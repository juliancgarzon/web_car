window.onload = (event) => {
    const loginForm = document.getElementById ('loginForm');
    const loginMessage = document.getElementById('loginMessage');
    const apiUrl = 'https://diamond-be.vercel.app';
    

    loginForm.addEventListener('submit', async function(event){

        event.preventDefault(); // Prevenir que se envie el formulario de manera tradicional.

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        try {
            const response = await fetch(`${apiUrl}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username, password}),
            });

            const data = await response.json();
            console.log(data);
            //const encodeData = btoa(data);
            const encodeData = btoa(JSON.stringify(data));
            console.log(encodeData);

            if (response.ok) {
                loginMessage.textContent = 'Login Exitoso';
                loginMessage.style.color = 'green'
                window.location.href = `catalogo.html#${encodeData}`;
            } else {
                loginMessage.textContent = data.message || 'Error en el Login';
                loginMessage.style.color = 'red'
            }
        } catch (error) {
            console.log (error)
            loginMessage.textContent = 'Hubo un Error en el Login';
            loginMessage.style.color = 'red'
        }
    
    });
};
