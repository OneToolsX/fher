import { createApp } from 'vue'
import './app.css'
import Taro from '@tarojs/taro'

// init cloud, the cloud use doc see https://taro-docs.jd.com/docs/next/apis/cloud/
Taro.cloud.init({ env: "onetools-6gyr8bhtb6832c8f" });


const App = createApp({
    onShow(options) { },
    // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

export default App
