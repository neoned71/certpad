<script>
	export let organization="organization", name="name" ,post="post";

	async function updateInfo(){
		var body = {organization,name,post};
		console.log(body);
		const options = {
			mode:"cors",
			headers:{"Content-Type":"application/json"},
      method: 'POST',
      body: JSON.stringify(body),
    };
    
    var res = await fetch(`/utils/infoUpload.json`, options);
	if(res.status==200)
	{
		//successfullt updated
		// reset the input fields with placeholders
	}
	else{
		let text = await res.text();
		text = JSON.parse(text);
		alert(text.message);
	}
}
	
	
</script>

<style>
	#app{
	display:flex;
		align-items:center;
		justify-content:center;
		flex-flow:column;
}
 
	.upload{
		display:flex;
	height:50px;
		width:50px;
		cursor:pointer;
	}
	.avatar{
		display:flex;
		height:200px;
		width:200px;
	}
</style>


<div id="app">
	<form on:submit|preventDefault={updateInfo} >

		<h6>Name</h6><input type="text" bind:value={name} name="name" placeholder={name} />
		<h6>Organization</h6><input type="text" bind:value={organization} name="organization" placeholder={organization} />
		<h6>Post</h6><input type="text" bind:value={post} name="post" placeholder={post} />
	
		<input type="submit" value="Save" >
	
	</form>
</div>


 