import { ref, reactive } from "vue";

export default function multiForm() {
  const mainForm = reactive({
    //contact_information
    first_name: "",
    last_name: "",
    nickname: "",
    dob: "",
    organization: "",
    occupation: "",
    retirement_status: "",
    primary_home_phone: "",
    cell: "",
    email: "",
    primary_address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    maritual_status: "",
    spouse_name: "",
    spouse_nickname: "",
    spouse_dob: "",
    spouse_organization: "",
    spouse_occupation: "",
    spouse_retirement_status: "",
    spouse_cell: "",
    spouse_email: "",
    //family
    childs: [
      {
        child: "",
        child_name: "",
        child_dob: "",
        number_of_grand_child: "",
        grand_childs_age: "",
      },
    ],
    trustees: "",
    child_with_special_need: "",
    child_joint_owners: "",
    referred: "",
    referred_by: "",
  });

  const addChild = (index) => {
    mainForm.childs.splice(index + 1, 0, {
      child: "",
      child_name: "",
      child_dob: "",
      number_of_grand_child: "",
      grand_childs_age: "",
    });
  };

  const removeChild = (index) => {
    mainForm.childs.splice(index, 1);
  };

  const isNext = ref(false);
  const current_step = ref(1);

  const changeNext = () => {
    isNext.value = !isNext.value;
    window.scrollTo(0, 0);
  };

  const nextStep = () => {
    current_step.value++;
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    current_step.value--;
    window.scrollTo(0, 0);
  };

  return {
    isNext,
    mainForm,
    current_step,
    addChild,
    removeChild,
    changeNext,
    nextStep,
    prevStep,
  };
}
