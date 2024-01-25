import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faHouse,
  faUsers,
  faSchool,
  faSquarePlus,
  faUserPlus,
  faAnglesLeft,
  faAnglesRight,
  faUserGear,
  faSquareXmark,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import BaseContainer from "./components/UI/BaseContainer.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from "./components/UI/BaseButton.vue";
import BaseDialog from "./components/UI/BaseDialog.vue";

library.add(
  faHouse,
  faUsers,
  faSchool,
  faSquarePlus,
  faUserPlus,
  faAnglesLeft,
  faAnglesRight,
  faUserGear,
  faSquareXmark,
  faGear,
  faPenToSquare
);

import "./assets/base.css";

const app = createApp(App);

app.use(router);

app.component("font-awesome-icon", FontAwesomeIcon);
app.component("base-container", BaseContainer);
app.component("base-card", BaseCard);
app.component("base-button", BaseButton);
app.component("base-dialog", BaseDialog);

app.mount("#app");
