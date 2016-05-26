define([
    'jquery',
    'underscore',
    'backbone',
    'components/layout/topnav.model',
    'text!components/layout/topnav.template.tpl'
],function($, _, Backbone, Model, Template){
    'use strict';

    var TopnavView = Backbone.View.extend({
        el: $('#topnav'),
        template: _.template(Template),
        initialize: function(){
            this.render();
        },
        render: function () {
            this.model = new Model();

            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    var topnavView = new TopnavView();


    return topnavView;
})