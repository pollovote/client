import styles from './Tab.module.scss';
import { ReactComponent as Egg } from './images/egg.svg';
import { ReactComponent as Polls } from './images/polls.svg';
import { ReactComponent as Profile } from './images/profile.svg';
import { ReactComponent as Stars } from './images/stars.svg';
import { ReactComponent as Wallet } from './images/wallet.svg';

const TABS_TO_ICONS_MAP: Record<number, any> = {
  0: Egg,
  1: Stars,
  2: Polls,
  3: Wallet,
  4: Profile
};

interface Props {
  tab: number;
  name: string;
}

export const Tab = ({ tab, name }: Props) => {
  const IconTab = TABS_TO_ICONS_MAP[tab];
  return (
    <button className={styles.tab}>
      <IconTab className={styles.icon} />
      {name}
    </button>
  );
};
