<template>
    <v-container>
        <div style="height: 100px"></div>
        <v-layout column>
            <v-flex xs12>
                <h1>Make Up</h1>
            </v-flex>
            <v-flex xs12>
                <p>Find make up artists to partner up for your event</p>
            </v-flex>
        </v-layout>
        <v-layout column>
            <v-flex xs12 v-for = "item in items" 
            :key = "item.id" 
            v-bind = "{ [`grid-ist-sm4`]: true }"
            pa-2>
                <v-bottom-sheet full-width>
                    <v-card :color="item.color" 
                    slot="activator"
                    >
                        <v-layout>
                            <v-flex xs5>
                            <v-img
                                :src="item.imageUrl"
                                height="125px"
                                contain
                            ></v-img>
                            </v-flex>
                            <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                <div class="headline">{{ item.name }}</div>
                                <div>{{ item.job }}</div>
                                <p style="font-size:10px">{{ item.price }}</p>
                                </div>
                            </v-card-title>
                            </v-flex>
                        </v-layout>
                        <v-divider light></v-divider>
                        <v-card-actions class="pa-3">
                            Rating
                            <v-spacer></v-spacer>
                            <v-icon color="yellow">star</v-icon>
                            <v-icon color="yellow">star</v-icon>
                            <v-icon color="yellow">star</v-icon>
                            <v-icon color="yellow">star</v-icon>
                            <v-icon color="yellow">star</v-icon>
                        </v-card-actions>
                    </v-card>
                        <v-card tile>
                            <v-list three-line>
                            <v-list-tile>
                                <v-list-tile-content>
                                <v-list-tile-title>{{item.name}}</v-list-tile-title>
                                <v-list-tile-sub-title>
                                    <v-icon color="yellow">star</v-icon>
                                    <v-icon color="yellow">star</v-icon>
                                    <v-icon color="yellow">star</v-icon>
                                    <v-icon color="yellow">star</v-icon>
                                    <v-icon color="yellow">star</v-icon>
                                </v-list-tile-sub-title>
                                <v-list-tile-sub-title>{{item.job}}</v-list-tile-sub-title>
                                </v-list-tile-content>

                                <v-spacer></v-spacer>

                                <v-list-tile-action>
                                <v-dialog v-model="dialog">
                                    <v-btn flat slot="activator" v-on:click="setNewName(item.name, item.price, item.job, item.imageUrl)">Book</v-btn>
                                    <v-card>
                                        <v-card-title>
                                            <h2>Pick a Date</h2>
                                        </v-card-title>
                                        <v-card-text>
                                            <v-container>
                                                <v-layout>
                                                    <v-flex>
                                                        <v-date-picker v-model="picker"></v-date-picker>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-card-text>
                                        <v-card-action>
                                            <v-container>
                                                <v-layout row>
                                                    <v-flex>
                                                        <v-spacer></v-spacer>
                                                    </v-flex>
                                                    <v-flex>
                                                    <v-btn flat color="green" 
                                                        @click="dialog=false; dialog2=true"
                                                        v-on:click="onSubmitBooking()"
                                                        slot="activator">
                                                        Submit
                                                    </v-btn>
                                                    </v-flex>
                                                </v-layout>
                                            </v-container>
                                        </v-card-action>
                                    </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialog2">
                                    <v-card>
                                        <v-card-title>
                                            <h3>Thank You!</h3>
                                        </v-card-title>
                                        <v-card-text>
                                            Your reservation at {{getName}} has been booked. Please proceed to the payment once you are done.
                                        </v-card-text>
                                        <v-card-action>
                                            <v-btn @click="dialog2=false">Continue</v-btn>
                                        </v-card-action>
                                    </v-card>
                                </v-dialog>
                                </v-list-tile-action>
                            </v-list-tile>
                        </v-list>
                    </v-card>
                </v-bottom-sheet>
            </v-flex>
        </v-layout>
        <!--<v-layout>
            <router-view></router-view>
        </v-layout>-->
    </v-container>
</template>

<script>
export default {
    data(){
        return{
            items: [
                { 
                    id: 1,
                    name: "BEAUSHI", 
                    job: "Make Up Artist",
                    price: 200000  ,
                    imageUrl: "https://scontent-sin6-1.cdninstagram.com/vp/5856f6b67443521a0c73f43656084f4a/5C7C299F/t51.2885-19/s320x320/16464386_285873171830846_5757954850620964864_a.jpg",
                    color: "white"
                },
                { 
                    id: 2,
                    name: "Firli", 
                    job: "Make Up Artist",
                    price: 750000  ,
                    imageUrl: "https://scontent-sin6-1.cdninstagram.com/vp/2067e72affaf6ca287a8ca3f2e8ace53/5C7F9E18/t51.2885-19/s320x320/43914426_180855089488000_3150720349725786112_n.jpg",
                    color: "white"
                }
            ],
            picker: new Date().toISOString().substr(0,10),
            dialog: false,
            dialog2: false,

            selected: null,
            price: 0,
            job: null,
            imageUrl: null
        }
    },
    methods: {
        onSubmitBooking(){
            console.log(this.picker)
            //console.log(this.selected)
            const new_booking = {
                name: this.selected,
                price: this.price,
                job: this.job,
                imageUrl: this.imageUrl,
                date: this.picker
            }
            this.$store.dispatch('addBooking', new_booking)
        },
        setNewName(item_name, item_price, item_job, item_url){
            this.selected = item_name
            this.price = item_price
            this.job = item_job
            this.imageUrl = item_url
            console.log(this.selected + ', ' + this.price)
        }
    },
    computed: {
        getName(){
            return this.$store.getters.getLatestBooking
        }
    }
}
</script>

