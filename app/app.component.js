"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var SKUComponent = (function () {
    function SKUComponent(fb) {
        this.myForm = fb.group({
            'productName': ['', forms_1.Validators.required]
        });
    }
    SKUComponent.prototype.onSubmit = function (value) {
        console.log('You have sumitted:', value);
    };
    SKUComponent = __decorate([
        core_1.Component({
            selector: 'demo-form-sku',
            template: "\n    <div class=\"ui raised segment\">\n         <h2 class=\"ui header\">Demo Form: Product Name</h2> \n         <form [formGroup]=\"myForm\" \n                (ngSubmit)=\"onSubmit(myForm.value)\"\n                class=\"ui form\"> \n          <div class=\"field\">\n            <label for=\"productNameInput\">Product Name</label>\n            <input type=\"text\"\n                    id=\"productNameInput\"\n                    placeholder=\"Product Name\"\n                    [formControl]=\"myForm.get('productName')\"\n                    [(ngModel)]=\"productName\" >\n          </div>\n          <div class=\"ui info message\">\n                The product name is: {{productName}}\n          </div>\n\n               <button type=\"submit\" class=\"ui button\">Submit</button> \n         </form>\n    </div>\n       "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], SKUComponent);
    return SKUComponent;
}());
exports.SKUComponent = SKUComponent;
//# sourceMappingURL=app.component.js.map