import { extendTheme } from "@chakra-ui/react";
import { Container } from "../theme/components/Container";
import { Accordion } from "../theme/components/Accordion";
import { Slider } from "../theme/components/Slider";
import { Switch } from "../theme/components/Switch";
import { Input } from "../theme/components/Input";
import { Modal } from "../theme/components/Modal";
import { Select } from "../theme/components/Select";
import themeConfig from "../theme/config";
import breakpoints from "../theme/breakpoints";
import { Button } from "../theme/components/Button";

const theme = extendTheme({
  config: themeConfig,
  colors: {
    primary: {
      "100": "#ECF4FF",
      "200": "#B1C5FF",
      "300": "#7695FF",
      "400": "#3B66FF",
      "500": "#335ada",
      "600": "#2a4db6",
      "700": "#223f95",
      "800": "#172f72",
      "900": "#0b1d50",
      "1000": "#01082d",
    },
    gray: {
      "100": "#FFFFFF",
      "200": "#F6F9FA",
      "300": "#D5E1EC",
      "400": "#A7BCCF",
      "500": "#8CA1B5",
      "600": "#6C8195",
      "700": "#586B7D",
      "800": "#465664",
      "900": "#303B44",
      "1000": "#1F272E",
    },
    black: {
      "400": "#141414",
    },
  },
  components: {
    Container,
    Accordion,
    Slider,
    Switch,
    Input,
    Modal,
    Select,
    Button,
  },
  breakpoints,
});

export default theme;
