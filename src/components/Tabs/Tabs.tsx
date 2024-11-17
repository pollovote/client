import styles from './Tabs.module.scss';
import { Tab } from '@/components/Tabs/components/Tab';
import { useTranslation } from 'react-i18next';

export const Tabs = () => {
  const { t } = useTranslation();

  const tabs = [
    {
      name: t('Egg'),
      tab: 0
    },
    {
      name: t('Rewards'),
      tab: 1
    },
    {
      name: t('Polls'),
      tab: 2
    },
    {
      name: t('Wallet'),
      tab: 3
    },
    {
      name: t('Profile'),
      tab: 4
    }
  ];
  return (
    <div className={styles.tabs}>
      {tabs.map(({ tab, name }) => {
        return <Tab key={tab + name} tab={tab} name={name}></Tab>;
      })}
    </div>
  );
};
