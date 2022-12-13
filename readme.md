```
npm i -g claudia
claudia generate-serverless-express-proxy --express-module app
claudia create --handler lambda.handler --deploy-proxy-api --region eu-central-1

```
creates lambda in eu-central-1 with name from package.json
