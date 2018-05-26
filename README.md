# Cookie hint
simple jQueryPlugin to show a cookie hint. DSGVO

# How to use.
<body>
<div>

</div>

<script type="text/javascript" src="jquery.js"></script>
<script type="text/javascript" src="cookie-hint.js"></script>

<script type="text/javascript">
    (function () {
        $(document).ready(function () {
            $('body').CookieHint();
        })
    })();
</script>

</body>

# Configure
<!--Use data-attributes to configure the plugin like below-->
<body data-privacyPolicyLink="https://policies.google.com/privacy?hl=de&gl=de"
      data-cookieHintOkLinkStyle="color: red; background: green; padding: 9px;"
      data-cookieHintContainerStyle="text-align:center;">

# Possible data-attributes
see defaults object
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