define([
    'jquery',
    'underscore',
    'backbone',
    'components/widgets/wblock.model',
    'text!components/widgets/wblock.template.tpl'
],function($, _, Backbone, Model, Template){
    'use strict';

    var WblockView = Backbone.View.extend({
        el: $('.wblock'),
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

    var wblockView = new WblockView();


    return wblockView;
})