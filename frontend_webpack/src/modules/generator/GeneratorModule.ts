import {NgModule} from '@angular/core';
import {BrowserModule}  from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PopoverModule} from 'ng2-popover';
import {TherapyModule} from "../therapy/TherapyModule";
import {MealModule} from "../meal/MealModule";
import {UserSidebarComponent} from "./typescript/components/sidebars/UserSidebarComponent";
import {UserHeaderComponent} from "./typescript/components/headers/UserHeaderComponent";
import {FooterComponent} from "./typescript/components/footers/Footer";
import {UserMealComponent} from "./typescript/components/generic/UserMealComponent";
import {UserTherapyComponent} from "./typescript/components/generic/UserTherapyComponent";
import {UserRoutes} from "./typescript/routes/UserRoutes";
import {MainComponent} from "./typescript/components/MainComponent";
import {CoreModule} from "../core/typescript/CoreModule";
import {AdminRoutes} from "./typescript/routes/AdminRoutes";
import {AdminMealComponent} from "./typescript/components/generic/AdminMealComponent";
import {AdminSidebarComponent} from "./typescript/components/sidebars/AdminSidebarComponent";
import {TranslationsModule} from "../../translations/TranslationsModule";
import {OverduePatientsComponent} from "./typescript/components/generic/OverduePatientsComponent";
import {CommonModule} from "../common/typescript/CommonModule";
import {AdminQuestionnaireComponent} from "./typescript/components/generic/AdminQuestionnaireComponent";
import {AdminQuestionnaireModule} from "../questionnaire/modules/admin/AdminQuestionnaireModule";
import {ExamineeQuestionnairesComponent} from "./typescript/components/generic/ExamineeQuestionnairesComponent";
import {ExamineeQuestionnaireModule} from "../questionnaire/modules/examinee/ExamineeQuestionnaireModule";
import {QuestionnaireBaseComponent} from "./typescript/components/generic/QuestionnaireBaseComponent";
import {PatientOverviewComponent} from "./typescript/components/generic/PatientOverviewComponent";
import {ClinicsModule} from "../clinics/typescript/ClinicsModule";
import {ClinicsBaseComponent} from "./typescript/components/generic/ClinicsBaseComponent";
import {UsersModule} from "../operations/modules/users/typescript/UsersModule";
import {AdminsModule} from "../operations/modules/admins/typescript/AdminsModule";
import {AdminHeaderComponent} from "./typescript/components/headers/AdminHeaderComponent";
import {OperationsComponent} from "./typescript/components/generic/OperationsComponent";
import {AcuteRoutes} from "./typescript/routes/AcuteRoutes";
import {AcuteAdminSidebarComponent} from "./typescript/components/sidebars/AcuteAdminSidebarComponent";
import {AcuteProfessionalSidebarComponent} from "./typescript/components/sidebars/AcuteProfessionalSidebarComponent";



@NgModule({
    imports: [BrowserModule, RouterModule, FormsModule, PopoverModule, TranslationsModule, CoreModule, CommonModule, UsersModule, AdminsModule, UserRoutes, AdminRoutes, AcuteRoutes, TherapyModule, MealModule, AdminQuestionnaireModule, ExamineeQuestionnaireModule, ClinicsModule],
    declarations: [MainComponent, UserHeaderComponent, AdminHeaderComponent, UserSidebarComponent, AdminSidebarComponent, AcuteAdminSidebarComponent, AcuteProfessionalSidebarComponent, FooterComponent, PatientOverviewComponent, UserTherapyComponent, UserMealComponent, AdminMealComponent, OverduePatientsComponent, AdminQuestionnaireComponent, ExamineeQuestionnairesComponent, QuestionnaireBaseComponent, ClinicsBaseComponent, OperationsComponent],
    exports: [MainComponent, UserHeaderComponent, AdminHeaderComponent, UserSidebarComponent, AdminSidebarComponent, FooterComponent, UserTherapyComponent, PatientOverviewComponent, UserMealComponent, AdminMealComponent, OverduePatientsComponent, AdminQuestionnaireComponent, ExamineeQuestionnairesComponent, QuestionnaireBaseComponent, ClinicsBaseComponent, OperationsComponent],
    providers: []
})

export class GeneratorModule {
}