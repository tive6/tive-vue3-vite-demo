<template>
    <ol>
        <li>
            <p>组件A=>data: [{{a}}]</p>
            <p>
                组件A=>方法:
                <button @click="logA">logA</button>
            </p>
            <hr>
        </li>
        <li>
            <p>组件B=>data: [{{b}}]</p>
            <p>
                组件B=>方法:
                <button @click="logB">logB</button>
            </p>
            <hr>
        </li>
        <li>
            <p>组件c=>data: [{{c}}]</p>
            <p>
                组件C=>方法:
                <button @click="logC">logC</button>
            </p>
            <hr>
        </li>
    </ol>
</template>

<script setup>
    import useA from './../components/comA.js'
    import useB from './../components/comB.js'
    import useC from './../components/comC.js'

    let { a, logA } = useA()
    let { b, logB } = useB()
    let { c, logC } = useC()
</script>

