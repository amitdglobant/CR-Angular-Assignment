# Code Realm - Nov '19: Angular Assignment

## Description

The existing app is a simple Task tracker app. The Home screen shows current tasks based on their status. A task can have status as 'Todo', 'In Progress' and 'Done'. Each task has a title, description, status and id. The app has been generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.17. The task cards are developed using material.

You have to perform the following tasks -

1.  Minimum requirements:

    - Enable `Add task` functionality: On clicking the button, user should be able to add a new task. The default status of task will be `Todo`. The task should have a unique `id`.
    - Add 'Edit Task' functionality: There should be an edit task button that enables user to edit the title, description and status. If status is changed, the task should show up in the newly updated status column, e.g. if a `todo` task has been updated to `In Progress` it should show up in `In progress` column.
    - Enable `Delete task` functionality: On clicking delete task, user should be able to remove the task from this board. The task id should still not be usable for next created task. For instance, if task#3 has been deleted and the current id is at task#12, the next generated task should be task#13 and not task#3.
    - Unit test: An overall test coverage of 80% is desirable.

2.  Good to have -
    - Enable drag and drop to update task status of task.
    - Add prompt when deleting a task.
    - Add validation in create task form. e.g. Task title cannot be blank or a number.
    - Write a service to persist data. If user refreshes the page, he should still see the newly added tasks.
3.  Brownie points-
    - Use state management library of your choice to persist data and handle side effects.
    - Enable inline editing of tasks instead of opening a popup form.
    - Refactor existing components to make the code more reusable.
    - Beautify the UI with minimal use of third party css libraries.

Please note -

- SCSS integration is already present so you don't have to add any custom packages or modify any configuration changes for it.
- The ability to execute unit tests is already baked in so you don't have to make any configuration changes to enable it.
- Angular Material has been integrated with the app. Feel free to replace it with PrimeNG, Clarity or any component library of your choice. Please be advised, the replacement may take some time as it will require refactoring existing code.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
