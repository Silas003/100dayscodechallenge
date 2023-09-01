import * as Icon from 'react-native-feather'
export const packages=[
    {
        id:1,
        name:'Data',
        icon:<Icon.BarChart stroke={'red'}/>,
        value:62,
        total:100,
        meter:'Gb'
    },
    {
        id:2,
        name:'Offnet',
        icon:<Icon.Phone stroke={'red'}/>,
        value:26.98,
        total:40,
        meter:'Mins'
    },
    {
        id:3,
        name:'SMS',
        icon:<Icon.MessageSquare stroke={'red'}/>,
        value:50.0,
        total:50,
        meter:'SMS'
    }

]