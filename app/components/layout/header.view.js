define([
    'jquery',
    'underscore',
    'backbone',
    'components/layout/header.model',
    'text!components/layout/header.template.tpl'
],function($, _, Backbone, Model, Template){
    'use strict';

    var HeaderView = Backbone.View.extend({
        el: $('#header'),
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

    var headerView = new HeaderView();


    return headerView;
})

