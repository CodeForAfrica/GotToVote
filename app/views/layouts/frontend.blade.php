<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>GotToVote</title>
		<meta name="description" content="">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		
		<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
		
		<link rel="stylesheet" href="/assets/css/frontend.css">
		<script src="/assets/js/modernizr.js"></script>
	</head>
	<body>
		<!--[if lt IE 7]>
		<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
		<![endif]-->
		
		<div class="container">
			<div class="masthead">
				<ul class="nav nav-pills pull-right">
					<li class="active"><a href="/">Home</a></li>
					<li><a href="about.html">About</a></li>
				</ul>
				<!--<h3 class="muted">Got To Vote! Ke</h3>-->
				<a href="/"><img src="/assets/img/logo.png" alt="GotToVote Logo" /></a>
			</div>

			<hr>
			
			<!-- Add your site or application content here -->
			@yield('content')
			
			<hr>
			
			<div class="footer">
				<a href="http://code4kenya.org" target="_blank"><img src="/assets/img/c4k_logo.png" alt="Code 4 Kenya" /></a>
				<a href="http://www.codeforafrica.org" target="_blank"><img src="/assets/img/c4a.png" alt="Code 4 Africa" /></a>
			</div>

		</div>
		
		
		
		<script src="/assets/js/frontend.js"></script>
		
		<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
		<script>
			(function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
			function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
			e=o.createElement(i);r=o.getElementsByTagName(i)[0];
			e.src='//www.google-analytics.com/analytics.js';
			r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
			ga('create','UA-XXXXX-X');ga('send','pageview');
		</script>
	</body>
</html>
