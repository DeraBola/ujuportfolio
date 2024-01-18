export type TIconProps = React.SVGProps<SVGSVGElement>;

export const Icons = {
  facebook: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="25" viewBox="0 0 14 25" fill="none" {...props}>
      <path d="M12.5122 14.0625L13.2065 9.53809H8.86523V6.60205C8.86523 5.36426 9.47168 4.15771 11.416 4.15771H13.3896V0.305664C13.3896 0.305664 11.5986 0 9.88623 0C6.31104 0 3.97412 2.16699 3.97412 6.08984V9.53809H0V14.0625H3.97412V25H8.86523V14.0625H12.5122Z" fill="black" fill-opacity="0.6"/>
    </svg>
  ),
  instagram: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M12.5028 6.09032C8.95566 6.09032 6.09453 8.95208 6.09453 12.5C6.09453 16.0479 8.95566 18.9097 12.5028 18.9097C16.0499 18.9097 18.911 16.0479 18.911 12.5C18.911 8.95208 16.0499 6.09032 12.5028 6.09032ZM12.5028 16.6671C10.2105 16.6671 8.33659 14.7983 8.33659 12.5C8.33659 10.2017 10.205 8.33287 12.5028 8.33287C14.8006 8.33287 16.669 10.2017 16.669 12.5C16.669 14.7983 14.795 16.6671 12.5028 16.6671ZM20.6679 5.82813C20.6679 6.65932 19.9986 7.32316 19.1732 7.32316C18.3422 7.32316 17.6785 6.65374 17.6785 5.82813C17.6785 5.00251 18.3477 4.33309 19.1732 4.33309C19.9986 4.33309 20.6679 5.00251 20.6679 5.82813ZM24.9122 7.34548C24.8173 5.3428 24.36 3.56884 22.8932 2.10727C21.432 0.64571 19.6584 0.188274 17.6562 0.0878612C15.5926 -0.0292871 9.40742 -0.0292871 7.34384 0.0878612C5.34718 0.182696 3.57362 0.640132 2.1068 2.1017C0.639989 3.56326 0.188232 5.33722 0.0878416 7.3399C-0.0292805 9.40394 -0.0292805 15.5905 0.0878416 17.6545C0.182655 19.6572 0.639989 21.4312 2.1068 22.8927C3.57362 24.3543 5.34161 24.8117 7.34384 24.9121C9.40742 25.0293 15.5926 25.0293 17.6562 24.9121C19.6584 24.8173 21.432 24.3599 22.8932 22.8927C24.3544 21.4312 24.8118 19.6572 24.9122 17.6545C25.0293 15.5905 25.0293 9.40952 24.9122 7.34548ZM22.2462 19.8692C21.8112 20.9626 20.969 21.8049 19.8703 22.2456C18.225 22.8983 14.321 22.7477 12.5028 22.7477C10.6846 22.7477 6.77496 22.8927 5.13525 22.2456C4.04211 21.8105 3.19994 20.9681 2.75934 19.8692C2.1068 18.2235 2.25739 14.3186 2.25739 12.5C2.25739 10.6814 2.11238 6.77089 2.75934 5.13082C3.19437 4.03743 4.03653 3.19508 5.13525 2.75438C6.78054 2.1017 10.6846 2.25232 12.5028 2.25232C14.321 2.25232 18.2306 2.10727 19.8703 2.75438C20.9635 3.1895 21.8056 4.03185 22.2462 5.13082C22.8988 6.77647 22.7482 10.6814 22.7482 12.5C22.7482 14.3186 22.8988 18.2291 22.2462 19.8692Z" fill="black" fill-opacity="0.6"/>
    </svg>
  ),
  love: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M17.6232 1.68188C13.5151 1.68188 12.0057 5.88001 12.0057 5.88001C12.0057 5.88001 10.517 1.68188 6.38071 1.68188C3.27195 1.68188 -0.271798 4.14564 1.03695 9.74627C2.3457 15.3469 12.017 22.3238 12.017 22.3238C12.017 22.3238 21.6526 15.3469 22.9632 9.74627C24.272 4.14564 20.9832 1.68188 17.6232 1.68188Z" fill="#F44336"/>
      <path d="M5.74698 2.10001C8.97198 2.10001 10.5732 5.56688 11.0907 6.97126C11.1638 7.17188 11.4432 7.17751 11.5276 6.98251L12.0001 5.87813C11.3345 3.75188 9.50448 1.68188 6.38073 1.68188C5.08698 1.68188 3.72011 2.10938 2.65698 3.01126C3.59636 2.39438 4.69698 2.10001 5.74698 2.10001Z" fill="#CC3333"/>
      <path d="M17.6233 1.68188C16.6315 1.68188 15.7277 1.89751 15.0227 2.33251C15.5177 2.14126 16.1308 2.10001 16.7383 2.10001C19.7777 2.10001 22.4983 4.40438 21.2702 9.73125C20.2165 14.3044 14.059 19.8525 12.1783 21.9694C12.0583 22.1044 12.0171 22.3219 12.0171 22.3219C12.0171 22.3219 21.6527 15.345 22.9633 9.74437C24.2721 4.14563 20.989 1.68188 17.6233 1.68188Z" fill="#CC3333"/>
      <path d="M3.19499 4.65377C3.89811 3.77627 5.15436 3.05064 6.21936 3.88689C6.79498 4.33877 6.54373 5.26502 6.02811 5.65502C5.27811 6.22502 4.62561 6.56814 4.16811 7.46064C3.89436 7.99689 3.72936 8.58376 3.64499 9.18189C3.61124 9.41814 3.30186 9.47626 3.18561 9.26814C2.39436 7.86564 2.16936 5.93439 3.19499 4.65377Z" fill="#FF8A80"/>
      <path d="M14.4677 6.49879C14.1377 6.49879 13.9052 6.18004 14.0252 5.87254C14.2483 5.30629 14.5371 4.75879 14.8839 4.27129C15.3977 3.55129 16.3746 3.13129 16.9933 3.56817C17.6271 4.01442 17.5446 4.90692 17.1002 5.33817C16.1458 6.26254 14.9421 6.49879 14.4677 6.49879Z" fill="#FF8A80"/>
    </svg>
  ),
  twitter: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M22.4303 6.23045C22.4461 6.50387 22.4461 6.77735 22.4461 7.05078C22.4461 15.3906 17.2907 25 7.86805 25C4.96511 25 2.26842 23.9648 0 22.168C0.412453 22.2266 0.808988 22.2461 1.23731 22.2461C3.63258 22.2461 5.83757 21.25 7.59837 19.5508C5.34582 19.4922 3.45812 17.6758 2.80773 15.1758C3.12501 15.2343 3.44225 15.2734 3.77541 15.2734C4.23542 15.2734 4.69548 15.1953 5.12375 15.0586C2.77604 14.4726 1.01519 11.9336 1.01519 8.86718V8.78908C1.69727 9.25783 2.49049 9.5508 3.33117 9.58982C1.95108 8.45698 1.04693 6.52341 1.04693 4.33589C1.04693 3.16404 1.30069 2.08982 1.74488 1.15231C4.26711 4.98044 8.05838 7.48039 12.3096 7.75388C12.2303 7.28513 12.1827 6.79689 12.1827 6.3086C12.1827 2.832 14.467 0 17.3065 0C18.7817 0 20.1142 0.761717 21.0501 1.99219C22.2081 1.71876 23.3185 1.19139 24.302 0.468753C23.9213 1.93363 23.1123 3.1641 22.0495 3.9453C23.0806 3.80864 24.08 3.457 25 2.96877C24.3021 4.21872 23.4296 5.33196 22.4303 6.23045Z" fill="black" fill-opacity="0.6"/>
    </svg>
  ),
  google: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <path d="M20.25 16.0603H19.425V17.9967C17.8937 19.2857 15.9062 19.9944 13.8062 19.9944C9.23125 19.9944 5.53125 16.635 5.53125 12.4944C5.53125 8.35938 9.23125 4.99442 13.8062 4.99442C16.0125 4.99442 18.0938 5.77567 19.6562 7.19308L23.55 3.66071C20.9375 1.30022 17.4813 0 13.7937 0C6.125 0 0 5.61384 0 12.5C0 19.3359 6.0625 25 13.7937 25C17.7437 25 21.575 23.5379 24.4813 20.3962C24.3563 18.856 23.6437 16.0603 20.25 16.0603ZM19.4937 9.78237H12.85V14.7489H20.25C22.3438 14.7489 24.0312 15.5915 25 17.0815V15.3739C25 11.7355 22.475 9.78237 19.4937 9.78237Z" fill="black" fill-opacity="0.6"/>
    </svg>
  ),
  arrowRight: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" {...props}>
      <path d="M9.30176 1.53285L10.3857 0.369455C10.8447 -0.123152 11.5869 -0.123152 12.041 0.369455L21.5332 10.5517C21.9922 11.0444 21.9922 11.8409 21.5332 12.3283L12.041 22.5158C11.582 23.0084 10.8398 23.0084 10.3857 22.5158L9.30176 21.3524C8.83789 20.8546 8.84766 20.0423 9.32129 19.5549L15.2051 13.5388H1.17188C0.522461 13.5388 0 12.9781 0 12.2811V10.6041C0 9.90716 0.522461 9.34643 1.17188 9.34643H15.2051L9.32129 3.33034C8.84277 2.84297 8.83301 2.03069 9.30176 1.53285Z" fill="#341616"/>
    </svg>
  ),
  arrowLeft: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none" {...props}>
      <path d="M12.9907 21.4128L11.9414 22.6076C11.4971 23.1135 10.7552 23.1353 10.2868 22.6563L0.499205 12.7577C0.0259275 12.2788 0.0024947 11.4826 0.446943 10.9819L9.63533 0.51955C10.0796 0.0136533 10.8215 -0.0081801 11.2899 0.470855L12.4076 1.60185C12.8859 2.08584 12.9001 2.89805 12.441 3.39914L6.73672 9.58572L20.7638 9.17289C21.413 9.15379 21.9517 9.69891 21.9722 10.3956L22.0215 12.0718C22.0421 12.7685 21.5363 13.3444 20.8872 13.3635L6.86005 13.7763L12.9183 19.6167C13.4109 20.0898 13.4446 20.9014 12.9907 21.4128Z" fill="#341616"/>
    </svg>
  ),
  hambugerMenu: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="13" viewBox="0 0 19 13" fill="none" {...props}>
      <path d="M18.0605 12.5H0.0605469V10.5H18.0605V12.5ZM18.0605 7.5H0.0605469V5.5H18.0605V7.5ZM18.0605 2.5H0.0605469V0.5H18.0605V2.5Z" fill="#160051"/>
    </svg>
  ),
  closeMenu: (props: TIconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41L17.59 5Z" fill="#2E3A59"/>
    </svg>
  ),
};
