import store from '@/store/index';
import axios from "axios";

store.subscribe( (mutation) =>{
    switch(mutation.type){
        case 'auth/SET_TOKEN':
            if(mutation.payload){
                //console.log("set_token");
                axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`
                localStorage.setItem('token', mutation.payload)
            }else{
                axios.defaults.headers.common['Authorization'] = null
                localStorage.removeItem('token')
            }
    }
})

