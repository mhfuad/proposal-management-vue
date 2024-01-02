<template>
  <div class="about">
    <h1>This is an home page</h1>
    <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="User id:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.username"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Password:" label-for="input-2">
          <b-form-input
            id="input-2"
            type="password"
            v-model="form.password"
            placeholder="Password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Login</b-button>
    </b-form>
  </div>
</template>
<script>
  export default {
    onSubmit(event){

    },
    onReset(event) {
        event.preventDefault()
          this.form.email = ''
          this.form.password = ''
          this.$nextTick(() => {
        })
      }
  }
</script>
