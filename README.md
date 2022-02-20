# Game XP

![alt text](https://user-images.githubusercontent.com/34607779/154868862-e731191b-9794-40f7-8a5d-448e455a0d33.png)


### Objetos que estamos querendo entregar de valor com o projeto

O GamerXP, tem como objetivo gamificar o mercado financeiro para melhorar a vida financeira das pessoas, incentivando clientes
a construírem hábitos financeiros saudáveis, a investirem com mais qualidade e proporcionar ensino de educação financeira no GamerXP,
através de um processo de gamificação claro, objetivo e rápido.

## Planejamentos e entregas :checkered_flag:
> Funcionalidades Concluidas :
> Back-end conectado com API`s da
> Modelo de produto  :heavy_check_mark:
> Tela Principal :heavy_check_mark:

> Funcionalidades Em desenvolvimento :
> Tela sobre :warning:
> End points de Villagers :warning:
> Modelo de Villagers :warning:

## Linguagens e libs utilizadas :books:

- [Heroku](https://devcenter.heroku.com/)
- [HTML]()
- [CSS]()
- [Javascript]()
- [NodeJS](https://nodejs.org/en/)
- [Pytorch](https://pytorch.org/)
- [Bootstrap](https://bootstrap-vue.org/)
- [MongoDB](https://www.mongodb.com/)

## Como iniciar o codigo 

```npm install```

```npm start```

Requisição por Via Postman:

GET - ```http://localhost:3333/get```
Body.raw (em formato JSON)  -  
```
{
    "url" :"https://openapi.xpi.com.br/openbanking/bank/xp/users/JOSE/checking-account"
}
```

Requisição via Curl:

```
curl --location --request GET 'http://localhost:3333/get' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AIOrJOZ4pDqxb3rlQ260eFipkUqZ_W3gh.nt2bRH0iIaTzEtIWj0o7dxr17rIT7k4NaxuoE0yuvIc' \
--data-raw '{
    "url" :"https://openapi.xpi.com.br/openbanking/bank/xp/users/JOSE/checking-account"
}'
```
