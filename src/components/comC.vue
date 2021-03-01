<script>

    import { ref } from 'vue'

    export default {
        setup () {

            let c = ref('c')

            const logC = ()=> {
                console.log('C')
            }

            return {
                c,
                logC,
            }
        }
    }
</script>