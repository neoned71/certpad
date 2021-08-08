<script>
	export let avatar, name;
	console.log("avatar"+avatar);
	let fileinput;
	import FormData from 'form-data';
	var formData = new FormData();
	
	const onFileSelected =async (e) =>{
  let image = e.target.files[0];
  //fetch upload of the image as the logo of the company!
  formData.append(name, image);

    const options = {
      method: 'POST',
      body: formData,
      // If you add this, upload won't work
      // headers: {
      //   'Content-Type': 'multipart/form-data',
      // }
    };
    
    var res = await fetch(`/utils/${name}ImageUpload.json`, options);
	if(res.status==200)
	{
		let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
	}
	else{
		let text = await res.text();
		text = JSON.parse(text);
		alert(text.message);
	}


            
}
	
</script>
<div id="app">
	<h4>{name} for the certificates</h4>
  
        {#if avatar}
        <img class="avatar" src="{avatar}" alt="" />
        {:else}
        <img class="avatar" src="/images/blank.jpg" alt="" /> 
        {/if}
				<img class="upload" src="https://static.thenounproject.com/png/625182-200.png" alt="" on:click={()=>{fileinput.click();}} />
        <div class="chan" on:click={()=>{fileinput.click();}}>Choose Image</div>
        <input style="display:none" type="file" accept=".jpg, .jpeg, .png" on:change={(e)=>onFileSelected(e)} bind:this={fileinput} >

</div>
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

 