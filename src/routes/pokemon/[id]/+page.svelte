<script lang="ts">
  import Button from "../../../stories/Button.svelte";
  import type { PageProps } from "./$types";

  let data: PageProps = $props();
</script>

<h1>Pokemon Id</h1>
<code>
  <pre>
        {JSON.stringify(data.data, null, 2)}
    </pre>
</code>

<Button label="Button" primary={true}></Button>
