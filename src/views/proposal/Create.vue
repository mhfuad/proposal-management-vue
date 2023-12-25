<template>
    <div>
        <h1>Proposal Create</h1>
        <RouterLink to="/home">Home</RouterLink>

        <b-card class="mt-3" header="Proposal Create Page">
            <b-form @submit="onSubmit" @reset="onReset">
            <b-form-group
                id="input-group-1"
                label="Project Name: "
                label-for="input-1"
            >
                <b-form-input
                    id="input-1"
                    v-model="form.name"
                    type="text"
                    placeholder="Name"
                    required
                ></b-form-input>
            </b-form-group>
    
            <b-form-group id="input-group-2" label="Image name:" label-for="input-2">
                <b-form-input
                    id="input-2"
                    type="text"
                    v-model="form.image_name"
                    placeholder="Name"
                    required
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="PDF file" label-for="input-3">
                <input type="file" @change="convertToBase64">
            </b-form-group>

            <b-form-group id="input-group-2" label="Project Description:" label-for="input-4">
                <b-form-textarea
                    id="textarea"
                    v-model="form.description"
                    placeholder="Description..."
                    rows="3"
                    max-rows="6"
                    ></b-form-textarea>
            </b-form-group>
    
            <b-button type="submit" variant="success">Create</b-button>
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
                name: "Abc Project",
                image_name: "project Doc",
                image: null,
                description: "Description"
            },
            show: true,
            file:null
        }
    },
    methods: {
        ...mapActions("proposal", ["create"]),

        async onSubmit(event) {

            event.preventDefault()

            let res = await this.$store.dispatch('proposal/create', this.form)
            if(res.status ==200){
                console.log(res)
                this.$router.push({
                     path: '/home',
                })
            }
        },

        onReset(event) {
            event.preventDefault()
            this.form = ''
            this.form.password = ''
            this.$nextTick(() => {})
        },

        convertToBase64(e) {
            let file = e.target.files[0];
            //console.log(file.size);
            if(file.size > 775) {
                let reader = new FileReader();
                reader.onload = () => {
                    //console.log('RESULT', reader.result)
                    this.form.image = reader.result;
                }
                reader.readAsDataURL(file);
            }
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
    