let x;

let d = new Date();

// Date Methods

x = d.toString();

x = d.getTime();

x = d.valueOf();

x = d.getFullYear();

x = d.getMonth() + 1;

x = d.getDate();

x = d.getHours();

x = d.getMinutes();

x = d.getSeconds();

x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

x = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

// Intl.DateTimeFormat API (locale specific)

x = Intl.DateTimeFormat('en-US').format(d);
x = Intl.DateTimeFormat('en-GB').format(d);
x = Intl.DateTimeFormat('zh-CN').format(d);
x = Intl.DateTimeFormat('default').format(d);
x = Intl.DateTimeFormat('zh-CN', { month: 'long', year: 'numeric' }).format(d);

x = d.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZone: 'Asia/Seoul',
});

console.log(x);
