<template>
  <form @submit.prevent="submit" >
    <label>name</label>
    <input type="text" name="name" v-model="name"/>
    <label>MobileNo</label>
    <input type="Number" name="MobileNo" v-model="MobileNo"/>
    <label>Address</label>
    <input type="text" name="Address" v-model="Address"/>
    <button>Save</button>
</form>
</template>

<script>
import { onMounted, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
export default {
    name: "EditVisitor",
    props: ['id'],
    setup() {
       const name = ref(''); 
       const MobileNo = ref('');
       const Address = ref('');
       const router = useRouter();
       const route = useRoute()
       onMounted(async() => {
           const res = await fetch(`http://localhost:3000/reports/${route.params.id}`);
           const report = await res.json();
           name.value = report.name;
           MobileNo.value = report.MobileNo;
           Address.value = report.Address;
       })
       const submit = async () => {
           await fetch(`http://localhost:3000/reports/${route.params.id}`, {
               method: 'PUT',
               headers: {"Content-type": "application/json"},
               body: JSON.stringify({ 
                   name: name.value,
                   MobileNo: MobileNo.value,
                  Address: Address.value
                })
           });
           await router.push('/admin/reports');
       }
       
       return {name, MobileNo, Address, submit}
    }
    
}
</script>
