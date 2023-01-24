<template>
 <form @submit.prevent="submit">
<label>Name</label>
<input type="text" name="Name" v-model="name"/>
<label>Mobile Number</label>
<input type="number" name="MobileNo" v-model="MobileNo"/>
<label>Address</label>
<input type="text" name="Address" v-model="Address"/>
<button>Add Visitor</button>
 </form>
</template>

<script>
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';

export default {
    name: 'AddVisitor',
    setup() {
      const name = ref('');
      const MobileNo =ref('');
      const Address = ref('');
      const router= useRouter();

      const submit= async()=> {
        await fetch('http://localhost:3000/Reports', {
          method:'POST',
          headers: {"Content-type":"application/json"},
          body:JSON.stringify({
            name: name.value,
            MobileNo: MobileNo.value,
            Address: Address.value
          })
        });
        await router.push('/admin/Reports');
      }
      return{name, MobileNo, Address, submit}
    }
}
</script>

<style>

</style>
