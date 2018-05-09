	(function () {
		var random = {};
		var __name__ = '__main__';
		__nest__ (random, '', __init__ (__world__.random));
		var celebrities = list (['mElon Musk', 'fEmma Watson', 'mGeorge Bush', 'mBarack Obama', 'fBeyoncé', 'fTaylor Swift', 'fKim Kardashian', 'mThe Pope', 'mDonald Trump', 'mJustin Bieber', 'fEllen Degeneres', 'mStephen Colbert', 'mJohn Oliver', 'mBrad Pitt', 'mDwayne Johnson', 'mWill Smith', 'fAdele', 'fNicki Minaj', 'mHarrison Ford', 'mEd Sheeran', 'fSarah Palin', 'mMike Pence']);
		var actions = list (['got a new haircut', 'just bought a new <o>', '!is moving to <l> for one crazy reason', '!posted one word on twitter', '!is starting a new company to sell <op>', 'ate a lollipop in public', '!only follows one person on twitter', 'posted a weird selfie on instagram', 'was gay all along', 'released a rap album about being oppressed', 'is coming out as transgender', 'cured <gs> diabetes with this one weird trick', 'retook the SAT and got a perfect score', 'had an affair with <p> in the 1990s', "can't stand <op>", 'is sexually attracted to <op>', 'will be appearing in the highly anticipated new series "The secret <f> of <l>"', 'called <p>\'s idea of selling <op> in <l> "<q>"', '!posted a surprisingly poignant message on twitter', "revealed <gs> daughter's middle name"]);
		var objects = list (['smartphone', 'pancake', 'shirt', 'car', 'yoyo', 'laptop', 'phone case', list (['breakfast cereal', 'breakfast cereal']), list (['chocolate bar', 'chocolate']), list (['porn dvd', 'porn'])]);
		var companies = list (['Amazon', 'Google', 'Facebook', 'Nestle', 'Kraft', 'Cheerios']);
		var reactions = list (["it's brilliant", 'people are freaking out', 'people on the internet are rioting', 'the internet is understandably furious', "it's glorious", 'nobody understands why', '<f> are furious', '<p> is furious', 'we love it', "it's fantastic", 'people in <l> are making millions off it', '<f> in <l> are profiting', '<f> in <l> are loving it', '<f> have all condemned it', "<p>'s response will restore your faith in humanity", 'it will make you die inside', 'the irony will make you chuckle', 'it will make you lose your faith in humanity', 'it will restore your faith in humanity', '<f> are trying to keep it a secret', '<f> want it banned immediately', "it's surprisingly dark", '<p> is "feeling totally stoked about it"', "it's really scary", '<p> thinks it\'s "<q>"', "it's hilarious", "<p>'s response is hilarious", '3 <c> employees were fired for showing their support', '<f> are calling it "<q>"']);
		var classes = list (['doctors', 'fashion designers', 'scientists', 'rich people', 'Hollywood actors', 'parents', 'senators', 'white people', 'housewives']);
		var locations = list (['Virginia', 'Canada', 'Hollywood', 'LA', 'Europe', 'Kansas', 'Alaska', 'Russia', 'Washington, DC', 'the Netherlands']);
		var quotes = list (['pretty gay', 'messed up', 'the greatest danger to mankind we have ever faced', 'pretty dumb, to be honest', 'totally hot']);
		var createName = function () {
			var possibleCelebrities = list (celebrities);
			possibleCelebrities.extend (companies);
			var celebrity = random.choice (possibleCelebrities);
			var person = true;
			var action = random.choice (actions);
			var gender = 'i';
			if (celebrity.startswith ('!') || __in__ (celebrity, companies)) {
				var person = false;
				var celebrity = celebrity.py_replace ('!', '');
				while (!(action.startswith ('!'))) {
					var action = random.choice (actions);
				}
			}
			else {
				var gender = celebrity [0];
				var celebrity = celebrity.__getslice__ (1, null, 1);
			}
			if (action.startswith ('!')) {
				var action = action.__getslice__ (1, null, 1);
			}
			if (__in__ ('<o>', action) || '<op>') {
				var o = random.choice (objects);
				if (py_typeof (o).__name__ == 'list') {
					if (__in__ ('<op>', action)) {
						var action = action.py_replace ('<op>', o [1]);
					}
					else {
						var action = action.py_replace ('<o>', o [0]);
					}
				}
				else {
					var action = action.py_replace ('<o>', o);
					var action = action.py_replace ('<op>', o + 's');
				}
			}
			var action = action.py_replace ('<f>', random.choice (classes));
			var action = action.py_replace ('<c>', random.choice (companies));
			if (__in__ ('<p>', action)) {
				var p = celebrity;
				while (p == celebrity) {
					var p = random.choice (celebrities).__getslice__ (1, null, 1);
				}
				var action = action.py_replace ('<p>', p);
			}
			var action = action.py_replace ('<l>', random.choice (locations));
			var action = action.py_replace ('<gs>', (gender == 'm' ? 'his' : (gender == 'f' ? 'her' : 'its')));
			var action = action.py_replace ('<q>', random.choice (quotes));
			var reaction = random.choice (reactions);
			if (__in__ ('<o>', reaction) || '<op>') {
				var o = random.choice (objects);
				if (py_typeof (o).__name__ == 'list') {
					if (__in__ ('<op>', reaction)) {
						var reaction = reaction.py_replace ('<op>', o [1]);
					}
					else {
						var reaction = reaction.py_replace ('<o>', o [0]);
					}
				}
				else {
					var reaction = reaction.py_replace ('<o>', o);
					var reaction = reaction.py_replace ('<op>', o + 's');
				}
			}
			var reaction = reaction.py_replace ('<f>', random.choice (classes));
			var reaction = reaction.py_replace ('<c>', random.choice (companies));
			if (__in__ ('<p>', reaction)) {
				var p = celebrity;
				while (p == celebrity) {
					var p = random.choice (celebrities).__getslice__ (1, null, 1);
				}
				var reaction = reaction.py_replace ('<p>', p);
			}
			var reaction = reaction.py_replace ('<l>', random.choice (locations));
			var reaction = reaction.py_replace ('<gs>', (gender == 'm' ? 'his' : (gender == 'f' ? 'her' : 'its')));
			var reaction = reaction.py_replace ('<q>', random.choice (quotes));
			var py_name = '{} {}, and {}.'.format (celebrity, action, reaction);
			print (py_name);
			document.getElementById ('name').innerHTML = py_name;
		};
		__pragma__ ('<use>' +
			'random' +
		'</use>')
		__pragma__ ('<all>')
			__all__.__name__ = __name__;
			__all__.actions = actions;
			__all__.celebrities = celebrities;
			__all__.classes = classes;
			__all__.companies = companies;
			__all__.createName = createName;
			__all__.locations = locations;
			__all__.objects = objects;
			__all__.quotes = quotes;
			__all__.reactions = reactions;
		__pragma__ ('</all>')
	}) ();
