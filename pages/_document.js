import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta http-equiv='x-ua-compatible' content='ie=edge' />
          <title>Home One || Kenne</title>
          <meta name='robots' content='noindex, follow' />
          <meta name='description' content='' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />
          {/* <!-- Favicon --> */}
          <link
            rel='shortcut icon'
            type='image/x-icon'
            href='assets/images/favicon.png'
          />

          {/* <!-- CSS --> */}

          {/* <!-- Bootstrap CSS --> */}
          <link rel='stylesheet' href='assets/css/bootstrap.min.css' />
          {/* <!-- Fontawesome --> */}
          <link rel='stylesheet' href='assets/css/font-awesome.min.css' />
          {/* <!-- Fontawesome Star --> */}
          <link rel='stylesheet' href='assets/css/fontawesome-stars.min.css' />
          {/* <!-- Ion Icon --> */}
          <link rel='stylesheet' href='assets/css/ion-fonts.css' />
          {/* <!-- Slick CSS --> */}
          <link rel='stylesheet' href='assets/css/slick.css' />
          {/* <!-- Animation --> */}
          <link rel='stylesheet' href='assets/css/animate.min.css' />
          {/* <!-- jQuery Ui --> */}
          <link rel='stylesheet' href='assets/css/jquery-ui.min.css' />
          {/* <!-- Nice Select --> */}
          <link rel='stylesheet' href='assets/css/nice-select.css' />
          {/* <!-- Timecircles --> */}
          <link rel='stylesheet' href='assets/css/timecircles.css' />

          {/* <!-- Main Style CSS --> */}
          <link rel='stylesheet' href='assets/css/style.css' />

          {/* <!-- jQuery JS --> */}
          <script src='assets/js/vendor/jquery-3.6.0.min.js'></script>
          <script src='assets/js/vendor/jquery-migrate-3.3.2.min.js'></script>
          {/* <!-- Modernizer JS --> */}
          <script src='assets/js/vendor/modernizr-3.11.2.min.js'></script>
          {/* <!-- Bootstrap JS --> */}
          <script src='assets/js/vendor/bootstrap.bundle.min.js'></script>

          {/* <!-- Slick Slider JS --> */}
          <script src='assets/js/plugins/slick.min.js'></script>
          {/* <!-- Barrating JS --> */}
          <script src='assets/js/plugins/jquery.barrating.min.js'></script>
          {/* <!-- Counterup JS --> */}
          <script src='assets/js/plugins/jquery.counterup.js'></script>
          {/* <!-- Nice Select JS --> */}
          <script src='assets/js/plugins/jquery.nice-select.js'></script>
          {/* <!-- Sticky Sidebar JS --> */}
          <script src='assets/js/plugins/jquery.sticky-sidebar.js'></script>
          {/* <!-- Jquery-ui JS --> */}
          <script src='assets/js/plugins/jquery-ui.min.js'></script>
          <script src='assets/js/plugins/jquery.ui.touch-punch.min.js'></script>
          {/* <!-- Theia Sticky Sidebar JS --> */}
          <script src='assets/js/plugins/theia-sticky-sidebar.min.js'></script>
          {/* <!-- Waypoints JS --> */}
          <script src='assets/js/plugins/waypoints.min.js'></script>
          {/* <!-- jQuery Zoom JS --> */}
          <script src='assets/js/plugins/jquery.zoom.min.js'></script>
          {/* <!-- Timecircles JS --> */}
          <script src='assets/js/plugins/timecircles.js'></script>

          {/* <!-- Main JS --> */}
          <script src='assets/js/main.js'></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
