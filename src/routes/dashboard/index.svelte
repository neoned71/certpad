<script context="module">
	var certificates ={};
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
		var { user } = session;
		// user=JSON.parse(user);
		if(!user)
		{
			return this.redirect(301, 'login');
		}
		console.log(user);

		const res = await this.fetch('dashboard.json',{mode:'cors',method:'get'});
		if(res.status==200){
			var data = await res.json();
			console.log(data);
			if(data.status == "success")
			{
				certificates = data.data;
				console.log(certificates);
				
			}
			else{
				this.error(data.status,data.message);
			}
			// let data = JSON.parse(text);
			
		}
		console.log(1);
		user=JSON.parse(user);
		return { user, certificates };
	}


	
</script>

<script>
	import ImageUpload from '../_utils/imageUpload.svelte';
	import DataUpload from '../_utils/dataUpload.svelte';
	export let email,password;
	export let user;
	export let certificates;
	import successkid from 'images/successkid.jpg';

</script>

<style>
	h1, figure, p {
		text-align: left;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	p {
		margin: 1em auto;
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
	.flex{
		flex:1;
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<h1>Great!</h1>
<p>Go ahead and create a <a href="/create_certificate">new certificate!</a></p>
Make sure that these images are uploaded...
<hr>


	<div style="display:flex;width:100%">
		<DataUpload class="flex" organization={user.organization} post={user.post} name={user.name} />
		<ImageUpload class="flex" avatar={user.logo} name={"logo"}/>
		<ImageUpload class="flex" avatar={user.signature} name={"signature"}/>
	</div>
<hr>