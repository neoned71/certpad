<script context="module">
	export const preload = async function( page, session) {
		var { user } = session;
		var txt;
		var templates;
		// user=JSON.parse(user);
		if(!user)
		{
			return this.redirect(301, 'login');
		}
		const res = await this.fetch('templates.json',{mode:'cors',method:'get'});
		if(res.status==200){
			var data = await res.json();
			// console.log(data);
			if(data.status == "success")
			{
				templates = data.data;
				// console.log(templates);
				
			}
			else{
				this.error(data.status,data.message);
			}
			// let data = JSON.parse(text);
			
		}
		// console.log(1);
		return { user, templates };
	}
</script>

<script>
	export let name,description;
	export let selected=0;
	export let user,templates;
	
	import successkid from 'images/successkid.jpg';
import { bind, text } from 'svelte/internal';


export async function handleSubmit(){
	if(name && selected!=0)
	{
		// const res= await fetch('login.json',{method:'get'});
		const res = await fetch('create_certificate.json',{mode:'cors',method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({name:name,template_id:selected})});
		if(res.status==200)
		{
			location.href='/certificates';
		}
		else
		{
			let r= await res.text();
			console.log(r);
		}
		// console.log(res);
	}
}
</script>

<style>
	h1, figure, p {
		text-align: center;
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
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>


<h1> Create Certificate! </h1>
<form on:submit|preventDefault={handleSubmit} >
	<select class="w3-input" bind:value={selected} >
		<option value=0 >Select Template</option>
	{#each templates as t}
		<option value={t._id}>
			{t.name}
		</option>
	{/each}
	
	</select>
	<input class="w3-input" type="text" bind:value={name} placeholder="Name on the Certificate" />
	<!-- <input type="password" bind:value={password} name="password" /> -->
	

	<input class="w3-button w3-round w3-border" type="submit" value="Create Certificate">

</form>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.{username} {password}</strong></p> -->
<!-- <p>saasdad</p> -->