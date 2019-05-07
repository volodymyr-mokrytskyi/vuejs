<template>
        <v-navigation-drawer app
                             v-model="drawer"
                             :mini-variant.sync="mini"
                             hide-overlay
                             stateless
        >
            <v-toolbar flat class="transparent">
                <v-list class="pa-0">
                    <v-list-tile avatar>
                        <v-list-tile-avatar>
                            <img src="https://static-cdn.jtvnw.net/user-default-pictures/cd618d3e-f14d-4960-b7cf-094231b04735-profile_image-300x300.jpg">
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>Ether0s</v-list-tile-title>
                        </v-list-tile-content>

                        <v-list-tile-action>
                            <v-btn
                                    icon
                                    @click.stop="mini = !mini"
                            >
                                <v-icon>chevron_left</v-icon>
                            </v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-toolbar>

            <v-list class="pt-1">
                <v-divider></v-divider>

                <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        @click.stop="mini = true"
                        :to="item.to"
                        class="pt-3"
                >

                    <v-list-tile-action>
                        <v-icon large>{{ item.icon }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
            </v-list>
        </v-navigation-drawer>
</template>

<script>
    export default {
        name: "Drawer",
        data () {
            return {
                drawer: true,
                user:{},
                items: [
                    { title: 'Dashboard', icon: 'dashboard', to:'/dashboard'},
                    { title: 'Chat bot', icon: 'chat', to:'/bot'},
                    { title: 'Notifications', icon: 'live_tv', to:'/notifications'},
                    { title: 'Donations', icon: 'attach_money', to:'/donations'},
                    { title: 'Song request', icon: 'library_music', to:'/song'},
                    { title: 'Merchandise', icon: 'shopping_cart', to:'/merchandise'}
                ],
                mini: true,
                right: null
            }
        }
    }
</script>

<style>

</style>