<template>
<div class="sidebar">
    <ul class="side-menu">
        <h1>Dashboard</h1>
        <li>
            <router-link :to="{name:'Reports'}">Reports</router-link></li>
        <li>
            <router-link :to="{name:'AddVisitor'}">Add Visitor</router-link></li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'SideBar'
}
</script>

<style scooped>
h1{
    font-size: 30px;
    background-color: rgb(234, 188, 188);
    
}
</style>
