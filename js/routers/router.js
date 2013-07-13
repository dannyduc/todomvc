var app = app || {};

(function () {
    'use strict';

    var Workspace = Backbone.Router.extend({
        routes: {
            '*filter': 'setFilter'
        },

        setFilter: function(param) {
            app.TodoFilter = param || '';

            app.todos.trigger('filter');
        }
    });

    app.TodoRouter = new Workspace();
    Backbone.history.start();
})();