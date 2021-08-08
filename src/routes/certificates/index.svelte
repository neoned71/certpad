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

		const res = await this.fetch('certificates.json',{mode:'cors',method:'get'});
		if(res.status==200){
			var data = await res.json();
			// console.log(data);
			if(data.status == "success")
			{
				certificates = data.data;

				// console.log(certificates);
				
			}
			else{
				this.error(data.status,data.message);
			}
			// let data = JSON.parse(text);
			
		}
		// console.log(1);
		return { user, certificates };
	}
</script>

<script>



	export let user;
	export let certificates;
</script>

<style>
	h1, figure, p {
		text-align: center;
		margin: 0;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		margin:5px;
		font-family: 'MonteCarlo', cursive;
	}

	figure {
		margin: 0 0 1em 0;
	}

	img {
		width: 100%;
		max-width: 400px;
		margin: 0 0 1em 0;
	}

	

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}

	.item{
		padding:10px;
		display:block;
		width:100%;
		text-decoration: none;
		margin:1px;
		background-color: rgb(255, 255, 255);
	}
	.item:hover{
		/* background-color: rgb(191, 201, 255); */
		cursor:pointer;
	}
	p{
		text-align: left;
		font-family: 'Merriweather', serif;
	}
</style>

<svelte:head>
	<title>Sapper project certificate</title>
</svelte:head>

<h1> Certificates! </h1>

<a href="/create_certificate">Create a new Certificate</a>
<hr>
{#each certificates as certificate}
<a href="certificate/{certificate._id}" class="item w3-hover-shadow w3-margin w3-round">
	<h2 style="color:{certificate.template.color}">{certificate.name}</h2>
	<p>{certificate.timestamp}</p>
		<p>Template: {certificate.template.name}</p>
</a>
{/each}