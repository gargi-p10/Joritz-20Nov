<template>
  <ECharts
    :option="options"
    :autoresize="true"
    style="width: 100%; height: 400px"
  />
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useQuasar } from "quasar";
import ECharts from "vue-echarts";
import * as echarts from "echarts";

const $q = useQuasar();
const options = ref(null);

onMounted(() => {
  watchEffect(() => {
    options.value = {
      tooltip: {
        trigger: "axis",
        formatter: (params) => {
          const info =
            params[0].value !== "-"
              ? params[0].marker +
                params[0].axisValue +
                " " +
                params[0].value.toLocaleString() +
                " "
              : "";
          return info;
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(56, 56, 56, 0.4)",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(56, 56, 56, 1)",
          },
        },
        axisLabel: {
          show: true,
          color: $q.dark.isActive ? "#fff" : "#000",
        },
      },
      yAxis: {
        type: "value",
        splitLine: {
          show: true,
          lineStyle: {
            color: "rgba(56, 56, 56, 0.39)",
          },
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: "rgba(56, 56, 56, 1)",
          },
        },
        axisLabel: {
          show: true,
          color: $q.dark.isActive ? "#fff" : "#000",
          formatter: function (value) {
            return value + "%";
          },
        },
      },
      grid: {
        left: "1%",
        right: "1%",
        top: "10%",
        bottom: "1%",
        containLabel: true,
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: "line",
          smooth: true,
          color: "#937850",
          areaStyle: {
            opacity: 0.25,
          },
        },
      ],
    };
  });
});
</script>

<style lang="scss"></style>
