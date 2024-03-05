# 09LifeCycle

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.0.

## Component Lifecycle

A component instance has a lifecycle that starts when Angular instantiates the component class and renders the component view along with its child views. The lifecycle continues with change detection, as Angular checks to see when data-bound properties change, and updates both the view and the component instance as needed. The lifecycle ends when Angular destroys the component instance and removes its rendered template from the DOM. Directives have a similar lifecycle, as Angular creates, updates, and destroys instances in the course of execution.

Your application can use lifecycle hook methods to tap into key events in the lifecycle of a component or directive to initialize new instances, initiate change detection when needed, respond to updates during change detection, and clean up before deletion of instances.

### ngOnChanges()

Respond when Angular (re)sets data-bound input properties. The method receives a `SimpleChanges` object of current and previous property values.

Called before `ngOnInit()` and whenever one or more data-bound input properties change.

### ngOnInit()

Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.

Called once, after the first `ngOnChanges()`.

### ngDoCheck()

Detect and act upon changes that Angular can't or won't detect on its own.

Called during every change detection run, immediately after `ngOnChanges()`. and `ngOnInit()`.

### ngAfterContentInit()

Respond after Angular projects external content into the component's view.

Called once after the first `ngDoCheck()`.

A component-only hook.

### ngAfterContentChecked()

Respond after Angular checks the content projected into the component.

Called after the `ngAfterContentInit()` and every subsequent `ngDoCheck()`.

A component-only hook.

### ngAfterViewInit()

Respond after Angular initializes the component's views and child views.

Called once after the first `ngAfterContentChecked()`.

A component-only hook.

### ngAfterViewChecked()

Respond after Angular checks the component's views and child views.

Called after the `ngAfterViewInit` and every subsequent `ngAfterContentChecked()`.

A component-only hook

### ngOnDestroy()

Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.

Called just before Angular destroys the directive/component.
