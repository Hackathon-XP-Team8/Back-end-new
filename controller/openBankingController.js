const request = require("request");
const { createToken } = require('../utils/getAccessToken')

module.exports = {
    async show (req, res){     
        let { url } = req.body
        const token = await createToken()
        console.log(token)
        var options = {
            'method': 'GET',
            'url': url,
            'headers': {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
          };
          const promise = new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    resolve(response.body);
              });  
        })
        const p = await promise;
        return res.status(200).send(p);
    },

    async create (req, res){     
        let { url, json } = req.body
        const token = await createToken()
        console.log(token)
        var options = {
            'method': 'POST',
            'url': url,
            'json': json,
            'headers': {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
          };
          const promise = new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    resolve(response.body);
              });  
        })
        const p = await promise;
        return res.status(200).send(p);
    },

    async path (req, res){     
        let { url, json } = req.body
        const token = await createToken()
        console.log(token)
        var options = {
            'method': 'PATCH',
            'url': url,
            'json': json,
            'headers': {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`
            },
          };
          const promise = new Promise((resolve, reject) => {
            request(options, function (error, response) {
                if (error) reject(error);
                    resolve(response.body);
              });  
        })
        const p = await promise;
        return res.status(200).send(p);
    }
}