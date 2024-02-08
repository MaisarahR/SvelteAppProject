<script>
  // import { PUBLIC_BACKEND_BASE_URL } from '$env/static/public';
  import { goto } from '$app/navigation';
  import { authenticateUser } from './../../../utils/auth.js';
  import { loginSuccessAlert, loginFailAlert } from '../../../utils/alert.js';
  
  // let username = '';
  let formErrors = ""; 
  let clicked = false;

  function postLogin() {
    goto('/');
  }

  async function userLogin(evt) {
    evt.preventDefault();
    clicked = true;

    const userData = {
      username: evt.target['username'].value,
      password: evt.target['password'].value,
    };
    
    const resp = await authenticateUser(userData.username, userData.password);
    if (resp.success) {
      loginSuccessAlert();
      postLogin();
    } else {     //First 'resp' reading is await authenticateUser, second resp is autenticateUser function res, which links back to auth.js file. 
      // formErrors = resp.res.message;
      loginFailAlert();
      clicked = false;
    }
  }

//Hello part.
  let sayHello = false;
    let name = '';
    function updateSayHello() {
        if (name !== '') {
            sayHello = true;
        }
    }

</script>

<!-- how to make it appear when only key in data -->
<h1 class="text-center text-xl">Login to Post a Job</h1> 
{#if sayHello}
<h2 class="text-center text-md">Welcome back {name}</h2>
{/if}


<div class="flex justify-center items-center mt-8">
    <form on:submit={userLogin} class="w-1/3">
      
      <div class="form-control w-full">
        <label class="label" for="username">
          <span class="label-text">Username</span>
        </label>
        <input bind:value={name} on:input={updateSayHello} type="text" name="username" placeholder="johndoe" class="input input-bordered w-full" />
        {#if formErrors}
        <div class="text-red-500 text-center mt-2">{formErrors}</div>
        {/if}
     </div>

      <div class="form-control w-full">
        <label class="label" for="password">
            <span class="label-text">Password</span>
        </label>
        <input type="password" name="password" placeholder="" class="input input-bordered w-full" required /> 
        {#if formErrors}
        <div class="text-red-500 text-center mt-2">{formErrors}</div>
        {/if}
      </div>
<!-- 
      <div class="form-control w-full mt-4">
          <button class="btn btn-md">Login to Account</button>
      </div> -->

      {#if clicked}
      <button class="btn btn-md w-full mt-4">
        <span class="loading loading-infinity loading-lg"></span>
        Loading...
      </button>
      {:else}
      <button class="btn btn-md w-full mt-4">Login to Account</button>
      {/if}

      <div class="text-center">
        <a class="link-hover text-red-800 italic text-xs"  href="/users/new">Don't have an account? Click here to create one.</a>
    </div>
    </form>
</div>


