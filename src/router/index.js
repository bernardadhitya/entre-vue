import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Booking from '@/components/Booking'
import EventOrganizer from '@/components/Search/EventOrganizer'
import Photographer from '@/components/Search/Photographer'
import Designer from '@/components/Search/Designer'
import Catering from '@/components/Search/Catering'
import MakeUp from '@/components/Search/MakeUp'
import Venue from '@/components/Search/Venue'
import Decoration from '@/components/Search/Decoration'


//Event Organizer
import Blast from '@/components/Search/Categories/EventOrganizer/Blast'
import TwinStar from '@/components/Search/Categories/EventOrganizer/TwinStar'

Vue.use(Router)

export default new Router({
  routes: [
    // --- Main Menus --
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/booking',
      name: 'Booking',
      component: Booking
    },
    {
      path: '/event-organizer',
      name: 'EventOrganizer',
      component: EventOrganizer,
      children: [
        {
          path: 'blast',
          component: Blast
        },
        {
          path: 'twin-star',
          component: TwinStar
        }
      ]
    },
    {
      path: '/photographer',
      name: 'Photographer',
      component: Photographer
    },
    {
      path: '/designer',
      name: 'Designer',
      component: Designer
    },
    {
      path: '/catering',
      name: 'Catering',
      component: Catering
    },
    {
      path: '/make-up',
      name: 'MakeUp',
      component: MakeUp
    },
    {
      path: '/venue',
      name: 'Venue',
      component: Venue
    },
    {
      path: '/decoration',
      name: 'Decoration',
      component: Decoration
    }
  ]
})
