import { Injectable } from '@angular/core';

import flagsmith from "flagsmith"; //Add this line if you're using flagsmith via npm

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  isPagoLuzEnabled() {
    const f = flagsmith.hasFeature("svp.feature.new.pago_luz_eggsa")
    console.log("svp.feature.new.pago_luz_eggsa" + f)
    return f ? true : false
  }
  
  constructor() {

  }

  async init() { 

    await flagsmith.init({
        environmentID:"6ETwA8pmU5nPjCgq7VyC9U",
        onChange: (oldFlags, params) => { // Occurs whenever flags are changed
            // Determines if the update came from the server or local cached storage
            const { isFromServer } = params; 
    
           
           
        }
    });

  }
}
