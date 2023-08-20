import { ref,reactive } from "vue";

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
    trustees:'',
    child_with_special_need:"",
    child_joint_owners:"",
    referred:"",
    referred_by:"",
    //legal items
    will:"",
    will_last_updated:"",
    poa_asstes:"",
    poa_asstes_last_updated:"",
    poa_health:"",
    poa_health_last_updated:"",
    living_will:"",
    living_will_last_updated:"",
    living_trust:"",
    living_trust_last_updated:"",
    //additional items
    umbrella_policy:"",
    long_term_care_insurance:"",
    life_insurance:"",
    death_benefit:"",
    cash_value:"",
    //cash flow
    social_scurity:"$0.00",
    survivor_options:"$0.00",
    pension:"$0.00",
    wages:"$0.00",
    other_income:"$0.00",
    retirement_plan_contributions:"$0.00",
    monthly_expense:"",
    is_monthly_income_sufficient:"",
    additional_withdraw_from_portfolio:"",
    additional_withdraw_amount:"",
    tax_strategy_for_portfolio_withdraw:"",
    foresee_any_large_purchase:"",
    large_purchase_amount:"",
    annual_charity_contribution:"",
    annual_charity_contribution_amount:"",
    //life events
    life_events:[],
    //assets
    assets:[],
    home_value:'',
    home_balance_owed:'',
    home_payment:'',
    home_payoff_date:'',
    autos:'',
    autos_balance_owed:'',
    autos_payment:'',
    autos_payoff_date:'',
    rental_properties:'',
    rental_balance_owed:'',
    rental_payment:'',
    rental_payoff_date:'',
    total_net_worth:'',
    //additional information
    when_you_want_to_retire:'',
    after_tax_retirement_income_goal:'',
    how_did_you_acquire_your_wealth:'',
    who_is_your_financial_advisor:'',
    who_do_you_want_taken_care_of:'',
    //concerns
    concerns:[],
    //objectives
    income_now:'1',
    guarantees_provided:'1',
    pass_to_beneficiaries:'1',
    preserve_principal:'1',
    income_later:'1',
    create_a_tax_strategy:'1',
    growth_potential:'1',
    reduce_risk:'1',
    other:false,
    if_other:'',
    //risk/goals
    retirement_money:[],
    risk_tolerance:[],
    invesment_knowledge:[],
    spouse_invesment_knowledge:[],


  });

  const addChild = (index) => {
    mainForm.childs.splice(index+1, 0,{
      child: "",
      child_name: "",
      child_dob: "",
      number_of_grand_child: "",
      grand_childs_age: "",
    });
  };

  const removeChild = (index) => {
    mainForm.childs.splice(index,1)
  }


const isNext = ref(false);
const current_step = ref(1);

const changeNext = () => {
  isNext.value = !isNext.value;
  window.scrollTo(0, 0);
};


const errorsasd = ref({
  first_name: "",
    last_name: "",
    dob: "",
    organization: "",
    occupation: "",
    retirement_status: "",
    primary_address: "",
    maritual_status: "",

});

const errors = ref({});




const validateForm = () => {
  errors.value = {}
  if(mainForm.first_name == ''){
    errors.value.first_name = "First Name field is required"
    console.log(errors.value)
  }
  
}
const nextStep = () => {

  validateForm()
  if(Object.keys(errors).length == 0){
    current_step.value++;
    window.scrollTo(0, 0);
  }
 
};

const prevStep = () => {
  current_step.value--;
  window.scrollTo(0, 0);
};

  return {
    isNext,
    mainForm,
    current_step,
    errors,
    addChild,
    removeChild,
    changeNext,
    nextStep,
    prevStep
  };
}
