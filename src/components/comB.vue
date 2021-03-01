<script>

    import { ref } from 'vue'

    export default {
        setup () {

            let b = ref('b')

            const logB = ()=> {
                console.log('B')
            }

            return {
                b,
                logB,
            }
        }
    }
</script>