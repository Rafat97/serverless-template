# How to run

1. install global package serverless-framework, zx

2. login serverless

```
sls login
```

3. Create a Serverless Application

```
serverless --org <org> --app <app> create
```

4. clone the repository

5. change the `orgid` and `appid` in the `services\serverless-common.yml`

6. change the `profiles` in the `services\serverless-common.yml`

6. run the following command for deploying the serverless application

```
yarn run deploy
```
