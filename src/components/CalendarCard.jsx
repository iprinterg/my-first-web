function CalendarCard() {
  return (
    <div style={{ width: '100%', maxWidth: '900px' }}>
      <h2>我的行程</h2>
      <iframe
        src="https://calendar.google.com/calendar/embed?src=max3235111%40gmail.com&ctz=Asia%2FShanghai"
        style={{ width: '100%', height: '600px', border: 0 }}
        title="我的行程"
      ></iframe>
    </div>
  )
}

export default CalendarCard
