import lesson_folder from '../static/folder.svg'
const lessons = [
{id:1,name:'Английский язык',image:lesson_folder},
{id:2,name:'Русский язык',image:lesson_folder},
{id:3,name:'Математика',image:lesson_folder},
{id:4,name:'Физика',image:lesson_folder},
{id:5,name:'Литература',image:lesson_folder},
{id:6,name:'Английский язык',image:lesson_folder},
{id:7,name:'Русский язык',image:lesson_folder},
{id:8,name:'Математика',image:lesson_folder},
{id:9,name:'Физика',image:lesson_folder},
{id:10,name:'Литература',image:lesson_folder},
{id:11,name:'Английский язык',image:lesson_folder},
{id:12,name:'Русский язык',image:lesson_folder},
{id:13,name:'Математика',image:lesson_folder},
{id:14,name:'Физика',image:lesson_folder},
{id:15,name:'Литература',image:lesson_folder},
]
function HomeWork() {
    return (
      <div className='center'>
      <div className='centered_homework'>
        {lessons.map((lesson)=>
        <div key = {lesson.id} className='homework_cards'>
          <ul>
          <li>{lesson.name}</li>
          <li><img src={lesson.image} alt ='folder_ico'/></li>
          </ul>

        </div>
        )}
      </div>
      </div>
    );
  }
  
  export default HomeWork;
  