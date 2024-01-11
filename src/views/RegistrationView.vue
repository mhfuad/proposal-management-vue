<template>
    <div>
      <b-card class="mt-3" header="Registraion Page">
        <h1>{{ $store.state.count }}</h1>
        <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
                id="input-group-1"
                label="First Name"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.firstName"
                type="text"
                placeholder="First Name"
                required
                ></b-form-input>
            </b-form-group>

            <b-form-group
                id="input-group-1"
                label="Last Name"
                label-for="input-1"
            >
                <b-form-input
                id="input-1"
                v-model="form.lastName"
                type="text"
                placeholder="Last Name"
                required
                ></b-form-input>
            </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Email:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
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

          <b-form-group id="input-group-2" label="Mobile:" label-for="input-2">
            <b-form-input
              id="input-2"
              type="text"
              v-model="form.phone"
              placeholder="Phone"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group id="input-group-2" label="Role:" label-for="input-2">
            <b-form-select v-model="form.type" :options="role"></b-form-select>
          </b-form-group>
          <b-button type="submit" variant="primary">Register</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
          <p>Already have Account? </p><RouterLink to="/">Login</RouterLink>
        </b-form>
      </b-card>
    </div>
  </template>
  
  <script>
    import { mapActions } from 'vuex';
    export default {
  
      data() {
        return {
          form: {
            firstName: 'Fuad',
            lastName: 'Hasan',
            email: 'fuad@gmail.com',
            phone: '01675944076',
            type: 'ADMIN',
            password: '123123',
          },
          role:[
            { value: null, text: 'Please select an option', disabled: true },
            { value: 'ADMIN', text: 'Admin User' },
            { value: 'USER', text: 'User Role' },
            { value: "CUSTOMER", text: 'Customer User' },
            { value: 'TEACHER', text: 'Teacher User'},
            { value: 'STUDENT', text: 'Student User'}
          ],
          show: true
        }
      },
      methods: {
        ...mapActions('user', ['create']),
        onSubmit(event) {
          event.preventDefault()
          this.$store.dispatch('auth/signIn', this.form);
        },
        onReset(event) {
          event.preventDefault()
          this.form.email = ''
          this.form.password = ''
          this.$nextTick(() => {
          })
        }
      }
    }
  </script>
  
  <style>
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      align-items: center;
    }
  }
  </style>
    