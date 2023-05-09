import Head from 'next/head';
import { useState } from 'react';
import Layout, { siteTitle } from '../components/layout';
import Link from 'next/link';
import Footer from "../components/footer";
import Navbar from '../components/navbar';
import Script from "next/script";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>Contact | MyWebClass</title>
        <meta name="description" content="Get in touch with MyWebClass for any inquiries, feedback, or collaboration opportunities. We are here to assist you with your web development journey!" />
        <meta name="keywords" content="contact, inquiries, feedback, collaboration, web development" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact | MyWebClass" />
        <meta name="twitter:description" content="Get in touch with MyWebClass for any inquiries, feedback, or collaboration opportunities. We are here to assist you with your web development journey!" />
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-50WBN19X53"/>
          <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-50WBN19X53', {
                        page_path: window.location.pathname,
                    });
                `,
                }}
          />
      </Head>
      <section>
        <Navbar/>
      </section>
        <div dangerouslySetInnerHTML={{__html:'<!-- Begin Mailchimp Signup Form -->\n' +
                '<link href="//cdn-images.mailchimp.com/embedcode/classic-071822.css" rel="stylesheet" type="text/css">\n' +
                '<style type="text/css">\n' +
                '\t#mc_embed_signup{background:#f8f8f8; padding-left: 25%; padding-right:25%; clear:left; font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n' +
                '    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;  width:600px;}\n' +
                '\t/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.\n' +
                '\t   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */\n' +
                '</style>\n' +
                '<style type="text/css">\n' +
                '\t#mc-embedded-subscribe-form input[type=checkbox]{display: inline; width: auto;margin: 10px;}\n' +
                '\t#mergeRow-gdpr {margin-top: 20px;}\n' +
                '\t#mergeRow-gdpr fieldset label {font-weight: normal;}\n' +
                '\t#mc-embedded-subscribe-form .mc_fieldset{border:none;min-height: 0px;padding-bottom:0px;}\n' +
                '</style>\n' +
                '<div id="mc_embed_signup">\n' +
                '    <form action="https://github.us21.list-manage.com/subscribe/post?u=2a00354161d6ab7c1b803eb85&amp;id=fb459fe271&amp;v_id=64&amp;f_id=00cabae1f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>\n' +
                '        <div id="mc_embed_signup_scroll">\n' +
                '        <h2>Sign Up for MyWebClass.org Emails</h2>\n' +
                '        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>\n' +
                '<div class="mc-field-group">\n' +
                '\t<label for="mce-EMAIL">Email Address  <span class="asterisk">*</span>\n' +
                '</label>\n' +
                '\t<input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" required>\n' +
                '\t<span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>\n' +
                '</div>\n' +
                '<div class="mc-field-group">\n' +
                '\t<label for="mce-FNAME">First Name  <span class="asterisk">*</span>\n' +
                '</label>\n' +
                '\t<input type="text" value="" name="FNAME" class="required" id="mce-FNAME" required>\n' +
                '\t<span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>\n' +
                '</div>\n' +
                '<div class="mc-field-group">\n' +
                '\t<label for="mce-LNAME">Last Name  <span class="asterisk">*</span>\n' +
                '</label>\n' +
                '\t<input type="text" value="" name="LNAME" class="required" id="mce-LNAME" required>\n' +
                '\t<span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>\n' +
                '</div>\n' +
                '<div class="mc-field-group input-group">\n' +
                '    <label>COPPA Compliance </label>\n' +
                '    <ul><li>\n' +
                '    <input type="checkbox" value="1" name="group[671][1]" id="mce-group[671]-671-0">\n' +
                '    <label for="mce-group[671]-671-0">By checking this box, you confirm that you are above 13 years of age.</label>\n' +
                '</li>\n' +
                '</ul>\n' +
                '    <span id="mce-group[671]-HELPERTEXT" class="helper_text"></span>\n' +
                '</div>\n' +
                '<div id="mergeRow-gdpr" class="mergeRow gdpr-mergeRow content__gdprBlock mc-field-group">\n' +
                '    <div class="content__gdpr">\n' +
                '        <label>Marketing Permissions</label>\n' +
                '        <label>Please select all the ways you would like to hear from MyWebClass.Org:</label>\n' +
                '        <fieldset class="mc_fieldset gdprRequired mc-field-group" name="interestgroup_field">\n' +
                '\t\t<label class="checkbox subfield" for="gdpr_1036"><input type="checkbox" id="gdpr_1036" name="gdpr[1036]" value="Y" class="av-checkbox gdpr"><span style="font-size: 110%">Email</span> </label>\n' +
                '        </fieldset>\n' +
                '        <p style="font-size: 70%">You can unsubscribe at any time by clicking the link in the footer of our emails. For information about our privacy practices, please visit our website.\n' +
                'This form is designed for individuals who are 13 years of age or older. If you are under the age of 13, please do not submit any personal information on this form. If you are a parent or legal guardian of a child under 13 and you believe that your child has submitted personal information to us, please contact us immediately. We will promptly delete any personal information collected from children under the age of 13.</p>\n' +
                '    </div>\n' +
                '    <div class="content__gdprLegal">\n' +
                '        <p style="font-size: 70%">We use Mailchimp as our marketing platform. By clicking below to subscribe, you acknowledge that your information will be transferred to Mailchimp for processing. <a href="https://mailchimp.com/legal/terms" target="_blank">Learn more about Mailchimp\'s privacy practices here.</a></p>\n' +
                '    </div>\n' +
                '</div>\n' +
                '\t<div id="mce-responses" class="clear foot">\n' +
                '\t\t<div class="response" id="mce-error-response" style="display:none"></div>\n' +
                '\t\t<div class="response" id="mce-success-response" style="display:none"></div>\n' +
                '\t</div>    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\n' +
                '    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_2a00354161d6ab7c1b803eb85_fb459fe271" tabindex="-1" value=""></div>\n' +
                '        <div class="optionalParent">\n' +
                '            <div class="clear foot">\n' +
                '                <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button" style="background-color: #337357">\n' +
                '                <p class="brandingLogo"><a href="http://eepurl.com/iqQ2ak" title="Mailchimp - email marketing made easy and fun"><img src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"></a></p>\n' +
                '            </div>\n' +
                '        </div>\n' +
                '    </div>\n' +
                '</form>\n' +
                '</div>\n' +
                '<script type=\'text/javascript\' src=\'//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js\'></script><script type=\'text/javascript\'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]=\'FNAME\';ftypes[1]=\'text\';fnames[2]=\'LNAME\';ftypes[2]=\'text\';fnames[0]=\'EMAIL\';ftypes[0]=\'email\';}(jQuery));var $mcj = jQuery.noConflict(true);</script>'}}
        />
        <Footer/>
    </Layout>
  )
}