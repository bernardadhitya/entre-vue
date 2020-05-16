<template>
  <v-container fluid>
    <div style="height:100px"></div>
    <v-layout column>
      <v-flex>
        <h1 style="font-size: 40px">Welcome</h1>
      </v-flex>
      <v-flex xs9>
        <p>Here's some business you might be interested in working with. Take your time, and enjoy!</p>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 pa-2>
        <v-card height="200px" color="teal">
          <v-card-media>
            <v-img src="https://moncheribridals.com/wp-content/uploads/2018/06/njuy.jpg" max-height="150px">
          </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/event-organizer">Event Organizer</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
      <v-flex xs6 pa-2>
        <v-card height="200px" color="orange">
          <v-card-media>
            <v-img src="https://images.unsplash.com/photo-1488724485310-bd445f3faff6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77b8b9f3ba22c745dce62101b47a3ae5&w=1000&q=80" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/photographer">Photographer</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
      <!--<v-flex xs6 pa-2>
        <v-card height="200px" color="pink">
          <v-card-media>
            <v-img src="https://designshack.net/wp-content/uploads/wedding-card-samples.jpg" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/designer">Designer</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>-->
      <v-flex xs6 pa-2>
        <v-card height="200px" color="red">
          <v-card-media>
            <v-img src="https://i.pinimg.com/originals/79/0d/51/790d51fe865311cd54c5915047c5303e.jpg" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/decoration">Decoration</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
      <v-flex xs6 pa-2>
        <v-card height="200px" color="blue">
          <v-card-media>
            <v-img src="http://bestdallascatering.com/wp-content/uploads/2016/04/dallas-best-catering-services.jpg" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/catering">Catering</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
      <v-flex xs6 pa-2>
        <v-card height="200px" color="purple">
          <v-card-media>
            <v-img src="https://files.kstatecollegian.com/2018/02/Augu.jpg" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/make-up">Make Up</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
      <v-flex xs12 pa-2>
        <v-card height="200px" color="green">
          <v-card-media>
            <v-img src="https://media.weddingz.in/images/ee92e46914f275e4aa50f50766c2e645/moongate-events-venue-maranayakanahalli-bangalore-2.jpg" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/venue">Venue</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>
      <!--<v-flex xs6 pa-2>
        <v-card height="200px" color="brown">
          <v-card-media>
            <v-img src="https://fullcircle.asu.edu/wp-content/uploads/2013/02/OpenDoor-2743_a-1-crpd.jpg" height="150px">
            </v-img>
          </v-card-media>
          <v-card-action>
            <v-btn flat dark to="/entertainment">Entertainment</v-btn>
          </v-card-action>
        </v-card>
      </v-flex>-->
    </v-layout>
    <div style="height:100px"></div>
  </v-container>
</template>

