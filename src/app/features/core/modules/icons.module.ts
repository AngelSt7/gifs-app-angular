import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { featherSettings } from '@ng-icons/feather-icons';
import { featherAirplay, featherTrendingUp, featherSearch  } from '@ng-icons/feather-icons';

@NgModule({
  imports: [NgIconsModule.withIcons({ featherAirplay, featherSettings, featherTrendingUp, featherSearch })],
  exports: [NgIconsModule]
})

export class IconsModule {}
