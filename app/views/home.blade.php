@extends('layouts.frontend')

@section('top-nav')
	<li class="active"><a href="/">Home</a></li>
	<li><a href="/verify">Verify</a></li>
	<li><a href="/about">About</a></li>
@stop

@section('content')
    <div class="jumbotron">
		<h1>Confirm Your Registration Today!</h1>
		<p class="lead">Voter registration confirmation for the Malawi 2014 Elections has begun. Confirm your registration information here.</p>
		<p><a class="btn btn-lg btn-success" href="/verify" >Confirm Registration</a></p>
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
			<p>YES! A person may transfer as a voter to another registration centre within the constituency or outside the constituency. The person is required to present himself/ herself to the particular registration centre or constituency if he/she meets the requirements.</p>
			
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
    <hr />
    
    <div class="row marketing">
    	<div class="col-md-6">
    		<h3>About</h3>
    		<p>GotToVote! is designed to help citizens get to the voting booth prepared and informed.</p>
    		<p><a href="/about" class="btn btn-xs btn-default">Read more...</a></p>
    		<h3>Get Social</h3>
    		<p class="social-icons">
    			<a href="javascript:void(0);" name="Share_TW" title="Share on Twitter | GotToVote! Ke"
    			onClick='window.open("http://twitter.com/home?status=Register%20as%20a%20voter%20today!%20Find%20a%20registration%20center%20on%20http://gottovote.code4kenya.org%20%23GotToVote%20by%20@Code4Kenya","GotToVote","width=550,height=270");'>
    				<span class="fa-stack fa-2x">
    					<i class="fa fa-square-o fa-stack-2x"></i>
    					<i class="fa fa-twitter fa-stack-1x"></i>
    				</span>
    			</a>
    			<a href="javascript:void(0);" name="Share_FB" title="Share on FB | GotToVote! Ke"
    			onClick='window.open("http://www.facebook.com/sharer.php?u=http%3A%2F%2Fgottovote.code4kenya.org%2F&t=Register+as+a+voter+today!+Find+a+registration+center+on+Got+To+Vote.","GotToVote","width=550,height=270");'>
    				<span class="fa-stack fa-2x">
    					<i class="fa fa-square-o fa-stack-2x"></i>
    					<i class="fa fa-facebook fa-stack-1x"></i>
    				</span>
    			</a>
    			<a href="https://plus.google.com/share?url=gottovote.code4kenya.org" onclick="javascript:window.open(this.href,
    			'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;">
    				<span class="fa-stack fa-2x">
    					<i class="fa fa-square-o fa-stack-2x"></i>
    					<i class="fa fa-google-plus fa-stack-1x"></i>
    				</span>
    			</a>
    		</p>
    	</div>
    	<div class="col-md-6">
    		<a class="twitter-timeline" href="https://twitter.com/search?q=%23GotToVote" data-widget-id="443862671192903680">Tweets about "#GotToVote"</a>
    		<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    	</div>
    </div>
    
   
@stop
