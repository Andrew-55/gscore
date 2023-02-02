import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  @font-face {
    font-family: "Inter_Medium";
    src: local("Inter_Medium") url("fonts/Inter_Medium.woff2") format('woff2');
  }

  @font-face {
    font-family: "Inter_SemiBold";
    src: local("Inter_SemiBold") url("fonts/Inter_SemiBold.woff2") format('woff2');
  }

  @font-face {
    font-family: "Inter_Bold";
    src: local("Inter_Bold") url("fonts/Inter_Bold.woff2") format('woff2');
  }

  @font-face {
    font-family: "THICCCBOI_Medium";
    src: local("THICCCBOI_Medium") url("fonts/THICCCBOI_Medium.woff2") format('woff2');
  }

  @font-face {
    font-family: "THICCCBOI_SemiBold";
    src: local("THICCCBOI_SemiBold") url("fonts/THICCCBOI-SemiBold.woff2") format('woff2');
  }

  @font-face {
    font-family: "THICCCBOI_Bold";
    src: local("THICCCBOI_Bold") url("fonts/THICCCBOI-Bold.woff2") format('woff2');
  }

  @font-face {
    font-family: "DM_Sans_Bold";
    src: local("DM_Sans_Bold") url("fonts/DMSans-Bold.woff2") format('woff2');
  }
  
  @font-face {
    font-family: "DM_Sans_Regular";
    src: local("DM Sans Regular") url("fonts/DMSans-Regular.woff2") format('woff2');
    font-weight: 400;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

`;
