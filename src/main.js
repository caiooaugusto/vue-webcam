import Webcam from './components/Webcam.vue';

export {Webcam}

export function install (Vue) {
    Vue.component('VueWebcam', Webcam)
}
