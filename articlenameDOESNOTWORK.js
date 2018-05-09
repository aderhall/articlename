var random = require('random');

celebrities = ['mElon Musk', 'fEmma Watson', 'mGeorge Bush', 'mBarack Obama', 'fBeyoncé', 'fTaylor Swift', 'fKim Kardashian', 'mThe Pope', 'mDonald Trump', 'mJustin Bieber', 'fEllen Degeneres', 'mStephen Colbert', 'mJohn Oliver', 'mBrad Pitt', 'mDwayne Johnson', 'mWill Smith', 'fAdele', 'fNicki Minaj', 'mHarrison Ford', 'mEd Sheeran', 'fSarah Palin', 'mMike Pence'];

actions = ['got a new haircut', 'just bought a new <o>', '!is moving to <l> for one crazy reason', '!posted one word on twitter', '!is starting a new company to sell <op>', 'ate a lollipop in public', '!only follows one person on twitter', 'posted a weird selfie on instagram', 'was gay all along', 'released a rap album about being oppressed', 'is coming out as transgender', 'cured <gs> diabetes with this one weird trick', 'retook the SAT and got a perfect score', 'had an affair with <p> in the 1990s', 'can\'t stand <op>', 'is sexually attracted to <op>', 'will be appearing in the highly anticipated new series "The secret <f> of <l>"', 'called <p>\'s idea of selling <op> in <l> "<q>"', '!posted a surprisingly poignant message on twitter', 'revealed <gs> daughter\'s middle name'];

objects = ['smartphone', 'pancake', 'shirt', 'car', 'yoyo', 'laptop', 'phone case', ['breakfast cereal', 'breakfast cereal'], ['chocolate bar', 'chocolate'], ['porn dvd', 'porn']];

companies = ['Amazon', 'Google', 'Facebook', 'Nestle', 'Kraft', 'Cheerios'];

reactions = ['it\'s brilliant', 'people are freaking out', 'people on the internet are rioting', 'the internet is understandably furious', 'it\'s glorious', 'nobody understands why', '<f> are furious', '<p> is furious', 'we love it', 'it\'s fantastic', 'people in <l> are making millions off it', '<f> in <l> are profiting', '<f> in <l> are loving it', '<f> have all condemned it', '<p>\'s response will restore your faith in humanity', 'it will make you die inside', 'the irony will make you chuckle', 'it will make you lose your faith in humanity', 'it will restore your faith in humanity', '<f> are trying to keep it a secret', '<f> want it banned immediately', 'it\'s surprisingly dark', '<p> is "feeling totally stoked about it"', 'it\'s really scary', '<p> thinks it\'s "<q>"', 'it\'s hilarious', '<p>\'s response is hilarious', '3 <c> employees were fired for showing their support', '<f> are calling it "<q>"'];

classes = ['doctors', 'fashion designers', 'scientists', 'rich people', 'Hollywood actors', 'parents', 'senators', 'white people', 'housewives'];

locations = ['Virginia', 'Canada', 'Hollywood', 'LA', 'Europe', 'Kansas', 'Alaska', 'Russia', 'Washington, DC', 'the Netherlands'];

quotes = ['pretty gay', 'messed up', 'the greatest danger to mankind we have ever faced', 'pretty dumb, to be honest', 'totally hot'];

possibleCelebrities = list(celebrities);
possibleCelebrities.extend(companies);
celebrity = random.choice(possibleCelebrities);
person = true;
action = random.choice(actions);
gender = 'i';
if (celebrity.startswith('!') || celebrity in companies) {
    person = false;
    celebrity = celebrity.replace('!', '');
    while (!action.startswith('!')) {
        action = random.choice(actions);
    }
} else {
    gender = celebrity[0];
    celebrity = celebrity[1:];
}
if (action.startswith('!')) {
    action = action[1:];
}

if ('<o>' in action || '<op>') {
    o = random.choice(objects);
    if (type(o).__name__ == 'list') {
        if ('<op>' in action) {
            action = action.replace('<op>', o[1]);
        }
        } else {
            action = action.replace('<o>', o[0]);
    }

    } else {
        action = action.replace('<o>', o);
        action = action.replace('<op>', o + 's');
}
action = action.replace('<f>', random.choice(classes));
action = action.replace('<c>', random.choice(companies));
if ('<p>' in action) {
    p = celebrity;
    while (p == celebrity) {
        p = random.choice(celebrities)[1:];
    action = action.replace('<p>', p);
    }
action = action.replace('<l>', random.choice(locations));
action = action.replace('<gs>', 'his' if (gender == 'm' else ('her' if (gender == 'f' else 'its'));
action = action.replace('<q>', random.choice(quotes));

reaction = random.choice(reactions);
if ('<o>' in reaction || '<op>') {
    o = random.choice(objects);
    if (type(o).__name__ == 'list') {
        if ('<op>' in reaction) {
            reaction = reaction.replace('<op>', o[1]);
        }
        } else {
            reaction = reaction.replace('<o>', o[0]);
    }
    } else {
        reaction = reaction.replace('<o>', o);
        reaction = reaction.replace('<op>', o + 's');
}
reaction = reaction.replace('<f>', random.choice(classes));
reaction = reaction.replace('<c>', random.choice(companies));
if ('<p>' in reaction) {
    p = celebrity;
    while (p == celebrity) {
        p = random.choice(celebrities)[1:];
    }
    reaction = reaction.replace('<p>', p);

reaction = reaction.replace('<l>', random.choice(locations));
reaction = reaction.replace('<gs>', 'his' if (gender == 'm' else ('her' if (gender == 'f' else 'its'));
reaction = reaction.replace('<q>', random.choice(quotes));

name = '{} {}, and {}.'.format(celebrity, action, reaction);

console.log(name);
me);
me);

};

}
