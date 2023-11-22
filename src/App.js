import './App.css';
import React, {useState} from 'react';
import dayjs from 'dayjs';

class DateTime extends React.Component{
  render() {
    const props = this.props;
    return (
        <p className="date">{props.date}</p>
    )
  }
}

function DateTimePretty(Component) {
  return class extends React.Component {
    render() {
      let date = dayjs(this.props.date);
      let now = dayjs(new Date());
      let dayPretty = '';
      if (now.diff(date, 'minute') < 60) {
        dayPretty = now.diff(date, 'minute') + ' minutes ago';
      }
      else if (now.diff(date, 'hour') < 24) {
        dayPretty = now.diff(date, 'hour') + ' hours ago';
      }
      else {
        dayPretty = now.diff(date, 'day') + ' days ago';
      }

      return <Component date={dayPretty}/>
    }
  }
}

function Video(props) {
  const DatePretty = DateTimePretty(DateTime);
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DatePretty date={props.date} />
        </div>
    )
}

function VideoList(props) {
    return props.list.map(item => <Video url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-11-21 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2023-11-21 19:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}