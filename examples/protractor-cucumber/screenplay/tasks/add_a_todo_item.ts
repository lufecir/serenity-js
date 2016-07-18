import { TodoList } from '../user_interface/todo_list';

import { CaptureScreenshot, Enter, PerformsTasks, Task, step } from 'serenity/lib/screenplay-protractor';

export class AddATodoItem implements Task {

    public static called(name: string): AddATodoItem {
        return new AddATodoItem(name);
    }

    @step('{0} adds a todo item called: #name', CaptureScreenshot.AFTER_STEP)
    performAs(actor: PerformsTasks): Promise<void> {
        return actor.attemptsTo(
            Enter.theValue(this.name).into(TodoList.What_Needs_To_Be_Done).thenHit(protractor.Key.ENTER)
        );
    }

    constructor(public name: string) {
    }
}