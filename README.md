# Cookie hint
simple jQueryPlugin to show a cookie hint. DSGVO

## How to use.
```html

<body>
<div>

</div>

<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="cookie-hint.js"></script>

<script type="text/javascript">
    (function () {
        $(function () {
            $('body').CookieHint();
        })
    })();
</script>

</body>
```
## Configure
```html
<!--Use data-attributes to configure the plugin like below-->
<body data-cookieHintPrivacyPolicyLink="https://policies.google.com/privacy?hl=de&gl=de"
      data-cookieHintOkLinkStyle="color: red; background: green; padding: 9px;"
      data-cookieHintContainerStyle="text-align:center;">
```
### Possible data-attributes
see defaults object and prefix with **"data-"**

 - cookieHintShowPrivacyPolicyLink
 - cookieHintPrivacyPolicyLink
 - cookieHintPrivacyPolicyLinkText
 - cookieHintOkButtonText
 - cookieHintCookieName
 - cookieHintCookieValue
 - cookieHintText
 - cookieHintExpireDays
 - cookieHintTextClass
 - cookieHintContainerClass
 - cookieHintPrivacyPoliceLinkClass
 - cookieHintOkLinkClass
 - cookieHintContainerStyle
 - cookieHintPrivacyPoliceLinkStyle
 - cookieHintOkLinkStyle
