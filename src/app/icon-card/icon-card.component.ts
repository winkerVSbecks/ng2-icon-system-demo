import { Component, Input } from '@angular/core';

@Component({
  selector: 'rio-icon-card',
  template: `<li class="fl w-100 w-50-m w-33-l mb4 flex items-center"
    [attr.title]="type">
    <div class="w3 h3 flex items-center justify-center ba b--light-gray">
      <svg icon [type]="type" class="f4" [ngClass]="color"></svg>
    </div>
    <div class="flex-auto lh-copy pl2 pv1 overflow-hidden">
      <b class="db truncate dark-gray f6">{{ name }}</b>
      <code class="f6 truncate light-silver">{{ type }}</code>
    </div>
  </li>`,
})
export class IconCardComponent {
  @Input() color: string;
  @Input() type: string;
  @Input() name: string;
}
