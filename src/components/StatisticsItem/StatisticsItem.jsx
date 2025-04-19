import style from './StatisticsItem.module.css';

const StatisticsItem = ({ stat: { title, total }, icon: Icon }) => {
  return (
    <>
      <Icon size="36" />
      <span className={style.counter}>{total}</span>
      <p className={style.text}>{title}</p>
    </>
  );
};

export default StatisticsItem;
