import {reactive} from 'vue';

export default function multiForm(){

    const mainForm = reactive({
        name:"",
        maritual_status:""
    })

    return {
        mainForm
    }
}