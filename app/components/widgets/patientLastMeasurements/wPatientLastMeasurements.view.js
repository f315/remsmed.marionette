define([
    'jquery',
    'underscore',
    'backbone',
    'components/widgets/patientLastMeasurements/wPatientLastMeasurements.model',
    'text!components/widgets/patientLastMeasurements/wPatientLastMeasurements.view.js'
],function($, _, Backbone, Model, Template){
    'use strict';

    var WPatientLastMeasurements = Backbone.View.extend({
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

    var wPatientLastMeasurements = new WPatientLastMeasurements();


    return wPatientLastMeasurements;
})