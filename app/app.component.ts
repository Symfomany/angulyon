import { Component } from "@angular/core";


@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public counter: number = 16;

    public get message(): string {

        if (this.counter >= 10) {
            return this.counter + " copain !!";
        }
        else if (this.counter < 10 && this.counter && this.counter > 5) {
            return "Damn this is approach";
        }
        else {
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }

    public onTap() {
        this.counter--;
    }
}
