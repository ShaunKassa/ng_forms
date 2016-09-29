import { Component } from '@angular/core';
import { 
    FormBuilder, 
    FormGroup,
    Validators,
    AbstractControl,
    FormControl
} from '@angular/forms';

@Component({
    selector: 'demo-form-sku',
    template: `
    <div class="ui raised segment">
         <h2 class="ui header">Demo Form: Product Name</h2> 
         <form [formGroup]="myForm" 
                (ngSubmit)="onSubmit(myForm.value)"
                class="ui form"> 
          <div class="field">
            <label for="productNameInput">Product Name</label>
            <input type="text"
                    id="productNameInput"
                    placeholder="Product Name"
                    [formControl]="myForm.get('productName')"
                    [(ngModel)]="productName" >
          </div>
          <div class="ui info message">
                The product name is: {{productName}}
          </div>

               <button type="submit" class="ui button">Submit</button> 
         </form>
    </div>
       `
})
export class SKUComponent {

    myForm: FormGroup;
    productName: string;

    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'productName': ['', Validators.required]
        });

    }

    onSubmit(value: string): void {
        console.log('You have sumitted:', value);
    }
}


