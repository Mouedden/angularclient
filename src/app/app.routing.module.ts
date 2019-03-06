import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { DashboradComponent } from './dashborad/dashborad.component';

export const appRoutes: Routes = [
    {path: 'produit', component: ProduitComponent},
    {path: 'dashboard', component: DashboradComponent},
    {path: '', redirectTo: '/produit', pathMatch: 'full'}
];
@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes, {enableTracing: true}
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}