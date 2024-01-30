import { ReactNode } from 'react';

import FacebookIcon from "@/icons/social/facebook";
import InstagramIcon from "@/icons/social/instagram";
import TwitterIcon from "@/icons/social/twitter";
import TiktokIcon from '@/icons/social/tiktok';
import YoutubeIcon from '@/icons/social/youtube';

// type socialMedia = {
//     id: number;
//     icon: string;
//     link: string;
//   };

  

export const sociaLinks =[
    {
        id: 1,
        icon: FacebookIcon ,
        title: 'Facebook Page',
        link:"https://www.facebook.com/deluccis"
    },
    {
        id: 2,
        icon: TwitterIcon,
        link:"https://twitter.com/_deluccis"
    },
    {
        id: 3,
        icon: InstagramIcon,
        link:"https://www.instagram.com/_deluccis/"
    },
    {
        id: 4,
        icon: TiktokIcon,
        link:"https://www.tiktok.com/@_deluccis"
    },
    {
        id: 5,
        icon: YoutubeIcon,
        link:"https://www.youtube.com/@deluccis"
    },
]

export const deluccisLinks = [
    {
        link: "/about-us" ,
        title: "About Us"
    },
    {
        link: "/contact" ,
        title: "Contact"
    },
    {
        link: "/tracking" ,
        title: "Track Orders"
    },
    {
        link: "/blog" ,
        title: "Blog"
    },
    {
        link: "/loyalty" ,
        title: "Loyalty Program"
    },
    {
        link: "/Returns" ,
        title: "Returns"
    },
    {
        link: "/faq" ,
        title: "FAQ"
    },
]



export const legalLinks = [
    {
        link: "/privacy" ,
        title: "Privacy Policies"
    },
    {
        link: "/terms-and-conditions" ,
        title: "Terms and Conditions"
    },
    {
        link: "/shipping" ,
        title: "Shipping and Deliveries"
    },
    {
        link: "/how-to" ,
        title: "How to"
    },
    {
        link: "/refunds" ,
        title: "Reports"
    },
    {
        link: "/pickups" ,
        title: "Pickup policies"
    },
]