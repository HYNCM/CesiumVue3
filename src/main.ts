import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import * as Cesium from 'cesium'

Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0YzljYzA2ZC0xODlhLTQ1NzktYTEwNC0wMDU5YjZiYzVhN2MiLCJpZCI6MTA1MDgzLCJpYXQiOjE2NjA3ODIxOTB9.2XzHaIMwr__IBLU0CtHBPJPk_F5YTsxltnn2AMbYxAc';

const app = createApp(App)
app.use(router)
app.mount('#app')
