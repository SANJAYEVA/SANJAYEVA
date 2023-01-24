<template>
  <router-link :to="{name:'AddVisitor'}" class="btn">Add Visitor</router-link>
  <table>
      <thead>
          <tr>
              <th>#id</th>
              <th>name</th>
              <th>MobileNo</th>
              <th>Address</th>
              <th>Action</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="report in Reports " :key="report.id">
              <td>{{report.id}}</td>
              <td>{{report.name}}</td>
              <td>{{report.MobileNo}}</td>
              <td>{{report.Address}}</td>
              <td>
                <router-link :to="{ name: 'EditVisitor', params: {id: report.id }}" class="btn">Edit</router-link>
                <button @click="del(report.id)" class="btn btn-del">Delete</button>
                
  
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core';
export default {
name:'Reports',
setup() {
      const Reports= ref([]);
      onMounted(async()=>{
        const res = await fetch('http://localhost:3000/Reports');
      Reports.value = await res.json();
      })

      const del = async(id)=> {
        x=confirm("Are you delete the record");
        await fetch(`http://localhost:3000/Reports/${id}`,{
        method:'DELETE'
      })
     Reports.value = Reports.value.filter(p=>p.id !==id);

      }
      return{Reports, del}

    }
}

</script>

<style>

</style>