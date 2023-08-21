import { ref, reactive } from "vue";
import ContactInformation from "../components/FormSteps/ContactInformation.vue";
import Family from "../components/FormSteps/Family.vue";
import LegalItems from "../components/FormSteps/LegalItems.vue";
import AdditionalItems from "../components/FormSteps/AdditionalItems.vue";
import CashFlow from "../components/FormSteps/CashFlow.vue";
import LifeEvents from "../components/FormSteps/LifeEvents.vue";
import Assets from "../components/FormSteps/Assets.vue";
import AdditionalInformation from "../components/FormSteps/AdditionalInformation.vue";
import Concerns from "../components/FormSteps/Concerns.vue";
import Objectives from "../components/FormSteps/Objectives.vue";
import RiskOrGoals from "../components/FormSteps/RiskOrGoals.vue";

export default function multiForm() {

  const totalSteps = [
    {
      title: "CONTACT INFORMATION",
      component: ContactInformation,
    },
  
    {
      title: "FAMILY",
      component: Family,
    },
  
    {
      title: "LEGAL ITEMS",
      component: LegalItems,
    },
  
    {
      title: "ADD'l ITEMS",
      component: AdditionalItems,
    },
  
    {
      title: "CASH FLOW",
      component: CashFlow,
    },
  
    {
      title: "LIFE EVENTS",
      component: LifeEvents,
    },
  
    {
      title: "ASSETS",
      component: Assets,
    },
  
    {
      title: "ADD'L INFORMATION",
      component: AdditionalInformation,
    },
  
    {
      title: "CONCERNS",
      component: Concerns,
    },
  
    {
      title: "OBJECTIVES",
      component: Objectives,
    },
  
    {
      title: "RISK/GOALS",
      component: RiskOrGoals,
    },
  ];
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
    totalSteps,
    addChild,
    removeChild,
    changeNext,
    nextStep,
    prevStep,
  };
}
