document.getElementById('generate-user').addEventListener('click', generateUser);

function generateUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Pegando os dados solicitados para exibir
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const birthDate = new Date(user.dob.date).toLocaleDateString('pt-BR'); // Formato dd/mm/yyyy
            const age = user.dob.age;
            const picture = user.picture.large; // Foto do usuário

            // Atualizando o conteúdo HTML para mostrar os dados tratados
            const userInfo = `
                <img src="${picture}" alt="Foto de ${fullName}" style="border-radius: 50%; width: 150px; height: 150px;">
                <h2>${fullName}</h2>
                <p><strong>E-mail:</strong> ${email}</p>
                <p><strong>Data de Nascimento:</strong> ${birthDate}</p>
                <p><strong>Idade:</strong> ${age} anos</p>
            `;
            document.getElementById('user-info').innerHTML = userInfo;
        })
        .catch(error => console.error('Erro ao buscar usuário:', error));
}

// Gera um usuário automaticamente ao carregar a página
generateUser();

