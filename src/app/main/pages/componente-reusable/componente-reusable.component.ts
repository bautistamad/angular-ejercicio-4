import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-componente-reusable',
  templateUrl: './componente-reusable.component.html',
  styleUrls: ['./componente-reusable.component.css']
})
export class ComponenteReusableComponent {
  @Input() titulo: string = '';
  @Input() colorFondo: string = '#a3223a';
  @Input() colorLetra: string = '#fff';
}
