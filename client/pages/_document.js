import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta charset="utf-8"/>
    <meta http-equiv="x-ua-compatible" content="ie=edge"/>
    <title>Home One || Kenne</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content=""/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
   
    <link rel="shortcut icon" type="image/x-icon" href="assets/images/favicon.png"/>
   
    <link rel="stylesheet" href="assets/css/bootstrap.min.css"/>
   
    <link rel="stylesheet" href="assets/css/font-awesome.min.css"/>
    
    <link rel="stylesheet" href="assets/css/fontawesome-stars.min.css"/>
  
    <link rel="stylesheet" href="assets/css/ion-fonts.css"/>
   
    <link rel="stylesheet" href="assets/css/slick.css"/>
   
    <link rel="stylesheet" href="assets/css/animate.min.css"/>
   
    <link rel="stylesheet" href="assets/css/jquery-ui.min.css"/>
   
    <link rel="stylesheet" href="assets/css/nice-select.css"/>
  
    <link rel="stylesheet" href="assets/css/timecircles.css"/>
   
    <link rel="stylesheet" href="assets/css/style.css"/>

   

    <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
    <script src="assets/js/vendor/jquery-migrate-3.3.2.min.js"></script>
  
    <script src="assets/js/vendor/modernizr-3.11.2.min.js"></script>
    
    <script src="assets/js/vendor/bootstrap.bundle.min.js"></script>

   
    <script src="assets/js/plugins/slick.min.js"></script>
   
    <script src="assets/js/plugins/jquery.barrating.min.js"></script>
   
    <script src="assets/js/plugins/jquery.counterup.js"></script>
    
    <script src="assets/js/plugins/jquery.nice-select.js"></script>
   
    <script src="assets/js/plugins/jquery.sticky-sidebar.js"></script>
   
    <script src="assets/js/plugins/jquery-ui.min.js"></script>
    <script src="assets/js/plugins/jquery.ui.touch-punch.min.js"></script>
   
    <script src="assets/js/plugins/theia-sticky-sidebar.min.js"></script>
   
    <script src="assets/js/plugins/waypoints.min.js"></script>
   
    <script src="assets/js/plugins/jquery.zoom.min.js"></script>
   
    <script src="assets/js/plugins/timecircles.js"></script>

    <script type="text/javascript" src="//cdn.jsdelivr.net/gh/kenwheeler/slick@1.8.1/slick/slick.min.js"></script>
   
    <script src="assets/js/main.js"></script>
        </Head>
     
        <body className="template-color-1">
          <div className="main-wrapper">
            <Main />
            <NextScript />
          </div>
        </body>
       
      </Html>
    );
  }
}

export default MyDocument;
