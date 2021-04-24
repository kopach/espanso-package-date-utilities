#!/usr/bin/env node

import format from 'date-fns/format';
import startOfMonth from 'date-fns/startOfDay';
import sub from 'date-fns/sub';
import nextDay from 'date-fns/nextDay';
import lastDayOfMonth from 'date-fns/lastDayOfMonth';
import add from 'date-fns/add';
const argv = require('minimist')(process.argv.slice(2));

const OPTIONS = {
  today: 'd0',
  tomorrow: 'd1',
  dayAfterTomorrow: 'd2',
  threeDaysFromNow: 'd3',
  fourDaysFromNow: 'd4',
  fiveDaysFromNow: 'd5',
  sixDaysFromNow: 'd6',
  weekFromNow: 'd7',
  yesterday: 'd-1',
  dayBeforeYesterday: 'd-2',
  threeDaysAgo: 'd-3',
  fourDaysAgo: 'd-4',
  fiveDaysAgo: 'd-5',
  sixDaysAgo: 'd-6',
  weekAgo: 'd-7',
  lastSunday: 'lsu',
  lastMonday: 'lmo',
  lastTuesday: 'ltu',
  lastWednesday: 'lwe',
  lastThursday: 'lth',
  lastFriday: 'lfr',
  lastSaturday: 'lsa',
  nextSunday: 'nsu',
  nextMonday: 'nmo',
  nextTuesday: 'ntu',
  nextWednesday: 'nwe',
  nextThursday: 'nth',
  nextFriday: 'nfr',
  nextSaturday: 'nsa',
  firstDayOfThisMonth: '1dtm',
  lastDayOfThisMonth: 'ldtm',
  firstDayOfNextMonth: '1dnm',
  lastDayOfNextMonth: 'ldnm',
  firstDayOfPreviousMonth: '1dpm',
  lastDayOfPreviousMonth: 'ldpm',
};

if (getOption(OPTIONS.today)) {
  const date = new Date();
  printFormatted(date);
} else if (getOption(OPTIONS.tomorrow)) {
  const date = add(Date.now(), { days: 1 });
  printFormatted(date);
} else if (getOption(OPTIONS.dayAfterTomorrow)) {
  const date = add(Date.now(), { days: 2 });
  printFormatted(date);
} else if (getOption(OPTIONS.threeDaysFromNow)) {
  const date = add(Date.now(), { days: 3 });
  printFormatted(date);
} else if (getOption(OPTIONS.fourDaysFromNow)) {
  const date = add(Date.now(), { days: 4 });
  printFormatted(date);
} else if (getOption(OPTIONS.fiveDaysFromNow)) {
  const date = add(Date.now(), { days: 5 });
  printFormatted(date);
} else if (getOption(OPTIONS.sixDaysFromNow)) {
  const date = add(Date.now(), { days: 6 });
  printFormatted(date);
} else if (getOption(OPTIONS.weekFromNow)) {
  const date = add(Date.now(), { days: 7 });
  printFormatted(date);
} else if (getOption(OPTIONS.yesterday)) {
  const date = sub(Date.now(), { days: 1 });
  printFormatted(date);
} else if (getOption(OPTIONS.dayBeforeYesterday)) {
  const date = sub(Date.now(), { days: 2 });
  printFormatted(date);
} else if (getOption(OPTIONS.threeDaysAgo)) {
  const date = sub(Date.now(), { days: 3 });
  printFormatted(date);
} else if (getOption(OPTIONS.fourDaysAgo)) {
  const date = sub(Date.now(), { days: 4 });
  printFormatted(date);
} else if (getOption(OPTIONS.fiveDaysAgo)) {
  const date = sub(Date.now(), { days: 5 });
  printFormatted(date);
} else if (getOption(OPTIONS.sixDaysAgo)) {
  const date = sub(Date.now(), { days: 6 });
  printFormatted(date);
} else if (getOption(OPTIONS.weekAgo)) {
  const date = sub(Date.now(), { days: 7 });
  printFormatted(date);
} else if (getOption(OPTIONS.lastSunday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 0);
  printFormatted(date);
} else if (getOption(OPTIONS.lastMonday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 1);
  printFormatted(date);
} else if (getOption(OPTIONS.lastTuesday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 2);
  printFormatted(date);
} else if (getOption(OPTIONS.lastWednesday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 3);
  printFormatted(date);
} else if (getOption(OPTIONS.lastThursday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 4);
  printFormatted(date);
} else if (getOption(OPTIONS.lastFriday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 5);
  printFormatted(date);
} else if (getOption(OPTIONS.lastSaturday)) {
  const date = nextDay(sub(Date.now(), { weeks: 1, days: 1 }), 6);
  printFormatted(date);
} else if (getOption(OPTIONS.nextSunday)) {
  const date = nextDay(Date.now(), 0);
  printFormatted(date);
} else if (getOption(OPTIONS.nextMonday)) {
  const date = nextDay(Date.now(), 1);
  printFormatted(date);
} else if (getOption(OPTIONS.nextTuesday)) {
  const date = nextDay(Date.now(), 2);
  printFormatted(date);
} else if (getOption(OPTIONS.nextWednesday)) {
  const date = nextDay(Date.now(), 3);
  printFormatted(date);
} else if (getOption(OPTIONS.nextThursday)) {
  const date = nextDay(Date.now(), 4);
  printFormatted(date);
} else if (getOption(OPTIONS.nextFriday)) {
  const date = nextDay(Date.now(), 5);
  printFormatted(date);
} else if (getOption(OPTIONS.nextSaturday)) {
  const date = nextDay(Date.now(), 6);
  printFormatted(date);
} else if (getOption(OPTIONS.firstDayOfThisMonth)) {
  const date = startOfMonth(Date.now());
  printFormatted(date);
} else if (getOption(OPTIONS.lastDayOfThisMonth)) {
  const date = lastDayOfMonth(Date.now());
  printFormatted(date);
} else if (getOption(OPTIONS.firstDayOfNextMonth)) {
  const date = startOfMonth(add(Date.now(), { months: 1 }));
  printFormatted(date);
} else if (getOption(OPTIONS.lastDayOfNextMonth)) {
  const date = lastDayOfMonth(add(Date.now(), { months: 1 }));
  printFormatted(date);
} else if (getOption(OPTIONS.firstDayOfPreviousMonth)) {
  const date = startOfMonth(sub(Date.now(), { months: 1, days: 1 }));
  printFormatted(date);
} else if (getOption(OPTIONS.lastDayOfPreviousMonth)) {
  const date = lastDayOfMonth(sub(Date.now(), { months: 1, days: 1 }));
  printFormatted(date);
}

type Option = typeof OPTIONS[keyof typeof OPTIONS];

function getOption(property: Option): string {
  return argv[property];
}

function printFormatted(firstDayOfNextMonth: Date): void {
  console.log(format(firstDayOfNextMonth, 'dd MMM yyyy'));
}
