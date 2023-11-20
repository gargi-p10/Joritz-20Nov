import SamplePage1 from './views/pages/SamplePage1.vue'
import SamplePage2 from './views/pages/SamplePage2.vue'
const sampleroutes = [
      {
        path:'',
        name: 'sample-page1',
        component: SamplePage1
      },
      {
        path: 'page2',
        name: 'sample-page2',
        component: SamplePage2
      }    
    ]
  
export default sampleroutes
