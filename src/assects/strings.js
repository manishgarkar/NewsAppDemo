import AsyncStorage from "@react-native-async-storage/async-storage";
import { Dimensions, NativeModules, Platform } from "react-native";
import routes from "../routes/routes";


export const { width, height } = Dimensions.get("screen");
export const BASE_URL =  "https://gnews.io/api/v4"
export const API_KEY = "9630bc57f736142a7049df2b28a78890";
export const hitSlop = { top: 5, bottom: 5, left: 5, right: 5 }



export const routesToExcluedNavBar = [
    routes?.newsDetails,
    routes?.settings

]

export const iosOpacity = {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1
}



export const countries =  [               
    {name:"Australia",value:"au"},
    {name:"Brazil",value:	"br"},
    {name:"Canada",value:	"ca"},
    {name:"China",value:	"cn"},
    {name:"Egypt"	,value:"eg"},
    {name:"France"	,value:"fr"},
    {name:'Germany'	,value:"de"},
    {name:'Greece'	,value:"gr"},
    {name:"Hong Kong",value:	"hk"},
    {name:"India",value:	"in"},
    {name:'Ireland'	,value:"ie"},
    {name:'Israel',value:	"il"},
    {name:'Italy',value:"it"},
    {name:'Japan',value:"jp"},
    {name:'Netherlands',value:	"nl"},
    {name:'Norway',value:	"no"},
    {name:'Pakistan',value:	"pk"},
    {name:'Peru',value:	"pe"},
    {name:'Philippines',value:	"ph"},
    {name:'Portugal'	,value:"pt"},
    {name:"Romania",value:"ro"},
    {name:"Russian Federation",value:	"ru"},
    {name:"Singapore"	,value:"sg"},
    {name:"Spain"	,value:"es"},
    {name:"Sweden"	,value:"se"},
    {name:"Switzerland"	,value:"ch"},
    {name:"Taiwan",value:	"tw"},
    {name:"Ukraine"	,value:"ua"},
    {name:"United Kingdom",value:	"gb"},
    {name:"United States"	,value:"us"},
]




export const settingsArray = [
    {name:"अपना राज्य और शहर चुने ",icon:"map-marker-outline"},
    {name:"मेरे पसंदीदा विषय ",icon:	"thumb-up-outline"},
    {name:"सेव ",icon:	"bookmark-outline"},
    {name:"नोटिफिकेशन्स ",icon:	"bell-outline"},
    {name:"डार्क मोड "	,icon:"weather-night"},
    {name:"आर्टिकल फोंट्स साइज "	,icon:"format-size"},
    {name:'ऐप शेयर करे '	,icon:"share-variant"},
    {name:'दोस्तों को इन्वाइट करे '	,icon:"share"},
    {name:"ऐप को रेटिंग दे ",icon:	"star-outline"},
    {name:"फीडबैक दे ",icon:	"email-outline"},
    {name:'लोग आउट '	,icon:"exit-to-app"}
]

