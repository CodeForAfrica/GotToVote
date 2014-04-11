@extends('layouts.frontend')

@section('top-nav')
	<li><a href="/">Home</a></li>
	<li class="active"><a href="/verify"><b>VERIFY</b></a></li>
	<li><a href="/about">About</a></li>
@stop

@section('content')

	<div class="marketing">
		<div class="page-header">
			<h2>Verify That You Are Registered</h2>
		</div>
		
		<form method="post" >
			<div class="row">
				<div class="col-md-6">
					<label for="reg_no">Registration Number:</label>
					<input type="text" name="reg_no" id="reg_no" class="form-control text-center" placeholder="806000013" value="<?php echo $reg_no; ?>" required />
					
					<br />
					
					<script type="text/javascript">
					    var RecaptchaOptions = {
					       theme : 'white'
					    };
					</script>
					
					<script type="text/javascript" src="http://www.google.com/recaptcha/api/challenge?k=<?=$recaptcha->getPublicKey();?>"></script>
					<noscript>
						<iframe src="http://www.google.com/recaptcha/api/noscript?k=<?=$recaptcha->getPublicKey();?>" height="300" width="100%" frameborder="0"></iframe><br>
						<textarea name="recaptcha_challenge_field" rows="3" cols="40"></textarea>
						<input type="hidden" name="recaptcha_response_field" value="manual_challenge">
					</noscript>
					
					<br />
					
					<button type="submit" class="btn btn-info btn-lg btn-block">Submit</button>
					<br />
					<p class="text-muted"><small>Using GotToVote's Voter Registration Confirmation API <sup>TM</sup></small></p>
				</div>
				<div class="col-md-6">
					<div class="well">
						<h4>Registration Status:</h4>
						<?php echo $message; ?>
						<hr />
						<p class="text-center text-danger"><b>If there are any problems with your registration details, please visit your nearest MEC office.</b></p>
						<hr />
						<a href="http://mec.org.mw">
							<table><tr>
								<td><img src="/assets/img/logos/mec.png" alt="" style="margin-right: 10px;" /></td>
								<td><p class="text-center"><b>Powered By Malawi Electoral Commission</b></p></td>
							</tr></table>
						</a>
					</div>
				</div>
			</div>
		</form>
		
		<br /><br />
		
		
	</div>
   
@stop

@section('footer-top')
	<div class="container">
		<hr />
	</div>
@stop
