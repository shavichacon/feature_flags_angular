import { NgModule } from '@angular/core';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { FeatureFlagService } from './feature-flag.service';

async function routesFactory(ffService: FeatureFlagService) {
  await ffService.init();
  let r: Routes = []

  if (ffService.isPagoLuzEnabled()){
    console.log("agregando a routes path por pago de luz")
    //r.push('Xpath')
  }

  console.log(`r = ${r}`)
  return RouterModule.forRoot(r)
}

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [{
    provide: ROUTES,
    useFactory: routesFactory,
    multi: true,
    deps: [FeatureFlagService]
  }],
  exports: [RouterModule]
})
export class AppRoutingModule { }
