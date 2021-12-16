import Chart from 'chart.js'

export default {
    /* eslint-disable */
    install(Vue) {
        Vue.prototype.$_chart = Chart; //라이브러리 로드해서 뷰 프로토타입에 등록
    }
}