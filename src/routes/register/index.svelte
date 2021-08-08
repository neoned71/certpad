<script context="module">
	
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
		const { user} = session;
		if(user)
		{
			return this.redirect(301, 'dashboard');
		}
		// console.log(val);
		// const res= await this.fetch('login.json',{method:'get'});
		// const res = await this.fetch('login.json',{method:'post',headers:{'Content-type':'application/json'},body:JSON.stringify({username:"w",password:"asd"})});
		// console.log(res);
		//console.log(res);
		// return { user };
	}


	
</script>

<script>
	export let email,password;
	export let user;
	import successkid from 'images/successkid.jpg';
import { bind } from 'svelte/internal';


export async function handleSubmit(){
	if(email && password)
	{
		// const res= await fetch('login.json',{method:'get'});
		const res = await fetch('register.json',{mode:'cors',method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
		console.log(res);
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

<h1>Great success!</h1>

<figure>
	<img alt="Success Kid" src="{successkid}">
	<figcaption>Have fun with Sapper! { user }</figcaption>
</figure>

<form on:submit|preventDefault={handleSubmit} >

	<input type="text" bind:value={email} name="email" />
	<input type="password" bind:value={password} name="password" />

	<input type="submit">

</form>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.{username} {password}</strong></p> -->
<p>saasdad</p>