/**
 * Created by KH998 on 5/3/2015.
 */
(function($){
    // **ListView class**: Our main app view.
    var ListView = Backbone.View.extend({
        el: $('body'), // attaches `this.el` to an existing element.
        // `initialize()`: Automatically called upon instantiation. Where you make all types of bindings, _excluding_ UI events, such as clicks, etc.
        initialize: function(){
            _.bindAll(this, 'render'); // fixes loss of context for 'this' within methods

            this.render(); // not all views are self-rendering. This one is.
        },
        // `render()`: Function in charge of rendering the entire view in `this.el`. Needs to be manually called by the user.
        render: function(){
            $(this.el).append("<ul> <li>hello world</li> </ul>");
        }
    });

    // **listView instance**: Instantiate main app view.
    var listView = new ListView();
})(jQuery);
