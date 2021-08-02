---
layout: js
---

var cal_dates = {{ site.cal_dates }};


var dates = [
  {%- for c in site.collections -%}
    {%- assign type = c.label -%}
    {%- for item in site[type] -%}
    {%- if item.due
     or item.assigned
     or item.exam_date
     or item.lecture_date -%}
          {%- if item.no_calendar -%}
          {%- else -%}
            {% include calendar_item.js %},
          {%- endif -%}
        {%- endif -%}
    {%- endfor -%}
  {%- endfor -%}
];

for (var i = 0; i < cal_dates.length; i++) {
  cal_dates[i].type = "cal_date";
}
dates = dates.concat(cal_dates);


const cal = {
   numWeeks: {{ site.num_weeks }},
   extraExamWeek : {% if site.extra_exam_week %}{{site.extra_exam_week}}{% else %}false{% endif %},
   startDate: moment("{{site.start_date}}"),
   startWeek: {% if site.start_week %} {{ site.start_week }} {% else %} 1{% endif %},
   days: { },
   days_outside_calendar: []
};

console.log("cal=",cal)

