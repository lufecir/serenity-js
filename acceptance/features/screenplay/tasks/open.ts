import {Actor} from "../../../serenity_screenplay/actor";
import {Performable} from "../../../serenity_screenplay/performable";

export class Open implements Performable {

    static browserOn(website: string) : Open {
        return new Open(website);
    }

    private website : string;

    constructor(website: string) {
        this.website = website;
    }

    performAs(actor: Actor):Promise<void> {
        return new Promise<void>((resolve, reject) => {
            browser.get(this.website).then(resolve, reject);
        })
    }
}