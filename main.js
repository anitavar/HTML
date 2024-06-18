//դասական ուղղագրութիւն
const questions = [
    {
        question: "ինչպէ՞ս է գրուում «գոտի» բառը", //1
        answers: [
            { Text: "գաւտի",  correct: true},
            { Text: "գոտի",  correct: false},
            { Text: "գօտի",  correct: false},
            { Text: "գուոտի",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «դրոշ» բառը", //2
        answers: [
            { Text: "դրոշ",  correct: false},
            { Text: "դովշ",  correct: false},
            { Text: "դրաւշ",  correct: true},
            { Text: "դրօշ",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «մոլոր» բառը", //3
        answers: [
            { Text: "մօլօր",  correct: false},
            { Text: "մաւլաւր",  correct: false},
            { Text: "մոլոր",  correct: true},
            { Text: "մաւլոր",  correct: false},
       ]
    },
    {
        question: "ինչպէ՞ս է գրուում «ցողուն» բառը", //4 
        answers: [
            { Text: "ցողուն",  correct: false},
            { Text: "ցօղուն",  correct: false},
            { Text: "ցաւղուն",  correct: true},
            { Text: "ցուողուն",  correct: false},
        ]
    },
    {
        question: "ինչպէ՞ս է գրուում «աղոտ» բառը", //5
        answers: [
            { Text: "աղոտ",  correct: false},
            { Text: "աղաւտ",  correct: true},
            { Text: "աղվուտ",  correct: false},
            { Text: "աղօտ",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «նոր» բառը", //6
        answers: [
            { Text: "նօր",  correct: false},
            { Text: "նաւր",  correct: false},
            { Text: "նոր",  correct: true},
            { Text: "նուր",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «առավոտ» բառը", //7
        answers: [
            { Text: "առավոտ",  correct: false},
            { Text: "առավաւտ",  correct: false},
            { Text: "առաուոտ",  correct: false},
            { Text: "առաւաւտ",  correct: true},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «մոլորակ» բառը", //8
        answers: [
            { Text: "մոլորակ",  correct: true},
            { Text: "մաւլորակ",  correct: false},
            { Text: "մաւլաւրակ",  correct: false},
            { Text: "մոլաւրակ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «անդորր» բառը", //9
        answers: [
            { Text: "անդօրր",  correct: false},
            { Text: "անդաւրր",  correct: false},
            { Text: "անդորր",  correct: true},
            { Text: "անդաւաւր",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում անողորմ» բառը", //10 
        answers: [
            { Text: "անաւղորմ",  correct: false},
            { Text: "անողորմ",  correct: true},
            { Text: "անաւղաւրմ",  correct: false},
            { Text: "ամաւղորմ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «տոթ» բառը", //11
        answers: [
            { Text: "տօթ",  correct: false},
            { Text: "տոթ",  correct: false},
            { Text: "տաւթ",  correct: true},
            { Text: "տութ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «րոպե» բառը", //12 
        answers: [
            { Text: "րոպե",  correct: false},
            { Text: "րոպէ",  correct: true},
            { Text: "րաւպէ",  correct: false},
            { Text: "րաւպե",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «Եդեմ» բառը", //13 
        answers: [
            { Text: "Եդէմ",  correct: false},
            { Text: "Էդեմ",  correct: false},
            { Text: "Եդեմ",  correct: true},
            { Text: "Էդէմ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հավերժ» բառը", //14
        answers: [
            { Text: "յաւերժ",  correct: false},
            { Text: "հաւէրժ",  correct: false},
            { Text: "յավերժ",  correct: false},
            { Text: "յաւէրժ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «եղեք» բառը", //15 
        answers: [
            { Text: "եղեք",  correct: false},
            { Text: "եղէք",  correct: true},
            { Text: "էղէք",  correct: false},
            { Text: "էղեք",  correct: false},
        ]
     },
     {
        question: "ինչպ՞էս է գրուում «հրազեն» բառը", //16
        answers: [
            { Text: "հրազեն",  correct: false},
            { Text: "յրազէն",  correct: false},
            { Text: "հրազէն",  correct: true},
            { Text: "հրազեն",  correct: false},
        ]
     },
     {
        question: "ինչպէս է գրուում «կրկես» բառը", //17
        answers: [
            { Text: "կրկէս",  correct: true},
            { Text: "կըրկես",  correct: false},
            { Text: "կրկես",  correct: false},
            { Text: "կըրկէս",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «քութեշ» բառը", //18
        answers: [
            { Text: "քուդէշ",  correct: false},
            { Text: "քութեշ",  correct: false},
            { Text: "քութէշ",  correct: true},
            { Text: "քուդեշ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «աղվես» բառը", //19
        answers: [
            { Text: "աղվէս",  correct: false},
            { Text: "աղվես",  correct: false},
            { Text: "աղուէս",  correct: true},
            { Text: "աղուես",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «անհեթեթ» բառը", //20 
        answers: [
            { Text: "անհէթեթ",  correct: false},
            { Text: "անհէթէթ",  correct: false},
            { Text: "անհեթէթ",  correct: false},
            { Text: "անհեթեթ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «Խայտաբղետ» բառը", //21 
        answers: [
            { Text: "խահտաբղէտ",  correct: false},
            { Text: "խայտաբղետ",  correct: false},
            { Text: "խայտաբղէտ",  correct: true},
            { Text: "խահտաբղետ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հավետ» բառը", //22 
        answers: [
            { Text: "յաւէտ",  correct: true},
            { Text: "հավետ",  correct: false},
            { Text: "յաւետ",  correct: false},
            { Text: "հաւէտ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «նվեր» բառը", //23 
        answers: [
            { Text: "նվէր",  correct: false},
            { Text: "նուեր",  correct: false},
            { Text: "նուէր",  correct: true},
            { Text: "նվեր",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «արդյոք» բառը", //24 
        answers: [
            { Text: "արդյոք",  correct: false},
            { Text: "արդեոք",  correct: false},
            { Text: "արդեւք",  correct: true},
            { Text: "արդիւք",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «եղջյուր» բառը", //25
        answers: [
            { Text: "եղջեւր",  correct: true},
            { Text: "եղջյուր",  correct: false},
            { Text: "եղջիւր",  correct: false},
            { Text: "եղջեուր",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հարյուրավոր» բառը", //26
        answers: [
            { Text: "հարիւրավոր",  correct: false},
            { Text: "հարիւրաւոր",  correct: true},
            { Text: "հարեւրաւոր",  correct: false},
            { Text: "հարեւրավոր",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հնչյունափոխություն» բառը", //27
        answers: [
            { Text: "հնչեւնափոխութիւն",  correct: false},
            { Text: "հնչիւնափոխութիւն",  correct: true},
            { Text: "հնչեւնափոխութեւն",  correct: false},
            { Text: "հնչյունափոխութիւն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «օգնություն» բառը", //28
        answers: [
            { Text: "աւգնութեւն",  correct: false},
            { Text: "օգնութիւն",  correct: false},
            { Text: "աւգնություն",  correct: false},
            { Text: "աւգնութիւն",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հարյուր» բառը", //29
        answers: [
            { Text: "հարյուր",  correct: false},
            { Text: "հարիւր",  correct: false},
            { Text: "հարեւր",  correct: true},
            { Text: "հարյուր",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հյուրատուն» բառը", //30
        answers: [
            { Text: "հյորատուն",  correct: false},
            { Text: "հիւրատուն",  correct: true},
            { Text: "հեւրատուն",  correct: false},
            { Text: "հյուրատուն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հնչյուն» բառը", //31
        answers: [
            { Text: "հնչյոն",  correct: false},
            { Text: "հնչեւն",  correct: true},
            { Text: "հնչիւն",  correct: false},
            { Text: "հնչյուն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «վկայություն» բառը", //32
        answers: [
            { Text: "վկայութիւն",  correct: true},
            { Text: "վկայութիւեն",  correct: false},
            { Text: "վկայություն",  correct: false},
            { Text: "վկայությոն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հյուրասեր» բառը", //33
        answers: [
            { Text: "հեւրասէր",  correct: false},
            { Text: "հեւրասեր",  correct: false},
            { Text: "հիւրասէր",  correct: true},
            { Text: "հիւրասեր",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «անհրաժեշտ» բառը", //34
        answers: [
            { Text: "անհրաժէշտ",  correct: false},
            { Text: "անյրաժէշտ",  correct: false},
            { Text: "անյրաժեշտ",  correct: false},
            { Text: "անհրաժեշտ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «երուսաղեմ» բառը", //35
        answers: [
            { Text: "էրուսաղեմ",  correct: false},
            { Text: "էրուսաղէմ",  correct: false},
            { Text: "երուսաղէմ",  correct: true},
            { Text: "երուսաղեմ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «երուսաղեմ» բառը", //36
        answers: [
            { Text: "Ղիւդա",  correct: true},
            { Text: "Լյուդա",  correct: false},
            { Text: "Լիւդայ",  correct: false},
            { Text: "Ղեւդա",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «երուսաղեմ» բառը", //37 
        answers: [
            { Text: "Ղիւդա",  correct: false},
            { Text: "Լյուդա",  correct: false},
            { Text: "Լիւդայ",  correct: true},
            { Text: "Ղեւդա",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «Բեռլին» բառը", //38
        answers: [
            { Text: "Բեղին",  correct: false},
            { Text: "բեղիմ",  correct: false},
            { Text: "Բէղին",  correct: false},
            { Text: "Բեռլին",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «լատիներեն» բառը", //39
        answers: [
            { Text: "ղատիներեն",  correct: false},
            { Text: "ղատիներէն",  correct: true},
            { Text: "լատիներէն",  correct: false},
            { Text: "լատիներեն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «պահլավերեն» բառը", //40
        answers: [
            { Text: "պահլաւերէն",  correct: true},
            { Text: "պահլավերէն",  correct: false},
            { Text: "պահլավերեն",  correct: false},
            { Text: "պահղավերէն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «Լոնդոն» բառը", //41
        answers: [
            { Text: "Լոնդոն",  correct: false},
            { Text: "Ղոնդոն",  correct: true},
            { Text: "Ղաւնդաւն",  correct: false},
            { Text: "Լոնդաւն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «երփնափայլ» բառը", //42
        answers: [
            { Text: "երփնափայլ",  correct: false},
            { Text: "երփնափայլ",  correct: false},
            { Text: "երփնափայղ",  correct: true},
            { Text: "երփնափայլ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «բադաքայլ» բառը", //43 ––––
        answers: [
            { Text: "բադաքայլ",  correct: false},
            { Text: "բադաքեայլ",  correct: true},
            { Text: "բադաքեալ",  correct: false},
            { Text: "բադաքեայղ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «բազմալեզվություն» բառը", //44 
        answers: [
            { Text: "բազմալեզուութիւն",  correct: true},
            { Text: "բազմալեզուություն",  correct: false},
            { Text: "բազմաղեզուութիւն",  correct: false},
            { Text: "բազմալեզվութիւն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «բալլադագրություն» բառը", //45 
        answers: [
            { Text: "բալլադագրութիւն",  correct: true},
            { Text: "բաղղադագրություն",  correct: false},
            { Text: "բալղադագրութիւն",  correct: false},
            { Text: "բալլադագրություն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «բալլադագրություն» բառը", //46
        answers: [
            { Text: "բալլադագրութիւն",  correct: true},
            { Text: "բաղղադագրություն",  correct: false},
            { Text: "բալղադագրութիւն",  correct: false},
            { Text: "բալլադագրություն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հետագա» բառը", //47
        answers: [
            { Text: "հետագա",  correct: false},
            { Text: "հետագայ",  correct: false},
            { Text: "յետագայ",  correct: true},
            { Text: "յետագա",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հազարաճյուղ» բառը", //48 
        answers: [
            { Text: "յազարաճյուղ",  correct: false},
            { Text: "հազարաճյուղ",  correct: false},
            { Text: "հազարաճիւղ",  correct: true},
            { Text: "յազարաճիւղ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հրճվական» բառը", //49 
        answers: [
            { Text: "յրճվական",  correct: false},
            { Text: "հրճւական",  correct: false},
            { Text: "յրճուական",  correct: false},
            { Text: "հրճուական",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հեղափոխություն» բառը", //50 
        answers: [
            { Text: "հեղափոխութիւն",  correct: false},
            { Text: "յեղափոխութիւն",  correct: true},
            { Text: "յեղափոխություն",  correct: false},
            { Text: "հեղափոխություն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հուղարկավորություն» բառը", //51
        answers: [
            { Text: "յուղարկաւորութիւն",  correct: true},
            { Text: "հուղարկաւորութիւն",  correct: false},
            { Text: "յուղարկաուորութիւն",  correct: false},
            { Text: "հուղարկաւորություն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հալևորություն» բառը", //52 
        answers: [
            { Text: "հալեւորութեւն",  correct: false},
            { Text: "յալեւորութիւն",  correct: false},
            { Text: "հալեւորություն",  correct: true},
            { Text: "յաղեւորութիւն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հակահեղափոխականություն» բառը", //53
        answers: [
            { Text: "յակահեղափոխականություն",  correct: false},
            { Text: "հակահեղափոխականություն",  correct: false},
            { Text: "հակահեղափոխականութիւն",  correct: true},
            { Text: "յակահեղափոխականութիւն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հովազ» բառը", //54
        answers: [
            { Text: "հովազ",  correct: false},
            { Text: "յուազ",  correct: false},
            { Text: "յոուազ",  correct: false},
            { Text: "յովազ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հոբեղեն» բառը", //55
        answers: [
            { Text: "հոբեղեն",  correct: false},
            { Text: "յոբեղէն",  correct: false},
            { Text: "յոբեղեան",  correct: true},
            { Text: "հոբեղէն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հաճոյակատարություն» բառը", //56
        answers: [
            { Text: "հաճոյակատարություն",  correct: false},
            { Text: "հաճոյակատարութիւն",  correct: true},
            { Text: "յաճոյակատարություն",  correct: false},
            { Text: "յաճոյակատարութիւն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հածանավ» բառը", //57
        answers: [
            { Text: "հածանավ",  correct: false},
            { Text: "հածանաւ",  correct: false},
            { Text: "յածանավ",  correct: false},
            { Text: "յածանաւ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հալևորուկ» բառը", //59
        answers: [
            { Text: "հաղեւորուկ",  correct: false},
            { Text: "յալեւորուկ",  correct: false},
            { Text: "հալեւորուկ",  correct: true},
            { Text: "յաղեւորուկ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հալվե» բառը", //60
        answers: [
            { Text: "հալուէ",  correct: true},
            { Text: "հաղուե",  correct: false},
            { Text: "յալուէ",  correct: false},
            { Text: "հալուե",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «մանրէաբան» բառը", //61
        answers: [
            { Text: "մանրէաբան",  correct: true},
            { Text: "մանրեյաբան",  correct: false},
            { Text: "մանրեաբան",  correct: false},
            { Text: "մանրեաբան",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «Ավստրիա» բառը", //62
        answers: [
            { Text: "Աւստրեա",  correct: false},
            { Text: "Ավստրեա",  correct: false},
            { Text: "Աւստրիա",  correct: true},
            { Text: "Աուստրիա",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «մանրե» բառը", //63
        answers: [
            { Text: "մանրեյ",  correct: false},
            { Text: "մանրե",  correct: false},
            { Text: "մանրէյ",  correct: false},
            { Text: "մանրէ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «քահանա» բառը", //64
        answers: [
            { Text: "քայանա",  correct: false},
            { Text: "քահանա",  correct: false},
            { Text: "քայանայ",  correct: false},
            { Text: "քահանայ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «Անգլիա» բառը", //65
        answers: [
            { Text: "Անգլիայ",  correct: false},
            { Text: "Անգղիա",  correct: true},
            { Text: "Անգղիայ",  correct: false},
            { Text: "Անգղիայ",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «մարգարե» բառը", //66
        answers: [
            { Text: "մարգարէ",  correct: true},
            { Text: "մարգարե",  correct: false},
            { Text: "մարգարեյ",  correct: false},
            { Text: "մարգարէյ",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «Նարինե» բառը", //67
        answers: [
            { Text: "Նարինե",  correct: true},
            { Text: "Նարինէ",  correct: false},
            { Text: "Նարինէյ",  correct: false},
            { Text: "Նարինեյ",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «երեխաս» բառը", //68
        answers: [
            { Text: "երեխաս",  correct: false},
            { Text: "երէխաս",  correct: false},
            { Text: "երեխայս",  correct: true},
            { Text: "երեխյայս",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «Լիանան» բառը", //69
        answers: [
            { Text: "Ղիանան",  correct: false},
            { Text: "Լիանայն",  correct: false},
            { Text: "Լիանան",  correct: false},
            { Text: "Ղիանայն",  correct: true},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «տղադ» բառը", //70
        answers: [
            { Text: "տղայըդ",  correct: false},
            { Text: "տղյայդ",  correct: false},
            { Text: "տղայդ",  correct: true},
            { Text: "տղադ",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «հույս» բառը", //71
        answers: [
            { Text: "յոյս",  correct: true},
            { Text: "յույս",  correct: false},
            { Text: "հոյս",  correct: false},
            { Text: "հույս",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «ազնվամորագույն» բառը", //72
        answers: [
            { Text: "ազնվամորագոյն",  correct: false},
            { Text: "ազնւամորագույն",  correct: false},
            { Text: "ազնուամորագոյն",  correct: true},
            { Text: "ազնուամորագույն",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «հետո» բառը", //73
        answers: [
            { Text: "հետոյ",  correct: false},
            { Text: "յետոյ",  correct: true},
            { Text: "յետո",  correct: false},
            { Text: "հէտոյ",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «վիճահարույց» բառը", //74
        answers: [
            { Text: "վիճահարույց",  correct: false},
            { Text: "վիճայարույց",  correct: false},
            { Text: "վիճահարոյց",  correct: false},
            { Text: "վիճայարոյց",  correct: true},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «խավարասույզ» բառը", //74
        answers: [
            { Text: "խաւարասույզ",  correct: false},
            { Text: "խավարասոյզ",  correct: false},
            { Text: "խաուարասույզ",  correct: false},
            { Text: "խաւարասոյզ",  correct: true},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «խանդահույզ» բառը", //75 
        answers: [
            { Text: "խանդահույզ",  correct: false},
            { Text: "խանդայույզ",  correct: false},
            { Text: "խանդահոյզ",  correct: false},
            { Text: "խանդայոյզ",  correct: true},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «նախահաճույք» բառը", //76
        answers: [
            { Text: "նախայաճույք",  correct: false},
            { Text: "նախահաճոյք",  correct: true},
            { Text: "նախայաճոյք",  correct: false},
            { Text: "նախահաճույք",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «դառնաթույն» բառը", //77 
        answers: [
            { Text: "դառնաթյոյն",  correct: false},
            { Text: "դառնաթույն",  correct: false},
            { Text: "դառնաթյույն",  correct: false},
            { Text: "դառնաթոյն",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «ծառան» բառը", //78
        answers: [
            { Text: "ծառայն",  correct: true},
            { Text: "ծառյան",  correct: false},
            { Text: "ծառան",  correct: false},
            { Text: "ծառայ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «վերելք» բառը", //79
        answers: [
            { Text: "վէրելք",  correct: false},
            { Text: "վերէլք",  correct: false},
            { Text: "վերելք",  correct: true},
            { Text: "վէրէլք",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «վառել» բառը", //80
        answers: [
            { Text: "վառեղ",  correct: false},
            { Text: "վառել",  correct: true},
            { Text: "վառէլ",  correct: false},
            { Text: "վառէղ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «անվերապահ» բառը", //81
        answers: [
            { Text: "անվերապահ",  correct: false},
            { Text: "անւերապահ",  correct: false},
            { Text: "անուերապահ",  correct: false},
            { Text: "անվերապահ",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հոդված» բառը", //82
        answers: [
            { Text: "հաւդված",  correct: false},
            { Text: "հաւդուած",  correct: false},
            { Text: "յաւդուած",  correct: true},
            { Text: "հոդուած",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «լվացվել» բառը", //83
        answers: [
            { Text: "լուացվել",  correct: false},
            { Text: "լուացուել",  correct: true},
            { Text: "լւացուել",  correct: false},
            { Text: "լուացւել",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «անվրդով» բառը", //84
        answers: [
            { Text: "անուրդով",  correct: false},
            { Text: "անւրդով",  correct: false},
            { Text: "անուրդոու",  correct: false},
            { Text: "անվրդով",  correct: true},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «գովված» բառը", //85
        answers: [
            { Text: "գովված",  correct: false},
            { Text: "գովուած",  correct: true},
            { Text: "գոուված",  correct: false},
            { Text: "գուուած",  correct: false},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «արձագանք» բառը", //86
        answers: [
            { Text: "արձաքանք",  correct: false},
            { Text: "արձագանգ",  correct: true},
            { Text: "արձագանք",  correct: false},
            { Text: "արձաքանգ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «վազվզել» բառը", //87
        answers: [
            { Text: "ւազուզել",  correct: false},
            { Text: "վազւզել",  correct: false},
            { Text: "վազուզել",  correct: false},
            { Text: "վազվզել",  correct: true},
        ]
     },   
     {
        question: "ինչպէ՞ս է գրուում «դատակոչվել» բառը", //88
        answers: [
            { Text: "դատակոչոււել",  correct: false},
            { Text: "դատակոչվել",  correct: false},
            { Text: "դատակոչւել",  correct: false},
            { Text: "դատակոչուել",  correct: true},
        ]
     }, 
     {
        question: "ինչպէ՞ս է գրուում «անվիճել» բառը", //89
        answers: [
            { Text: "անուիճել",  correct: false},
            { Text: "անվիճել",  correct: true},
            { Text: "անւիճել",  correct: false},
            { Text: "անւուիճել",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հաստավիզ» բառը", //90
        answers: [
            { Text: "հաստավիզ",  correct: true},
            { Text: "հաստաուիզ",  correct: false},
            { Text: "հաստաւիզ",  correct: false},
            { Text: "հաստաւուիզ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «հաստավիզ» բառը", //91
        answers: [
            { Text: "հաստավիզ",  correct: true},
            { Text: "հաստաուիզ",  correct: false},
            { Text: "հաստաւիզ",  correct: false},
            { Text: "հաստաւուիզ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «բացականչություն» բառը", //92
        answers: [
            { Text: "բացականչություն",  correct: false},
            { Text: "բացագանչութիւն",  correct: true},
            { Text: "բացականչութիւն",  correct: false},
            { Text: "բացագանչություն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «գաղտնածածկ» բառը", //93 
        answers: [
            { Text: "գախտնածածկ",  correct: false},
            { Text: "գաղտնացածկ",  correct: false},
            { Text: "գաղտնածածկ",  correct: true},
            { Text: "գաղտնածացկ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «ընտելանալ» բառը", //94 
        answers: [
            { Text: "ընդելանալ",  correct: true},
            { Text: "ընտելանալ",  correct: false},
            { Text: "ընթելանալ",  correct: false},
            { Text: "ընգելանալ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «ընտելանալ» բառը", //95
        answers: [
            { Text: "ընդելանալ",  correct: true},
            { Text: "ընտելանալ",  correct: false},
            { Text: "ընթելանալ",  correct: false},
            { Text: "ընգելանալ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «գայթագղութիւն» բառը", //96
        answers: [
            { Text: "գայթագղութիւն",  correct: true},
            { Text: "գայթակխութիւն",  correct: false},
            { Text: "գայթագղություն",  correct: false},
            { Text: "գայթակղություն",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «բանտ» բառը", //98
        answers: [
            { Text: "բանտ",  correct: false},
            { Text: "բանթ",  correct: false},
            { Text: "բանդ",  correct: true},
            { Text: "բանտ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «եբրայավանդ» բառը", //99
        answers: [
            { Text: "եբրայավանդ",  correct: false},
            { Text: "եբրայաւանդ",  correct: true},
            { Text: "եբրայավանտ",  correct: false},
            { Text: "եբրայաւանթ",  correct: false},
        ]
     },
     {
        question: "ինչպէ՞ս է գրուում «դադարեցվել» բառը", //100
        answers: [
            { Text: "դադարեցվել",  correct: false},
            { Text: "դադարեցւել",  correct: false},
            { Text: "դաթարեցվել",  correct: false},
            { Text: "դադարեցուել",  correct: true},
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

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}

function showQuestion() {
    resetState(); //սա ապահոուում է նախնական տեսքի բերելու համար
    let currentQuestion = questions[currentQuestionIndex];  //intex–ը սկզբից 0–է այսինքն բառախաղը սկսուում է առաջին հարցից []մ ս նախատեսուած է որեւէ տարր մուտք գործելու համար աւգտագործելով currentQuestionIndex
    let questionNo = currentQuestionIndex + 1; //մեր սկզբնական դիրքում այն 0–է +1 աւելացնում է մեկ բալ
    questionElement.innerHTML = questionNo + ".  " + currentQuestion.  // questionElement.innerHTML /*html բովանդակութիւն հաստատելու համար*/ = questionNo /*ընթացիկ համարը պահելու համար*/ + ".  " + currentQuestion. //հարցը ցուցադրելու համար է, Աւրինակ, եթե հարցը No 1-ն է, իսկ  հարցի տեքստը «ինչպէ՞ս է գրուում «գզվռտուք» բառը», ապա արդեւնքում ստացուած HTML-ի բովանդակութիւնը հարցի մէջ, կլինիէ՝ «1.ինչպէ՞ս է գրուում «գզվռտուք»
    question; //հարցը ցուցադրելու համար
    debugger;
    currentQuestion.answers = shuffleArray(currentQuestion.answers);

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
