<script context="module">
	
	// import { Preload } from "@sapper/common";

	export const preload = async function( page, session) {
		var { user } = session;
		// user=JSON.parse(user);
		console.log(user);
		if(user)
		{
			this.redirect(301, 'dashboard');
		}
		
		return { user,session };
	}


	
</script>

<script>
	export let email,password;
	export let user,session;
	import successkid from 'images/successkid.jpg';
import { bind } from 'svelte/internal';


export async function handleSubmit(){
	if(email && password)
	{
		// const res= await fetch('login.json',{method:'get'});
		const res = await fetch('login.json',{mode:'cors',method:'post',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,password})});
		if(res.status==200)
		{
			var text = await res.text();
			text = JSON.parse(text);
			session.user = text.user;
			location.href = "/dashboard";
		}
		else{
			alert("Login Failed");
			console.log(res.text());
		}
		
	}
}
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
		margin: 0em auto;
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

<h1>CertPad</h1>
<h2>Create and Manage Certificates for your institution...</h2>



<form on:submit|preventDefault={handleSubmit} >

	<input type="text" bind:value={email} name="email" placeholder="email" />
	<input type="password" bind:value={password} name="password" placeholder="password" />

	<input type="submit" value="Login" >

</form>

<a href="/register">Register new user</a>

<!-- <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.{username} {password}</strong></p> -->
<!-- <p>saasdad</p> -->


<p>created by: <a href="https://neoned71.com">neoned71</a></p>