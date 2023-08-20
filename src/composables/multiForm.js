import { reactive } from "vue";

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

  return {
    mainForm,
    addChild,
    removeChild
  };
}
