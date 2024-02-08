<script>
  import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
  import { goto } from '$app/navigation';
  import { getUserId } from '../../../utils/auth.js';
  let formErrors = {};
  let clicked = false;

  async function submitForm(evt) {
    evt.preventDefault(); // Prevent the default form submission behavior

  const getUserToken = getUserId();

    // Collect form data
    const userData = {
      user: getUserToken,
      title: evt.target['title'].value,
      minAnnualCompensation: evt.target['minAnnualCompensation'].value,
      maxAnnualCompensation: evt.target['maxAnnualCompensation'].value,
      employer: evt.target['employer'].value,
      location: evt.target['location'].value,
      description: evt.target['description'].value,
      requirements: evt.target['requirements'].value,
      applicationInstructions: evt.target['applicationInstructions'].value,
    };

      const resp = await fetch(PUBLIC_BACKEND_BASE_URL + '/api/collections/jobs/records', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const res = await resp.json();

      if (resp.status == 200) {
        goto(`/jobs/${res.id}`)
        clicked = true;
      } else {
        formErrors = res.data;
        clicked = false;
      }
    }
</script>



<h1 class="text-center text-xl font-bold">Publish A New Job Post</h1>

<form class="form-container" on:submit={submitForm} >

  <div class="form-control w-full">
    <label class="label" for="title">
      <span class="label-text">Job Title</span>
    </label> 
    <input type="text" name="title" placeholder="Software Engineer" > 
    {#if 'title' in formErrors}
      <label class="label" for="title">
        <span class="label-text-alt text-red-500">{formErrors['title'].message}</span>
      </label>
    {/if}
  </div>
  
  <div class="form-control w-full">
    <label class="label" for="title">
      <span class="label-text">Min Annual Compensation</span>
    </label>
    <input type="number" name="minAnnualCompensation" placeholder="10000">
    {#if 'minAnnualCompensation' in formErrors}
    <label class="label" for="minAnnualCompensation">
      <span class="label-text-alt text-red-500">{formErrors['minAnnualCompensation'].message}</span>
    </label>
    {/if}
    <label class="label" for="salary">
      <span class="label-text-alt">USD</span>
      <span class="label-text-alt">per annum</span>
    </label>
  </div> 
  
  <div class="form-control w-full">
    <label class="label" for="title">
      <span class="label-text">Max Annual Compensation</span>
    </label>
    <input type="number" name="maxAnnualCompensation" placeholder="100000"> 
    <label class="label" for="salary"><span class="label-text-alt">USD</span>
      <span class="label-text-alt">per annum</span>
    {#if 'maxAnnualCompensation' in formErrors}
    <label class="label" for="maxAnnualCompensation">
      <span class="label-text-alt text-red-500">{formErrors['maxAnnualCompensation'].message}</span>
    </label>
    {/if}
    </label>
  </div>
  
  <div class="form-control w-full">
    <label class="label" for="salary">
      <span class="label-text">Company Name</span>
    </label> 
    <input type="text" name="employer" placeholder="e.g. Meta">
    {#if 'employer' in formErrors}
    <label class="label" for="employer">
      <span class="label-text-alt text-red-500">{formErrors['employer'].message}</span>
    </label>
    {/if}
  </div>
  
  <div class="form-control w-full">
    <label class="label" for="salary">
      <span class="label-text">Job Location</span>
    </label>
    <input type="text" name="location" placeholder="e.g. Malaysia"> 
    {#if 'location' in formErrors}
    <label class="label" for="location">
      <span class="label-text-alt text-red-500">{formErrors['location'].message}</span>
    </label>
    {/if}
  </div>
  
  <div class="form-control">
    <label class="label" for="description">
      <span class="label-text">Description</span>
    </label>
    <textarea name="description" placeholder="Enter job description here..."></textarea>
    {#if 'description' in formErrors}
    <label class="label" for="description">
      <span class="label-text-alt text-red-500">{formErrors['description'].message}</span>
    </label>
    {/if}
  </div>
  
  <div class="form-control">
    <label class="label" for="requirements">
      <span class="label-text">Requirements</span>
    </label>
  <textarea name="requirements" placeholder="Enter job requirements here..."></textarea> 
  {#if 'requirements' in formErrors}
  <label class="label" for="requirements">
    <span class="label-text-alt text-red-500">{formErrors['requirements'].message}</span>
  </label>
  {/if}
  </div>
  
  <div class="form-control">
    <label class="label" for="application-instruction">
      <span class="label-text">Application Instructions</span>
    </label>
  <textarea name="applicationInstructions" placeholder="Enter application instructions here..."></textarea> 
  {#if 'applicationInstructions' in formErrors}
  <label class="label" for="applicationInstructions">
    <span class="label-text-alt text-red-500">{formErrors['applicationInstructions'].message}</span>
  </label>
  {/if}
  </div> 

  <!-- <div class="form-control w-full mt-8">
    <button class="btn btn-md" type="submit">Publish Job</button>
  </div> -->

  {#if clicked}
  <button class="btn btn-md w-full mt-4">
    <span class="loading loading-infinity loading-lg"></span>
    Loading...
  </button>
  {:else}
  <button class="btn btn-md w-full mt-4">Publish Job</button>
  {/if}

</form>



<style>

.form-container {
  padding: 100px; /* Form is considered in a container*/
}

input,
textarea {
  padding: 10px;
  border: 1px solid #d5d5d5; 
}

textarea {
  height: 150px; 
}

</style>
