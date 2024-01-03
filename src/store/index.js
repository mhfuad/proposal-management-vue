import { createStore } from "vuex";
import auth from "./auth";
import student from "./student";
import proposal from "./proposal";


export default createStore({
    modules: {
        auth,
        student,
        proposal
    }
})