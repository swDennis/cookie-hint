(function ($) {

    var CookieHint = function ($element) {
        var me = this,
            defaults = {
                cookieHintShowPrivacyPolicyLink: true,
                cookieHintPrivacyPolicyLink: '',
                cookieHintPrivacyPolicyLinkText: 'Datenschutzerklärung',
                cookieHintOkButtonText: 'OK',
                cookieHintCookieName: 'COOKIE-HINT-COOKIE',
                cookieHintCookieValue: 'ACCEPTED',
                cookieHintText: 'Diese Website nutzt Cookies um bestmögliche Funktionalität bieten zu können.',
                cookieHintExpireDays: 360,
                cookieHintTextClass: 'cookie-hint-text',
                cookieHintContainerClass: 'cookie-hint-container',
                cookieHintPrivacyPoliceLinkClass: 'cookie-hint-privacy-police-button',
                cookieHintOkLinkClass: 'cookie-hint-ok-button',
                cookieHintContainerStyle: null, // use inline style - like: background: #000; color: #fff; padding-top: 10px;
                cookieHintPrivacyPoliceLinkStyle: null, // use inline style
                cookieHintOkLinkStyle: null // use inline style
            };

        me.$el = $element;

        me.applyDataAttributes(defaults);

        if (me.hasCookie()) {
            return;
        }

        me.initObjects();
        me.buildHint();

        me.addHint();
    };

    CookieHint.prototype.applyDataAttributes = function (defaults) {
        var me = this,
            currentValue = null;

        $.each(defaults, function (index, value) {
            currentValue = me.$el.attr('data-' + index);

            if (currentValue) {
                defaults[index] = currentValue;
            }
        });

        me.opts = defaults;
    };

    CookieHint.prototype.initObjects = function () {
        var me = this;

        me.$body = $('body');
        me.$cookieHint = me.createCookieHintContainer();
        me.$okButton = me.createOkButton();
        me.text = me.opts.cookieHintText;

        if (!me.opts.cookieHintShowPrivacyPolicyLink) {
            return;
        }

        me.$privacyPoliceLink = me.createPrivacyLink();
    };

    CookieHint.prototype.createPrivacyLink = function () {
        var me = this,
            link = $('<a>');

        link.addClass(me.opts.cookieHintPrivacyPoliceLinkClass);
        link.attr('href', me.opts.cookieHintPrivacyPolicyLink);
        link.append(me.opts.cookieHintPrivacyPolicyLinkText);

        if (me.opts.cookieHintPrivacyPoliceLinkStyle) {
            link.attr('style', me.opts.cookieHintPrivacyPoliceLinkStyle);
        }

        return link;
    };

    CookieHint.prototype.createOkButton = function () {
        var me = this,
            button = $('<a>');

        button.addClass(me.opts.cookieHintOkLinkClass);
        button.append(me.opts.cookieHintOkButtonText);

        if (me.opts.cookieHintOkLinkStyle) {
            button.attr('style', me.opts.cookieHintOkLinkStyle);
        }

        return button;
    };

    CookieHint.prototype.createCookieHintContainer = function () {
        var me = this,
            hintContainer = $('<div>');

        hintContainer.addClass(me.opts.cookieHintContainerClass);

        if (me.opts.cookieHintContainerStyle) {
            hintContainer.attr('style', me.opts.cookieHintContainerStyle)
        }

        hintContainer.css({
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            'z-index': 9899,
        });

        return hintContainer;
    };

    CookieHint.prototype.buildHint = function () {
        var me = this,
            text = $('<p>');

        text.addClass(me.opts.cookieHintTextClass);
        text.append(me.text);

        if (me.opts.cookieHintShowPrivacyPolicyLink) {
            text.append('&nbsp;');
            text.append(me.$privacyPoliceLink);
        }

        text.append('&nbsp;');
        text.append(me.$okButton);

        me.$okButton.on('click', $.proxy(me.onclick, me));

        me.$cookieHint.append(text);
    };

    CookieHint.prototype.addHint = function () {
        var me = this;
        me.$body.append(me.$cookieHint);
    };

    CookieHint.prototype.onclick = function () {
        var me = this;

        event.preventDefault();

        me.createCookie(me.opts.cookieHintCookieName, me.opts.cookieHintCookieValue, 360);
        me.$cookieHint.hide();
    };

    CookieHint.prototype.hasCookie = function () {
        var me = this;

        return me.readCookie(me.opts.cookieHintCookieName) !== null;
    };

    CookieHint.prototype.createCookie = function (name, value, days) {
        var me = this,
            expires = '';

        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = '; expires=' + date.toGMTString();
        }

        document.cookie = name + '=' + value + expires + '; path=/';
    };

    CookieHint.prototype.readCookie = function (name) {
        var nameEQ = name + '=',
            cookieList = document.cookie.split(';');

        for (var i = 0; i < cookieList.length; i++) {
            var cookie = cookieList[i];
            while (cookie.charAt(0) == ' ') {
                cookie = cookie.substring(1, cookie.length);
            }

            if (cookie.indexOf(nameEQ) === 0) {
                return cookie.substring(nameEQ.length, cookie.length);
            }
        }

        return null;
    };


    $.fn.CookieHint = function () {
        new CookieHint(this);
    };

})(jQuery);