const input_txt_box = document.querySelector('.input-txt');
const output_txt_box = document.querySelector('.output-txt');

const convert_btn = document.querySelector('.convert-btn');
const reset_btn = document.querySelector('.reset-btn');

const irregular_eng_vbs = {
  "awake": {"base":"awake","3rd-pers-pres":"awakes","past":"awoke","past-pt":"awoken","pres-pt":"awaking"},
  "be": {"base":"be","3rd-pers-pres":"is","past":"was","past-pt":"been","pres-pt":"being"},
  "bear": {"base":"bear","3rd-pers-pres":"bears","past":"bore","past-pt":"borne","pres-pt":"bearing"},
  "beat": {"base":"beat","3rd-pers-pres":"beats","past":"beat","past-pt":"beaten","pres-pt":"beating"},
  "become": {"base":"become","3rd-pers-pres":"becomes","past":"became","past-pt":"become","pres-pt":"becoming"},
  "begin": {"base":"begin","3rd-pers-pres":"begins","past":"began","past-pt":"begun","pres-pt":"beginning"},
  "bend": {"base":"bend","3rd-pers-pres":"bends","past":"bent","past-pt":"bent","pres-pt":"bending"},
  "bet": {"base":"bet","3rd-pers-pres":"bets","past":"bet","past-pt":"bet","pres-pt":"betting"},
  "bid": {"base":"bid","3rd-pers-pres":"bids","past":"bid","past-pt":"bid","pres-pt":"bidding"},
  "bite": {"base":"bite","3rd-pers-pres":"bites","past":"bit","past-pt":"bitten","pres-pt":"biting"},
  "bleed": {"base":"bleed","3rd-pers-pres":"bleeds","past":"bled","past-pt":"bled","pres-pt":"bleeding"},
  "blow": {"base":"blow","3rd-pers-pres":"blows","past":"blew","past-pt":"blown","pres-pt":"blowing"},
  "break": {"base":"break","3rd-pers-pres":"breaks","past":"broke","past-pt":"broken","pres-pt":"breaking"},
  "breed": {"base":"breed","3rd-pers-pres":"breeds","past":"bred","past-pt":"bred","pres-pt":"breeding"},
  "bring": {"base":"bring","3rd-pers-pres":"brings","past":"brought","past-pt":"brought","pres-pt":"bringing"},
  "broadcast": {"base":"broadcast","3rd-pers-pres":"broadcasts","past":"broadcast","past-pt":"broadcast","pres-pt":"broadcasting"},
  "build": {"base":"build","3rd-pers-pres":"builds","past":"built","past-pt":"built","pres-pt":"building"},
  "burn": {"base":"burn","3rd-pers-pres":"burns","past":"burned","past-pt":"burned","pres-pt":"burning"},
  "burst": {"base":"burst","3rd-pers-pres":"bursts","past":"burst","past-pt":"burst","pres-pt":"bursting"},
  "buy": {"base":"buy","3rd-pers-pres":"buys","past":"bought","past-pt":"bought","pres-pt":"buying"},
  "catch": {"base":"catch","3rd-pers-pres":"catches","past":"caught","past-pt":"caught","pres-pt":"catching"},
  "choose": {"base":"choose","3rd-pers-pres":"chooses","past":"chose","past-pt":"chosen","pres-pt":"choosing"},
  "come": {"base":"come","3rd-pers-pres":"comes","past":"came","past-pt":"come","pres-pt":"coming"},
  "cost": {"base":"cost","3rd-pers-pres":"costs","past":"cost","past-pt":"cost","pres-pt":"costing"},
  "cut": {"base":"cut","3rd-pers-pres":"cuts","past":"cut","past-pt":"cut","pres-pt":"cutting"},
  "deal": {"base":"deal","3rd-pers-pres":"deals","past":"dealt","past-pt":"dealt","pres-pt":"dealing"},
  "dig": {"base":"dig","3rd-pers-pres":"digs","past":"dug","past-pt":"dug","pres-pt":"digging"},
  "do": {"base":"do","3rd-pers-pres":"does","past":"did","past-pt":"done","pres-pt":"doing"},
  "draw": {"base":"draw","3rd-pers-pres":"draws","past":"drew","past-pt":"drawn","pres-pt":"drawing"},
  "dream": {"base":"dream","3rd-pers-pres":"dreams","past":"dreamed","past-pt":"dreamed","pres-pt":"dreaming"},
  "drink": {"base":"drink","3rd-pers-pres":"drinks","past":"drank","past-pt":"drunk","pres-pt":"drinking"},
  "drive": {"base":"drive","3rd-pers-pres":"drives","past":"drove","past-pt":"driven","pres-pt":"driving"},
  "eat": {"base":"eat","3rd-pers-pres":"eats","past":"ate","past-pt":"eaten","pres-pt":"eating"},
  "fall": {"base":"fall","3rd-pers-pres":"falls","past":"fell","past-pt":"fallen","pres-pt":"falling"},
  "feed": {"base":"feed","3rd-pers-pres":"feeds","past":"fed","past-pt":"fed","pres-pt":"feeding"},
  "feel": {"base":"feel","3rd-pers-pres":"feels","past":"felt","past-pt":"felt","pres-pt":"feeling"},
  "fight": {"base":"fight","3rd-pers-pres":"fights","past":"fought","past-pt":"fought","pres-pt":"fighting"},
  "find": {"base":"find","3rd-pers-pres":"finds","past":"found","past-pt":"found","pres-pt":"finding"},
  "fly": {"base":"fly","3rd-pers-pres":"flies","past":"flew","past-pt":"flown","pres-pt":"flying"},
  "forget": {"base":"forget","3rd-pers-pres":"forgets","past":"forgot","past-pt":"forgotten","pres-pt":"forgetting"},
  "forgive": {"base":"forgive","3rd-pers-pres":"forgives","past":"forgave","past-pt":"forgiven","pres-pt":"forgiving"},
  "freeze": {"base":"freeze","3rd-pers-pres":"freezes","past":"froze","past-pt":"frozen","pres-pt":"freezing"},
  "get": {"base":"get","3rd-pers-pres":"gets","past":"got","past-pt":"got","pres-pt":"getting"},
  "give": {"base":"give","3rd-pers-pres":"gives","past":"gave","past-pt":"given","pres-pt":"giving"},
  "go": {"base":"go","3rd-pers-pres":"goes","past":"went","past-pt":"gone","pres-pt":"going"},
  "grind": {"base":"grind","3rd-pers-pres":"grinds","past":"ground","past-pt":"ground","pres-pt":"grinding"},
  "grow": {"base":"grow","3rd-pers-pres":"grows","past":"grew","past-pt":"grown","pres-pt":"growing"},
  "hang": {"base":"hang","3rd-pers-pres":"hangs","past":"hung","past-pt":"hung","pres-pt":"hanging"},
  "have": {"base":"have","3rd-pers-pres":"has","past":"had","past-pt":"had","pres-pt":"having"},
  "hear": {"base":"hear","3rd-pers-pres":"hears","past":"heard","past-pt":"heard","pres-pt":"hearing"},
  "hide": {"base":"hide","3rd-pers-pres":"hides","past":"hid","past-pt":"hidden","pres-pt":"hiding"},
  "hit": {"base":"hit","3rd-pers-pres":"hits","past":"hit","past-pt":"hit","pres-pt":"hitting"},
  "hold": {"base":"hold","3rd-pers-pres":"holds","past":"held","past-pt":"held","pres-pt":"holding"},
  "hurt": {"base":"hurt","3rd-pers-pres":"hurts","past":"hurt","past-pt":"hurt","pres-pt":"hurting"},
  "keep": {"base":"keep","3rd-pers-pres":"keeps","past":"kept","past-pt":"kept","pres-pt":"keeping"},
  "know": {"base":"know","3rd-pers-pres":"knows","past":"knew","past-pt":"known","pres-pt":"knowing"},
  "lay": {"base":"lay","3rd-pers-pres":"lays","past":"laid","past-pt":"laid","pres-pt":"laying"},
  "lead": {"base":"lead","3rd-pers-pres":"leads","past":"led","past-pt":"led","pres-pt":"leading"},
  "leave": {"base":"leave","3rd-pers-pres":"leaves","past":"left","past-pt":"left","pres-pt":"leaving"},
  "lend": {"base":"lend","3rd-pers-pres":"lends","past":"lent","past-pt":"lent","pres-pt":"lending"},
  "let": {"base":"let","3rd-pers-pres":"lets","past":"let","past-pt":"let","pres-pt":"letting"},
  "lie": {"base":"lie","3rd-pers-pres":"lies","past":"lay","past-pt":"lain","pres-pt":"lying"},
  "lose": {"base":"lose","3rd-pers-pres":"loses","past":"lost","past-pt":"lost","pres-pt":"losing"},
  "make": {"base":"make","3rd-pers-pres":"makes","past":"made","past-pt":"made","pres-pt":"making"},
  "mean": {"base":"mean","3rd-pers-pres":"means","past":"meant","past-pt":"meant","pres-pt":"meaning"},
  "meet": {"base":"meet","3rd-pers-pres":"meets","past":"met","past-pt":"met","pres-pt":"meeting"},
  "pay": {"base":"pay","3rd-pers-pres":"pays","past":"paid","past-pt":"paid","pres-pt":"paying"},
  "put": {"base":"put","3rd-pers-pres":"puts","past":"put","past-pt":"put","pres-pt":"putting"},
  "quit": {"base":"quit","3rd-pers-pres":"quits","past":"quit","past-pt":"quit","pres-pt":"quitting"},
  "read": {"base":"read","3rd-pers-pres":"reads","past":"read","past-pt":"read","pres-pt":"reading"},
  "ride": {"base":"ride","3rd-pers-pres":"rides","past":"rode","past-pt":"ridden","pres-pt":"riding"},
  "ring": {"base":"ring","3rd-pers-pres":"rings","past":"rang","past-pt":"rung","pres-pt":"ringing"},
  "rise": {"base":"rise","3rd-pers-pres":"rises","past":"rose","past-pt":"risen","pres-pt":"rising"},
  "run": {"base":"run","3rd-pers-pres":"runs","past":"ran","past-pt":"run","pres-pt":"running"},
  "say": {"base":"say","3rd-pers-pres":"says","past":"said","past-pt":"said","pres-pt":"saying"},
  "see": {"base":"see","3rd-pers-pres":"sees","past":"saw","past-pt":"seen","pres-pt":"seeing"},
  "sell": {"base":"sell","3rd-pers-pres":"sells","past":"sold","past-pt":"sold","pres-pt":"selling"},
  "send": {"base":"send","3rd-pers-pres":"sends","past":"sent","past-pt":"sent","pres-pt":"sending"},
  "set": {"base":"set","3rd-pers-pres":"sets","past":"set","past-pt":"set","pres-pt":"setting"},
  "shake": {"base":"shake","3rd-pers-pres":"shakes","past":"shook","past-pt":"shaken","pres-pt":"shaking"},
  "shed": {"base":"shed","3rd-pers-pres":"sheds","past":"shed","past-pt":"shed","pres-pt":"shedding"},
  "shine": {"base":"shine","3rd-pers-pres":"shines","past":"shone","past-pt":"shone","pres-pt":"shining"},
  "shoot": {"base":"shoot","3rd-pers-pres":"shoots","past":"shot","past-pt":"shot","pres-pt":"shooting"},
  "show": {"base":"show","3rd-pers-pres":"shows","past":"showed","past-pt":"shown","pres-pt":"showing"},
  "shut": {"base":"shut","3rd-pers-pres":"shut","past":"shut","past-pt":"shut","pres-pt":"shutting"},
  "sing": {"base":"sing","3rd-pers-pres":"sings","past":"sang","past-pt":"sung","pres-pt":"singing"},
  "sink": {"base":"sink","3rd-pers-pres":"sinks","past":"sank","past-pt":"sunk","pres-pt":"sinking"},
  "sit": {"base":"sit","3rd-pers-pres":"sits","past":"sat","past-pt":"sat","pres-pt":"sitting"},
  "sleep": {"base":"sleep","3rd-pers-pres":"sleeps","past":"slept","past-pt":"slept","pres-pt":"sleeping"},
  "speak": {"base":"speak","3rd-pers-pres":"speaks","past":"spoke","past-pt":"spoken","pres-pt":"speaking"},
  "spend": {"base":"spend","3rd-pers-pres":"spends","past":"spent","past-pt":"spent","pres-pt":"spending"},
  "spill": {"base":"spill","3rd-pers-pres":"spills","past":"spilt","past-pt":"spilled","pres-pt":"spilling"},
  "stand": {"base":"stand","3rd-pers-pres":"stands","past":"stood","past-pt":"stood","pres-pt":"standing"},
  "steal": {"base":"steal","3rd-pers-pres":"steals","past":"stole","past-pt":"stolen","pres-pt":"stealing"},
  "stick": {"base":"stick","3rd-pers-pres":"sticks","past":"stuck","past-pt":"stuck","pres-pt":"sticking"},
  "sting": {"base":"sting","3rd-pers-pres":"stings","past":"stung","past-pt":"stung","pres-pt":"stinging"},
  "stink": {"base":"stink","3rd-pers-pres":"stinks","past":"stank","past-pt":"stunk","pres-pt":"stinking"},
  "stride": {"base":"stride","3rd-pers-pres":"strides","past":"strode","past-pt":"stridden","pres-pt":"striding"},
  "strike": {"base":"strike","3rd-pers-pres":"strikes","past":"struck","past-pt":"struck","pres-pt":"striking"},
  "swear": {"base":"swear","3rd-pers-pres":"swears","past":"swore","past-pt":"sworn","pres-pt":"swearing"},
  "sweep": {"base":"sweep","3rd-pers-pres":"sweeps","past":"swept","past-pt":"swept","pres-pt":"sweeping"},
  "swim": {"base":"swim","3rd-pers-pres":"swims","past":"swam","past-pt":"swum","pres-pt":"swimming"},
  "swing": {"base":"swing","3rd-pers-pres":"swings","past":"swung","past-pt":"swung","pres-pt":"swinging"},
  "take": {"base":"take","3rd-pers-pres":"takes","past":"took","past-pt":"taken","pres-pt":"taking"},
  "teach": {"base":"teach","3rd-pers-pres":"teaches","past":"taught","past-pt":"taught","pres-pt":"teaching"},
  "tear": {"base":"tear","3rd-pers-pres":"tears","past":"tore","past-pt":"torn","pres-pt":"tearing"},
  "tell": {"base":"tell","3rd-pers-pres":"tells","past":"told","past-pt":"told","pres-pt":"telling"},
  "think": {"base":"think","3rd-pers-pres":"thinks","past":"thought","past-pt":"thought","pres-pt":"thinking"},
  "throw": {"base":"throw","3rd-pers-pres":"throws","past":"threw","past-pt":"thrown","pres-pt":"throwing"},
  "understand": {"base":"understand","3rd-pers-pres":"understands","past":"understood","past-pt":"understood","pres-pt":"understanding"},
  "wake": {"base":"wake","3rd-pers-pres":"wakes","past":"woke","past-pt":"woken","pres-pt":"waking"},
  "wear": {"base":"wear","3rd-pers-pres":"wears","past":"wore","past-pt":"worn","pres-pt":"wearing"},
  "win": {"base":"win","3rd-pers-pres":"wins","past":"won","past-pt":"won","pres-pt":"winning"},
  "write": {"base":"write","3rd-pers-pres":"writes","past":"wrote","past-pt":"written","pres-pt":"writing"}
};

convert_btn.addEventListener('click', convertInputTxt);
reset_btn.addEventListener('click', resetTxtBoxes);

function convertInputTxt() {
    // console.log("Input box contains:\n%s", input_txt_box.value);  
    const input_lines = input_txt_box.value;
    if (input_lines.length === 0) {
	console.log("Nothing in input textarea! Aborting...");
	return;
    }
    const lines_list = input_lines.split('\n');

    flashcard_lines = lines_list
	.filter(line => line !== "")
	.map(line => process_line(line));

    output_txt_box.value = flashcard_lines.join('\n');
}

const dummy_txt = `habeo, habere, habui, habitum: have
verbero, verberare, verberavi, verberatum: beat
sum, esse, fui: be
agito, agitare, agitavi, agitatum: chase`;

function resetTxtBoxes() {
    // console.log('reset pressed');
    const txtBoxes = document.querySelectorAll('.textbox');
    // console.log(`Found ${txtBoxes.length} textboxes`);
    txtBoxes.forEach((tBx, _) => {
	tBx.value = "";
    });
    // txtBoxes[0].value = dummy_txt;
}

function process_line(line) {
    if (!line.includes(":")) return "Bad line!";
    const [vocab_entry, meaning] = line
	  .split(':')
	  .map(part => part.trim());
    // console.log(`${vocab_entry}`);
    // console.log(`${meaning}`);
    const entry = irregular_eng_vbs[meaning] ?? create_regular_entry(meaning);
    // console.log(entry);
    const pps = vocab_entry.split(',').map(part => part.trim());

    const templates = [
	(pp, e) => `${pp} : I ${e["base"]}`,
	(pp, e) => `${pp} : to ${e["base"]}`,
	(pp, e) => `${pp} : I ${e["past"]}`,
	(pp, e) => {
	    if (pp.endsWith('m')) pp = pp.slice(0, -1) + 's';
	    return `${pp} : having been ${e["past-pt"]}`;
	}
    ];

    return pps.map((pp, i) => templates[i](pp, entry)).join('\n');
}

function create_regular_entry(meaning) {
    const stem = meaning.endsWith('e') ? meaning.slice(0, -1) : meaning;

    return {
	"base": meaning,
	"3rd-pers-pres": `${meaning}s`,
	"past": `${stem}ed`,
	"past-pt": `${stem}ed`,
	"pres-pt": `${stem}ing`
    };
}
