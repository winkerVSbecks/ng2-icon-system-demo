import { Component, Input } from '@angular/core';

/**
 * While require.context works fine for JIT builds
 * it is not compatible with AoT. Or at least I don't
 * know how to use it with AoT. To get around this I have
 * created an icon-manifest file that imports all the SVG
 * files. Not an ideal solution, but it works
 *
 * const files =  (require as any)
 *   .context('!svg-sprite-loader!../../assets', false, /.*\.svg$/);
 * files.keys().forEach(files);
 */
import './icon-manifest';

/**
 * The setup here is a little bit different from React and Vue.js.
 * I am using an attribute selector. This is because if
 * I use an element selector then the icon gets a host element. This
 * host wrapper messes with the dimensions. We end up with an icon
 * that is a bit taller than expected.
 *
 * By using the attribute selector we avoid the extra wrapper. And
 * the icon renders as expected.
 */
@Component({
  selector: 'svg[icon]',
  template: `<svg:use [attr.xlink:href]="'#' + type"></svg:use>`,
  host: {
    viewBox: '0 0 20 20',
    class: 'dib v-mid',
    width: '1em',
    height: '1em',
  },
})
export class IconComponent {
  @Input() type: string;
  @Input() className: string;
}
