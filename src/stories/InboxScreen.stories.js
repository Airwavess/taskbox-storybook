import React from "react";
import { Provider } from "react-redux";

import InboxScreen from "../components/InboxScreen";
import store from "../lib/redux";

export default {
  title: "InboxScreen",
  decorators: [story => <Provider store={store}>{story()}</Provider>]
};

export const Default = () => <InboxScreen />;
