@extends('layouts.frontend')

@section('top-nav')
	<li><a href="/">Home</a></li>
	<li><a href="/verify">Verify</a></li>
	<li class="active"><a href="/about">About</a></li>
@stop

@section('content')

	<div class="marketing">
		<div class="page-header">
			<h2>About</h2>
		</div>
		<p class="lead text-center">Enabling citizens to get to the ballot box informed and ready.</p>
		<p>GotToVote started off as a simple experiment to make data otherwise locked in government, useful to the general public.</p>
		<p>When the Independent Electoral &amp; Boundaries Commission released voter registration centres locations information in the 2013 Kenyan Elections, they made it available as a <i>PDF</i> on their otherwise always unavailable website. The Code4Kenya fellows then set out in 24hrs to create an experiment that was so simple and direct with this PDF that it went viral without any marketing campaign.</p>
		<p>The PDF was scraped and made available in the form of a website with three drops downs. This allowed a citizen to drill down very easily according to administrative boundaries and decide which is the nearest voter registration centre.</p>
		<p>This unprecedented ease of finding your registration centre spurred adoption of GotToVote's simple code in Zimbabwe, Cameroon and Malawi. Code4Africa continues to this day in ensuring citizens get to the ballot box prepared by adding more arsenal of what GotToVote can offer and has grown to include Peace Messaging, Polling Results and Voter Registration Confirmation (VRC).</p>
		<hr />
		<p class="text-center">
			<a href="#" class="btn btn-lg btn-default"><i class="fa fa-github fa-3x"></i><br />Steal Our Code</a>
			
		</p>
	</div>
   
@stop