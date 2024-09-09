<script>
export default {
    props: {
        /* ... */
        render: {
            type: Function
        }
    },
    setup(props) {
        // use an array to return multiple root nodes
        return () => props.render();
    }
};
</script>

<style lang="scss" scoped></style>
