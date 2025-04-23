function Schedule() {
  const schedules = [
    {id:1,day:'Понедельник',lesson:'Математика',timetable:'9:00-9:45'},
    {id:2,day:'Понедельник',lesson:'Английский',timetable:'9:50-10:35'},
    {id:3,day:'Понедельник',lesson:'Физика',timetable:'10:45-11:30'},
    {id:4,day:'Понедельник',lesson:'Русский язык',timetable:'12:40-13:25'},
    {id:5,day:'Вторник',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:6,day:'Вторник',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:7,day:'Вторник',lesson:'Физика язык',timetable:'12:40-13:25'},
    {id:8,day:'Среда',lesson:'Математика',timetable:'12:40-13:25'},
    {id:9,day:'Среда',lesson:'Математика',timetable:'12:40-13:25'},
    {id:10,day:'Среда',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:11,day:'Среда',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:9,day:'Четверг',lesson:'Математика',timetable:'12:40-13:25'},
    {id:10,day:'Четверг',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:11,day:'Четверг',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:9,day:'Пятница',lesson:'Математика',timetable:'12:40-13:25'},
    {id:10,day:'Пятница',lesson:'Английский язык',timetable:'12:40-13:25'},
    {id:11,day:'Пятница',lesson:'Английский язык',timetable:'12:40-13:25'},
  ]
  const dayOrder = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница'];

const groupedByDay = schedules.reduce((acc, item) => {
    if (!acc[item.day]) {
        acc[item.day] = [];
    }
    acc[item.day].push(item);
    return acc;
}, {});

    return (
      <div className='schedule_centered'>
      {dayOrder
          .filter(day => groupedByDay[day])
          .map(day => (
              <div key={day} className="schedules">
                  <h3 style={{color:'#484848',borderBottom:'1px solid #484848',marginBottom:'1%',textAlign:'center'}}>{day}</h3>
                  {groupedByDay[day].map(schedule => (
                      <div key={schedule.id}>
                          <ul>
                              <li><h4>{schedule.lesson}</h4></li>
                              <li style={{borderBottom:'1px solid #484848'}}>{schedule.timetable}</li>
                          </ul>
                      </div>
                  ))}
              </div>
          ))
      }
  </div>
    );
  }
  
  export default Schedule;
  