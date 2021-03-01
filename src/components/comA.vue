<script>

    import { ref } from 'vue'

    export default {
        setup () {

            let a = ref('a')

            const logA = ()=> {
                console.log('A')
            }

            return {
                a,
                logA,
            }
        }
    }
</script>