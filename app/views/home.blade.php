@extends('layouts.frontend')

@section('top-nav')
	<li class="active"><a href="/">Home</a></li>
	<li><a href="/verify"><b>VERIFY</b></a></li>
	<li><a href="/about">About</a></li>
@stop

@section('content')
    <div class="jumbotron">
		<h1 class="text-info">Confirm Your Registration Today!</h1>
		<p class="lead">Voter registration confirmation for the Malawi 2014 Elections has begun. Confirm your registration information here.</p>
		<p><a class="btn btn-lg btn-info" href="/verify" >Confirm Registration</a></p>
		<p class="text-muted"><small>Powered by Malawi Electoral Commission</small></p>
	</div>

	<div class="row marketing">
		<div class="col-md-6">
			<h4>What is voter registration?</h4>
			<p>Voter registration is the process of entering details of qualified persons including their National Identity Card or Passport numbers in a register or list of voters.</p>
			
			<h4>Who qualifies to register as a voter?</h4>
			<p>In order to qualify as a voter, one must:</p>
			<p><ul>
				<li><p>Be a Malawi citizen</p></li>
				<li><p>Be 18 years old and above</p></li>
			</ul></p>
			
			<h4>Can a person transfer as a voter to another registration centre or constituency?</h4>
			<p>No. A person cannot transfer as a voter to another registration centre within the constituency or outside the constituency.</p>
			
		</div>
		<div class="col-md-6">
			<h4>Why register as a voter?</h4>
			<p>Registering as a voter will give you the opportunity to elect leaders for your country at the national and county levels. You can only participate in elections if you are a registered voter. It is your right and duty as a responsible citizen to elect your leaders.</p>
			
			<h4>Where can you register as a voter?</h4>
			<p>You can register as a voter at any designated voter registration within the county assembly ward or the constituency where you wish to vote.</p>
			
			<h4>What is the role of a voter in ensuring the register is accurate?</h4>
			<p>It is the responsibility of each registered voter to inspect the register and inform the registration officers of any corrections they wish made in the register of voters on their particulars.</p>
		</div>
	</div>
	
	<div class="clearfix"></div>
@stop

@section('footer-top')
	<div class="container">
		<img src="/assets/img/people5.png" alt="" style="width: 100%;"/>
	</div>	
	<div class="footer bg-info">
		<div class="container">
			<div class="row marketing">
				<div class="col-md-6">
					<h2 class="">About</h2>
					<p class="lead">Enabling citizens to get to the ballot box informed and ready.</p>
					<p>GotToVote started off as a simple experiment to make data otherwise locked in government, useful to the general public.</p>
					<p>MalawiVote builds on this same principle and is proudly brought to you by <a href="http://mec.org.mw/" target="_blank">Malawi Electoral Commission</a>, <a href="http://www.codeforafrica.org/" target="_blank">Code for Africa</a>, <a href="http://wbi.worldbank.org/" target="_blank">World Bank</a>, <a href="http://africanmediainitiative.org">African Media Initiative</a>, <a href="http://hivos.org" target="_blank">Hivos</a>, <a href="http://www.osisa.org/" target="_blank">Open Society Initiative for Southern Africa</a> and <a href="http://www.smagmedia.net" target="_blank">Smag Media</a>.</p>
					<br />
					<p><a href="/about" class="btn btn-default">Read More...</a></p>
				</div>
				<div class="col-md-6">
					<a class="twitter-timeline" href="https://twitter.com/search?q=%23GotToVote" data-widget-id="443862671192903680">Tweets about "#GotToVote"</a>
					<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
				</div>
			</div> <!-- /.row .marketing -->
		</div> <!-- /.container -->
	</div> <!-- /.footer -->
@stop
