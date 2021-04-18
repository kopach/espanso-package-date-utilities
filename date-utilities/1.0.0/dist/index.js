#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = require("commander");
var date_fns_1 = require("date-fns");
var lodash_1 = require("lodash");
var OPTIONS = {
    today: function () { return void 0; },
    tomorrow: function () { return void 0; },
    dayAfterTomorrow: function () { return void 0; },
    threeDaysFromNow: function () { return void 0; },
    fourDaysFromNow: function () { return void 0; },
    fiveDaysFromNow: function () { return void 0; },
    sixDaysFromNow: function () { return void 0; },
    weekFromNow: function () { return void 0; },
    yesterday: function () { return void 0; },
    dayBeforeYesterday: function () { return void 0; },
    threeDaysAgo: function () { return void 0; },
    fourDaysAgo: function () { return void 0; },
    fiveDaysAgo: function () { return void 0; },
    sixDaysAgo: function () { return void 0; },
    weekAgo: function () { return void 0; },
    lastSunday: function () { return void 0; },
    lastMonday: function () { return void 0; },
    lastTuesday: function () { return void 0; },
    lastWednesday: function () { return void 0; },
    lastThursday: function () { return void 0; },
    lastFriday: function () { return void 0; },
    lastSaturday: function () { return void 0; },
    nextSunday: function () { return void 0; },
    nextMonday: function () { return void 0; },
    nextTuesday: function () { return void 0; },
    nextWednesday: function () { return void 0; },
    nextThursday: function () { return void 0; },
    nextFriday: function () { return void 0; },
    nextSaturday: function () { return void 0; },
    firstDayOfThisMonth: function () { return void 0; },
    lastDayOfThisMonth: function () { return void 0; },
    firstDayOfNextMonth: function () { return void 0; },
    lastDayOfNextMonth: function () { return void 0; },
    firstDayOfPreviousMonth: function () { return void 0; },
    lastDayOfPreviousMonth: function () { return void 0; },
};
commander_1.program
    .option("-d0, " + toOption(OPTIONS.today))
    .option("-d1, " + toOption(OPTIONS.tomorrow))
    .option("-d2, " + toOption(OPTIONS.dayAfterTomorrow))
    .option("-d3, " + toOption(OPTIONS.threeDaysFromNow))
    .option("-d4, " + toOption(OPTIONS.fourDaysFromNow))
    .option("-d5, " + toOption(OPTIONS.fiveDaysFromNow))
    .option("-d6, " + toOption(OPTIONS.sixDaysFromNow))
    .option("-d7, " + toOption(OPTIONS.weekFromNow))
    .option("-d-1, " + toOption(OPTIONS.yesterday))
    .option("-d-2, " + toOption(OPTIONS.dayBeforeYesterday))
    .option("-d-3, " + toOption(OPTIONS.threeDaysAgo))
    .option("-d-4, " + toOption(OPTIONS.fourDaysAgo))
    .option("-d-5, " + toOption(OPTIONS.fiveDaysAgo))
    .option("-d-6, " + toOption(OPTIONS.sixDaysAgo))
    .option("-d-7, " + toOption(OPTIONS.weekAgo))
    .option("-lsu, " + toOption(OPTIONS.lastSunday))
    .option("-lmo, " + toOption(OPTIONS.lastMonday))
    .option("-ltu, " + toOption(OPTIONS.lastTuesday))
    .option("-lwe, " + toOption(OPTIONS.lastWednesday))
    .option("-lth, " + toOption(OPTIONS.lastThursday))
    .option("-lfr, " + toOption(OPTIONS.lastFriday))
    .option("-lsa, " + toOption(OPTIONS.lastSaturday))
    .option("-nsu, " + toOption(OPTIONS.nextSunday))
    .option("-nmo, " + toOption(OPTIONS.nextMonday))
    .option("-ntu, " + toOption(OPTIONS.nextTuesday))
    .option("-nwe, " + toOption(OPTIONS.nextWednesday))
    .option("-nth, " + toOption(OPTIONS.nextThursday))
    .option("-nfr, " + toOption(OPTIONS.nextFriday))
    .option("-nsa, " + toOption(OPTIONS.nextSaturday))
    .option("-1dtm, " + toOption(OPTIONS.firstDayOfThisMonth))
    .option("-ldtm, " + toOption(OPTIONS.lastDayOfThisMonth))
    .option("-1dnm, " + toOption(OPTIONS.firstDayOfNextMonth))
    .option("-ldnm, " + toOption(OPTIONS.lastDayOfNextMonth))
    .option("-1dpm, " + toOption(OPTIONS.firstDayOfPreviousMonth))
    .option("-ldpm, " + toOption(OPTIONS.lastDayOfPreviousMonth));
commander_1.program.parse(process.argv);
if (getOption(OPTIONS.today)) {
    var date = new Date();
    printFormatted(date);
}
else if (getOption(OPTIONS.tomorrow)) {
    var date = date_fns_1.add(Date.now(), { days: 1 });
    printFormatted(date);
}
else if (getOption(OPTIONS.dayAfterTomorrow)) {
    var date = date_fns_1.add(Date.now(), { days: 2 });
    printFormatted(date);
}
else if (getOption(OPTIONS.threeDaysFromNow)) {
    var date = date_fns_1.add(Date.now(), { days: 3 });
    printFormatted(date);
}
else if (getOption(OPTIONS.fourDaysFromNow)) {
    var date = date_fns_1.add(Date.now(), { days: 4 });
    printFormatted(date);
}
else if (getOption(OPTIONS.fiveDaysFromNow)) {
    var date = date_fns_1.add(Date.now(), { days: 5 });
    printFormatted(date);
}
else if (getOption(OPTIONS.sixDaysFromNow)) {
    var date = date_fns_1.add(Date.now(), { days: 6 });
    printFormatted(date);
}
else if (getOption(OPTIONS.weekFromNow)) {
    var date = date_fns_1.add(Date.now(), { days: 7 });
    printFormatted(date);
}
else if (getOption(OPTIONS.yesterday)) {
    var date = date_fns_1.sub(Date.now(), { days: 1 });
    printFormatted(date);
}
else if (getOption(OPTIONS.dayBeforeYesterday)) {
    var date = date_fns_1.sub(Date.now(), { days: 2 });
    printFormatted(date);
}
else if (getOption(OPTIONS.threeDaysAgo)) {
    var date = date_fns_1.sub(Date.now(), { days: 3 });
    printFormatted(date);
}
else if (getOption(OPTIONS.fourDaysAgo)) {
    var date = date_fns_1.sub(Date.now(), { days: 4 });
    printFormatted(date);
}
else if (getOption(OPTIONS.fiveDaysAgo)) {
    var date = date_fns_1.sub(Date.now(), { days: 5 });
    printFormatted(date);
}
else if (getOption(OPTIONS.sixDaysAgo)) {
    var date = date_fns_1.sub(Date.now(), { days: 6 });
    printFormatted(date);
}
else if (getOption(OPTIONS.weekAgo)) {
    var date = date_fns_1.sub(Date.now(), { days: 7 });
    printFormatted(date);
}
else if (getOption(OPTIONS.lastSunday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 0);
    printFormatted(date);
}
else if (getOption(OPTIONS.lastMonday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 1);
    printFormatted(date);
}
else if (getOption(OPTIONS.lastTuesday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 2);
    printFormatted(date);
}
else if (getOption(OPTIONS.lastWednesday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 3);
    printFormatted(date);
}
else if (getOption(OPTIONS.lastThursday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 4);
    printFormatted(date);
}
else if (getOption(OPTIONS.lastFriday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 5);
    printFormatted(date);
}
else if (getOption(OPTIONS.lastSaturday)) {
    var date = date_fns_1.nextDay(date_fns_1.sub(Date.now(), { weeks: 1, days: 1 }), 6);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextSunday)) {
    var date = date_fns_1.nextDay(Date.now(), 0);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextMonday)) {
    var date = date_fns_1.nextDay(Date.now(), 1);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextTuesday)) {
    var date = date_fns_1.nextDay(Date.now(), 2);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextWednesday)) {
    var date = date_fns_1.nextDay(Date.now(), 3);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextThursday)) {
    var date = date_fns_1.nextDay(Date.now(), 4);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextFriday)) {
    var date = date_fns_1.nextDay(Date.now(), 5);
    printFormatted(date);
}
else if (getOption(OPTIONS.nextSaturday)) {
    var date = date_fns_1.nextDay(Date.now(), 6);
    printFormatted(date);
}
else if (getOption(OPTIONS.firstDayOfThisMonth)) {
    var date = date_fns_1.startOfMonth(Date.now());
    printFormatted(date);
}
else if (getOption(OPTIONS.lastDayOfThisMonth)) {
    var date = date_fns_1.lastDayOfMonth(Date.now());
    printFormatted(date);
}
else if (getOption(OPTIONS.firstDayOfNextMonth)) {
    var date = date_fns_1.startOfMonth(date_fns_1.add(Date.now(), { months: 1 }));
    printFormatted(date);
}
else if (getOption(OPTIONS.lastDayOfNextMonth)) {
    var date = date_fns_1.lastDayOfMonth(date_fns_1.add(Date.now(), { months: 1 }));
    printFormatted(date);
}
else if (getOption(OPTIONS.firstDayOfPreviousMonth)) {
    var date = date_fns_1.startOfMonth(date_fns_1.sub(Date.now(), { months: 1, days: 1 }));
    printFormatted(date);
}
else if (getOption(OPTIONS.lastDayOfPreviousMonth)) {
    var date = date_fns_1.lastDayOfMonth(date_fns_1.sub(Date.now(), { months: 1, days: 1 }));
    printFormatted(date);
}
function toOption(property) {
    return "--" + lodash_1.kebabCase(property.name);
}
function getOption(property) {
    var options = commander_1.program.opts();
    return options[lodash_1.camelCase(property.name)];
}
function printFormatted(firstDayOfNextMonth) {
    console.log(date_fns_1.format(firstDayOfNextMonth, 'dd MMM yyyy'));
}
