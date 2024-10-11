window.onload = (event) => {
    const registerForm = document.getElementById('registerForm');
    const apiUrl = 'https://diamond-be.vercel.app';
    registerForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const first_name = document.getElementById('first_name').value;
        const second_name = document.getElementById('second_name').value;
        const first_last_name = document.getElementById('first_last_name').value;
        const second_last_name = document.getElementById('second_last_name').value;
        const city = document.getElementById('city').value;
        const email = document.getElementById('email').value;
        const phone_mobile = document.getElementById('phone_mobile').value;
        const user_name = document.getElementById('user_name').value;
        const password = document.getElementById('password').value;

        // Validación básica
        if (!first_name || !second_name || !first_last_name || !second_last_name || !city || !phone_mobile || !email || !user_name || !password) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }
        
        try {
            const response = await fetch(`${apiUrl}/createregister`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    second_name,
                    first_last_name,
                    second_last_name,
                    city,
                    phone_mobile,
                    email,
                    user_name,
                    password
                }),
            });
        
            if (response.ok) {
                alert('Registro exitoso.');
                contactForm.reset(); // Limpiar el formulario después de enviar
            } else {
                alert('Hubo un problema al enviar tu registo, Por favor, inténtalo nuevamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Tenemos problemas técnicos. Inténtalo más tarde.');
        }

    });
};