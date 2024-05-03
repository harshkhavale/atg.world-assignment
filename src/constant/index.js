import { group_1, group_2, group_3, group_4, post_1, post_2, post_3, user_1, user_2, user_3, user_4 } from "../images";



export const posts = [
    {
        id: 1,
        title: "What if famous brands had regular fonts? Meet RegulaBrands!",
        desc: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        thumbnail: post_1,
        category:"Article",
        user: {
            id: 1,
            name: "Sarthak Kamra",
            profile: user_1,
          },
    },{
        id: 2,
        title: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        desc:"I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        thumbnail: post_2,
        category:"Education",
        user:{
            id: 2,
            name: "Sarah West",
            profile: user_2,
          },
    },
    {
        id: 3,
        title: "Finance & Investment Elite Social Mixer @Lujiazui",
        thumbnail: post_3,
        date:"Fri, 12 Oct, 2018",
        location:"Ahmedabad, India",
        category:"Meetup",
        weburl:"/",
        user:{
            id: 3,
            name: "Ronal Jones",
            profile: user_3,
          },

    },{
        id: 4,
        title: "Software Developer",
        date:"Fri, 12 Oct, 2018",
        location:"Noida, India",
        category:"Job",
        role:"Innovaccer Analytics Private Ltd.",
        weburl:"/",
        user:{
            id: 4,
            name: "Joseph Gray",
            profile: user_4,
          },
    }
]

export const groups = [
    {
        title:'Leisure',
        profile:group_1

    },{
        title:'Activism',
        profile:group_2
    },{
        title:'MBA',
        profile:group_3
    },{
        title:'Philosophy',
        profile:group_4
    }
]