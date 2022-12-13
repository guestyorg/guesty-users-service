## Test JS app 
owners: accounting team 
runs: AWS Lambda eu-central-1 region
account: Guesty management

### Creates lambda in eu-central-1 region with name from package.json
```bash 
npm i -g claudia
npm i
claudia generate-serverless-express-proxy --express-module app
claudia create --handler lambda.handler --deploy-proxy-api --region eu-central-1
```

### Update lambda with the latest code
```bash
claudia update
```