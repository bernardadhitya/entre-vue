<template>
    <v-container>
        <div style="height: 75px"></div>
        <h1>Booking</h1>
        <!--<ul>
            <li v-for="item in bookings" :key="item.id">
                {{item.name + ' ' + item.job + ' '+ item.price}}
            </li>
        </ul>-->
        
        <v-container>
            <v-layout column>
                <v-flex xs12 
                v-for="booking in bookings" 
                :key="booking.id"
                v-bind = "{ [`grid-ist-sm4`]: true }"
                pa-2>
                    <v-card>
                      <v-layout row>
                            <v-flex xs7>
                                <v-card-title primary-title>
                                    <div>
                                        <h3>{{ booking.name }}</h3>
                                        <h6>{{ booking.job }}</h6>
                                        <p>{{ booking.date }}</p>
                                    </div>
                                </v-card-title>
                                <v-divider></v-divider>
                                <v-card-action>
                                    <div style="margin:10px">
                                        <h3 style="color: green">
                                            {{ 'Rp.' + booking.price }}
                                        </h3>
                                    </div>
                                </v-card-action>
                            </v-flex>
                            <v-flex xs5>
                                <v-card-media>
                                    <div style="margin: 10px">
                                        <v-img :src="booking.imageUrl"></v-img>
                                    </div>
                                    
                                </v-card-media>
                            </v-flex>
                        </v-layout>  
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>

        <v-divider></v-divider>
        <div style="height: 10px"></div>
        <v-card>
            <v-layout row>
                <v-flex xs7>
                    <div style="margin: 15px">
                        <h3>Total Price</h3>
                        <h1 style="color:teal">{{'Rp.' + totalPrice}}</h1>
                    </div>
                </v-flex>
                <v-flex xs5>
                    <div style="margin: 20px">
                        <v-dialog>
                            <v-btn flat slot="activator">
                                Purchase
                            </v-btn>
                            <v-card v-model="dialog1">
                                <v-card-title>
                                    <h3>Thank You!</h3>
                                </v-card-title>
                                <v-card-text>
                                    Your purchase has been made
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                        
                    </div>
                </v-flex>
            </v-layout>
        </v-card>
        <div style="height: 100px"></div>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            select_1: null,
            select_2: null,
            jobs: [
                'Event Organizer',
                'Photography',
                'Designer',
                'Table Decorator'
            ],
            fees: [
                '< Rp.100.000',
                'Rp.100.000-Rp.500.000',
                'Rp.500.000-Rp.1.000.000',
                'Rp.1.000.000-Rp.10.000.000',
                '> Rp.10.000.000'
            ],
            items: [],
            dialog1: false
        }
    },
    computed: {
        bookings(){
            return this.$store.getters.getBookings
        },
        totalPrice(){
            return this.$store.getters.getTotalPrice
        }
    }
}
</script>
