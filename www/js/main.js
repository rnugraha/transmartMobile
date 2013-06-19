/**
 * Created with IntelliJ IDEA.
 * User: rnugraha
 * Date: 5/3/13
 * Time: 4:58 PM
 * To change this template use File | Settings | File Templates.
 */

var LoginButton = Backbone.View.extend({

    el: '#login-btn',

    initialize: function () {
        _.bindAll(this, "loginHandler");
    },

    // bind event
    events: {
        "click #login-btn": "loginHandler"
    },

    loginHandler: function () {

    }
});

var LoginView = Backbone.View.extend({
    loginBtn : null,
    initialize: function () {
        this.loginBtn = new LoginButton ();
    }
});

var HomeView = Backbone.View.extend({
    initialize: function () {

    }
});

var AppRouter = Backbone.Router.extend({

    loginView: null,
    homeView: null,

    // define the routes
    routes:{
        "":"login",
        "home":"home"
    },

    initialize: function () {

    },

    login: function () {
        this.loginView = new LoginView();
    },

    home: function () {
        this.homeView = new HomeView();
    }

});

$(document).ready(function () {
    console.info('document is ready');
    // create instance
    app = new AppRouter();
    // start the history
    Backbone.history.start();
});