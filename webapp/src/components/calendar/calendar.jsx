import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import Axios from "axios";
class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.getTasks();
    this.state = {
      tasks: [],
      teste: [{title:"teste titulo",date: "2021-11-11"}],
    };
  }

  getTasks = async (event) => {
    await Axios.get("http://localhost:5000/getTasks").then((res) => {
      const array = res.data.result;
      this.setState({ tasks: array }, () => console.log(""));
      console.log(this.state.tasks);
      //console.log(this.state.teste);
    });
  };

  render() {
    return (
      <FullCalendar
        plugins={[dayGridPlugin]}
        events={this.state.tasks
          /*this.state.tasks.map(async (element) => {
            return ({ title: element.task, start: element.inicio })
          })*/
          //{title: this.state.teste[0].title,start: this.state.testedate}
        }
      />
    );
  }
}
/*function renderEventContent(eventInfo) {
  
    /*this.state.tasks.foreach(t => {
        calendar.addEvent( event [,this.state.tasks ] )
    });
    /*return (
        <>
          <b>{eventInfo.this.state.tasks[0].task}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
}*/
export default Calendar;
