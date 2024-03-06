# Projeto de Avaliação - Programa de Bolsas Compass UOL / AWS e Moçambique

Este é um projeto desenvolvido como parte da avaliação das segunda e terceira sprints do programa de bolsas Compass UOL para formação em machine learning para AWS.

## Descrição

O objetivo deste projeto é criar uma API em JavaScript/NodeJS para consulta da API pública Who-Hosts-This.com. A API desenvolvida será disponibilizada em um container Docker, hospedado na AWS Cloud.

## Especificações

- API pública escolhida: Who-Hosts-This.com, esta API nos permite vêr o endereço e o nome do provedor do site;
- Tecnologias utilizadas: JavaScript, NodeJS, Docker, AWS Cloud, EC2;
- Servidor nginx - como proxy reverso, direcionando o as requisições http com url /api/domain-info/ para a porta 5500 onde roda o node. [ficheiro](nginx/nginx.conf)
- Docker - que é gerido pelo systemd, que inicia, reinicia, para o docker sempre que necessário. [O ficheir systemd](actividade_spint2-3_equipe6.service) 

### Estrutura do projeto:

- A API em NodeJS consome a API pública Who-Hosts-This.com.
- A API é disponibilizada em um container Docker.

### Desenvolvimento em equipe:

- **Equipe:** Equipe 6 - API Who Hosts This
- **Membros:** Filipe Domingos dos Santos, Lírio Manga, Carlos Captine Alexandre Mutemba

## Execução

Para executar o projeto, siga estas etapas:

1. Acesse ao sistema através do link: <a href="http://ec2-3-213-154-220.compute-1.amazonaws.com/who_host/">Consulta o domínio</a>.
2. Escreva o endereço e clique no botão "Consultar".
3. Certifique-se de ter o Docker instalado em sua máquina, caso queira rodar localmente.
4. Execute o comando `docker run` para iniciar o container Docker localmente.
5. Acesse a API em `http://localhost:5500/api/domain-info/{domínio}`.
6. Utilize a página HTML fornecida na pasta public para fazer consultas à API.

## Dificuldades
1. Fazer clone do repositório no EC2, uma vez que o responável por este serviço não é o criador do repositório (NB: isto não impediu de clonar localmente), a solução foi copiar os ficheiro para o server.
2. Deploy do sistema, no servidor foi preciso fazer algumas alterações.
 

