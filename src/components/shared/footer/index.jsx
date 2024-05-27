import globusIcon from '@/assets/icons/globus.svg'

const Footer = () => {
  return (
    <footer bg="#F7F7F7" border py="34px" mt="50px">
      <div container mx-auto flex items-center justify-between>
        <div flex items-center gap-4>
          <span>2024, thebron</span>
          <span>
            Конфиденцальность
          </span>
          <span>
            Условия
          </span>
          <span>
            Реквезиты
          </span>
        </div>
        <div flex items-center gap-4>
          <img src={globusIcon} alt="" />
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.46 6.5C21.69 6.85 20.86 7.08 20 7.19C20.88 6.66 21.56 5.82 21.88 4.81C21.05 5.31 20.13 5.66 19.16 5.86C18.37 5 17.26 4.5 16 4.5C13.65 4.5 11.73 6.42 11.73 8.79C11.73 9.13 11.77 9.46 11.84 9.77C8.28004 9.59 5.11004 7.88 3.00004 5.29C2.63004 5.92 2.42004 6.66 2.42004 7.44C2.42004 8.93 3.17004 10.25 4.33004 11C3.62004 11 2.96004 10.8 2.38004 10.5V10.53C2.38004 12.61 3.86004 14.35 5.82004 14.74C5.19077 14.9122 4.53013 14.9362 3.89004 14.81C4.16165 15.6625 4.69358 16.4084 5.41106 16.9429C6.12854 17.4775 6.99549 17.7737 7.89004 17.79C6.37367 18.9904 4.49404 19.6393 2.56004 19.63C2.22004 19.63 1.88004 19.61 1.54004 19.57C3.44004 20.79 5.70004 21.5 8.12004 21.5C16 21.5 20.33 14.96 20.33 9.29C20.33 9.1 20.33 8.92 20.32 8.73C21.16 8.13 21.88 7.37 22.46 6.5Z" fill="black" />
          </svg>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 12.5C22 6.98 17.52 2.5 12 2.5C6.48 2.5 2 6.98 2 12.5C2 17.34 5.44 21.37 10 22.3V15.5H8V12.5H10V10C10 8.07 11.57 6.5 13.5 6.5H16V9.5H14C13.45 9.5 13 9.95 13 10.5V12.5H16V15.5H13V22.45C18.05 21.95 22 17.69 22 12.5Z" fill="black" />
          </svg>
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.0281 2.5C14.1531 2.503 14.7241 2.509 15.2171 2.523L15.4111 2.53C15.6351 2.538 15.8561 2.548 16.1231 2.56C17.1871 2.61 17.9131 2.778 18.5501 3.025C19.2101 3.279 19.7661 3.623 20.3221 4.178C20.8306 4.6779 21.224 5.28259 21.4751 5.95C21.7221 6.587 21.8901 7.313 21.9401 8.378C21.9521 8.644 21.9621 8.865 21.9701 9.09L21.9761 9.284C21.9911 9.776 21.9971 10.347 21.9991 11.472L22.0001 12.218V13.528C22.0025 14.2574 21.9949 14.9868 21.9771 15.716L21.9711 15.91C21.9631 16.135 21.9531 16.356 21.9411 16.622C21.8911 17.687 21.7211 18.412 21.4751 19.05C21.2248 19.7178 20.8312 20.3226 20.3221 20.822C19.8221 21.3303 19.2174 21.7238 18.5501 21.975C17.9131 22.222 17.1871 22.39 16.1231 22.44C15.8858 22.4512 15.6485 22.4612 15.4111 22.47L15.2171 22.476C14.7241 22.49 14.1531 22.497 13.0281 22.499L12.2821 22.5H10.9731C10.2434 22.5025 9.51361 22.4949 8.78409 22.477L8.59009 22.471C8.3527 22.462 8.11536 22.4517 7.87809 22.44C6.81409 22.39 6.08809 22.222 5.45009 21.975C4.78276 21.7244 4.17831 21.3308 3.67909 20.822C3.17013 20.3223 2.77631 19.7176 2.52509 19.05C2.27809 18.413 2.11009 17.687 2.06009 16.622C2.04895 16.3847 2.03895 16.1474 2.03009 15.91L2.02509 15.716C2.00666 14.9868 1.99833 14.2574 2.00009 13.528V11.472C1.9973 10.7426 2.00463 10.0132 2.02209 9.284L2.02909 9.09C2.03709 8.865 2.04709 8.644 2.05909 8.378C2.10909 7.313 2.27709 6.588 2.52409 5.95C2.7752 5.2819 3.16981 4.67702 3.68009 4.178C4.17918 3.66947 4.78323 3.27599 5.45009 3.025C6.08809 2.778 6.81309 2.61 7.87809 2.56C8.14409 2.548 8.36609 2.538 8.59009 2.53L8.78409 2.524C9.51328 2.50623 10.2427 2.49857 10.9721 2.501L13.0281 2.5ZM12.0001 7.5C10.674 7.5 9.40224 8.02678 8.46455 8.96447C7.52687 9.90215 7.00009 11.1739 7.00009 12.5C7.00009 13.8261 7.52687 15.0979 8.46455 16.0355C9.40224 16.9732 10.674 17.5 12.0001 17.5C13.3262 17.5 14.5979 16.9732 15.5356 16.0355C16.4733 15.0979 17.0001 13.8261 17.0001 12.5C17.0001 11.1739 16.4733 9.90215 15.5356 8.96447C14.5979 8.02678 13.3262 7.5 12.0001 7.5ZM12.0001 9.5C12.3941 9.49993 12.7842 9.57747 13.1482 9.72817C13.5122 9.87887 13.8429 10.0998 14.1216 10.3783C14.4002 10.6569 14.6212 10.9875 14.772 11.3515C14.9229 11.7154 15.0005 12.1055 15.0006 12.4995C15.0007 12.8935 14.9231 13.2836 14.7724 13.6476C14.6217 14.0116 14.4008 14.3423 14.1223 14.621C13.8437 14.8996 13.5131 15.1206 13.1491 15.2714C12.7851 15.4223 12.3951 15.4999 12.0011 15.5C11.2054 15.5 10.4424 15.1839 9.87977 14.6213C9.31716 14.0587 9.00109 13.2956 9.00109 12.5C9.00109 11.7044 9.31716 10.9413 9.87977 10.3787C10.4424 9.81607 11.2054 9.5 12.0011 9.5M17.2511 6C16.9196 6 16.6016 6.1317 16.3672 6.36612C16.1328 6.60054 16.0011 6.91848 16.0011 7.25C16.0011 7.58152 16.1328 7.89946 16.3672 8.13388C16.6016 8.3683 16.9196 8.5 17.2511 8.5C17.5826 8.5 17.9006 8.3683 18.135 8.13388C18.3694 7.89946 18.5011 7.58152 18.5011 7.25C18.5011 6.91848 18.3694 6.60054 18.135 6.36612C17.9006 6.1317 17.5826 6 17.2511 6Z" fill="black" />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
