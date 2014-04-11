<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<title>GotToVote!</title>
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
		
		
		<div class="header">
			<div class="container">
				<ul class="nav nav-pills pull-right">
					@yield('top-nav')
				</ul>
				<!--<h3 class="muted">Got To Vote! Ke</h3>-->
				<h2 class="text-muted">
					<img src="/assets/img/logos/meic.png" alt="" />
				</h2>
			</div>
		</div>
		
		<div class="container">
			<!-- Add your site or application content here -->
			@yield('content')
		</div>
		
		@yield('footer-top')
		
		<div class="footer container">
			<div class="marketing">
				<p class="social-icons text-center">
					<a href="javascript:void(0);" name="Share_TW" title="Share on Twitter | GotToVote! Ke"
					onClick='window.open("http://twitter.com/home?status=Register%20as%20a%20voter%20today!%20Find%20a%20registration%20center%20on%20http://gottovote.code4kenya.org%20%23GotToVote%20by%20@Code4Kenya","GotToVote","width=550,height=270");'>
						<img src="/assets/img/socialicons/tw.png" alt="" />
					</a>
					<a href="javascript:void(0);" name="Share_FB" title="Share on FB | GotToVote! Ke"
					onClick='window.open("http://www.facebook.com/sharer.php?u=http%3A%2F%2Fgottovote.code4kenya.org%2F&t=Register+as+a+voter+today!+Find+a+registration+center+on+Got+To+Vote.","GotToVote","width=550,height=270");'>
						<img src="/assets/img/socialicons/fb.png" alt="" />
					</a>
					<a href="https://plus.google.com/share?url=gottovote.code4kenya.org" onclick="javascript:window.open(this.href,
					'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
						<img src="/assets/img/socialicons/gp.png" alt="" />
					</a>
				</p>
				<p class="text-muted text-center">Using GotToVote's Voter Registration Confirmation API</p>
				<hr />
				<div class="col-md-9">
					<p class="text-muted"><b>Supported By</b></p>
					<p class="partners">
						<a href="http://africanmediainitiative.org" target="_blank"><img src="/assets/img/logos/ami.png" alt="" /></a>
						<a href="http://hivos.org/" target="_blank"><img src="/assets/img/logos/hivos.png" alt="" /></a>
						<a href="http://wbi.worldbank.org" target="_blank"><img src="/assets/img/logos/wbi.png" alt="" /></a>
						<a href="http://www.osisa.org/" target="_blank"><img src="/assets/img/logos/osisa.png" alt="" /></a>
					</p>
				</div>
				<div class="col-md-3 text-right">
					<p class="text-muted"><b>Built By</b></p>
					<p><a href="http://www.codeforafrica.org" target="_blank"><img src="/assets/img/logos/c4a.png" alt="" style="height: 50px;" /></a></p>
				</div>
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
			ga('create','UA-36749298-2');ga('send','pageview');
		</script>
	</body>
</html>
