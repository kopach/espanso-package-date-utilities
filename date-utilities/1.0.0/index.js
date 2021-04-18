const userDefinedLocale = "%snippet:'locale_for_Dates%";
const userDefinedDateOptions = "%snippet:'options_for_Dates%";

function GetFormattedDate(date) {
  var locale = undefined;

  var options = { month: '2-digit', day: '2-digit', year: 'numeric' };

  if (
    userDefinedLocale !== "('locale_for_Dates)" &&
    userDefinedLocale !== "%%snippet:'locale_for_Dates%%"
  ) {
    try {
      eval("locale = %snippet:'locale_for_Dates%");
    } catch (err) {
      eval("locale = '%snippet:'locale_for_Dates%'");
    }
  }

  if (
    userDefinedDateOptions !== "('options_for_Dates)" &&
    userDefinedDateOptions !== "%%snippet:'options_for_Dates%%"
  ) {
    eval("options = %snippet:'options_for_Dates%");
  }

  return date.toLocaleString(locale, options);
}

function CurrentDateObjectAddDays(p_intDays) {
  var objDate = new Date();

  var intDay = 1000 * 60 * 60 * 24;

  objDate.setDate(objDate.getDate() + p_intDays);

  return objDate;
}

function CurrentDateAddDays(p_intDays) {
  var objDate = CurrentDateObjectAddDays(p_intDays);

  return GetFormattedDate(objDate);
}

function CurrentDateStampAddDays(p_intDays) {
  var objDate = CurrentDateObjectAddDays(p_intDays);

  return GetFormattedDate(objDate);
}

function CurrentDateAddWeeks(p_intWeeks) {
  return CurrentDateAddDays(7 * p_intWeeks);
}

function CurrentDateStampAddWeeks(p_intWeeks) {
  return CurrentDateStampAddDays(7 * p_intWeeks);
}

function PrePadZero(p_intInput) {
  return p_intInput < 10 ? '0' + p_intInput : p_intInput;
}

//Constants for JavaScript days of the week IDs

var CON_DAY_SUN = 0;

var CON_DAY_MON = 1;

var CON_DAY_TUE = 2;

var CON_DAY_WED = 3;

var CON_DAY_THU = 4;

var CON_DAY_FRI = 5;

var CON_DAY_SAT = 6;

//Return the next Monday/Tuesday/Wednesday/etc. after today

function NextDay(p_dtStartDate, p_intDay) {
  var dtFinalDate = new Date(p_dtStartDate || new Date());

  dtFinalDate.setDate(
    dtFinalDate.getDate() + ((p_intDay - 1 - dtFinalDate.getDay() + 7) % 7) + 1
  );

  return dtFinalDate;
}

//Return the last Monday/Tuesday/Wednesday/etc. before today

function PrevDay(p_dtStartDate, p_intDay) {
  //Move us just over a week back

  var dtModifiedDate = new Date();

  dtModifiedDate.setDate(p_dtStartDate.getDate() - 8);

  //Now add forward

  return NextDay(dtModifiedDate, p_intDay);
}

function GetNextDay(p_intDay) {
  var objDate = new Date();

  return NextDay(objDate, p_intDay);
}

function GetPrevDay(p_intDay) {
  var objDate = new Date();

  return PrevDay(objDate, p_intDay);
}

function GetNextDayDate(p_intDay) {
  return GetFormattedDate(GetNextDay(p_intDay));
}

function GetPrevDayDate(p_intDay) {
  return GetFormattedDate(GetPrevDay(p_intDay));
}

function GetNextDayDateStamp(p_intDay) {
  return FormatDate_yyyymmdd(GetNextDay(p_intDay));
}

function GetPrevDayDateStamp(p_intDay) {
  return FormatDate_yyyymmdd(GetPrevDay(p_intDay));
}

function FormatDate_yyyymmdd(objDate) {
  return (
    objDate.getFullYear() +
    '-' +
    PrePadZero(objDate.getMonth() + 1) +
    '-' +
    PrePadZero(objDate.getDate())
  );
}

function GetWeekDay(p_strDate) {
  //Return day of week from a date string formatted mm/dd/yyyy

  var dtInput = new Date(p_strDate);

  //Hold the days of the week in an array

  var astrWeekDay = new Array(7);

  astrWeekDay[0] = 'Sunday';

  astrWeekDay[1] = 'Monday';

  astrWeekDay[2] = 'Tuesday';

  astrWeekDay[3] = 'Wednesday';

  astrWeekDay[4] = 'Thursday';

  astrWeekDay[5] = 'Friday';

  astrWeekDay[6] = 'Saturday';

  //Read back the day of the week from the array

  return astrWeekDay[dtInput.getDay()];
}
