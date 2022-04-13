import { Component } from '@angular/core';

// Decorator:
// 'selector' specifies a custom html element to render the view mentioned by templateUrl (app.component.html)
// 'styleUrls' specifies this component specific stylesheet (app.component.css) applicable to this component only
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// App Component class, acts as the controller for the view app.component.html
export class AppComponent {
  title = 'FinalProject';
}
