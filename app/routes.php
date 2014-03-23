<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('/', 'HomeController@showWelcome');
Route::get('/verify', 'VerificationController@getIndex');
Route::post('/verify', 'VerificationController@verifyRegistration');
Route::get('/about', 'HomeController@showAbout');