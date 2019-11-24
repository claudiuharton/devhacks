<template>
  <q-page>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <q-tabs v-model="tab" class="bg-red-6 text-white">
          <q-tab name="Tab1" label="Evolutia F2"></q-tab>
        </q-tabs>
        <GChart
          type="LineChart"
          :width="300"
          :height="500"
          class="fullWidth"
          :data="chartData"
          :options="chartOptions"
        />
      </div>
      <div class="col-xs-12 col-sm-6">
        <q-tabs v-model="tab" class="bg-positive text-white">
          <q-tab name="Tab2" label="Raport nr request/case deschise"></q-tab>
        </q-tabs>
        <GChart type="LineChart" :data="chartData" :options="chartOptions" />
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12">
        <q-tabs v-model="tab" class="bg-dark text-white">
          <q-tab name="Tab3" label="Lista angajati"></q-tab>
        </q-tabs>
        <div class="no-border">
          <q-table title="Angajati" :data="data" :columns="columns" row-key="name"></q-table>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
.fullWidth {
}
</style>

<script>
import { GChart } from "vue-google-charts";
export default {
  components: {
    GChart
  },
  name: "AdminPage",
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 400],
        ["2017", 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017"
        }
      },
      columns: [
        {
          name: "name",
          required: true,
          label: "Nume",
          align: "left",
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "Status",
          label: "Status(0/1/2)",
          field: "status",
          sortable: true
        },
        {
          name: "CashPointNumber",
          label: "Casa de marcat",
          field: "cashPointNumber"
        },
        {
          name: "CreatedAt",
          label: "Ora intrarii :",
          field: "CreatedAt"
        }
      ],
      data: [
        {
          name: "Cezin Cupii",
          status: 0,
          cashPointNumber: 15,
          CreatedAt: "14:20"
        },
        {
          name: "Tuca Madalin",
          status: 1,
          cashPointNumber: 25,
          CreatedAt: "11:50"
        },
        {
          name: "Claudiu Harton",
          status: 2,
          cashPointNumber: 30,
          CreatedAt: "18:20"
        },
        {
          name: "Timpa George",
          status: 0,
          cashPointNumber: 5,
          CreatedAt: "8:20"
        },
        {
          name: "Lazea Stefan",
          status: 1,
          cashPointNumber: 11,
          CreatedAt: "22:20"
        }
      ]
    };
  }
};
</script>
