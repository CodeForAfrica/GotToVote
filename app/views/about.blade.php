@extends('layouts.frontend')

@section('top-nav')
	<li><a href="/">Home</a></li>
	<li><a href="/verify"><b>VERIFY</b></a></li>
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
		
		<p class="lead text-center">Made Possible With The Following Partners</p>
		<p class="about-partners text-center">
			<a href="http://africanmediainitiative.org" target="_blank"><img src="/assets/img/logos/ami.png" alt="" style="height: 100px;" /></a>
			<a href="http://hivos.org/" target="_blank"><img src="/assets/img/logos/hivos.png" alt="" /></a>
			<a href="http://wbi.worldbank.org" target="_blank"><img src="/assets/img/logos/wbi.png" alt="" /></a>
			<br /><br />
			<a href="http://www.osisa.org/" target="_blank"><img src="/assets/img/logos/osisa.png" alt="" /></a>
			<a href="http://mec.org.mw" target="_blank"><img src="/assets/img/logos/mec.png" alt="" /></a>
			<a href="http://code4kenya.org" target="_blank"><img src="/assets/img/logos/c4k.png" alt="" /></a>
			<br /><br />
			<a href="http://www.codeforafrica.org" target="_blank"><img src="/assets/img/logos/c4a.png" alt="" /></a>
			<a href="http://smagmedia.net/" target="_blank"><img src="/assets/img/logos/smag.png" alt="" style="height: 60px;" /></a>
		</p>
		
		<hr style="margin: 50px 0;"/>
		
		<p class="text-center">
			<a href="https://github.com/CodeForAfrica/GotToVote" class="btn btn-lg btn-info" target="_blank"><i class="fa fa-github fa-lg"></i> Steal Our Code</a>
			<a href="http://gottovote.cc" class="btn btn-lg btn-success" target="_blank"><img src="/assets/img/logos/gtv_sm.png" alt="" style="height: 18px;" /> GotToVote.cc</a>
		</p>
		
	</div>
   
@stop
