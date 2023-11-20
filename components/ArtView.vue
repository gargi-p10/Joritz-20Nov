<template>
  <div class="heading">
    <q-breadcrumbs style="color: black;left: auto;">
                <q-breadcrumbs-el icon="home" to="/" />
                <q-breadcrumbs-el label="Artifacts" icon="widgets" to="/ArtView" />
                <!-- <q-breadcrumbs-el label="Breadcrumbs" icon="navigation" to="/vue-components/breadcrumbs" /> -->
                <!-- <q-breadcrumbs-el label="Build" icon="build" /> -->
        </q-breadcrumbs>
    <h3 class="">Create Artifact</h3>
    <q-form @submit="onSubmit" class="q-gutter-md">
      <div>
        <q-input
          class="q-pa-md"
          type="text"
          outlined
          label="Artifact Name"
          v-model="artifact.artifactName"
          :rules="[(val) => (val && val.length > 0) || 'Name is mandatory']"
        ></q-input>
        <q-input
          class="q-pa-md"
          label="Artifact Description"
          v-model="artifact.artifactDescription"
          outlined
          type="textarea"
          :rules="[
            (val) => (val && val.length > 0) || 'Description is mandatory',
          ]"
        ></q-input>
        <q-input
          class="q-pa-md"
          type="text"
          outlined
          label="Artifact Documentation"
          v-model="artifact.documentation"
          :rules="[
            (val) => (val && val.length > 0) || 'Documentation is mandatory',
          ]"
        ></q-input>
 
        <q-toggle
          class="q-pa-md"
          :false-value="false"
          :true-value="true"
          :label="isPublic(artifact.public)"
          color="green"
          v-model="artifact.public"
        />
 
        <div style="margin-left: 15px">
          <select
            class="q-pa-md"
            v-model="selectedValue"
            @change="getApiforArtifactType"
            style="padding: 8px; font-size: 16px; width: 80%"
          >
            <option
              class="q-pa-md"
              v-for="(item, index) in options"
              :value="item.value"
              :key="index"
            >
              {{ item.label }}
            </option>
          </select>
          <div v-if="metaDataColumns">
            <div
              style="margin-top: 10px"
              v-for="metadataItem in metaDataColumns"
              :key="metadataItem.atMDSchemaId"
            >
              <q-input
                :label="metadataItem.metaDataName"
                class="q-pa-md"
                style="margin-left: -16px"
                :type="metadataItem.dataType === 'String' ? 'text' : 'text'"
                :id="metadataItem.metaDataName"
                v-model="artifact.metaData[metadataItem.atMDSchemaId]"
                outlined
                :rules="[
                  (val) => (val && val.length > 0) || 'Meta Data is mandatory',
                ]"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <q-file
          color="grey-3"
          class="label-width q-pa-md"
          outlined
          label-color="black"
          v-model="model"
          label="Label"
        >
          <template v-slot:append>
            <q-icon name="attachment" color="black" />
          </template>
        </q-file>
      </div>
      <div class="q-pa-md">
        <q-btn label="Submit" type="submit" color="primary" />
      </div>
    </q-form>
  </div>
  <div>{{ artifact }}</div>
</template>
 
<script>
import { ref } from "vue";
// import axios from "axios";
 
export default {
  setup() {
    const artifact = ref({
      artifactDescription: "",
      artifactName: "",
      documentation: "",
      status: true,
      artifactType: {
        artifactTypeId: 0,
      },
      metaData: {},
      public: true,
    });
 
    const isPublic = (value) => {
      return value !== true ? "Private" : "Public";
    };
 
    const selectedValue = ref("");
 
    const options = [
      { label: "ML", value: "ML" },
      { label: "Runbook", value: "Runbook" },
      { label: "Widgets", value: "Widgets" },
    ];
 
    const metaDataColumns = ref(null);
    const metadataValues = ref({});
 
    const getApiforArtifactType = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/service/0/marketplace/atmetadataschema/getMetadataColByartifactType?ArtifactType=" +
            selectedValue.value
        );
        console.log(response);
        metaDataColumns.value = response.data;
 
        artifact.value.artifactType.artifactTypeId =
          metaDataColumns.value[0]?.artifactType?.artifactTypeId || 0;
 
        response.data.forEach((item) => {
          metadataValues.value[item.atMDSchemaId] = "";
        });
 
        artifact.value.metaData = { ...metadataValues.value };
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    const onSubmit = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/service/0/marketplace/artifact/create",
          artifact.value
        );
 
        alert("Artifact Created Succefully !!");
      } catch (error) {
        alert("Artifact Data Not Proper");
        console.error("Error:", error);
        6;
      }
    };
 
    return {
      artifact,
      isPublic,
      options,
      getApiforArtifactType,
      metadataValues,
      selectedValue,
      metaDataColumns,
      onSubmit,
    };
  },
};
</script>
 
<style scoped>
.heading {
  position: relative;
  margin: 20px;
  padding: 20px;
}
.label-width {
  width: 50%;
}
</style>