# Projeto de Avaliação - Programa de Bolsas Compass UOL / AWS e Moçambique

Este é um projeto desenvolvido como parte da avaliação das segunda e terceira sprints do programa de bolsas Compass UOL para formação em machine learning para AWS.

## Descrição

O objetivo deste projeto é criar uma API em JavaScript/NodeJS para consulta da API pública Who-Hosts-This.com. A API desenvolvida será disponibilizada em um container Docker, hospedado na AWS Cloud.

## Especificações

- API pública escolhida: Who-Hosts-This.com
- Tecnologias utilizadas: JavaScript, NodeJS, Docker, AWS Cloud

### Estrutura do projeto:

- A API em NodeJS consome a API pública Who-Hosts-This.com.
- A API é disponibilizada em um container Docker.

### Desenvolvimento em equipe:

- **Equipe:** Equipe 6 - API Who Hosts This
- **Membros:** Filipe Domingos dos Santos, Lírio Manga, Carlos Captine Alexandre Mutemba

## Execução

Para executar o projeto, siga estas etapas:

1. Acesse ao sistema através do link: [Consulta do domínio](link_do_sistema).
2. Escreva o endereço e clique no botão "Consultar".
3. Certifique-se de ter o Docker instalado em sua máquina, caso queira rodar localmente.
4. Execute o comando `docker build actividade_spint2-3_equipe6` para iniciar o container Docker localmente.
5. Execute `docker run actividade_spint2-3_equipe6`.
6. Acesse a API em http://localhost:5500/api/domain-info/{domínio}.
7. Utilize a página HTML fornecida para fazer consultas à API.

### Execução na AWS Cloud

O projeto também pode ser executado na AWS Cloud. A estratégia para executar o Docker na AWS pode variar, e recomendamos consultar os seguintes recursos:

- [Deploy Node js Application on AWS EC2 Server](link_para_recurso_1)
- [Deploy Node JS Docker Container to AWS ECS Cluster (Fargate)](link_para_recurso_2)
- [Realizando seu primeiro deploy para o ECS da AWS](link_para_recurso_3)

Por favor, escreva em português.