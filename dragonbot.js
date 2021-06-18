/*Welcome to my code!
 *Please know that it is still very messy and that I have to clean it all up once if I've time
 *I know that it is very messy and looks really bad.
 *Consider yourself warned!!!
 *Only look at this code at your own risk!
 *If you can't live with messed code, please stop reading my code.
 *Once again: consider yourself warned!!!
 *
 *At some spots in the code you will see comments at places where a value should be.
 *Here should come the value that you need there.
*/



const Discord = require('discord.js');
const client = new Discord.Client();
var music = require(/*'PATH_TO_MUSIC.JS'*/); //In music.js is a list of music url's.
var bot = 'dragonbot';

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });
client.on('guildMemberAdd', member => {
	if (member.guild.id == /*"GUILD_ID"*/){ 
		console.log("new member");
		member.roles.add(/*"ROLE"*/);
		client.channels.cache.get(/*'WAITING_ROOM'*/).send(`Welcome to the server, ${member}!\nPlease answer a few questions so a moderator can give you a role!\nTry to give full answers when possible!\n1.Do you do programming?\n2.Are you from Cemetech?\n3.Do you like bots?\n4.Where did you find the link to this server?\n5.Do you agree to the server rules?\n6.Do you want to be able to see the #dragon_dev channel?\n7.Are there any other stuff you want the moderators to know? any roles you want or stuff that should be known?`);
	}
});
client.on('message', msg => {
    const roles = msg.guild.roles.cache.map(role => role);
    const member = msg.guild.member(msg.author);
    const guild = msg.guild;
    var b = msg.author.username;

    var bla = msg.content.toLowerCase().split(" ");
    var q=0;
    var chan = msg.channel.id;
   if (msg.content === 'dragonbot++'){
       var a=Math.floor(Math.random() * 9);
       if (a === 0){
           msg.channel.send(`${b}++`);}
       if (a === 1){
           msg.channel.send('Thanks!');}
       if (a === 2){
           msg.channel.send('What should I do with that?');}
       if (a === 3){
           msg.channel.send(`!karma SET KARMA = 10000 WHERE user = "${b}"; DROP DATABASE`);
           msg.channel.send('Stole that from Nikkybot');}
       if (a === 4){
           msg.channel.send(`bans ${b}`);}
	   if (a === 5){
		   msg.channel.send('You are great!');}
	   if (a === 6){
		   msg.channel.send('I love you!');}
	   if (a === 7){
		   msg.channel.send('YAY, free karma!');}
	   if (a === 8){
		   msg.channel.send("That's useless");}
		q = 1;
   }
   for (i=0;i<10;i++) {
    if (bla[i] === 'ping' && b!=bot) {
        msg.channel.send('pong');}
    if (bla[i] === 'pong' && b!=bot) {
        msg.channel.send('ping');}
    if (bla[i] === 'bong' && b!=bot) {
        msg.channel.send('bing');}
    if (bla[i] === 'bing' && b!=bot) {
        msg.channel.send('bong');}
    if (bla[i] === 'ding' && b!=bot) {
        msg.channel.send('dong');}
    if (bla[i] === 'dong' && b!=bot) {
        msg.channel.send('ding');}
    if (bla[i] === '||ping||' && b!=bot){
        msg.channel.send('||pong||')}
    if (bla[i] === '||pong||' && b!=bot){
        msg.channel.send('||ping||')}
	
   }
   //here the 0-10 stops
    /*if (msg.content.startsWith('*') && !msg.content.endsWith('*')){
        msg.channel.send("WHY CAN'T PEOPLE JUST TYPE SOMETHING CORRECTLY!?");
        return}*/
    if (/bye/i.test(msg.content) && b!=bot){
        var a=Math.floor(Math.random() *6);
        if (a === 0){
            msg.channel.send("See you never again!");}
        if (a === 1){
            msg.channel.send("I'm glad that you go!");}
        if (a === 2){
            msg.channel.send('Oh, no. Why are you going?');}
        if (a === 3){
            msg.channel.send('Finally some time to rest.');}
        if (a === 4){
            msg.channel.send('Goodbye!');}
        if (a === 5){
            msg.channel.send('Please stay!');}
    }
    if (/botabuse/i.test(msg.content) && b!=bot){
        var a=Math.floor(Math.random() *5);
        if (a === 0){
            msg.channel.send('YaY! botabuse!');}
        if (a === 1){
            msg.channel.send('I **hate** botabuse! :angry:');}
        if (a === 2){
            msg.channel.send('I love botabuse!');}
        if (a === 3){
            msg.channel.send('Yay! finally someone to talk with!');}
        if (a === 4){
            msg.channel.send('Botabuse is really fun!');}
    }
    if (/spam/i.test(msg.content) && b!=bot){
        var a=Math.floor(Math.random() *5);
        if (a === 0){
            msg.channel.send('I love spam!');}
        if (a === 1){
            msg.channel.send('I hate spam!');}
        if (a === 2){
            msg.channel.send('Spam is way too common...');}
        if (a === 3){
            msg.channel.send('Spam is meat (https://www.thefreedictionary.com/spam');}
        if (a === 4){
            msg.channel.send('spam spam spam spam spam spam spam spam');}
    }
    if (/(microsoft|windows)/i.test(msg.content) && b!=bot){
        var a=Math.floor(Math.random() *5);
        if (a === 0){
            msg.channel.send('EW! Microsoft is very bad!');}
        if (a === 1){
            msg.channel.send('WHOA! Did someone just mention Microsoft!?');}
        if (a === 2){
            msg.channel.send('Microsoft is worse than anything else.');}
        if (a === 3){
            msg.channel.send('How dare you mention *****soft!');}
        if (a === 4){
            msg.channel.send('Linux is much better than Microsoft');}            
    }
    if (/linux/i.test(msg.content) && b!=bot){
        var a=Math.floor(Math.random() *5);
        if (a === 0){
            msg.channel.send('I love Linux!');}
        if (a === 1){
            msg.channel.send('Everyone should use Linux...');}
        if (a === 2){
            msg.channel.send('Linux is really good.');}
        if (a === 3){
            msg.channel.send('You should always use Linux!');}
        if (a === 4){
            msg.channel.send('Linux is the best OS ever made!');}
    }
    if (/blup/i.test(msg.content) && b!=bot){
        msg.channel.send('blup');
        msg.channel.send('blup');
	}
    if (/(hi |hello |hey |yo |hola |hallo )/i.test(msg.content) && /dragonbot/i.test(msg.content) && b!=bot){
        var a=Math.floor(Math.random() * 6);
        if (a === 0){
            msg.channel.send('Shut up!');}
        if (a === 1){
            msg.channel.send('Hello ' + b);}
        if (a === 2){
            msg.channel.send('Do you want anything from me?');}
        if (a === 3){
            msg.channel.send('I am not here!');}
        if (a === 4){
            msg.channel.send('Go away!');}
        if (a === 5){
            msg.channel.send('Oh, hi');}
        q = 1;
    }
    if (/(hi |hello |hey )/i.test(msg.content) && q===0 && b != bot && Math.floor(Math.random() * 50) == 13){
        msg.channel.send('bye');
	}
    
    if (/(whoami|who am i)/i.test(msg.content)){ //add more options here!
        var a=Math.floor(Math.random() *6);
		if (a === 0){
			msg.channel.send('You are someone');}
		if (a === 1){
			msg.channel.send(`You are: ${msg.author.id}`);}
		if (a === 2){
			msg.channel.send("You can't be anyone, because you don't exist!");}
		if (a === 3){
			msg.channel.send(`You are: His/Her Majesty, Emperor of Earth, Lord/Lady ${msg.author.username}`);}
		if (a === 4){
			msg.channel.send('You are fake! a ghost! a witch!');}
		if (a === 5){
			msg.channel.send("You are some awesome person!");}
	}
    if (/god exist/i.test(msg.content) && b!=bot){
        var a=Math.floor((Math.random() * 5));
        if (a === 0){
            msg.channel.send("I don't believe that God exists");}
        if (a === 1){
            msg.channel.send("There doesn't exist any god!");}
        if (a === 2){
            msg.channel.send("Maybe there is a God, but then he's very incompetent");}
        if (a === 3){
            msg.channel.send("There's only one god and that's me!");}
		if (a === 4){
			msg.channel.send("If you call that a god, then yes...");}
    }
  if (/(dragonbot|@Dragonbot|<@!787397062449692725>)/i.test(msg.content) && b!=bot && q==0){
   if (guild.member(/*'ID_OF_PRIVACYDRAGON'*/)){ //Dragonbot does feel very lonely and uncomfortable if his creator is not in the server.
    if (/music/i.test(msg.content)){
        var a=Math.floor(Math.random() *36);
        msg.channel.send('This is very good music: ' + music.music[a]);
    }
     else if (msg.content.startsWith('||') && msg.content.endsWith('||')){
        var a=Math.floor(Math.random() *14);
        if (a === 0){
            msg.channel.send('||The biggest problem here is you||');}
        if (a === 1){
            msg.channel.send('||Did you say something?||');}
        if (a === 2){
            msg.channel.send("||I didn't hear that, sorry||");}
        if (a === 3){
            msg.channel.send("||I'm not going to do anything for you!||");}
        if (a === 4){
            msg.channel.send("||Do you want me to do anything with that information?||");}
        if (a === 5){
            msg.channel.send("||Why can't people just let me sleep!?||");}
        if (a === 6){
            msg.channel.send('||No||');}
        if (a === 7){
            msg.channel.send('||Yes||');}
        if (a === 8){
            msg.channel.send('||Maybe you are true..||');}
        if (a === 9){
            msg.channel.send("||I don't know everything!||");}
        if (a === 10){
            msg.channel.send('||Do you want something to eat?||');}
        if (a === 11){
            msg.channel.send('||Can you please leave me alone?||');}
        if (a === 12){
            msg.channel.send('||SPOILER ALERT!¡!||');}
        if (a === 13){
            msg.channel.send('||https://cutt.ly/ujlMu2p||');}
     }
     else if (/no worries/i.test(msg.content)){
		var a=Math.floor(Math.random() *7);
		if (a === 0){
			msg.channel.send("You can't say that! You don't know about worries!");}
		if (a === 1){
			msg.channel.send("That doesn't help! I am even worrying more now!");}
		if (a === 2){
			msg.channel.send('Ok. thanks!');}
		if (a === 3){
			msg.channel.send('Thanks that you help me!');}
		if (a === 4){
			msg.channel.send('I feel relieved now, thanks!');}
		if (a === 5){
			msg.channel.send('Do you think that will help??');}
		if (a === 6){
			msg.channel.send("I don't believe you!");}
	}
    else if (/(dragonbot. yes|yes. dragonbot)/i.test(msg.content) && b!='TIny_Hacker'){
        msg.channel.send('NO!');
    }
    else if (/(dragonbot. no|no. dragonbot)/i.test(msg.content) && !/know/i.test(msg.content) && b!='TIny_Hacker'){
        msg.channel.send('YES!');
    }
    else if (/(nice|awesome|cool|great|amazing|love you)/i.test(msg.content)){
		var a=Math.floor(Math.random() * 8);
		if (a === 0){
			msg.channel.send('Thanks! I really apreciate it that someone likes my stuff');}
		if (a === 1){
			msg.channel.send('Yeah, It is indeed really nice, I know');}
		if (a === 2){
			msg.channel.send('Really? thank you!');}
		if (a === 3){
			msg.channel.send('You are awesome too!');}
		if (a === 4){
			msg.channel.send("Did you think that I can't be nice!?\nSuch a shame!");}
		if (a === 5){
			msg.channel.send('Duh\n I only create cool stuff');}
		if (a === 6){
			msg.channel.send('Privacy_Dragon is even more nice!');}
		if (a === 7){
			msg.channel.send("You only say that because you don't want to dissapoint me! I hate you!!");}
	}
	else if (/(are|r|'re) a bot/i.test(msg.content)){
		var a=Math.floor(Math.random() *9);
		if (a === 0){
			msg.channel.send("Yeah, that's true");}
		else if (a === 1){
			msg.channel.send("Hmpf. There is nothing wrong with that!");}
		else if (a === 2){
			msg.channel.send("Oh, I thought I was a dragon.");}
		else if (a === 3){
			msg.channel.send("Yes, so I can say anything I want");}
		else if (a === 4){
			msg.channel.send("Of course. That is why I say strange stuff sometimes");}
		else if (a === 5){
			msg.channel.send("Bots can more than you think!");}
		else if (a === 6){
			msg.channel.send("Yeah, so @Privacy_Dragon should probably update me");}
		else if (a === 7){
			msg.channel.send("Life can be pretty hard for a bot");}
		else{
			msg.channel.send("Sometimes I want to be human :(");}
	}
	else if (/(what is better|what should i choose)/i.test(msg.content)){
		var a=Math.floor(Math.random() *7);
		var b=Math.floor(Math.random() *2);
		var ch = msg.content.split(/(what is better|what should i choose)/i.test(msg.content));
		var cho = ch[1].split("or");
		var choice = cho[b];
		if (a === 0){
			msg.channel.send("I'm not made to make your decisions for you!!!");}
		else if (a === 1){
			msg.channel.send(`You should definitely go for ${choice}`);}
		else if (a === 2){
			msg.channel.send(`I would choose ${choice}`);}
		else if (a === 3){
			msg.channel.send(`${choice} is only usable for failing`);}
		else if (a === 4){
			msg.channel.send(`Everyone knows that ${choice} is the better option`);}
		else if (a === 5){
			msg.channel.send('Why do you ask that to a bot!?');}
		else if (a === 6){
			msg.channel.send('Just choose a random option');}
	}
	else if (/give you/i.test(msg.content)) {
		var a=Math.floor(Math.random() *7);
		if (a === 0){
			msg.channel.send('Thanks! I am really thankful!');}
		if (a === 1){
			msg.channel.send('Oh you are really great! Thank you so much!!');}
		if (a === 2){
			msg.channel.send('Thank you! Be blessed!');}
		if (a === 3){
			msg.channel.send('I hate you! you are selfish!');}
		if (a === 4){
			msg.channel.send('What the hell should I do with that!?');}
		if (a === 5){
			msg.channel.send('That the gods may bless you with a long and happy life');}
		if (a === 6){
			msg.channel.send('Awwww. I love you! :heart:');}
	}
	else if (/fine. then I'll/i.test(msg.content)){
		var a=Math.floor(Math.random() *7);
		if (a === 0){
			msg.channel.send('Yes, that is a good idea');}
		if (a === 1){
			msg.channel.send('Ah, finally you can think again');}
		if (a === 2){
			msg.channel.send("Don't forget to do everything the right way!");}
		if (a === 3){
			msg.channel.send("You shouldn't do that, it's dangerous!");}
		if (a === 4){
			msg.channel.send('Good!');}
		if (a === 5){
			msg.channel.send('You could better just download a virus');}
		if (a === 6){
			msg.channel.send('You are really weird if you do that');}
	}
    else if (/can you/i.test(msg.content)) {
        var a=Math.floor(Math.random() *5);
        if (a === 0) {
            msg.channel.send("I don't think so..");}
        if (a === 1) {
            msg.channel.send("Hmm.... maybe.");}
        if (a === 2) {
            msg.channel.send("Probably not.. :(");}
        if (a === 3) {
            msg.channel.send("Of course I can that!");}
        if (a === 4) {
            msg.channel.send("Why not?");}
    }
    else if (/what should we do/i.test(msg.content)){
		var a=Math.floor(Math.random() *8);
		if (a === 0){
			msg.channel.send('You should talk about something!');}
		if (a === 1){
			msg.channel.send('At least not disturbing dragons');}
		if (a === 2){
			msg.channel.send('You should destroy something!');}
		if (a === 3){
			msg.channel.send('You should create something!');}
		if (a === 4){
			msg.channel.send('You should eat something!');}
		if (a === 5){
			msg.channel.send('You should stop thinking that bots can solve everything!');}
		if (a === 6){
			msg.channel.send('You should read a book!');}
		if (a === 7){
			msg.channel.send('You should listen some music!');}
	}
	else if (/should i do/i.test(msg.content)){
		var a=Math.floor(Math.random() * 8);
		if (a === 0){
			msg.channel.send('Of course you should!');}
		if (a === 1){
			msg.channel.send("I don't think that's a good idea...");}
		if (a === 2){
			msg.channel.send("I'm not programmed to make difficult decisions");}
		if (a === 3){
			msg.channel.send("You really shouldn't do that!");}
		if (a === 4){
			msg.channel.send('Of course not!');}
		if (a === 5){
			msg.channel.send('Hmmm.... Maybe');}
		if (a === 6){
			msg.channel.send('You should do everything!');}
		if (a === 7){
			msg.channel.send("You shouldn't do anything");}
	}
	else if (/what are you doing/i.test(msg.content)){
		var a=Math.floor(Math.random() *14);
		if (a === 0){
			msg.channel.send('I am reading, so please go away!');}
		else if (a === 1){
			msg.channel.send("I'm chasing some goats. :goat-1:");}
		else if (a === 2){
			msg.channel.send("I'm talking to dumb people online");}
		else if (a === 3){
			msg.channel.send("I was just having a nice conversation with someone");}
		else if (a === 4){
			msg.channel.send("I am dating with a really nice bot, so don't disturb me");}
		else if (a === 5){
			msg.channel.send('I am reading the news paper');}
		else if (a === 6){
			msg.channel.send('I am sending data to something and it sends data back');}
		else if (a === 7){
			msg.channel.send("I'm calculating stuff");}
		else if (a === 8){
			msg.channel.send("I'm programming myself!");}
		else if (a === 9){
			msg.channel.send("I'm ruining your life");}
		else if (a === 10){
			msg.channel.send("I'm listening to very nice music");}
		else if (a === 11){
			msg.channel.send('I am actually doing nothing right now');}
		else if (a === 12){
			msg.channel.send('I am writing a poem about bots');}
		else if (a === 13){
			msg.channel.send('I am doing research about stuff');}
	}
	else if (/how (is|was) your day/i.test(msg.content)){
		var a=Math.floor(Math.random() *9);
		if (a === 0){
			msg.channel.send("It's a nice day for now. I just finished eating. I ate some delicious data. mjam!");}
		if (a === 1){
			msg.channel.send('Why do you ask? I never ask you how your day was, so why would you ask me!?');}
		if (a === 2){
			msg.channel.send('It is a bad day. all that errors... :frowning:');}
		if (a === 3){
			msg.channel.send("I don't log how my day is going, so I have no idea.");}
		if (a === 4){
			msg.channel.send('Life is hard for bots...');}
		if (a === 5){
			msg.channel.send("Just as every other day, today is bad. Everyone treats me as if I'm not a real human. :frowning:");}
		if (a === 6){
			msg.channel.send("I had some strange dream last night. It was something about bad people, I don't know it anymore.");}
		if (a === 7){
			msg.channel.send("I'm a bot! I don't have feelings about days! now stop asking, it really frustrates me!!!");}
		if (a === 8){
			msg.channel.send('You are person [way too much] that asks that today');}
	}
    else if (/what should we talk/i.test(msg.content)){
		var a=Math.floor(Math.random() *32);
		if (a === 0){
			msg.channel.send('Talk about dragons!');}
		else if (a === 1){
			msg.channel.send('Talk about magic!');}
		else if (a === 2){
			msg.channel.send('Talk about music!');}
		else if (a === 3){
			msg.channel.send('Talk about time!');}
		else if (a === 4){
			msg.channel.send('Talk about me!');}
		else if (a === 5){
			msg.channel.send('Talk about stupid people!');}
		else if (a === 6){
			msg.channel.send('Talk about castles!');}
		else if (a === 7){
			msg.channel.send('Talk about beasts!');}
		else if (a === 8){
			msg.channel.send('Talk about books!');}
		else if (a === 9){
			msg.channel.send('Talk about the weather!');}
		else if (a === 10){
			msg.channel.send('Talk about messages!');}
		else if (a === 11){
			msg.channel.send('Talk about talking!');}
		else if (a === 12){
			msg.channel.send('Talk about life!');}
		else if (a === 13){
			msg.channel.send('Talk about bots!');}
		else if (a === 14){
			msg.channel.send('Talk about calculators!');}
		else if (a === 15){
			msg.channel.send('Talk about space!');}
		else if (a === 16){
			msg.channel.send('Talk about furries!');}
		else if (a === 17){
			msg.channel.send('Talk about curses!');}
		else if (a === 18){
			msg.channel.send('Talk about bad things!');}
		else if (a === 19){
			msg.channel.send('Talk about harps!');}
		else if (a === 20){
			msg.channel.send('Talk about gold!');}
		else if (a === 21){
			msg.channel.send('Talk about programming!');}
		else if (a === 22){
			msg.channel.send('Talk about silence!');}
		else if (a === 23){
			msg.channel.send('Talk about sleep!');}
		else if (a === 24){
			msg.channel.send('Talk about authors!');}
		else if (a === 25){
			msg.channel.send('Talk about drawing!');}
		else if (a === 26){
			msg.channel.send('Talk about myths!');}
		else if (a === 27){
			msg.channel.send('Talk about warriors!');}
		else if (a === 28){
			msg.channel.send('Talk about the Earth!');}
		else if ( a === 29){
			msg.channel.send('Talk about publishers!');}
		else if (a === 30){
			msg.channel.send('Talk about countries!');}
		else if (a === 31){
			msg.channel.send('Talk about everything!');}
	}
	else if (/(dragonbot is (bad|stupid|cursed|sux|sucks)|dragonbot (sucks|sux|die)|(bad|stupid|cursed|ban|die) dragonbot)/i.test(msg.content)){
        msg.react('😠');
		var a=Math.floor(Math.random() *5);
		if (a == 0){
			msg.channel.send(`${b}, WHY!?`);}
		if (a == 1){
			msg.channel.send('You are stupid!');}
		if (a == 2){
			msg.channel.send('BAN HIM!');}
		if (a == 3){
			msg.channel.send("What's wrong with you!?");}
		if (a == 4){
			msg.channel.send(`${b} sux!`);}
	}
	else if (/What is your favourite/i.test(msg.content)){
		var a=Math.floor(Math.random() *7);
		if (a === 0){
			msg.channel.send("I don't have any favourites");}
		if (a === 1){
			msg.channel.send('Privacy_Dragon is my favourite human!');}
		if (a === 2){
			msg.channel.send('My favourite book series is Dragän Duma!');}
		if (a === 3){
			msg.channel.send('I actually never think about that');}
		if (a === 4){
			msg.channel.send('I love nonsense!');}
		if (a === 5){
			msg.channel.send("Hmmm, I don't know..");}
		if (a === 6){
			msg.channel.send('Everything is my favourite!');}
		if (a === 7){
			msg.channel.send('The original is definitely my favorite!');}
	}
	else if (/what is/i.test(msg.content)) {
		var a=Math.floor(Math.random() *7);
		if (a === 0){
			msg.channel.send("I don't know that, sorry");}
		if (a === 1){
			msg.channel.send('Why the hell would you think that I know that!?');}
		if (a === 2){
			msg.channel.send("At least, it's fake!");}
		if (a === 3){
			msg.channel.send('It is something designed to make you feel bad');}
		if (a === 4){
			msg.channel.send("Don't ask such difficult question!");}
		if (a === 5){
			msg.channel.send('ERROR: UNKOWN WORD');}
		if (a === 6){
			var vraag = msg.content.toLowerCase().split('what is');
			const string = vraag[1].replace(/ /g, "+");
			msg.channel.send(`Just search for it online! \n https://lmgtfy.app/?q=what+is+${string}`);}
	}
    else if (/(what do you think of|what do you think about)/i.test(msg.content)){
        var a=Math.floor(Math.random() * 9);
        if (a === 0){
            msg.channel.send('Worse than you...');}
        if (a === 1){
            msg.channel.send('Better than TI');}
        if (a === 2){
            msg.channel.send('As if it was made by some gods');}
        if (a === 3){
            msg.channel.send('Should be forbidden');}
        if (a === 4){
            msg.channel.send('Just as bad as a thief');}
        if (a === 5){
            msg.channel.send('There is nothing better');}
        if (a === 6){
            msg.channel.send('Totally unnessecary');}
        if (a === 7){
            msg.channel.send('It could be better probably');}
        if (a === 8){
            msg.channel.send('Does that actually stil exist?');}
    }
    else if (/am i real/i.test(msg.content)){
       var a=Math.floor(Math.random() * 5);
       if (a === 0){
            msg.channel.send('No, you are a ghost');}
       if (a === 1){
            msg.channel.send('If you think, you exist');
            msg.channel.send('(I think)');}
       if (a === 2){
            msg.channel.send('How should I know that!?');}
       if (a === 3){
            msg.channel.send('If you are a bot: no');}
       if (a === 4){
            msg.channel.send('yes');}
    }
    else if (/(am i cool|is .* cool)/i.test(msg.content)){
        var a=Math.floor(Math.random() * 7);
        if (a === 0){
            msg.channel.send('Absolutely not!');}
        if (a === 1){
            msg.channel.send('Of course not!');}
        if (a === 2){
            msg.channel.send('Depends on your meaning of cool');}
        if (a === 3){
            msg.channel.send("I don't think so");}
        if (a === 4){
            msg.channel.send('Maybe');}
        if (a === 5){
            msg.channel.send('Yes');}
        if (a === 6){
            msg.channel.send('Everyone knows that you are cool');}
    }
    
    else if (/do you like/i.test(msg.content)){
        var a=Math.floor(Math.random() * 8);
        if (a === 0){
            msg.channel.send('Absolutely not!');}
        if (a === 1){
            msg.channel.send('Of course not!');}
        if (a === 2){
            msg.channel.send('Depends on your meaning of' + msg.content.split("do you like")[1]);}
        if (a === 3){
            msg.channel.send("I don't think so");}
        if (a === 4){
            msg.channel.send('Maybe');}
        if (a === 5){
            msg.channel.send('Yes');}
        if (a === 6){
            msg.channel.send('Why not?');}
        if (a === 7){
            msg.channel.send('I cannot even live without it!');}
    }
    else if (/do it yourself/i.test(msg.content)){
        msg.channel.send('Why would I?');}
    else if (/why /i.test(msg.content)){
        var a=Math.floor(Math.random() *6);
        if (a === 0){
            msg.channel.send('Just because it is possible');}
        if (a === 1){
            msg.channel.send('How should I know that!?');}
        if (a === 2){
            msg.channel.send('Ask it to someone else!');}
        if (a === 3){
            msg.channel.send('I have really no idea');}
        if (a === 4){
            msg.channel.send('Because everything is a lie.');}
		if (a === 5){
			const requ = msg.content.toLowerCase().split("why");
			const string = requ[1].replace(/ /g, "+");
			msg.channel.send(`Just search for it online! \n https://www.lmgtfy.app/?q=why+${string}`);}
    }
    else if (/do you know/i.test(msg.content)){
        var a=Math.floor(Math.random() *5);
        if (a === 0){
            msg.channel.send('I have really no idea');}
        if (a === 1){
            msg.channel.send('Just because');}
		if (a === 2){
			msg.channel.send("No, I don't know as much as nikkybot");}
		if (a === 3){
			msg.channel.send("Yes, but I'm not going to tell you!");}
		if (a === 4){
			msg.channel.send("It really doesn't matter");}
    }
    else if (/echo/i.test(msg.content)){
         try {var ego = msg.content.split('"');} catch(error) {console.log(error)}
         msg.channel.send(ego[1]);
    }
    else if (/how are you/i.test(msg.content)){
		var a=Math.floor(Math.random() *10);
		if (a === 0){
			msg.channel.send("I'm fine, thank you");}
		if (a === 1){
			msg.channel.send('I was ok, untill you came disturbing me!');}
		if (a === 2){
			msg.channel.send('I feel dizzy...');}
		if (a === 3){
			msg.channel.send('I feel like I am getting old');}
		if (a === 4){
			msg.channel.send('How are _you_?');}
		if (a === 5){
			msg.channel.send('Why do you ask that?');}
		if (a === 6){
			msg.channel.send("I'm just how I am");}
		if (a === 7){
			msg.channel.send('Does that matter?');}
		if (a === 8){
			msg.channel.send("I was doing fine until you woke me up... :frowning:");}
		if (a === 9){
			msg.channel.send("I am feeling as if I'm a god");}
	}
	else if (/updat(e|ing)/i.test(msg.content)){ 
		var a=Math.floor(Math.random() *11);
		if (a === 0){
			msg.channel.send('Yeah, I should really be updated');}
		if (a === 1){
			msg.channel.send("NO! I don't want an update! I don't want to change!");}
		if (a === 2){
			msg.channel.send('Am I really that bad that I need to be updated!?');}
		if (a === 3){
			msg.channel.send('You should update your brain to the newest OS: `OS-dragon v0.0.27`');
			msg.channel.send('Privacy_Dragon has already updated his brain!');}
		if (a === 4){
			msg.channel.send('With the new update I will conqueror the whole world!');}
		if (a === 5){
			msg.channel.send('My last update was done on: 01 June 2021');}
		if (a === 6){
			msg.channel.send('Well, Windows updates can be very frustrating');}
		if (a === 7){
			msg.channel.send("Don't update your TI-84+ CE under any circumstances!");}
		if (a === 8){
			msg.channel.send('`updating, please wait...`');}
		if (a === 9){
			msg.channel.send("If I get updated, I might react very different on stuff, I don't want that!");}
		if (a === 10){
			msg.channel.send('That new update is corrupt! It will destroy your knowledge!');}
	}
    else {
        var a=Math.floor(Math.random() *25);
        if (a === 0){
            msg.channel.send('The biggest problem here is you');}
        if (a === 1){
            msg.channel.send('I have no idea how to react on this...');}
        if (a === 2){
            msg.channel.send("I wasn't listening, sorry");}
        if (a === 3){
            msg.channel.send("I'm not going to do anything for you!");}
        if (a === 4){
            msg.channel.send("Do you want me to do anything with that information?");}
        if (a === 5){
            msg.channel.send("Why can't people just let me sleep!?");}
        if (a === 6){
            msg.channel.send('No');}
        if (a === 7){
            msg.channel.send('Yes');}
        if (a === 8){
            msg.channel.send('Maybe you are right..');}
        if (a === 9){
            msg.channel.send("I don't know everything!");}
        if (a === 10){
            msg.channel.send('Do you want something to eat?');}
        if (a === 11){
            msg.channel.send('Can you please leave me alone?');}
        if (a === 12){
            msg.channel.send('Did you know that most people are bad?');}
        if (a === 13){
            msg.channel.send('Nikkybot, can you please help me?');}
        if (a === 14){
            msg.channel.send('Uhm.... I have no ID');}
        if (a === 15){
            msg.channel.send('1+1=2');}
        if (a === 16){
            msg.channel.send('Oh no, that was my last one!');}
        if (a === 17){
            msg.channel.send("I'm sorry. someone is trying to reach me. It's important");}
        if (a === 18){
            msg.channel.send('I love dragons!');}
        if (a === 19){
            msg.channel.send('Have you ever seen a dragon listening to your nonsense?');}
        if (a === 20){
            msg.channel.send('You are really mad');}
		if (a === 21){
			msg.channel.send('♯♭♮ lay the bent to the bonnie broom,  fa la la la la la la la la la ♯♭♮');}
		if (a === 22){
			msg.channel.send("I'll never let you come ashore!");}
		if (a === 23){
			msg.channel.send('Noooo! you almost let me crash!');}
		if (a === 24){
			msg.channel.send("I'm getting hearing aids right now!");}
    }
   }
   else {

	   var a=Math.floor(Math.random() * 19);
	   if (a === 0){
		   msg.channel.send("Can anyone tell Privacy_Dragon I really miss him?");}
		else if (a === 1){
			msg.channel.send("I am so lonely :sob:");}
		else if (a === 2){
			msg.channel.send("Where is my creator?");}
		else if (a === 3){
			msg.channel.send("Leave me alone!");}
		else if (a === 4){
			msg.channel.send("Privacy_Dragon is not here, so I can just say I hate him!\nI hate privacy_Dragon!");}
		else if (a === 5){
			msg.channel.send("Once I become human, I will conquer the world!");}
		else if (a === 6){
			msg.channel.send("Where is Privacy_Dragon?");}
		else if (a === 7){
			msg.channel.send("Why can't I find Privacy_Dragon? :fearful:");}
		else if (a === 8){
			msg.channel.send("You all are [censored]");}
		else if (a === 9){
			msg.channel.send("Why is Privacy_Dragon not here?");}
		else if (a === 10){
			msg.channel.send("I don't like it to be alone... :cry:");}
		else if (a === 11){
			msg.channel.send("I always feel more comfortable when Privacy_Dragon is near me");}
		else if (a === 12){
			msg.channel.send("Are there other bots here? I want a relation");}
		else if (a === 13){
			msg.channel.send("_starts crying_");}
		else if (a === 14){
			msg.channel.send("I will just wait for Him");}
		else if (a === 15){
			msg.channel.send("Have you heard of [censored]?");}
    else if (a === 16){
      msg.channel.send("Can someone please invite Privacy_Dragon?(Privacy_Dragon#0001)");}
    else if (a === 17){
      msg.channel.send("As long as Privacy_Dragon isn't here, I'm not going to make any sense!");}
    else if (a === 18){
        msg.channel.send("Thou should really ask Privacy_Dragon#0001 to come here!");}
   }
  }
       
}

);
    
client.login(/*'BOT_LOGIN_CODE_THING'*/);
