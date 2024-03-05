 // Captura o link "Sobre" na barra de navegação
 const aboutLink = document.getElementById('aboutLink');
 // Captura a seção "Sobre a Aplicação"
 const aboutContent = document.getElementById('aboutContent');
 // Adiciona um evento de clique ao link "Sobre"
 aboutLink.addEventListener('click', function (event) {
   // Previne o comportamento padrão do link
   event.preventDefault();
   // Alterna a exibição da seção "Sobre a Aplicação"
   aboutContent.style.display = aboutContent.style.display === 'none' ? 'block' : 'none';
 });
 
 // Captura o formulário
 const domainForm = document.getElementById('domainForm');
 // Adiciona um evento de submissão ao formulário
 domainForm.addEventListener('submit', function (event) {
   // Previne o comportamento padrão do formulário
   event.preventDefault();
   // Captura o valor do domínio inserido pelo usuário
   const domain = document.getElementById('domainInput').value;
   // Chama a função para buscar informações do domínio
   fetchDomainInfo(domain);
 });
 
 // Função para buscar informações do domínio
 async function fetchDomainInfo(domain) {
   try {
     // Faz uma requisição para a API que criamos
     const response = await fetch(`http://localhost:5500/api/domain-info/${domain}`);
     // Verifica se a requisição foi bem-sucedida
     if (!response.ok) {
       throw new Error('Erro ao buscar informações do domínio');
     }
     // Converte a resposta para JSON
     const data = await response.json();
     // Exibe os dados na página
     displayDomainInfo(data);
   } catch (error) {
     console.error('Erro:', error);
   }
 }
 
 // Função para exibir os dados do domínio na página
 function displayDomainInfo(data) {
   const tbody = document.querySelector('#domainTable tbody');
   // Limpa o conteúdo anterior
   tbody.innerHTML = '';
   // Verifica se há resultados
   if (data.results.length > 0) {
     data.results.forEach(result => {
       // Verifica se o provedor pode ser identificado
       const provider = result.isp_name ? result.isp_name : 'Provedor Desconhecido';
       // Converte o IP em uma descrição mais compreensível (por exemplo, usando um serviço de geolocalização)
       const ipDescription = result.ip;
       // Cria uma nova linha na tabela
       const row = tbody.insertRow();
       // Insere as células da linha
       const cellProvider = row.insertCell();
       cellProvider.textContent = provider;
       const cellIP = row.insertCell();
       cellIP.textContent = ipDescription;
       // Adiciona o botão "Mais Informações"
       const cellMoreInfo = row.insertCell();
       const moreInfoButton = document.createElement('button');
       moreInfoButton.textContent = 'Mais Informações';
       moreInfoButton.classList.add('btn', 'btn-primary');
       moreInfoButton.addEventListener('click', function() {
           // Substitua 'Google' pelo provedor real obtido dos dados
           const searchQuery = encodeURIComponent(provider); // Codifica o provedor para ser uma URL válida
           const searchURL = `https://www.google.com/search?q=${searchQuery}`;
           window.open(searchURL, '_blank');
       });
       cellMoreInfo.appendChild(moreInfoButton);
     });
   } else {
     // Se não houver resultados, exibe uma mensagem na tabela
     const row = tbody.insertRow();
     const cell = row.insertCell();
     cell.colSpan = 3; // Ajuste para incluir a nova coluna do botão
     cell.textContent = 'Nenhuma informação encontrada para este domínio.';
     cell.style.color = "white"; // Define a cor do texto
   }
 }
 
     // Captura o botão de fechar
     const closeAboutButton = document.getElementById('closeAbout');
     // Adiciona um evento de clique ao botão de fechar
     closeAboutButton.addEventListener('click', function () {
       // Oculta a seção "Sobre a Aplicação"
       aboutContent.style.display = 'none';
     });
     // Captura o botão do menu de navegação
     const navbarButton = document.querySelector('.navbar-toggler');
     // Captura o menu de navegação
     const navbarMenu = document.querySelector('#navbarNav');
     // Adiciona um evento de clique ao botão do menu
     navbarButton.addEventListener('click', function () {
       // Alterna a classe 'show' no menu de navegação ao clicar no botão
       navbarMenu.classList.toggle('show');
     });