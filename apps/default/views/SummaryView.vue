<template>
  <j-row>
    <j-column size="x-small">
      <j-count-card title="Alerts" count="105" icon="sym_r_warning" size="lg" icon-color="secondary"> </j-count-card>
    </j-column>
    <j-column size="x-small">
      <j-count-card title="Alerts2" count="110" icon="sym_r_info" size="lg" icon-color="secondary"> </j-count-card>
    </j-column>
    <j-column size="x-small">
      <j-count-card title="Alerts" count="105" icon="sym_r_confirmation_number" size="lg" icon-color="secondary"> </j-count-card>
    </j-column>
    <j-column size="x-small">
      <j-count-card title="Alerts" count="105" icon="sym_r_desktop_windows" size="lg" icon-color="secondary"> </j-count-card>
    </j-column>
    <j-column size="x-small">
      <j-count-card title="Alerts" count="105" icon="sym_r_event" size="lg" icon-color="secondary"> </j-count-card>
    </j-column>
    <j-column size="x-small">
      <j-count-card title="Alerts" count="105" icon="sym_r_language" size="lg" icon-color="secondary"> </j-count-card>
    </j-column>
  </j-row>

  <j-row>
    <j-column size="large">
      <j-widget icon="sym_r_info" title="First Widget">
        <p class="j-text-paragraph">
          LTIMindtree is integral to L&T’s technology-led growth vision and is
          poised to play a crucial role in the expansion and diversification of
          our services portfolio. The highly complementary strengths of LTI and
          Mindtree make this integration a win-win proposition for all our
          stakeholders — clients, partners, investors, shareholders, employees,
          and communities — furthering L&T’s tradition of innovation,
          excellence, trust, and empathy.
        </p>
      </j-widget>
    </j-column>
    <j-column size="large">
      <j-widget icon="sym_r_event" title="Second Widget">
        <p class="j-text-paragraph">
          LTIMindtree is integral to L&T’s technology-led growth vision and is
          poised to play a crucial role in the expansion and diversification of
          our services portfolio. The highly complementary strengths of LTI and
          Mindtree make this integration a win-win proposition for all our
          stakeholders — clients, partners, investors, shareholders, employees,
          and communities — furthering L&T’s tradition of innovation,
          excellence, trust, and empathy.
        </p>
      </j-widget>
    </j-column>
  </j-row>

  <j-row>
    <j-column size="large">
      <j-widget icon="sym_r_event" title="Second Widget">
        <JTable />
      </j-widget>
    </j-column>
    <j-column size="large">
      <j-widget icon="sym_r_event" title="Second Widget">
        <BasicAreaChart />
      </j-widget>
    </j-column>
  </j-row>
</template>

<script setup>
import JTable from "./JTable.vue";
import BasicAreaChart from "./BasicAreaChart.vue";
</script>
