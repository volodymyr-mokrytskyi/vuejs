<template>
    <v-layout justify-space-around d-flex>
        <v-form>
            <v-container fluid grid-list-md>
                <v-layout align-start justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md2>
                        <v-text-field
                                v-model="commandName"
                                label="Command name"
                                outline>
                        </v-text-field>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md2>
                        <v-combobox
                                v-model="type"
                                :items="types"
                                label="Message type">
                        </v-combobox>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container v-if="type==='Message'" fluid grid-list-md>
                <v-layout align-start justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md2>
                        <v-text-field
                                label="Bot's message"
                                outline
                                v-model="messageText">
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container v-if="type==='Response'" fluid grid-list-md>
                <v-layout align-start justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md2>
                        <v-text-field
                                label="Bot's response"
                                outline
                                v-model="responseText">
                        </v-text-field>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md2>
                        <p>Placeholders</p>
                    </v-flex>
                </v-layout>

                <v-layout align-start justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md2>
                        <v-combobox
                                v-model="placeholder"
                                :items="placeholders"
                                @change="selected => this.responseText += '[' + selected.toLowerCase() + ']'"
                                label="Placeholder type">
                        </v-combobox>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container v-if="type==='Animation'" fluid grid-list-md>
                <v-layout align-start justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md2>
                        <v-text-field
                                label="Animation text"
                                outline
                                v-model="animationText">

                        </v-text-field>
                    </v-flex>
                    <v-flex d-flex xs12 sm6 md2>
                        <p>Placeholders</p>
                    </v-flex>
                </v-layout>

                <v-layout align-start justify-start column wrap>

                    <v-flex d-flex xs12 sm6 md2>
                        <v-combobox
                                v-model="placeholder"
                                :items="placeholders"
                                @change="selected => this.animationText += '[' + selected.toLowerCase() + ']'"
                                label="Placeholder type">
                        </v-combobox>

                    </v-flex>
                </v-layout>

                <v-layout align-start justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md1>
                        <v-text-field
                                label="Image url"
                                outline
                                v-model="imageUrl">
                        </v-text-field>
                    </v-flex>
                </v-layout>


                <v-layout align-start justify-start column wrap>
                    <v-flex xs12 sm6 md1>
                        <v-combobox
                                @change="item => this.ratio = ratios.find(o => o.aspect === item).value"
                                :items="ratios.map(asp => asp.aspect)"
                                label="Ratio">
                        </v-combobox>
                    </v-flex>

                </v-layout>

                <v-layout v-if="imageUrl!==''" align-start justify-start wrap>
                    <v-flex xs12 sm6 md6 d-flex>
                        <v-img
                                max-height="220px"
                                max-width="220px"
                                contain
                                :src="imageUrl"
                                :lazy-src="imageUrl"
                                :aspect-ratio="ratio"
                                class="grey lighten-2">
                        </v-img>
                    </v-flex>
                </v-layout>
            </v-container>

            <v-container v-if="messageText!=='' || responseText!=='' || animationText!==''" fluid grid-list-md>
                <v-layout align-start justify-start column wrap>
                    <v-layout align-start justify-start row wrap>
                        <v-flex d-flex xs12 sm6 md2>
                            <v-btn depressed
                                   large
                                   @click="preview=true">
                                Preview
                            </v-btn>
                            <v-btn depressed large color="primary">Submit</v-btn>
                        </v-flex>
                    </v-layout>
                </v-layout>
            </v-container>

        </v-form>

        <v-form>
            <v-container v-if="preview && (previewImage!=='' || previewChat!=='')" fluid grid-list-lg>
                <v-layout align-center justify-start wrap>
                    <v-flex xs12 sm12 md12 d-flex>
                        <v-img
                                contain
                                :src="previewImage"
                                :lazy-src="previewImage"
                                :aspect-ratio="ratio"
                                class="grey lighten-2">
                        </v-img>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>

        <v-form>
            <v-container v-if="preview" fluid grid-list-md>
                <v-layout   align-end justify-start column wrap>
                    <v-flex d-flex xs12 sm6 md1>
                        <v-text-field
                                label="Image url"
                                outline
                                v-model="previewImage">
                        </v-text-field>
                    </v-flex>
                    <v-layout  align-start justify-start row wrap>
                        <v-flex d-flex xs12 sm6 md1>
                            <v-btn depressed large>Preview</v-btn>
                            <v-btn depressed large color="primary">Submit</v-btn>
                        </v-flex>
                    </v-layout>

                </v-layout>

            </v-container>
        </v-form>
    </v-layout>
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
                show: false,
                preview: false,
                drawer: true,
                mini: true,
                right: null

            }
        }
    }
</script>