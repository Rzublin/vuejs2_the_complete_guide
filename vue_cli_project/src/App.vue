<template>
    <div class="container">
    	<app-header></app-header>
        <hr>
        <div class="row">
        	<app-server-list></app-server-list>
            <div class="col-xs-12 col-sm-6">
                <p>Server Details are currently not updated</p>
            </div>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
	import Header from './Header.vue';
	import ServerList from './ServerList.vue';
	import Footer from './Footer.vue';
	export default  {
		components : {
			'app-server-list': ServerList,
			'app-header': Header,
			'app-footer': Footer
		}

	}
</script>

<style>

</style>
