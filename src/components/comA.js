import { ref } from 'vue'

export default () => {
    let a = ref('a')

    const logA = ()=> {
        console.log('A')
    }

    return {
        a,
        logA,
    }
}