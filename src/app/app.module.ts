import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import { FormsModule} from "@angular/forms"
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { ListaComponent } from './lista/lista.component';
import { NovoComponent } from './novo/novo.component';

const rotas: Routes = [
  { path : "lista", component : ListaComponent},
  { path : "novo", component : NovoComponent},
  { path : "", redirectTo : "/lista", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    NovoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rotas),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
