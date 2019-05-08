<template>

    <v-container grid-list-md fluid>
        <v-layout row wrap>

            <v-flex xs2>
                <v-form>
                    <v-text-field
                            v-model="commandName"
                            label="Command name"
                            outline>
                    </v-text-field>
                    <v-combobox
                            v-model="type"
                            :items="types"
                            label="Message type">
                    </v-combobox>
                    <div v-if="type==='Message'">
                        <v-text-field
                                label="Bot's message"
                                outline
                                v-model="messageText">
                        </v-text-field>
                    </div>
                    <div v-if="type==='Response'">
                        <v-text-field
                                label="Bot's response"
                                outline
                                v-model="responseText">
                        </v-text-field>
                        <p>Placeholders</p>

                        <v-combobox
                                v-model="placeholder"
                                :items="placeholders"
                                @change="selected => this.responseText += '[' + selected.toLowerCase() + ']'"
                                label="Placeholder type">
                        </v-combobox>
                    </div>

                    <div v-if="type==='Animation'">
                        <v-text-field
                                label="Animation text"
                                outline
                                v-model="animationText">

                        </v-text-field>
                        <p>Placeholders</p>
                        <v-combobox
                                v-model="placeholder"
                                :items="placeholders"
                                @change="selected => this.animationText += '[' + selected.toLowerCase() + ']'"
                                label="Placeholder type">
                        </v-combobox>
                        <v-text-field
                                label="Image url"
                                outline
                                v-model="imageUrl">
                        </v-text-field>
                        <v-combobox
                                @change="item => this.ratio = ratios.find(o => o.aspect === item).value"
                                :items="ratios.map(asp => asp.aspect)"
                                label="Ratio">
                        </v-combobox>

                        <div v-if="imageUrl!==''">
                            <v-img
                                    max-height="220px"
                                    max-width="220px"
                                    contain
                                    :src="imageUrl"
                                    :lazy-src="imageUrl"
                                    :aspect-ratio="ratio"
                                    class="grey lighten-2">
                            </v-img>
                        </div>

                        <div v-if="messageText!=='' || responseText!=='' || animationText!==''">
                            <v-flex xs6>
                                <v-btn depressed
                                       small
                                       @click="preview=true">
                                    Preview
                                </v-btn>
                                <v-btn depressed small color="primary">Submit</v-btn>
                            </v-flex>
                        </div>

                    </div>
                </v-form>
            </v-flex>
            <v-flex xs8>
                <v-form>
                    <v-img
                            contain
                            :src="previewImage"
                            :lazy-src="previewImage"
                            :aspect-ratio="previewRatio"
                            class="grey lighten-2">
                    </v-img>
                </v-form>
            </v-flex>
            <v-flex xs2>
                <v-form>
                    <v-text-field
                            label="Stream layout image"
                            outline
                            v-model="previewImage">
                    </v-text-field>
                    <v-combobox
                            @change="item => this.previewRatio = previewRatios.find(o => o.aspect === item).value"
                            :items="previewRatios.map(asp => asp.aspect)"
                            label="Ratio">
                    </v-combobox>

                </v-form>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<style>

</style>
<script>
    export default {
        name: "Bot",
        data() {
            return {
                commandName: '',
                messageText: '',
                responseText: '',
                animationText: '',
                imageUrl: '',
                previewImage: '',
                previewChat: '',
                type: 'None',
                types: ['Message', 'Response', 'Animation'],
                placeholder: '',
                placeholders: ['Sender', 'Streamer', 'Param'],
                ratio: '1:1',
                ratios: [
                    {aspect: '1:1', value: '1'},
                    {aspect: '4:3', value: '1.3'},
                    {aspect: '6:4', value: '1.5'},
                    {aspect: '16:9', value: '1.7'},
                    {aspect: '18:6', value: '3'},
                ],
                previewRatio: '1:1',
                previewRatios: [
                    {aspect: '1366x768', value: '1.778'},
                    {aspect: '1920x1080', value: '1.777'},
                    {aspect: '1440x900', value: '1.6'},
                    {aspect: '1600x900', value: '1.777'},
                    {aspect: '1280:1024', value: '1.25'},
                    {aspect: '1280:800', value: '1.6'},
                    {aspect: '1024:768', value: '1.333'},
                ],
                show: false,
                preview: false,
                drawer: true,
                mini: true,
                right: null

            }
        }
    }
</script>