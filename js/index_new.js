var myApp=angular.module('myApp', ['ui.router','service','youtube-embed']);

myApp.controller('testctrl',['$scope','$rootScope','testfactory',testctrl]);

myApp.controller('loginCtrl',['$scope','$rootScope',loginctrl]);

myApp.controller('videoctrl',['$scope','$rootScope','$stateParams',videoctrl]);


function videoctrl($scope,$rootScope,$stateParams){
	if($stateParams.Id==1){
		$scope.title="首先，我们来回忆一下我们的美好经历";
		$scope.videourl = 'https://youtu.be/ZZJeAhdqea0';
	}
	else if($stateParams.Id==2){
		$scope.title="接下来，请关晓同学入场";
		$scope.videourl = 'https://youtu.be/s0T79B57MiY';
	}
	/*
	else if($stateParams.Id==3){
		$scope.title="最后，我说两句";
		$scope.videourl = 'https://youtu.be/Kwotb76aNF0';
	}
	*/
	$scope.$on('youtube.player.ready', function ($event, player) {
	    // play it again
	    player.playVideo();
	});
	$scope.$on('youtube.player.ended', function ($event, player) {
	    // play it again
	   	if($stateParams.Id==1){
	   		location.href="/index.html#/video/"+(parseInt($stateParams.Id)+1)
	   	}
	   	else if($stateParams.Id==2){
	   		alert("微信回复想我，有惊喜哦！");
	   	}
	});
}

function loginctrl($scope,$rootScope){
	$scope.login=function(){
		if($scope.username=="aviva"&&$scope.password=="123456")
		{
			//event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');	
			location.href="#/test";
		}
	}
};
function testctrl($scope,$rootScope,testfactory){
	$scope.count=0;
	$scope.questionclick=function(x){
		testfactory.get(x).state=true;
		$scope.question=testfactory.get(x).Question;
		$scope.answer=testfactory.get(x).Answer;
		$scope.count+=1;
	};
	$scope.last=function(){
		var checks=true;
		for(var i=1;i<testfactory.all().length;i++){
			if(!testfactory.get(i).state){
				checks=false;
			}
		}
		if(checks){
			location.href="#/";
		}
		else{
			alert("You must finish other question first!");
		}
	};
	$scope.questionnumber=testfactory.all();
	$scope.question=testfactory.get(1).Question;
	$scope.answer=testfactory.get(1).Answer;
	testfactory.get(1).state=true;
};

myApp.config(function($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.when("","/login");
	
	$stateProvider.state('test', {
		url: '/test',
		templateUrl: 'test.html',
	  //controller: 'ContactsCtrl'
	})
	$stateProvider.state('video', {
		url: '/video/:Id',
		templateUrl: 'video.html',
	  //controller: 'ContactsCtrl'
	})
	$stateProvider.state('login', {
		url: '/login',
		templateUrl: 'login.html',
	  //controller: 'ContactsCtrl'
	})
});

