export interface ISidebarAdmin{
    patients: ISidebarElement,
    admins: ISidebarElement,
    mealPlan: ISidebarElement,
    questionnaires: ISidebarElement,
    clinics: ISidebarElement,
    checklist: ISidebarElement,
    settings: ISidebarElement
}

export interface ISidebarUser{
    overview: ISidebarElement,
    myTherapyPlan: ISidebarElement,
    myMealPlan: ISidebarElement,
    myClinic: ISidebarElement,
    myQuestionnaires: ISidebarElement,
    settings: ISidebarElement,
    help: ISidebarElement
}

export interface ISidebarAcuteAdmin{
    professionals: ISidebarElement,
}

export interface ISidebarAcuteProfessional{
    signature: ISidebarElement,
}

export interface ISidebarElement{
    url: string,
    name: string,
    active: boolean,
    showNotify?: boolean
}