import { ref } from 'vue'

export default () => {
    let c = ref('c')

    const logC = ()=> {
        console.log('C')
    }

    return {
        c,
        logC,
    }
}