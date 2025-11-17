import type { Key } from "react";

export type Action = { message: string } | { comment: string };

export type DataProps = {
  id: Key | null | undefined | number;
  image: string;
  name: string;
  description: string;
  date: string;
  status: string;
  highlight?: string;
  action?: Action;
};

export const Data: DataProps[] = [
  {
    image: "/public/assets/images/avatar-mark-webber.webp",
    name: "Mark Webber",
    description: "reacted to your recent post ",
    highlight: "My first tournament today!",
    date: "1m ago",
    status: "pendiente",
    id: 1,
  },
  {
    image: "/public/assets/images/avatar-angela-gray.webp",
    name: "Angela Gray",
    description: "followed you",
    date: "5m ago",
    status: "pendiente",
    id: 2,
  },
  {
    image: "/public/assets/images/avatar-jacob-thompson.webp",
    name: "Jacob Thompson",
    description: "has joined you group ",
    highlight: "Chess Club",
    date: "1day ago",
    status: "pendiente",
    id: 3,
  },
  {
    image: "/public/assets/images/avatar-rizky-hasanuddin.webp",
    name: "Rizky Hasanuddin",
    description: "sent you a private message",
    date: "5day ago",
    status: "completed",
    action: {
      message:
        "Hello, thanks for setting up the Chess Club. i´ve been a member for a few weeks now and i´m already having lots of fun and improving my game.",
    },
    id: 4,
  },
  {
    image: "/public/assets/images/avatar-kimberly-smith.webp",
    name: "Kimberly Smith",
    description: "commented on your picture",
    date: "1week ago",
    status: "completed",
    action: {
      comment: "/public/assets/images/image-chess.webp",
    },
    id: 5,
  },
  {
    image: "/public/assets/images/avatar-nathan-peterson.webp",
    name: "Nathan Peterson",
    description: "reacted to your recent pos ",
    highlight: "5 end-game strategies to increase your win rate",
    date: "2weeks ago",
    status: "completed",
    id: 6,
  },
  {
    image: "/public/assets/images/avatar-anna-kim.webp",
    name: "Anna Kim",
    description: "left the group ",
    highlight: "Chess Club",
    date: "2weeks ago",
    status: "completed",
    id: 7,
  },
];
