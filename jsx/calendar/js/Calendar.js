const Calendar = function(props) {
  const {date} = props;
  const monthsInGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const day = date.toLocaleString('ru', {weekday: 'long'});
  const month = date.toLocaleString('ru', {month: 'long'});
  
  const daysInMonth = 33 - new Date(date.getFullYear(), date.getMonth(), 33).getDate();
  const calendar = calendarGenerator();
  
  function calendarGenerator() {
    const daysArray = [];
    /* Определяем количество дней предыдущего и следующего месяцев, которые нужно отразить в календаре */
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay(),
          lastDay = new Date(date.getFullYear(), date.getMonth(), daysInMonth).getDay();
    let LastMonthDaysNum,
        NextMonthDaysNum;
    if (firstDay === 0) {
      LastMonthDaysNum = 6;
    }
    if (firstDay === 1) {
      LastMonthDaysNum = 0;
    }
    if (firstDay > 1 ) {
      LastMonthDaysNum = firstDay - 1;
    }
    if (lastDay === 0) {
      NextMonthDaysNum = 0;
    }
    if (lastDay > 0) {
      NextMonthDaysNum = 7 - lastDay;
    }
    
    /* Добавляем в календарь дни предыдущего месяца */
    for (let i = 1; i <= LastMonthDaysNum; i++) {
      let item = {
        day: `${new Date(date.getFullYear(), date.getMonth(), 1 - i).getDate()}`,
        class: 'ui-datepicker-other-month'
      }
      daysArray.unshift(item);
    }
    
    /* Добавляем в календарь дни текущего месяца */
    for (let i = 1; i <= daysInMonth; i++) {
      let item = {
        day: `${new Date(date.getFullYear(), date.getMonth(), i).getDate()}`,
        class: ''
      }
      if (Number(item.day) === date.getDate()) {
        item.class = 'ui-datepicker-today';
      }
      daysArray.push(item);
    }
    
    /* Добавляем в календарь дни следующего месяца */
    for (let i = 1; i <= NextMonthDaysNum; i++) {
      let item = {
        day: `${new Date(date.getFullYear(), date.getMonth(), daysInMonth + i).getDate()}`,
        class: 'ui-datepicker-other-month'
      }
      daysArray.push(item);
    }
    
    /* Группируем все дни по неделям */
    const weeksArray = [];
    const weeksNumber = daysArray.length / 7;
    for (let i = 0; i < weeksNumber; i++) {
      let item = daysArray.splice(0, 7);
      weeksArray.push(item);
    }
    
    /* Возвращаем массив недель для календаря */
    return weeksArray;
  }
  
  /* Функция, возвращающая сниппет недели */
  function getWeekRow(item, index) {
    return (
      <tr key={index}>
        {item.map (day =>
          <td className={day.class}>{day.day}</td>
        )}
      </tr>
    );
  }
  
  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{day[0].toUpperCase() + day.substring(1)}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{monthsInGenitive[date.getMonth()]}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{month[0].toUpperCase() + month.substring(1)}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col/>
          <col/>
          <col/>
          <col/>
          <col/>
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          { calendar.map(getWeekRow) }
        </tbody>
      </table>
    </div>
  );
}