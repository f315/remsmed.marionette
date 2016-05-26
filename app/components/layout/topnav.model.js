define([
    'jquery',
    'underscore',
    'backbone'
],function($, _, Backbone){
    'use strict';

    var TopnavModel = Backbone.Model.extend({
        defaults: {
            item: ['Сообщения', 'Документы', 'Видеоконференции' ]
        }
    });

    return TopnavModel;
})