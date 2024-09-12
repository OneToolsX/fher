## Gold 🎉

Sometimes, you want to find someone to start a romantic journey with, but you don't know how to begin. Gold is a dating app that can help you find the right person. With Gold, you can easily connect with someone special and start your love journey.

now the wetcha mini program is available, you can scan the qrcode to try it. 

![qrcode](doc/qrcode.jpg)

> Warning ☠️: now is deveploment version, so will have many function not to do. 

## Technology Slelection 🎃

To start, we want only a server for the WeChat mini program. By leveraging the serverless capabilities of cloud functions, we chose Tencent Cloud Function. With a smaller number of users, we can operate at a cost of just 20 Yuan per month. As the user base grows, we can scale up the serverless capabilities. This is our reasoning for selecting this server technology.

For the frontend, we chose Taro, which supports WeChat mini program, Alipay mini program, and the web. An important factor is that we don't want to learn specific technologies for each platform. We want to use the same technology, `Vue` or `React`, to support all platforms. At this time, Taro satisfies our requirements.

## Development


## TODO

- [ ] select the UI library
- [ ] ingeterate the Serverless Framework

### Build

powershell on Windows, use the production environment to build the project.

```powershell
$env:NODE_ENV="production"; taro build --type weapp --watch
```
