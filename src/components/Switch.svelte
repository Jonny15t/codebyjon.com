<script lang="ts">
  interface Props {
    name?: string;
    onChange?: () => void;
    checked?: boolean;
  }

  export let name: Props["name"] = undefined;
  export let checked: Props["checked"] = false;
  export let onChange: Props["onChange"] = undefined;
</script>

<label>
  <input type="checkbox" name={name} on:change={onChange} bind:checked={checked} />
  <span class="switch"></span>
</label>

<style lang="scss">
  @import "../styles/colors.scss";

  label {
    user-select: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  // SWITCH SLIDER
  .switch {
    cursor: pointer;
    position: relative;
    display: inline-block;
    background-color: map-get($gray, 200);
    width: 3rem;
    height: 2rem;
    border-radius: 1.5rem;
  }

  // SWITCH
  .switch::before {
    content: "";
    position: absolute;
    height: 1.75rem;
    width: 1.75rem;
    background-color: map-get($gray, 700);
    border-radius: 100%;
    top: 0.125rem;
    left: 0.125rem;
    transition: transform 0.15s ease-in-out;

    input:checked + & {
      transform: translateX(1rem);
    }
  }
</style>
