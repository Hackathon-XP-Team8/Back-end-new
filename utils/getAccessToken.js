const request = require("request");

module.exports = {
    async createToken (){     
        var options = {
            'method': 'POST',
            'url': 'https://openapi.xpi.com.br/oauth2/v1/access-token',
            'headers': {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            form: {
              'grant_type': 'client_credentials',
              'client_id': 'MKHA63SBNvwkG9foDsdEb5YjFm0xy9stNQQ5TbulzeF4Rj1X',
              'client_secret': 'etKakSVAERD27w9BV63WAGBW8UF5nJOiDruI0jxtBkrcxesYpMdH9IzGg4chJQNK'
            }
          };
          return new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    const resultJson = JSON.parse(response.body)
                    console.log('OLHA O TOKEN', resultJson.access_token);
                    resolve(resultJson.access_token);
              });  
        })   
    }
}


