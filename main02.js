//գրաբար
const questions = [ 
    {
        question: "ինչպէ՞ս է գրուում «վերին» բառը", //1
        answers: [
            { Text: "վերոյ",  correct: true},
            { Text: "վերյալ",  correct: false},
            { Text: "վերյա",  correct: false},
            { Text: "վերին",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «տարի» բառը", //2
        answers: [
            { Text: "տարուու",  correct: false},
            { Text: "տարոյն",  correct: false},
            { Text: "տարեաւ",  correct: true},
            { Text: "տարի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ասեղն» բառը", //3 
        answers: [
            { Text: "ասեղոյն",  correct: false},
            { Text: "ասղան",  correct: true},
            { Text: "ասղոյ",  correct: false},
            { Text: "ասղի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «հուր» բառը", //4 
        answers: [
            { Text: "հրոյ",  correct: true},
            { Text: "հուրո",  correct: false},
            { Text: "հուր",  correct: false},
            { Text: "հրոյի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «թիթեղն» բառը", //5
        answers: [
            { Text: "թիթեղոյ",  correct: false},
            { Text: "թիթղու",  correct: false},
            { Text: "թիթղո",  correct: false},
            { Text: "թիթղան",  correct: true},
       ]
    }, 
    {
        question: "ինչպէ՞ս է գրուում «մարմին» բառը", //6
        answers: [
            { Text: "մարմուոյ",  correct: false},
            { Text: "մարմյա",  correct: false},
            { Text: "մարմնոյ",  correct: true},
            { Text: "մարմնայ",  correct: false},
       ]
    }, 
    {
        question: "ինչպէ՞ս է գրուում «հեղուլ» բառը", //7
        answers: [
            { Text: "յեղլուր",  correct: false},
            { Text: "հեղլոյ",  correct: true},
            { Text: "հեղույ",  correct: false},
            { Text: "յեղուղ",  correct: false},
       ]
    }, 
    {
        question: "ինչպէ՞ս է գրուում «բարի» բառը", //8
        answers: [
            { Text: "բարուոյն",  correct: false},
            { Text: "բարուոյ",  correct: false},
            { Text: "բարեաւ",  correct: true},
            { Text: "բարիան",  correct: false},
       ]
    }, 
    {
        question: "ինչպէ՞ս է գրուում «պատիվ» բառը", //9
        answers: [
            { Text: "պատուոյ",  correct: false},
            { Text: "պատուի",  correct: false},
            { Text: "պատվոյն",  correct: true},
            { Text: "պատիւ",  correct: false},
       ]
    }, 
    {
        question: "ինչպէ՞ս է գրուում «սիրվում է» բառը", //10 
        answers: [
            { Text: "սիրեա",  correct: true},
            { Text: "պսիրուոյ",  correct: false},
            { Text: "սիրի",  correct: false},
            { Text: "սիրին",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «լցնում է» բառը", //11
        answers: [
            { Text: "լցուն",  correct: false},
            { Text: "լցանէ",  correct: false},
            { Text: "լցուոյ",  correct: false},
            { Text: "լնու",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «տներ» բառը", //12
        answers: [
            { Text: "տնուար",  correct: false},
            { Text: "տներ",  correct: false},
            { Text: "տների",  correct: false},
            { Text: "տունք",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ընթերցել» բառը", //13
        answers: [
            { Text: "ընթերցել",  correct: false},
            { Text: "ընթեռնուլ",  correct: true},
            { Text: "ընթեռնոյ",  correct: false},
            { Text: "ընթերցեալ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ձայնից» բառը", //14
        answers: [
            { Text: "ձայնոց",  correct: false},
            { Text: "ձայնուոյ",  correct: false},
            { Text: "ձայնէ",  correct: true},
            { Text: "ձայնեաց",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «դստրերից» բառը", //15
        answers: [
            { Text: "ի դստերց",  correct: true},
            { Text: "դստրուք",  correct: false},
            { Text: "ի դստրոյ",  correct: false},
            { Text: "դստրերից",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «գանձերից» բառը", //16
        answers: [
            { Text: "ի գանձերց",  correct: false},
            { Text: "գանձուք",  correct: false},
            { Text: "ի գանձուց",  correct: true},
            { Text: "գանձաց",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «մեռ» բառը", //17
        answers: [
            { Text: "մեռեալ",  correct: false},
            { Text: "ի մեռեաց",  correct: false},
            { Text: "մեռից",  correct: false},
            { Text: "մեռանիմ",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «զեն» բառը", //18
        answers: [
            { Text: "զենեոլ",  correct: false},
            { Text: "ի զենեաց",  correct: false},
            { Text: "զենեալ",  correct: false},
            { Text: "զենուլ",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «զարթ» բառը", //19
        answers: [
            { Text: "զզարթոնք",  correct: false},
            { Text: "զարթնուլ",  correct: true},
            { Text: "զարթնեալ",  correct: false},
            { Text: "զարթեալ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «երկ» բառը", //20
        answers: [
            { Text: "եռկեալ",  correct: false},
            { Text: "երկնչուլ",  correct: false},
            { Text: "երկնչիմ",  correct: true},
            { Text: "երկին",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «գիտել» բառը", //21
        answers: [
            { Text: "գիտացայ",  correct: false},
            { Text: "գիտաց",  correct: true},
            { Text: "գիտեալ",  correct: false},
            { Text: "գիտիմ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «գրեք» բառը", //22 
        answers: [
            { Text: "գրեայք",  correct: false},
            { Text: "գրեաց",  correct: false},
            { Text: "գրեցաք",  correct: true},
            { Text: "գրեաք",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «բուս» բառը", //23
        answers: [
            { Text: "գբուսաց",  correct: false},
            { Text: "բուսեալ",  correct: false},
            { Text: "բուսոյ",  correct: false},
            { Text: "բուսանիմ",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «արգել» բառը", //24
        answers: [
            { Text: "արգելուլ",  correct: true},
            { Text: "արգելաց",  correct: false},
            { Text: "արգեն",  correct: false},
            { Text: "արգեան",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «կէզ» բառը", //25 
        answers: [
            { Text: "կիզեալ",  correct: false},
            { Text: "կիզուոյ",  correct: false},
            { Text: "կիզուլ",  correct: true},
            { Text: "կիզեաց",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «հեծ» բառը", //26 
        answers: [
            { Text: "հեծիք",  correct: false},
            { Text: "հեծնուլ",  correct: true},
            { Text: "հեծաց",  correct: false},
            { Text: "հեծեն",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «խորհիմ» բառը", //27 
        answers: [
            { Text: "խորհեցեալ",  correct: true},
            { Text: "խորհինս",  correct: false},
            { Text: "խորհինց",  correct: false},
            { Text: "ի խորհուք",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այստեղ» բառը", //28
        answers: [
            { Text: "անդր",  correct: false},
            { Text: "այդր",  correct: false},
            { Text: "այսր",  correct: true},
            { Text: "այստի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այնտեղ» բառը", //29
        answers: [
            { Text: "ընդի",  correct: false},
            { Text: "անդր",  correct: true},
            { Text: "այսր",  correct: false},
            { Text: "այստի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այնտեղից» բառը", //30 
        answers: [
            { Text: "ընդի",  correct: false},
            { Text: "անդր",  correct: false},
            { Text: "այսր",  correct: false},
            { Text: "անտի",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այր մի» բառը", //31 
        answers: [
            { Text: "կանայ",  correct: false},
            { Text: "մի կին",  correct: false},
            { Text: "մի մարդ",  correct: true},
            { Text: "տղամարդ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «կլսեն» բառը", //32
        answers: [
            { Text: "կը լսուի",  correct: false},
            { Text: "լուիցեն",  correct: true},
            { Text: "լսուի",  correct: false},
            { Text: "լսուոյ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «հիշել» բառը", //33
        answers: [
            { Text: "յիեալ",  correct: false},
            { Text: "հիուալ",  correct: false},
            { Text: "հիշեա",  correct: false},
            { Text: "յիշեաց",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «զարմանալ» բառը", //34
        answers: [
            { Text: "ղառմեցուցեալ",  correct: false},
            { Text: "զարմեաց",  correct: false},
            { Text: "զարմաց",  correct: true},
            { Text: "զարմինչ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «բազմացնել» բառը", //35 
        answers: [
            { Text: "բազմեցեալ",  correct: false},
            { Text: "բազմացուցանել",  correct: true},
            { Text: "բազմից",  correct: false},
            { Text: "բազմացից",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «թռցնել» բառը", //36 
        answers: [
            { Text: "թռեաց ի զոր",  correct: false},
            { Text: "թռինս",  correct: false},
            { Text: "թռեաց",  correct: false},
            { Text: "թռուցանել",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «տաքացնել» բառը", //37
        answers: [
            { Text: "ի տաքեաց",  correct: false},
            { Text: "տաքոնց",  correct: false},
            { Text: "ջեռնուլ",  correct: true},
            { Text: "ջեռեալ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «դուրս հանել» բառը", //38
        answers: [
            { Text: "ընչաց",  correct: false},
            { Text: "ելուզանել",  correct: true},
            { Text: "ելուզ",  correct: false},
            { Text: "ելուզնեաց",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «կուլ տալ» բառը", //39 
        answers: [
            { Text: "կուլն",  correct: false},
            { Text: "ընկնդիր",  correct: false},
            { Text: "ընկլնուլ",  correct: true},
            { Text: "կուլ տալոյ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «փլցնել» բառը", //40 
        answers: [
            { Text: "փլչյոմ",  correct: false},
            { Text: "փլչիմ",  correct: true},
            { Text: "փլեաց",  correct: false},
            { Text: "փալուոյ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «լցնել» բառը", //41 
        answers: [
            { Text: "լցունց",  correct: false},
            { Text: "լցոյց",  correct: true},
            { Text: "լցեաց",  correct: false},
            { Text: "լցեցունանել",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «թաքցնել» բառը", //42 
        answers: [
            { Text: "թաքցուեց",  correct: false},
            { Text: "թաքցուն",  correct: false},
            { Text: "թաքուաց",  correct: false},
            { Text: "թաքոյց",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «բազմյաց» բառը", //43
        answers: [
            { Text: "բազմիցն",  correct: false},
            { Text: "բազմեցոյց",  correct: true},
            { Text: "բազմեաց",  correct: false},
            { Text: "բազմեցուցեալ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «նա ուներ» բառը", //44 
        answers: [
            { Text: "նմա էր",  correct: false},
            { Text: "էր նմա",  correct: true},
            { Text: "նմանուոյ",  correct: false},
            { Text: "ունիւայ",  correct: false},
       ]
    }, 
    {
        question: "ինչպէ՞ս է գրուում «առողջանալ» բառը", //45 
        answers: [
            { Text: "յառողջի",  correct: false},
            { Text: "յառնելոյ",  correct: false},
            { Text: "յառնել",  correct: true},
            { Text: "առողջի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ասա» բառը", //46 
        answers: [
            { Text: "լոք",  correct: false},
            { Text: "գոգ",  correct: false},
            { Text: "այմի",  correct: false},
            { Text: "այղոք",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «պետք է» բառը", //47 
        answers: [
            { Text: "էպիտի",  correct: false},
            { Text: "պիտոյ է",  correct: true},
            { Text: "պիտուոյ",  correct: false},
            { Text: "պիտ է",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ի դեպ է» բառը", //48 
        answers: [
            { Text: "ի հնար է",  correct: false},
            { Text: "ի զորի",  correct: true},
            { Text: "հարմար է",  correct: false},
            { Text: "ի ասուոյ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ի դեպ է» բառը", //49 
        answers: [
            { Text: "ի հնար է",  correct: false},
            { Text: "ի զորի",  correct: true},
            { Text: "հարմար է",  correct: false},
            { Text: "ի ասուոյ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «կարելի է» բառը", //50 
        answers: [
            { Text: "ի հնար է",  correct: false},
            { Text: "մարթի",  correct: true},
            { Text: "կարուոյ",  correct: false},
            { Text: "մորթույ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «վիճակված է» բառը", //51
        answers: [
            { Text: "ի վիճակէ",  correct: false},
            { Text: "հասուել",  correct: false},
            { Text: "հասանէ",  correct: true},
            { Text: "ի վիճակեա",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «վիճակված է» բառը", //52
        answers: [
            { Text: "ի վիճակէ",  correct: false},
            { Text: "հասուել",  correct: false},
            { Text: "ի վիճակեա",  correct: false},
            { Text: "հասանէ",  correct: true},
            
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ուրիշ տեղից» բառը", //53
        answers: [
            { Text: "այդ տեղու",  correct: false},
            { Text: "ի տեղու",  correct: false},
            { Text: "յայլուստ",  correct: true},
            { Text: "ուրիշուոյ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այդտեղ» բառը", //54 
        answers: [
            { Text: "այդրէն",  correct: true},
            { Text: "անդր",  correct: false},
            { Text: "աստանաւր",  correct: false},
            { Text: "աստէն",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ուրիշ» բառը", //55
        answers: [
            { Text: "աստի",  correct: false},
            { Text: "այլուստ",  correct: true},
            { Text: "աստուստ",  correct: false},
            { Text: "աստէն",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այնտեղ» բառը", //56
        answers: [
            { Text: "այսր",  correct: false},
            { Text: "աստ",  correct: false},
            { Text: "անդէն",  correct: true},
            { Text: "անդր",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «առջեւից» բառը", //57 
        answers: [
            { Text: "յայլուստ",  correct: false},
            { Text: "յառաջուստ",  correct: true},
            { Text: "յառջեւայ",  correct: false},
            { Text: "աստուստ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այստեղ» բառը", //58 
        answers: [
            { Text: "արտաքուստ",  correct: false},
            { Text: "աստէն",  correct: false},
            { Text: "աստանաւր",  correct: false},
            { Text: "աստ",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այնտեղից» բառը", //59
        answers: [
            { Text: "անտի",  correct: true},
            { Text: "այսր անդ",  correct: false},
            { Text: "աստէն",  correct: false},
            { Text: "անդ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «դրսից» բառը", //60
        answers: [
            { Text: "աստէն",  correct: false},
            { Text: "արտաքուստ",  correct: true},
            { Text: "արտաքո",  correct: false},
            { Text: "ի բաց",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «այս կողմ» բառը", //61
        answers: [
            { Text: "աստուստ",  correct: false},
            { Text: "արտաքո",  correct: false},
            { Text: "յետս",  correct: false},
            { Text: "յայսկոյս",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ետեւից» բառը", //62
        answers: [
            { Text: "այսր",  correct: false},
            { Text: "յետուստ",  correct: true},
            { Text: "այլուր",  correct: false},
            { Text: "արտաքո",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ետեւից» բառը", //63
        answers: [
            { Text: "այսր",  correct: false},
            { Text: "այլուր",  correct: false},
            { Text: "յետուստ",  correct: true},
            { Text: "արտաքո",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ներս» բառը", //64
        answers: [
            { Text: "այսր",  correct: false},
            { Text: "յետս",  correct: false},
            { Text: "ի վայր",  correct: false},
            { Text: "ի ներքո",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «մի տեղից» բառը", //65
        answers: [
            { Text: "արտաքո",  correct: false},
            { Text: "ուստէք",  correct: true},
            { Text: "ի ներքո",  correct: false},
            { Text: "յյանկոս",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «հեռու» բառը", //66
        answers: [
            { Text: "աստր",  correct: false},
            { Text: "յայնկոյս",  correct: false},
            { Text: "ի բաց",  correct: true},
            { Text: "աստէն",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «տարեցտարի» բառը", //67
        answers: [
            { Text: "յայնկոյս",  correct: false},
            { Text: "ամէ",  correct: true},
            { Text: "յետս",  correct: false},
            { Text: "յետուստ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «առավոտյան» բառը", //68
        answers: [
            { Text: "յայնկոյս",  correct: false},
            { Text: "ընդ այգս այգու",  correct: false},
            { Text: "յայգուց",  correct: false},
            { Text: "այգուն",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ուշ» բառը", //69
        answers: [
            { Text: "կանխա",  correct: false},
            { Text: "յամէ",  correct: false},
            { Text: "անագան",  correct: true},
            { Text: "յայգուց",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «միշտ» բառը", //70
        answers: [
            { Text: "տարաժամ",  correct: false},
            { Text: "յորժամ",  correct: false},
            { Text: "յայգուց",  correct: false},
            { Text: "յար",  correct: true},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «երբ» բառը", //71 
        answers: [
            { Text: "տարաժամ",  correct: false},
            { Text: "յորժամ",  correct: true},
            { Text: "յայնկոս",  correct: false},
            { Text: "յայգուց",  correct: false},
    ]
    },
    {
        question: "ինչպէ՞ս է գրուում «միշտ» բառը", //72
        answers: [
            { Text: "այգուն",  correct: false},
            { Text: "ցարդ",  correct: false},
            { Text: "անագան",  correct: false},
            { Text: "ցանգ",  correct: true},
    ]
    },
    {
        question: "ինչպէ՞ս է գրուում «չիմանալով» բառը", //73
        answers: [
            { Text: "հարկաւ",  correct: false},
            { Text: "յանգէստ",  correct: true},
            { Text: "աքացի",  correct: false},
            { Text: "անագան",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «» բառը", //74
        answers: [
            { Text: "հարկաւ",  correct: false},
            { Text: "յանգէստ",  correct: true},
            { Text: "աքացի",  correct: false},
            { Text: "անագան",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «քիչ–քիչ» բառը", //75
        answers: [
            { Text: "հարկաւ",  correct: false},
            { Text: "զհազ",  correct: true}, 
            { Text: "յանգէստ",  correct: false},
            { Text: "յայնկոս",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «միանգամից» բառը", //76 
        answers: [
            { Text: "արմատաքի",  correct: false},
            { Text: "առժամայն",  correct: false},
            { Text: "աստ",  correct: false},
            { Text: "միհաղոյն",  correct: true},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «որպեսզի» բառը", //77 
        answers: [
            { Text: "պէս զի",  correct: false},
            { Text: "իբր զի",  correct: false},
            { Text: "վասն զի",  correct: true},
            { Text: "քանզի",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «այսինքն» բառը", //78
        answers: [
            { Text: "պէս զի",  correct: false},
            { Text: "այս է",  correct: true},
            { Text: "իբր զի",  correct: false},
            { Text: "իբրեւ թէ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «ափսոս» բառը", //79 
        answers: [
            { Text: "աւաղ",  correct: true},
            { Text: "իցիւ",  correct: false},
            { Text: "աւշ",  correct: false},
            { Text: "իցիւ թէ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «երանի» բառը", //80
        answers: [
            { Text: "բաբէ",  correct: false},
            { Text: "իցիւ",  correct: false},
            { Text: "աւշ",  correct: true},
            { Text: "իցիւ թէ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «բոլորին» բառը", //81
        answers: [
            { Text: "ամենեցուն",  correct: true},
            { Text: "ի բորուա",  correct: false},
            { Text: "ի բոլորա",  correct: false},
            { Text: "ղբոլորս",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «ցեղ» բառը", //82
        answers: [
            { Text: "ցեղյո",  correct: false},
            { Text: "ի ցեղուու",  correct: false},
            { Text: "զարմ",  correct: true},
            { Text: "զցեղս",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «մեկին» բառը", //83
        answers: [
            { Text: "մեկոյ",  correct: false},
            { Text: "ի մեկին",  correct: false},
            { Text: "մինս",  correct: false},
            { Text: "միումն",  correct: true},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «շրջուում է» բառը", //84
        answers: [
            { Text: "զանի",  correct: false},
            { Text: "ի պտոյտ",  correct: false},
            { Text: "ի շուրջ",  correct: false},
            { Text: "պատի",  correct: true},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «գցեց» բառը", //85 
        answers: [
            { Text: "ընկնի",  correct: false},
            { Text: "արկ",  correct: true},
            { Text: "ի գցէ",  correct: false},
            { Text: "պատի",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «քո մասինք» բառը", //86 
        answers: [
            { Text: "ընդ քո ասո",  correct: false},
            { Text: "զքէն",  correct: true},
            { Text: "պէս զի",  correct: false},
            { Text: "իցիւ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «սրանք» բառը", //87 
        answers: [
            { Text: "զսոսա",  correct: true},
            { Text: "ի ասուոք",  correct: false},
            { Text: "յանգէստ",  correct: false},
            { Text: "իցիւ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «երանելի» բառը", //88 
        answers: [
            { Text: "երանելու",  correct: false},
            { Text: "երանելւոյ",  correct: true},
            { Text: "երանեալ",  correct: false},
            { Text: "երից",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «անցնել» բառը", //89 
        answers: [
            { Text: "անցեալւ",  correct: false},
            { Text: "զի անց",  correct: false},
            { Text: "անցիաց",  correct: false},
            { Text: "անցելոյ",  correct: true},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «արվեստն» բառը", //90 
        answers: [
            { Text: "արուեստեալ",  correct: false},
            { Text: "արուեստոյ",  correct: false},
            { Text: "աարուեստէ",  correct: true},
            { Text: "արուեստնէ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «համար» բառը", //91
        answers: [
            { Text: "վասն",  correct: true},
            { Text: "յամարէ",  correct: false},
            { Text: "զուոր",  correct: false},
            { Text: "ի ասուոյ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «ետեւից» բառը", //92
        answers: [
            { Text: "զկնի",  correct: false},
            { Text: "զհհետ",  correct: true},
            { Text: "աղագալ",  correct: false},
            { Text: "յաղագս",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «հետո» բառը", //93
        answers: [
            { Text: "զկնի",  correct: true},
            { Text: "ի սակս",  correct: false},
            { Text: "յաղագս",  correct: false},
            { Text: "աղագալ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «պատճառով» բառը", //94
        answers: [
            { Text: "զկնի",  correct: false},
            { Text: "գաղտ",  correct: false},
            { Text: "աղագալ",  correct: false},
            { Text: "ի սակս",  correct: true},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «մասին» բառը", //95
        answers: [
            { Text: "աղագալ",  correct: false},
            { Text: "յաղագս",  correct: true},
            { Text: "մեկուսի",  correct: false},
            { Text: "յետ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «զատ» բառը", //96
        answers: [
            { Text: "յետ",  correct: false},
            { Text: "մեկուսի",  correct: true},
            { Text: "յաղագս",  correct: false},
            { Text: "աղագալ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «պատճառով» բառը", //97
        answers: [
            { Text: "յաղագս",  correct: false},
            { Text: "յետ",  correct: false},
            { Text: "աղագալ",  correct: true},
            { Text: "մեկուսի",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «միջոցով» բառը", //98
        answers: [
            { Text: "վասն",  correct: false},
            { Text: "զհետ",  correct: false},
            { Text: "ի ձեռն",  correct: true},
            { Text: "առաջի",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «նրանց» բառը", //99 
        answers: [
            { Text: "վասն",  correct: false},
            { Text: "նոցա",  correct: true},
            { Text: "ի նրանցէ",  correct: false},
            { Text: "լոկ",  correct: false},
       ] 
    },
    {
        question: "ինչպէ՞ս է գրուում «բանալ» բառը", //100 
        answers: [
            { Text: "բացաւ",  correct: true},
            { Text: "ի նոուա",  correct: false},
            { Text: "ի յայտու",  correct: false},
            { Text: "գայն",  correct: false},
       ] 
    },
]; 


const questionElement = document.getElementById/*html կոդի id վերցնում ենք այս եղանակով*/("question"); //այստեղ կցուցադրուի հարցը:
const answerButtons = document.getElementById("answer-buttons"); //այստեղ պատասխանը
const nextButton = document.getElementById("next-btn"); //հաջորդ հարցին անցնելու համար

//variables
let currentQuestionIndex = 0; //թե որ հարցն է ներկայումս ցուցադրուում եւ այդ հարցի ինդեքսը պահելու համար հարցերի զանգուածում
let score = 0; //խաղացողի հաշիւը ստուգելու համար

function startQuiz() { //Բառախաղը սկզբնական տեսքին բերելու համար
    currentQuestionIndex = 0; //սկզբնական դիրքում այն 0–է
    score = 0; //հաշիւը նոյնպէս
    nextButton.innerHTML = "Հաջորդ"; //button ցուցադրելու համար
    showQuestion(); //հարցը ցուցադրելու համար է նախատեսուած
} 

function showQuestion() {
    resetState(); //սա ապահոուում է նախնական տեսքի բերելու համար
    let currentQuestion = questions[currentQuestionIndex];  //intex–ը սկզբից 0–է այսինքն բառախաղը սկսուում է առաջին հարցից []մ ս նախատեսուած է որեւէ տարր մուտք գործելու համար աւգտագործելով currentQuestionIndex
    let questionNo = currentQuestionIndex + 1; //մեր սկզբնական դիրքում այն 0–է +1 աւելացնում է մեկ բալ
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.  // questionElement.innerHTML /*html բովանդակութիւն հաստատելու համար*/ = questionNo /*ընթացիկ համարը պահելու համար*/ + ".  " + currentQuestion. //հարցը ցուցադրելու համար է, Աւրինակ, եթե հարցը No 1-ն է, իսկ  հարցի տեքստը «ինչպէ՞ս է գրուում «գզվռտուք» բառը», ապա արդեւնքում ստացուած HTML-ի բովանդակութիւնը հարցի մէջ, կլինիէ՝ «1.ինչպէ՞ս է գրուում «գզվռտուք»
    question; //հարցը ցուցադրելու համար 
    currentQuestion.answers.forEach(answer => { //currentQuestion .answers. Սա մուտք է գործում currentQuestion աւբյեկտի answers հատկութիւնը: .forEach() ամեն աւբյեկտի համար կկրկնում է գործողութիւնը (answer => forEach() փունկցիան կանչելու համար
        const button = document.createElement("button"); //տեղծում է նոր button տարր եւրաքանչիււր պատասխանի ընտրութեան համար:
        button.innerHTML = answer.Text; //html տարրն է վերցնում,Text-ը մուտք է գործում տուեալ աւբյեկտի Text հատկութիւնը, որը պարունակում է պատասխանի տեքստը:
        button.classList.add("btn"); //սա նախատեսուած է css ոճաւորման համար
        answerButtons.appendChild(button);// վերցնում է նոր ստեղծուած button տարրը եւ որպես երեխայ աուելացնում այն պարունակող տարրին, որը ներկայացուած է answerButtons-ով:
       //սա ստուգում է թե արեւք պատասխանը ճիշդ է, եթե ճիշդ է ուրեմն true։ button.dataset.correct = answer.correct; երբ կոճակը սեղմուում է, այն կանչում է selectAnswer փունկցիան: SelectAnswer  կարգաւորում է աւգտուողի պատասխանի ընտրութեան ընտրութիւնը:
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
//սկզբնական դիրքում «հաջորդ» button չի երեում, while ցիկլղ է, որը շարունակվշուում է այնքան ժամանակ, քանի դեռ «answerButtons» կոնտեյների տարրի մէջ կան «answerButtons.firstChild»-ը
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    } 
}
//Այս տողում վերցուում է HTML տարրը, որը գործարկել է իրադարձութիւնը, այսինքն՝ կոճակը, որի վրայ աւգտատերը սեղմել է պատասխան ընտրելու համար: e-ն հրահրող տարրն է,const isCorrect = selectBtn.dataset.correct === "true" –սա ստուգում է թե ճիշտ է պատասխանը թե ոչ
function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect){
        selectBtn.classList.add("correct");
        score++;
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline-block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Ճիշտ պատասխաններ՝ ${score} / ${questions.length}։`;
    nextButton.innerHTML = "Կրկին փորձել";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton(); //հաջորդ հարցին անցնելու համար
    }else{
        startQuiz();
    }
})


startQuiz(); 
