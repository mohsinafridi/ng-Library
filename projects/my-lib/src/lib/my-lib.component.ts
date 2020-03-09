import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  template: `
  <div style="background-color:blue;width:100%;height:100px;color:white;text-align:center;border-radius: 10px;">
  <h1>
     This is Custom Library built  by MOOooz!
    </h1>
</div>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
