  
  export interface Pf {
      empty: boolean;
      unusedTokens: any[];
      unusedInput: any[];
      overflow: number;
      charsLeftOver: number;
      nullInput: boolean;
      invalidEra?: any;
      invalidMonth?: any;
      invalidFormat: boolean;
      userInvalidated: boolean;
      iso: boolean;
      parsedDateParts: any[];
      era?: any;
      meridiem?: any;
      rfc2822: boolean;
      weekdayMismatch: boolean;
  }

  export interface Calendar {
      sameDay: string;
      nextDay: string;
      nextWeek: string;
      lastDay: string;
      lastWeek: string;
      sameElse: string;
  }

  export interface LongDateFormat {
      LTS: string;
      LT: string;
      L: string;
      LL: string;
      LLL: string;
      LLLL: string;
  }

  export interface DayOfMonthOrdinalParse {
  }

  export interface RelativeTime {
      future: string;
      past: string;
      s: string;
      ss: string;
      m: string;
      mm: string;
      h: string;
      hh: string;
      d: string;
      dd: string;
      w: string;
      ww: string;
      M: string;
      MM: string;
      y: string;
      yy: string;
  }

  export interface Week {
      dow: number;
      doy: number;
  }

  export interface MeridiemParse {
  }

  export interface Era {
      since: string;
      until?: any;
      offset: number;
      name: string;
      narrow: string;
      abbr: string;
  }

  export interface Calendar2 {
      sameDay: string;
      nextDay: string;
      nextWeek: string;
      lastDay: string;
      lastWeek: string;
      sameElse: string;
  }

  export interface LongDateFormat2 {
      LTS: string;
      LT: string;
      L: string;
      LL: string;
      LLL: string;
      LLLL: string;
  }

  export interface DayOfMonthOrdinalParse2 {
  }

  export interface RelativeTime2 {
      future: string;
      past: string;
      s: string;
      ss: string;
      m: string;
      mm: string;
      h: string;
      hh: string;
      d: string;
      dd: string;
      w: string;
      ww: string;
      M: string;
      MM: string;
      y: string;
      yy: string;
  }

  export interface Week2 {
      dow: number;
      doy: number;
  }

  export interface MeridiemParse2 {
  }

  export interface Era2 {
      since: string;
      until?: any;
      offset: number;
      name: string;
      narrow: string;
      abbr: string;
  }

  export interface Config {
      calendar: Calendar2;
      longDateFormat: LongDateFormat2;
      invalidDate: string;
      dayOfMonthOrdinalParse: DayOfMonthOrdinalParse2;
      relativeTime: RelativeTime2;
      months: string[];
      monthsShort: string[];
      week: Week2;
      weekdays: string[];
      weekdaysMin: string[];
      weekdaysShort: string[];
      meridiemParse: MeridiemParse2;
      eras: Era2[];
      abbr: string;
  }

  export interface DayOfMonthOrdinalParseLenient {
  }

  export interface Calendar3 {
      sameDay: string;
      nextDay: string;
      nextWeek: string;
      lastDay: string;
      lastWeek: string;
      sameElse: string;
  }

  export interface LongDateFormat3 {
      LTS: string;
      LT: string;
      L: string;
      LL: string;
      LLL: string;
      LLLL: string;
  }

  export interface DayOfMonthOrdinalParse3 {
  }

  export interface RelativeTime3 {
      future: string;
      past: string;
      s: string;
      ss: string;
      m: string;
      mm: string;
      h: string;
      hh: string;
      d: string;
      dd: string;
      w: string;
      ww: string;
      M: string;
      MM: string;
      y: string;
      yy: string;
  }

  export interface Week3 {
      dow: number;
      doy: number;
  }

  export interface MeridiemParse3 {
  }

  export interface Era3 {
      since: string;
      until?: any;
      offset: number;
      name: string;
      narrow: string;
      abbr: string;
  }

  export interface Calendar4 {
      sameDay: string;
      nextDay: string;
      nextWeek: string;
      lastDay: string;
      lastWeek: string;
      sameElse: string;
  }

  export interface LongDateFormat4 {
      LTS: string;
      LT: string;
      L: string;
      LL: string;
      LLL: string;
      LLLL: string;
  }

  export interface DayOfMonthOrdinalParse4 {
  }

  export interface RelativeTime4 {
      future: string;
      past: string;
      s: string;
      ss: string;
      m: string;
      mm: string;
      h: string;
      hh: string;
      d: string;
      dd: string;
      w: string;
      ww: string;
      M: string;
      MM: string;
      y: string;
      yy: string;
  }

  export interface Week4 {
      dow: number;
      doy: number;
  }

  export interface MeridiemParse4 {
  }

  export interface Era4 {
      since: string;
      until?: any;
      offset: number;
      name: string;
      narrow: string;
      abbr: string;
  }

  export interface Config2 {
      calendar: Calendar4;
      longDateFormat: LongDateFormat4;
      invalidDate: string;
      dayOfMonthOrdinalParse: DayOfMonthOrdinalParse4;
      relativeTime: RelativeTime4;
      months: string[];
      monthsShort: string[];
      week: Week4;
      weekdays: string[];
      weekdaysMin: string[];
      weekdaysShort: string[];
      meridiemParse: MeridiemParse4;
      eras: Era4[];
      abbr: string;
  }

  export interface DayOfMonthOrdinalParseLenient2 {
  }

  export interface ParentLocale {
      _calendar: Calendar3;
      _longDateFormat: LongDateFormat3;
      _invalidDate: string;
      _dayOfMonthOrdinalParse: DayOfMonthOrdinalParse3;
      _relativeTime: RelativeTime3;
      _months: string[];
      _monthsShort: string[];
      _week: Week3;
      _weekdays: string[];
      _weekdaysMin: string[];
      _weekdaysShort: string[];
      _meridiemParse: MeridiemParse3;
      _eras: Era3[];
      _abbr: string;
      _config: Config2;
      _dayOfMonthOrdinalParseLenient: DayOfMonthOrdinalParseLenient2;
  }

  export interface Locale {
      _calendar: Calendar;
      _longDateFormat: LongDateFormat;
      _invalidDate: string;
      _dayOfMonthOrdinalParse: DayOfMonthOrdinalParse;
      _relativeTime: RelativeTime;
      _months: string[];
      _monthsShort: string[];
      _week: Week;
      _weekdays: string[];
      _weekdaysMin: string[];
      _weekdaysShort: string[];
      _meridiemParse: MeridiemParse;
      _eras: Era[];
      _abbr: string;
      _config: Config;
      _dayOfMonthOrdinalParseLenient: DayOfMonthOrdinalParseLenient;
      parentLocale: ParentLocale;
  }

  export interface RootObject {
      _isAMomentObject: boolean;
      _isUTC: boolean;
      _pf: Pf;
      _locale: Locale;
      _d: Date;
      _isValid: boolean;
  }
