const ShowDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const month = months[date.getMonth()]
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const day = days[date.getDay()]
  
  return (
    <section className="ShowDate">
      <div className="datewrapper">
        <h2 className="currentdate">
          {day} {month} {date.getDate()}, {year}.
        </h2>
        
      </div>
    </section>
  )
}

export default ShowDate;