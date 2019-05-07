<template>
    <v-app dark>
        <drawer>

        </drawer>
        <toolbar>

        </toolbar>
        <v-content>
            <router-view>

            </router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Drawer from "../components/Drawer.vue";
    import Toolbar from "../components/Toolbar.vue";

    export default {
        components: {Drawer, Toolbar}
    }
</script>

<style scoped>

</style>