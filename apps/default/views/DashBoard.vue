<template>
    
  <div id="q-app" style="min-height: 100vh;"> 
    <div >
      <q-layout view="hHh Lpr lff" container style="height: 450px" class=" rounded-borders">
        <q-header elevated :class="$q.dark.isActive ? 'bg-primary' : 'bg-black'">
          <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="menu"></q-btn>
            <q-toolbar-title style="text-align: center;">JORITZ Marketplace</q-toolbar-title>
          </q-toolbar>
        </q-header>
  
        <q-drawer
          v-model="drawer"
          show-if-above
          :width="150"
          :breakpoint="500"
        > 
        <!-- <q-btn style="margin-top: 20%; margin-left: 7%;" glossy rounded label="Add Artifact"></q-btn>       -->
        
          <q-scroll-area class="fit">
            <q-list padding class="menu-list"> 
              <q-item  clickable v-ripple>
             
  
                <q-item-section style="align-items: center;">
                  Dashboard
                </q-item-section>
              </q-item>
  
              
  
              <q-item to="/ArtView" clickable v-ripple > 
               
  
                <q-item-section  style="align-items: center;">
                  Artifacts 
                </q-item-section>
              </q-item>           
            </q-list> 
          </q-scroll-area> 
        </q-drawer>
  
        <!-- <div><button @click="ArtView">Artifacts</button> </div> -->
  
        <q-page-container>
          <q-page padding>
            <p >
              <!-- <j-column size="large">
                <j-widget icon="sym_r_event" title="Most Downloaded">
                    <BasicAreaChart />
                </j-widget>
              </j-column> -->
            </p>
            <div>
              <div ref="chartContainer" style="height:300px;"></div>
            </div>
          </q-page>
        </q-page-container>
      </q-layout>
      </div>
    </div> 
    <!--  -->
    
  
  <div>
      <div ref="chartContainer2" style="height:300px;"></div>
  </div>
  <br><br>
  <div>
      <div ref="chartContainer3" style="height:300px;"></div>
  </div> 
  <br>
  <br>
  <div>
      <div ref="chartContainer4" style="height:300px;"></div>
  </div> 


<!--  -->

  </template>
  
  
  
  <script>
  // import BasicAreaChart from '../apps/default/views/BasicAreaChart.vue';
  // import ArtView from './ArtView.vue';
  import { ref } from 'vue'
  import * as echarts from 'echarts';

  export default {
    methods: {
      ArtView() {
        this.$router.push('/ArtView') ;
      }
    },  
    setup () {
      return {
        drawer: ref(false)
      }
    }
  ,
  mounted()
  {
    const chartContainer = this.$refs.chartContainer;
    const mychart=echarts.init(chartContainer);
    const option=
    {
      
    title: {
            text: 'This Week Downloads'
          },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Workflows', ' Pipelines', 'Forms', 'Widgets', 'Runbooks','Packaged']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Workflows',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 101, 134, 90, 230, 210]
      },
      {
        name: 'ML Pipelines',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: 'Forms',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: 'Widgets',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: 'Runbooks',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [120, 132, 201, 434, 190, 230, 420]
      },
      {
        name: 'Packaged',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series'
        },
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
          
  };
  mychart.setOption(option);
    // Chart 2
    const chartContainer2 = this.$refs.chartContainer2;
    const mychart2 = echarts.init(chartContainer2);
    const colors = ['#5470C6', '#91CC75', '#EE6666','#6a7985'];
    const option2 = {
      // ... your chart option for the second chart
      legend: {},
      title:{text: 'This Year Downloads'},
    tooltip: {
      trigger: 'axis',
      showContent: false
    },
    dataset: {
      source: [
        ['Year', '2012', '2013', '2014', '2015', '2016', '2017'],
        ['Workflows', 56, 82, 88, 70, 53, 85],
        ['ML Pipelines', 51, 51, 55, 53, 73, 68],
        ['Forms', 40, 62, 69, 36, 45, 32],
        ['Runbooks', 25, 37, 41, 18, 33, 49],
        ['Packaged', 20, 30, 25, 40, 60, 40]
      ]
    },
    xAxis: { type: 'category' },
    yAxis: { gridIndex: 0 },
    grid: { top: '55%' },
    series: [
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'line',
        smooth: true,
        seriesLayoutBy: 'row',
        emphasis: { focus: 'series' }
      },
      {
        type: 'pie',
        id: 'pie',
        radius: '30%',
        center: ['50%', '32%'],
        emphasis: {
          focus: 'self'
        },
        label: {
          formatter: '{b}: {@2012} ({d}%)'
        },
        encode: {
          itemName: 'Year',
          value: '2012',
          tooltip: '2012'
        }
      }
    ]
      
    };

  mychart2.setOption(option2);

  const chartContainer3 = this.$refs.chartContainer3;
    const mychart3 = echarts.init(chartContainer3);

    const option3 = {
      // ... your chart option for the second chart
  tooltip: {
      trigger: 'axis',
      axisPointer: {
    // Use axis to trigger tooltip
      type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
  }
},
legend: {},
title:{text: 'Top 6 Highly Rated Artifacts'},
grid: {
  left: '3%',
  right: '4%',
  bottom: '3%',
  containLabel: true
},
xAxis: {
  type: 'value'
},
yAxis: {
  type: 'category',
  data: ['W1 Reimbursement requests', 'Service Request ML Pipeline', 'Countdown timer Widget', 'Server Patching Runbook', 'Employee Detail Form','Package 3']
},
series: [
  {
    name: '5 Star',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [320, 302, 301, 334, 390, 330, 320]
  },
  {
    name: '4 Star',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [120, 132, 101, 134, 90, 230, 210]
  },
  {
    name: '3 Star',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [220, 182, 191, 234, 290, 330, 310]
  },
  {
    name: '2 Star',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [150, 212, 201, 154, 190, 330, 410]
  },
  {
    name: '1 Star',
    type: 'bar',
    stack: 'total',
    label: {
      show: true
    },
    emphasis: {
      focus: 'series'
    },
    data: [820, 832, 901, 934, 1290, 1330, 1320]
  }
]
  
  };
  mychart3.setOption(option3);
// ************************************************************************************************************

const chartContainer4 = this.$refs.chartContainer4;
    const mychart4 = echarts.init(chartContainer4);

    const option4 = {
      // ... your chart option for the fourth chart
      legend: {},
      title:{text: 'Public Vs Private Downloads'},
tooltip: {},
dataset: {
  source: [
    ['Artifact', 'Workflows', 'Ml Pipelines', 'Forms', 'Runbooks','Widgets','Packaged'],
    ['Private', 4100, 3000, 6500, 5300,6000,7000],
    ['Public', 8600, 9200, 8500, 8300,7000,8500]
  ]
},
xAxis: [
  { type: 'category', gridIndex: 0 }
],
yAxis: [{ gridIndex: 0 }],
grid: [{ bottom: '55%' }, { top: '50%' }],
series: [
  // These series are in the first grid.
  { type: 'bar', seriesLayoutBy: 'row' },
  { type: 'bar', seriesLayoutBy: 'row' },
  // These series are in the second grid.
]
 
  
  };
  mychart4.setOption(option4);




  
  },
};

  </script>
  
  
  <!-- <script setup>
  import BasicAreaChart from '../apps/default/views/BasicAreaChart.vue'; 
  import { ref } from 'vue'
  
  const FormNew = ref(0)
  </script> -->
  
    
    <style>
    /* @media (min-width: 1024px) {
      .about {
        min-height: 100vh;
        display: flex;
        align-items: center;
      }
    } */
    </style>
    