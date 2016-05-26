define([
    'jquery',
    'underscore',
    'backbone',
    'components/widgets/patientInfo/wPatientInfo.model',
    'text!components/widgets/patientInfo/wcontentPatientInfo.template.tpl'
],function($, _, Backbone, Model, Template){
    'use strict';

    var WPatientInfo = Backbone.View.extend({
        el: $('#wblock_content'),
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

    var wPatientInfo = new WPatientInfo();


    return wPatientInfo;
})