import logo from '../images/logo.png';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <div className="logo-container">
          <img src={logo} alt="Tori" width="48" height="48" />
          <span className="logo-text">Your Logo</span>
        </div>
        <div>
          <WalletModalProvider>
            <WalletMultiButton />
          </WalletModalProvider>
        </div>
      </div>
    </div>
  );
}
