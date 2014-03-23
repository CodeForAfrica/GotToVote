<?php

use Neutron\ReCaptcha\ReCaptcha;

class VerificationController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'VerificationController@getIndex');
	|
	*/
	

	public function getIndex()
	{
		// Initialize reCaptcha
		$recaptcha = ReCaptcha::create(Config::get('app.gtv.recaptcha.public_key'), Config::get('app.gtv.recaptcha.private_key'));
		
		return View::make('verify', array(
			'voter_no' => '',
			'message' => '<p>Enter your registration number first.</p>',
			'recaptcha' => $recaptcha
		));
	}
	
	public function verifyRegistration()
	{
		// Initialize variables
		$voter_no = Input::get('voter_no');
		
		// Check reCaptcha
		$recaptcha = ReCaptcha::create(Config::get('app.gtv.recaptcha.public_key'), Config::get('app.gtv.recaptcha.private_key'));
		$response = $recaptcha->checkAnswer($_SERVER['REMOTE_ADDR'], $_POST['recaptcha_challenge_field'], $_POST['recaptcha_response_field']);
		
		if ($response->isValid()) 
		{
			// No voter number
			if ($voter_no == '') {
				$message = '<p class="text-danger">Enter your registration number first.</p>';
				return View::make('verify', array(
					'voter_no' => $voter_no,
					'message' => $message,
					'recaptcha' => $recaptcha
				));
			}
			
			
		    $message = '<p class="text-success">Success.</p>';
		    return View::make('verify', array(
		    	'voter_no' => $voter_no,
		    	'message' => $message,
		    	'recaptcha' => $recaptcha
		    ));
		    
		} else {
			// Captcha not valid
		    $message = '<p class="text-danger">Captcha not valid. Please try again.</p>';
		    return View::make('verify', array(
		    	'voter_no' => $voter_no,
		    	'message' => $message,
		    	'recaptcha' => $recaptcha
		    ));
		}
		
		
	}

}