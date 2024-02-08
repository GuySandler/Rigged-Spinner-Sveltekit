<script lang="ts">
  import Spinner from '$lib/components/Spinner.svelte';
  import Form from '$lib/components/Form.svelte';
  import { PeopleList, FormToggle } from '$lib/options/stores';

  function reset() {
    PeopleList.set([]);
  }
    let peoplelist = false;
</script>

<svelte:head>
  <title>Spinner Dinner</title>
</svelte:head>

{#if $FormToggle}
  <Form />
{:else}
  <Spinner />
{/if}
<input type="checkbox" bind:checked={peoplelist}>
{#if peoplelist}
    <h1>people list</h1>
    <h1>{$PeopleList}</h1>
    <button on:click={reset}>Reset</button>
{/if}
