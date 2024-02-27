# Projeto de Avaliação - Programa de Bolsas Compass UOL / AWS e Moçambique

Este é um projeto desenvolvido como parte da avaliação das segunda e terceira sprints do programa de bolsas Compass UOL para formação em machine learning para AWS.

## Descrição

O objetivo deste projeto é criar uma API em JavaScript/NodeJS para consulta da API pública Who-Hosts-This.com. A API desenvolvida será disponibilizada em um container Docker, hospedado na AWS Cloud.

## Especificações

- API pública escolhida: Who-Hosts-This.com
- Tecnologias utilizadas: JavaScript, NodeJS, Docker, AWS Cloud
- Estrutura do projeto:
  - A API em NodeJS consome a API pública Who-Hosts-This.com.
  - A API é disponibilizada em um container Docker.
- Desenvolvimento em equipe:
  - Equipe: Equipe 6 - API Who Hosts This
  - Membros: Eliseu Arvisco Hairone, Filipe Domingos dos Santos, Lírio Manga, Carlos Captine Alexandre Mutemba

## Execução

Para executar o projeto localmente, siga estas etapas:

1. Clone o repositório para o seu ambiente de desenvolvimento.
2. Navegue até o diretório do projeto.
3. Certifique-se de ter o Docker instalado em sua máquina.
4. Execute o comando `docker-compose up` para iniciar o container Docker localmente.
5. Acesse a API em `http://localhost:3000/api/domain-info/{domínio}`.
6. Utilize a página HTML fornecida para fazer consultas à API.

## Execução na AWS Cloud

O projeto também pode ser executado na AWS Cloud. A estratégia para executar o Docker na AWS pode variar, e recomendamos consultar os seguintes recursos:

- [Deploy Node js Application on AWS EC2 Server](https://www.oodlestechnologies.com/blogs/Deploy-Node-js-Application-on-AWS-EC2-Server/)
- [Deploy Node JS Docker Container to AWS ECS Cluster (Fargate)](https://medium.com/better-programming/deploy-node-js-docker-container-to-aws-ecs-cluster-fargate-3e4e70e63044)
- [Realizando seu primeiro deploy para o ECS da AWS](https://medium.com/trainingcenter/realizando-seu-primeiro-deploy-para-o-ecs-da-aws-7b6a4a8d268f)
