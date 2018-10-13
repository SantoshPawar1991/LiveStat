import {NgModule} from '@angular/core' ;
import {Routes , RouterModule} from '@angular/router' ;
import { CamsPaymentComponent } from './components/cams-payment/cams-payment.component';
import { InternationalpaymentComponent } from './components/internationalpayment/internationalpayment.component';
import { BootstrappractiseComponent } from './bootstrappractise/bootstrappractise.component';

const appRoutes :  Routes = [
    // {path: '' , component: BootstrappractiseComponent},
    {path: 'international' , component: InternationalpaymentComponent},
    {path: 'camspayment' , component: CamsPaymentComponent},
    // {path:'boot' , component: BootstrappractiseComponent}

] 

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [InternationalpaymentComponent,CamsPaymentComponent]