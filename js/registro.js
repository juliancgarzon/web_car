window.onload = (event) => {
    const contactForm = document.getElementById('contactForm');
    const apiUrl = 'https://diamond-be.vercel.app';
    contactForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const first_name = document.getElementById('first_name').value;
        const last_name = document.getElementById('last_name').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const description = document.getElementById('description').value;

        // Validación básica
        if (!first_name || !last_name || !city || !phone || !email || !description) {
            alert('Por favor, completa todos los campos requeridos.');
            return;
        }

        try {
            const response = await fetch(`${apiUrl}/createcontact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    first_name,
                    last_name,
                    city,
                    phone,
                    email,
                    description
                }),
            });

            if (response.ok) {
                alert('Mensaje enviado exitosamente.');
                contactForm.reset(); // Limpiar el formulario después de enviar
            } else {
                alert('Hubo un problema al enviar tu mensaje. Por favor, inténtalo nuevamente.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Tenemos problemas técnicos. Inténtalo más tarde.');
        }
    });
};