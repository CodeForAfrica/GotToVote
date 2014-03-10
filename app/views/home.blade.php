@extends('layouts.frontend')

@section('content')
    <div class="jumbotron" id="jumbotron">
		<h1>Register as a Voter Today!</h1>
		<p class="lead">Voter registration for the Kenya 2013 Elections has begun. Find a voter registration centre and register to vote.</p>
		<a class="btn btn-large btn-success" href="#" id="findlink" onclick="$('#find').scrollTop();">Find a Registration Centre</a>
	</div>

	<hr />

	<div class="row-fluid marketing">
		<div class="col-md-6">
			<h4>What is voter registration?</h4>
			<p>Voter registration is the process of entering details of qualified persons including their National Identity Card or Passport numbers in a register or list of voters.</p>
			
			<h4>Who qualifies to register as a voter?</h4>
			<p>In order to qualify as a voter, one must:</p>
			<ul>
				<li><p>Be a Kenyan citizen</p></li>
				<li><p>Be 18 years old and above</p></li>
			</ul>
			
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
    <a name="find" id="find"></a>
    <hr />
    
    
    <div id="find-reg" class="text-center">
	    <h2>Find A Registration Centre!</h2>
	    
	    <div class="row-fluid marketing" style="margin-top: 20px; margin-bottom: 10px;">
		    <div class="col-md-4">
			    <p class="lead">County</p>
			    <select id="county_select">
				    <option value="0">Select a County</option>
				    <option value="30">Baringo</option>
				    <option value="36">Bomet</option>
				    <option value="39">Bungoma</option>
				    <option value="40">Busia</option>
				    <option value="28">Elgeyo/Marakwet</option>
				    <option value="14">Embu</option>
				    <option value="7">Garissa</option>
				    <option value="43">Homa Bay</option>
				    <option value="11">Isiolo</option>
				    <option value="34">Kajiado</option>
				    <option value="37">Kakamega</option>
				    <option value="35">Kericho</option>
				    <option value="22">Kiambu</option>
				    <option value="3">Kilifi</option>
				    <option value="20">Kirinyaga</option>
				    <option value="45">Kisii</option>
				    <option value="42">Kisumu</option>
				    <option value="15">Kitui</option>
				    <option value="2">Kwale</option>
				    <option value="31">Laikipia</option>
				    <option value="5">Lamu</option>
				    <option value="16">Machakos</option>
				    <option value="17">Makueni</option>
				    <option value="9">Mandera</option>
				    <option value="10">Marsabit</option>
				    <option value="12">Meru</option>
				    <option value="44">Migori</option>
				    <option value="1">Mombasa</option>
				    <option value="21">Murang'a</option>
				    <option value="47">Nairobi</option>
				    <option value="32">Nakuru</option>
				    <option value="29">Nandi</option>
				    <option value="33">Narok</option>
				    <option value="46">Nyamira</option>
				    <option value="18">Nyandarua</option>
				    <option value="19">Nyeri</option>
				    <option value="25">Samburu</option>
				    <option value="41">Siaya</option>
				    <option value="6">Taita Taveta</option>
				    <option value="4">Tana River</option>
				    <option value="13">Tharaka - Nithi</option>
				    <option value="26">Trans Nzoia</option>
				    <option value="23">Turkana</option>
				    <option value="27">Uasin Gishu</option>
				    <option value="38">Vihiga</option>
				    <option value="8">Wajir</option>
				    <option value="24">West Pokot</option>
			    </select>
		    </div>
		    <div class="col-md-4 text-center">
			    <p class="lead">Constituency</p>
			    <select id="const_select">
			    	<option value="0">- Select a County First -</option>
			    </select>
		    </div>
		    <div class="col-md-4 text-center">
			    <p class="lead">Ward</p>
			    <select id="ward_select">
			    	<option value="0">- Select a County First -</option>
			    </select>
		    </div>
	    </div>
	    
	    <div id="found-reg" style="display: none;">
		    <table class="table table-hover" style="margin-bottom: 0;">
			    <thead><tr><td>
			    	<h4>Registration Centres in <span id="header-name"> County</span></h4>
			    </td></tr></thead>
			    <tbody id="reg-centres">
				    <tr><td>
					    <p><img src="img/spinner.gif" alt="" /> Finding registration centres...</p>
				    </td></tr>
			    </tbody>
		    </table>
	    </div>
    </div> <!-- /#find-reg -->
    
    <div class="clearfix"></div>
    <hr style="margin-top: 90px;"/>
    
    <div class="social-icons">
	    <h3>Get Social</h3>
	    <p> 
		    <a href="javascript:void(0);" name="Share_TW" title="Share on Twitter | GotToVote! Ke"
		    onClick='window.open("http://twitter.com/home?status=Register%20as%20a%20voter%20today!%20Find%20a%20registration%20center%20on%20http://gottovote.code4kenya.org%20%23GotToVote%20by%20@Code4Kenya","GotToVote","width=550,height=270");'><img src="img/social/twitter.png" alt="Share on Twitter" /></a>
		    <a href="javascript:void(0);" name="Share_FB" title="Share on FB | GotToVote! Ke"
		    onClick='window.open("http://www.facebook.com/sharer.php?u=http%3A%2F%2Fgottovote.code4kenya.org%2F&t=Register+as+a+voter+today!+Find+a+registration+center+on+Got+To+Vote.","GotToVote","width=550,height=270");'><img src="img/social/facebook.png" alt="Share on Facebook" /></a>
		    <a href="https://plus.google.com/share?url=gottovote.code4kenya.org" onclick="javascript:window.open(this.href,
		    '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"><img src="img/social/googleplus.png" alt="Share on Google Plus" /></a>
	    </p>
    </div>
    
    <table align="center"><tr><td>
	    <a class="twitter-timeline" width="auto" href="https://twitter.com/search?q=%23GotToVote" data-widget-id="271009484485304320">Tweets about "#GotToVote"</a>
	    <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
    </td></tr></table>
@stop