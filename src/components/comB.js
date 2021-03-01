import { ref } from 'vue'

export default () => {
    let b = ref('b')

    const logB = ()=> {
        console.log('B')
    }

    return {
        b,
        logB,
    }
}