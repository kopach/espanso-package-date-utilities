#!/usr/bin/env node

import { program } from 'commander';
import {
  add,
  format,
  startOfMonth,
  sub,
  nextDay,
  lastDayOfMonth,
} from 'date-fns';
import { kebabCase, camelCase } from 'lodash';

const OPTIONS = {
  today: (): void => void 0,
  tomorrow: (): void => void 0,
  dayAfterTomorrow: (): void => void 0,
  threeDaysFromNow: (): void => void 0,
  fourDaysFromNow: (): void => void 0,
  fiveDaysFromNow: (): void => void 0,
  sixDaysFromNow: (): void => void 0,
  weekFromNow: (): void => void 0,
  yesterday: (): void => void 0,
  dayBeforeYesterday: (): void => void 0,
  threeDaysAgo: (): void => void 0,
  fourDaysAgo: (): void => void 0,
  fiveDaysAgo: (): void => void 0,
  sixDaysAgo: (): void => void 0,
  weekAgo: (): void => void 0,
  lastSunday: (): void => void 0,
  lastMonday: (): void => void 0,
  lastTuesday: (): void => void 0,
  lastWednesday: (): void => void 0,
  lastThursday: (): void => void 0,
  lastFriday: (): void => void 0,
  lastSaturday: (): void => void 0,
  nextSunday: (): void => void 0,
  nextMonday: (): void => void 0,
  nextTuesday: (): void => void 0,
  nextWednesday: (): void => void 0,
  nextThursday: (): void => void 0,
  nextFriday: (): void => void 0,
  nextSaturday: (): void => void 0,
  firstDayOfThisMonth: (): void => void 0,
  lastDayOfThisMonth: (): void => void 0,
  firstDayOfNextMonth: (): void => void 0,
  lastDayOfNextMonth: (): void => void 0,
  firstDayOfPreviousMonth: (): void => void 0,
  lastDayOfPreviousMonth: (): void => void 0,
};

program
  .option(`-d0, ${toOption(OPTIONS.today)}`)
  .option(`-d1, ${toOption(OPTIONS.tomorrow)}`)
  .option(`-d2, ${toOption(OPTIONS.dayAfterTomorrow)}`)
  .option(`-d3, ${toOption(OPTIONS.threeDaysFromNow)}`)
  .option(`-d4, ${toOption(OPTIONS.fourDaysFromNow)}`)
  .option(`-d5, ${toOption(OPTIONS.fiveDaysFromNow)}`)
  .option(`-d6, ${toOption(OPTIONS.sixDaysFromNow)}`)
  .option(`-d7, ${toOption(OPTIONS.weekFromNow)}`)
  .option(`-d-1, ${toOption(OPTIONS.yesterday)}`)
  .option(`-d-2, ${toOption(OPTIONS.dayBeforeYesterday)}`)
  .option(`-d-3, ${toOption(OPTIONS.threeDaysAgo)}`)
  .option(`-d-4, ${toOption(OPTIONS.fourDaysAgo)}`)
  .option(`-d-5, ${toOption(OPTIONS.fiveDaysAgo)}`)
  .option(`-d-6, ${toOption(OPTIONS.sixDaysAgo)}`)
  .option(`-d-7, ${toOption(OPTIONS.weekAgo)}`)
  .option(`-lsu, ${toOption(OPTIONS.lastSunday)}`)
  .option(`-lmo, ${toOption(OPTIONS.lastMonday)}`)
  .option(`-ltu, ${toOption(OPTIONS.lastTuesday)}`)
  .option(`-lwe, ${toOption(OPTIONS.lastWednesday)}`)
  .option(`-lth, ${toOption(OPTIONS.lastThursday)}`)
  .option(`-lfr, ${toOption(OPTIONS.lastFriday)}`)
  .option(`-lsa, ${toOption(OPTIONS.lastSaturday)}`)
  .option(`-nsu, ${toOption(OPTIONS.nextSunday)}`)
  .option(`-nmo, ${toOption(OPTIONS.nextMonday)}`)
  .option(`-ntu, ${toOption(OPTIONS.nextTuesday)}`)
  .option(`-nwe, ${toOption(OPTIONS.nextWednesday)}`)
  .option(`-nth, ${toOption(OPTIONS.nextThursday)}`)
  .option(`-nfr, ${toOption(OPTIONS.nextFriday)}`)
  .option(`-nsa, ${toOption(OPTIONS.nextSaturday)}`)
  .option(`-1dtm, ${toOption(OPTIONS.firstDayOfThisMonth)}`)
  .option(`-ldtm, ${toOption(OPTIONS.lastDayOfThisMonth)}`)
  .option(`-1dnm, ${toOption(OPTIONS.firstDayOfNextMonth)}`)
  .option(`-ldnm, ${toOption(OPTIONS.lastDayOfNextMonth)}`)
  .option(`-1dpm, ${toOption(OPTIONS.firstDayOfPreviousMonth)}`)
  .option(`-ldpm, ${toOption(OPTIONS.lastDayOfPreviousMonth)}`);

program.parse(process.argv);

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

function toOption(property: Option): string {
  return `--${kebabCase(property.name)}`;
}

function getOption(property: Option): string {
  const options = program.opts();

  return options[camelCase(property.name)];
}

function printFormatted(firstDayOfNextMonth: Date): void {
  console.log(format(firstDayOfNextMonth, 'dd MMM yyyy'));
}
