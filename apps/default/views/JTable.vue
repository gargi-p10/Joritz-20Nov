<template>
  <div class="full-width">
    <q-table
      flat
      bordered
      class="j-table"
      :rows="filteredRows"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:header="props">
        <q-tr :props="props">
          <q-th v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.label }}
          </q-th>
        </q-tr>
        <q-tr class="j-table-row">
          <q-td>
            <q-input outlined v-model="filter.name" placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input outlined v-model="filter.calories" placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input outlined v-model="filter.fat" placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input v-model="filter.carbs" outlined placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input outlined placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input outlined placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input outlined placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
          <q-td>
            <q-input outlined placeholder="Search">
              <template v-slot:append>
                <q-avatar>
                  <q-icon name="search" />
                </q-avatar>
              </template>
            </q-input>
          </q-td>
        </q-tr>
      </template>
      <template v-slot:body="props">
        <q-tr :props="props" :key="`m_${props.row.rowIndex}`">
          <q-td v-for="col in props.cols" :key="col.name" :props="props">
            {{ col.value }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";

const filter = ref({
  name: "",
  calories: "",
  fat: "",
  carbs: "",
});
const columns = [
  {
    name: "name",
    required: true,
    label: "Dessert (100g serving)",
    align: "left",
    field: (row) => row.name,
    format: (val) => `${val}`,
    sortable: true,
  },
  {
    name: "calories",
    align: "center",
    label: "Calories",
    field: "calories",
    sortable: true,
    align: "center",
  },
  {
    name: "fat",
    label: "Fat (g)",
    field: "fat",
    sortable: true,
    align: "center",
  },
  { name: "carbs", label: "Carbs (g)", field: "carbs", align: "center" },
  { name: "protein", label: "Protein (g)", field: "protein", align: "center" },
  { name: "sodium", label: "Sodium (mg)", field: "sodium", align: "center" },
  {
    name: "calcium",
    label: "Calcium (%)",
    field: "calcium",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "center",
  },
  {
    name: "iron",
    label: "Iron (%)",
    field: "iron",
    sortable: true,
    sort: (a, b) => parseInt(a, 10) - parseInt(b, 10),
    align: "center",
  },
];

const rows = ref([
  {
    name: "Frozen Yogurt",
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: "14%",
    iron: "1%",
  },
  {
    name: "Ice cream sandwich",
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: "8%",
    iron: "1%",
  },
  {
    name: "Eclair",
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: "6%",
    iron: "7%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
  {
    name: "Cupcake",
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: "3%",
    iron: "8%",
  },
  {
    name: "Gingerbread",
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: "7%",
    iron: "16%",
  },
]);

// search is working for first 4 columns
const filteredRows = computed(() => {
  return rows.value.filter((row) => {
    const names = row.name.toString().toLowerCase();
    const calories = row.calories.toString().toLowerCase();
    const fats = row.fat.toString().toLowerCase();
    const carb = row.carbs.toString().toLowerCase();
    return (
      names.includes(filter.value.name) &&
      calories.includes(filter.value.calories) &&
      fats.includes(filter.value.fat) &&
      carb.includes(filter.value.carbs)
    );
  });
});
</script>
<style lang="scss">

</style>
