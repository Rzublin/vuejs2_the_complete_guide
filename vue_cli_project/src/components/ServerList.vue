<template>
	<div class="col-xs-12 col-sm-6">
	            <ul class="list-group">
	                <li
                        class="list-group-item"
                        v-for="index in 5">
            		<app-server-status></app-server-status>
		            </li>
		        </ul>
	</div>

</template>

<script>
	import ServerStatus from './ServerStatus.vue';
	export default {
		components : {
			'app-server-status': ServerStatus
		}
	}
</script>

<style></style>