import HomeContent from "@/components/pages/HomeContent.vue";
import GamesPage from "@/components/pages/GamesPage.vue";
import MusicPage from "@/components/pages/MusicPage.vue";
import VideosPage from "@/components/pages/VideosPage.vue";
import AboutPage from "@/components/pages/AboutPage.vue";
import { RouteRecordRaw } from "vue-router";
import WelcomePage from "@/components/pages/WelcomePage.vue";

enum Page {
  Welcome = "welcome",
  Home = "home",
  Games = "games",
  Music = "music",
  Videos = "videos",
  About = "about",
}

export const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: HomeContent,
    name: Page.Home,
  },
  {
    path: "/welcome",
    component: WelcomePage,
    name: Page.Welcome,
  },
  {
    path: "/games",
    component: GamesPage,
    name: Page.Games,
  },
  {
    path: "/music",
    component: MusicPage,
    name: Page.Music,
  },
  {
    path: "/Videos",
    component: VideosPage,
    name: Page.Videos,
  },
  {
    path: "/about",
    component: AboutPage,
    name: Page.About,
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
  },
];

export default Page;
