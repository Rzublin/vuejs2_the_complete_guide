<template>
	
    <p>Server {{index}} Status: {{status}}   <button @click="changeStatus()">Change Status</button></p>					
           
</template>

<script>
	export default {
		data : function(){
			return {
				status: 'Critical'
			}
		},
		methods:{
			changeStatus(){
				if(this.status == 'Critical'){
					this.status = 'Normal';
				} else{
					this.status = 'Critical';
				}
			}
		}
	}
</script>

<style></style>