---
---
<!-- Thirt-Party Libraries -->
{% include vendor/jquery.js %}
{% include vendor/underscore.js %}
{% include vendor/backbone.js %}
{% include vendor/backbone.marionette.js %}

<!-- Templates -->
{% include templates/templates.js %}

<!-- Application Core -->
{% include core/cors.js %}
{% include core/app.js %}
{% include core/controller.js %}

<!-- Application Plugins -->
{% include plugins/message.js %}

<!-- Application Models -->
{% include models/user.js %}
{% include models/login.js %}

<!-- Application Collections -->

<!-- Sub App -->
{% include apps/login.js %}
{% include apps/profile.js %}
{% include apps/errorpage.js %}