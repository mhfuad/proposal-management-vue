<template>
  <div class="about">
    <h1>This is an home page</h1>
    <!-- <b-form @submit="onSubmit" @reset="onReset">
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
    </b-form> -->
    <RouterLink to="/proposal-create">Create</RouterLink>
    <table table border="1">
      <tr>
        <th>Project Name</th>
        <th>Project file</th>
        <th>Description</th>
      </tr>
      <tr v-for="item in proposals" :key="item">
        <td>{{ item.name }}</td>
        <td><a :href="`http://localhost:8001/api/v1/proposal/file/${item.image}`" target="_blank">{{ item.image_name }}</a></td>
        <td>{{ item.description }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex';
  export default {
    data(){
      return{

      }
    },
    methods:{
      ...mapActions('proposal', ["all"]),
      onSubmit(event){

      },
      onReset(event) {
          event.preventDefault()
            this.form.email = ''
            this.form.password = ''
            this.$nextTick(() => {
          })  
      },
    },
    mounted(){
      this.$store.dispatch("proposal/all")
    },
    computed:{
      ...mapGetters({proposals: "proposal/proposals"})
    }
  }
</script>
