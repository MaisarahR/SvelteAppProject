<script>
  import { userStatus, logOut } from '../utils/auth'; 


</script>

  
  <div class="navbar">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost text-xl">NEXT Jobs DB</a>
    </div>

  <div class="flex-none">
    <ul class="menu menu-horizontal px-1">
      {#if $userStatus}
       <li><button><a href="/jobs/postjob">Post a Job</a></button></li>
      {:else}
       <li><button><a href="/users/login">Post a Job</a></button></li>
      {/if}
    </ul>
    
    <ul class="menu menu-horizontal px-1">
      {#if $userStatus}
       <li><button on:click={logOut}><a href="/">Log Out</a></button></li>
      {:else}
       <li><button><a href="/users/login">Log In</a></button></li>
      {/if}
    </ul>

  
    <div class="dropdown mb-1">
      <div tabindex="0" role="button" class="btn m-1">
        Theme
        <svg width="12px" height="12px" class="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
      </div>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-30">
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Light" value="lofi"/></li>
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="business"/></li>
        <li><input type="radio" name="theme-dropdown" class="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Mid" value="retro"/></li>
      </ul>
    </div>

    </div>
  </div>

  