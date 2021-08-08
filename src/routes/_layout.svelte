<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
	console.log(segment.indexOf("certificate"));
</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: white;
		padding: 2em;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
{#if (segment != "login" && segment != "register" && !(segment.indexOf("certificate")== 0 && segment.indexOf("certificates")<0 ))}
<Nav {segment}/>
{/if}
<main>
	<slot></slot>
</main>