declare module "java.time.Month" {
import {$Enum} from "java.lang.Enum"
import {$TemporalAccessor$$Type, $TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale$$Type} from "java.util.Locale"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $Month extends $Enum<($Month)> implements $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface {
static readonly "JANUARY": $Month
static readonly "JUNE": $Month
static readonly "MAY": $Month
static readonly "OCTOBER": $Month
static readonly "DECEMBER": $Month
static readonly "MARCH": $Month
static readonly "FEBRUARY": $Month
static readonly "AUGUST": $Month
static readonly "JULY": $Month
static readonly "SEPTEMBER": $Month
static readonly "NOVEMBER": $Month
static readonly "APRIL": $Month

public "minus"(arg0: long): $Month
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "firstDayOfYear"(arg0: boolean): integer
public "maxLength"(): integer
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "firstMonthOfQuarter"(): $Month
public "get"(arg0: $TemporalField$$Type): integer
public "length"(arg0: boolean): integer
public static "values"(): ($Month)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: StringJS): $Month
public "getValue"(): integer
public static "of"(arg0: integer): $Month
public static "from"(arg0: $TemporalAccessor$$Type): $Month
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "minLength"(): integer
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long): $Month
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Month$$Type = (("january") | ("february") | ("march") | ("april") | ("may") | ("june") | ("july") | ("august") | ("september") | ("october") | ("november") | ("december"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Month$$Original = $Month;}
declare module "java.time.Duration" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$List} from "java.util.List"
import {$TemporalAmount$$Type, $TemporalAmount$$Interface} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"

export class $Duration implements $TemporalAmount$$Interface, $Comparable$$Interface<($Duration)>, $Serializable$$Interface {
static readonly "ZERO": $Duration

public "isNegative"(): boolean
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "minus"(arg0: $Duration$$Type): $Duration
public "isPositive"(): boolean
public "toSeconds"(): long
public "getSeconds"(): long
public "getNano"(): integer
public "toMinutes"(): long
public "toHours"(): long
public "toDays"(): long
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Duration
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "plusNanos"(arg0: long): $Duration
public "plusDays"(arg0: long): $Duration
public "plusMinutes"(arg0: long): $Duration
public "plusHours"(arg0: long): $Duration
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "minusDays"(arg0: long): $Duration
public "minusHours"(arg0: long): $Duration
public "minusMinutes"(arg0: long): $Duration
public "minusSeconds"(arg0: long): $Duration
public "minusNanos"(arg0: long): $Duration
public static "ofNanos"(arg0: long): $Duration
public static "ofSeconds"(arg0: long): $Duration
public static "ofSeconds"(arg0: long, arg1: long): $Duration
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $Duration
public "plusMillis"(arg0: long): $Duration
public "multipliedBy"(arg0: long): $Duration
public static "ofDays"(arg0: long): $Duration
public static "ofHours"(arg0: long): $Duration
public static "ofMinutes"(arg0: long): $Duration
public static "ofMillis"(arg0: long): $Duration
public "withSeconds"(arg0: long): $Duration
public "withNanos"(arg0: integer): $Duration
public "minusMillis"(arg0: long): $Duration
public "dividedBy"(arg0: long): $Duration
public "dividedBy"(arg0: $Duration$$Type): long
public "toDaysPart"(): long
public "toHoursPart"(): integer
public "toMinutesPart"(): integer
public "toSecondsPart"(): integer
public "toMillisPart"(): integer
public "toNanosPart"(): integer
public "plusSeconds"(arg0: long): $Duration
public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "abs"(): $Duration
public "compareTo"(arg0: $Duration$$Type): integer
public "compareTo"(arg0: any): integer
public static "of"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public static "from"(arg0: $TemporalAmount$$Type): $Duration
public "toNanos"(): long
public "toMillis"(): long
public static "parse"(arg0: charseq): $Duration
public static "between"(arg0: $Temporal$$Type, arg1: $Temporal$$Type): $Duration
public "plus"(arg0: $Duration$$Type): $Duration
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Duration
public "isZero"(): boolean
get "negative"(): boolean
get "positive"(): boolean
get "seconds"(): long
get "nano"(): integer
get "units"(): $List<($TemporalUnit)>
get "zero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Duration$$Type = ($TemporalAmount$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Duration$$Original = $Duration;}
declare module "java.time.InstantSource" {
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Clock} from "java.time.Clock"
import {$Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export interface $InstantSource$$Interface {

(): $Instant$$Type
}

export class $InstantSource implements $InstantSource$$Interface {
static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "instant"(): $Instant
static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
 "millis"(): long
static "system"(): $InstantSource
static "fixed"(arg0: $Instant$$Type): $InstantSource
 "withZone"(arg0: $ZoneId$$Type): $Clock
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InstantSource$$Type = (() => $Instant$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InstantSource$$Original = $InstantSource;}
declare module "java.time.ZonedDateTime" {
import {$Month} from "java.time.Month"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate} from "java.time.chrono.ChronoLocalDate"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock$$Type} from "java.time.Clock"
import {$Comparator} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$ChronoZonedDateTime, $ChronoZonedDateTime$$Type, $ChronoZonedDateTime$$Interface} from "java.time.chrono.ChronoZonedDateTime"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $ZonedDateTime implements $Temporal$$Interface, $ChronoZonedDateTime$$Interface<($LocalDate)>, $Serializable$$Interface {
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ZonedDateTime
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "getNano"(): integer
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public "getDayOfWeek"(): $DayOfWeek
public "getZone"(): $ZoneId
public "getDayOfYear"(): integer
public "withYear"(arg0: integer): $ZonedDateTime
public "withMonth"(arg0: integer): $ZonedDateTime
public "withDayOfMonth"(arg0: integer): $ZonedDateTime
public "withDayOfYear"(arg0: integer): $ZonedDateTime
public "withHour"(arg0: integer): $ZonedDateTime
public "withMinute"(arg0: integer): $ZonedDateTime
public "withSecond"(arg0: integer): $ZonedDateTime
public "withNano"(arg0: integer): $ZonedDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $ZonedDateTime
public "plusNanos"(arg0: long): $ZonedDateTime
public "plusDays"(arg0: long): $ZonedDateTime
public "plusMinutes"(arg0: long): $ZonedDateTime
public "plusHours"(arg0: long): $ZonedDateTime
public "plusYears"(arg0: long): $ZonedDateTime
public "plusMonths"(arg0: long): $ZonedDateTime
public "plusWeeks"(arg0: long): $ZonedDateTime
public "minusDays"(arg0: long): $ZonedDateTime
public "minusYears"(arg0: long): $ZonedDateTime
public "minusMonths"(arg0: long): $ZonedDateTime
public "minusWeeks"(arg0: long): $ZonedDateTime
public "minusHours"(arg0: long): $ZonedDateTime
public "minusMinutes"(arg0: long): $ZonedDateTime
public "minusSeconds"(arg0: long): $ZonedDateTime
public "minusNanos"(arg0: long): $ZonedDateTime
public static "now"(): $ZonedDateTime
public static "now"(arg0: $ZoneId$$Type): $ZonedDateTime
public static "now"(arg0: $Clock$$Type): $ZonedDateTime
public "plusSeconds"(arg0: long): $ZonedDateTime
public static "ofLocal"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type, arg2: $ZoneOffset$$Type): $ZonedDateTime
public "withZoneSameInstant"(arg0: $ZoneId$$Type): $ChronoZonedDateTime
public "toOffsetDateTime"(): $OffsetDateTime
public "withZoneSameLocal"(arg0: $ZoneId$$Type): $ChronoZonedDateTime
public "withLaterOffsetAtOverlap"(): $ChronoZonedDateTime
public static "ofStrict"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public "withFixedOffsetZone"(): $ZonedDateTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneId$$Type): $ZonedDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneId$$Type): $ZonedDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $ZonedDateTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $ZonedDateTime
public static "parse"(arg0: charseq): $ZonedDateTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $ZonedDateTime
public "plus"(arg0: $TemporalAmount$$Type): $ZonedDateTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public "toLocalDate"(): $ChronoLocalDate
public "toLocalDateTime"(): $LocalDateTime
public "toLocalTime"(): $LocalTime
public "withEarlierOffsetAtOverlap"(): $ZonedDateTime
public "toEpochSecond"(): long
public "toInstant"(): $Instant
public "isAfter"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
public "isBefore"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
public "getChronology"(): $Chronology
public static "timeLineOrder"(): $Comparator<($ChronoZonedDateTime<(never)>)>
public "isEqual"(arg0: $ChronoZonedDateTime$$Type<(never)>): boolean
public "compareTo"(arg0: $ChronoZonedDateTime$$Type<(never)>): integer
public "compareTo"(arg0: any): integer
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "dayOfWeek"(): $DayOfWeek
get "zone"(): $ZoneId
get "dayOfYear"(): integer
get "offset"(): $ZoneOffset
get "month"(): $Month
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZonedDateTime$$Type = ($ZonedDateTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZonedDateTime$$Original = $ZonedDateTime;}
declare module "java.time.LocalDateTime" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock$$Type} from "java.time.Clock"
import {$Comparator} from "java.util.Comparator"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant, $Instant$$Type} from "java.time.Instant"
import {$ChronoLocalDateTime, $ChronoLocalDateTime$$Type, $ChronoLocalDateTime$$Interface} from "java.time.chrono.ChronoLocalDateTime"

export class $LocalDateTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $ChronoLocalDateTime$$Interface<($LocalDate)>, $Serializable$$Interface {
static readonly "MIN": $LocalDateTime
static readonly "MAX": $LocalDateTime

public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "getNano"(): integer
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDateTime
public static "ofEpochSecond"(arg0: long, arg1: integer, arg2: $ZoneOffset$$Type): $LocalDateTime
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withYear"(arg0: integer): $LocalDateTime
public "withMonth"(arg0: integer): $LocalDateTime
public "withDayOfMonth"(arg0: integer): $LocalDateTime
public "withDayOfYear"(arg0: integer): $LocalDateTime
public "withHour"(arg0: integer): $LocalDateTime
public "withMinute"(arg0: integer): $LocalDateTime
public "withSecond"(arg0: integer): $LocalDateTime
public "withNano"(arg0: integer): $LocalDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalDateTime
public "plusNanos"(arg0: long): $LocalDateTime
public "plusDays"(arg0: long): $LocalDateTime
public "plusMinutes"(arg0: long): $LocalDateTime
public "plusHours"(arg0: long): $LocalDateTime
public "plusYears"(arg0: long): $LocalDateTime
public "plusMonths"(arg0: long): $LocalDateTime
public "plusWeeks"(arg0: long): $LocalDateTime
public "isAfter"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
public "isBefore"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
public "minusDays"(arg0: long): $LocalDateTime
public "atZone"(arg0: $ZoneId$$Type): $ZonedDateTime
public "minusYears"(arg0: long): $LocalDateTime
public "minusMonths"(arg0: long): $LocalDateTime
public "minusWeeks"(arg0: long): $LocalDateTime
public "minusHours"(arg0: long): $LocalDateTime
public "minusMinutes"(arg0: long): $LocalDateTime
public "minusSeconds"(arg0: long): $LocalDateTime
public "minusNanos"(arg0: long): $LocalDateTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public static "now"(arg0: $Clock$$Type): $LocalDateTime
public static "now"(arg0: $ZoneId$$Type): $LocalDateTime
public static "now"(): $LocalDateTime
public "isEqual"(arg0: $ChronoLocalDateTime$$Type<(never)>): boolean
public "plusSeconds"(arg0: long): $LocalDateTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDateTime$$Type<(never)>): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer, arg3: integer, arg4: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer): $LocalDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer): $LocalDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDateTime
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDateTime
public static "parse"(arg0: charseq): $LocalDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDateTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalDateTime
public "plus"(arg0: $TemporalAmount$$Type): $ChronoLocalDateTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public "toLocalDate"(): $LocalDate
public "toLocalTime"(): $LocalTime
public "toEpochSecond"(arg0: $ZoneOffset$$Type): long
public "toInstant"(arg0: $ZoneOffset$$Type): $Instant
public "getChronology"(): $Chronology
public static "timeLineOrder"(): $Comparator<($ChronoLocalDateTime<(never)>)>
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "month"(): $Month
get "chronology"(): $Chronology
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDateTime$$Type = ($LocalDateTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalDateTime$$Original = $LocalDateTime;}
declare module "java.time.LocalDate" {
import {$Month, $Month$$Type} from "java.time.Month"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$ChronoLocalDate, $ChronoLocalDate$$Type, $ChronoLocalDate$$Interface} from "java.time.chrono.ChronoLocalDate"
import {$IsoEra} from "java.time.chrono.IsoEra"
import {$OffsetTime$$Type} from "java.time.OffsetTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime} from "java.time.LocalDateTime"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Stream} from "java.util.stream.Stream"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Clock$$Type} from "java.time.Clock"
import {$Comparator} from "java.util.Comparator"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$Period, $Period$$Type} from "java.time.Period"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Chronology} from "java.time.chrono.Chronology"
import {$Instant$$Type} from "java.time.Instant"

export class $LocalDate implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $ChronoLocalDate$$Interface, $Serializable$$Interface {
static readonly "MIN": $LocalDate
static readonly "MAX": $LocalDate
static readonly "EPOCH": $LocalDate

public "minus"(arg0: $TemporalAmount$$Type): $ChronoLocalDate
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $ChronoLocalDate
public "toEpochSecond"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): long
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalDate
public "getDayOfWeek"(): $DayOfWeek
public "getEra"(): $IsoEra
public "isLeapYear"(): boolean
public "getDayOfYear"(): integer
public static "ofEpochDay"(arg0: long): $LocalDate
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withYear"(arg0: integer): $LocalDate
public "withMonth"(arg0: integer): $LocalDate
public "withDayOfMonth"(arg0: integer): $LocalDate
public "withDayOfYear"(arg0: integer): $LocalDate
public "plusDays"(arg0: long): $LocalDate
public "plusYears"(arg0: long): $LocalDate
public "plusMonths"(arg0: long): $LocalDate
public "plusWeeks"(arg0: long): $LocalDate
public "isAfter"(arg0: $ChronoLocalDate$$Type): boolean
public "isBefore"(arg0: $ChronoLocalDate$$Type): boolean
public "minusDays"(arg0: long): $LocalDate
public "minusYears"(arg0: long): $LocalDate
public "minusMonths"(arg0: long): $LocalDate
public "minusWeeks"(arg0: long): $LocalDate
public static "now"(arg0: $ZoneId$$Type): $LocalDate
public static "now"(arg0: $Clock$$Type): $LocalDate
public static "now"(): $LocalDate
public "getChronology"(): $Chronology
public "lengthOfYear"(): integer
public static "ofYearDay"(arg0: integer, arg1: integer): $LocalDate
public "atTime"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer, arg2: integer): $LocalDateTime
public "atTime"(arg0: integer, arg1: integer): $LocalDateTime
public "atTime"(arg0: $LocalTime$$Type): $LocalDateTime
public "atTime"(arg0: $OffsetTime$$Type): $OffsetDateTime
public "datesUntil"(arg0: $LocalDate$$Type): $Stream<($LocalDate)>
public "datesUntil"(arg0: $LocalDate$$Type, arg1: $Period$$Type): $Stream<($LocalDate)>
public "atStartOfDay"(arg0: $ZoneId$$Type): $ZonedDateTime
public "atStartOfDay"(): $LocalDateTime
public "isEqual"(arg0: $ChronoLocalDate$$Type): boolean
public "lengthOfMonth"(): integer
public "toEpochDay"(): long
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $ChronoLocalDate$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: $Month$$Type, arg2: integer): $LocalDate
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalDate
public static "from"(arg0: $TemporalAccessor$$Type): $LocalDate
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalDate
public static "parse"(arg0: charseq): $LocalDate
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalDate
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalDate
public "plus"(arg0: $TemporalAmount$$Type): $LocalDate
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "until"(arg0: $ChronoLocalDate$$Type): $Period
public "getMonth"(): $Month
public static "timeLineOrder"(): $Comparator<($ChronoLocalDate)>
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "dayOfWeek"(): $DayOfWeek
get "era"(): $IsoEra
get "leapYear"(): boolean
get "dayOfYear"(): integer
get "chronology"(): $Chronology
get "month"(): $Month
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalDate$$Type = ($LocalDate);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalDate$$Original = $LocalDate;}
declare module "java.time.OffsetTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$LocalDate$$Type} from "java.time.LocalDate"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant$$Type} from "java.time.Instant"

export class $OffsetTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($OffsetTime)>, $Serializable$$Interface {
static readonly "MIN": $OffsetTime
static readonly "MAX": $OffsetTime

public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetTime
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "minus"(arg0: $TemporalAmount$$Type): $Temporal
public "getNano"(): integer
public "toEpochSecond"(arg0: $LocalDate$$Type): long
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withHour"(arg0: integer): $OffsetTime
public "withMinute"(arg0: integer): $OffsetTime
public "withSecond"(arg0: integer): $OffsetTime
public "withNano"(arg0: integer): $OffsetTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetTime
public "plusNanos"(arg0: long): $OffsetTime
public "plusMinutes"(arg0: long): $OffsetTime
public "plusHours"(arg0: long): $OffsetTime
public "isAfter"(arg0: $OffsetTime$$Type): boolean
public "isBefore"(arg0: $OffsetTime$$Type): boolean
public "minusHours"(arg0: long): $OffsetTime
public "minusMinutes"(arg0: long): $OffsetTime
public "minusSeconds"(arg0: long): $OffsetTime
public "minusNanos"(arg0: long): $OffsetTime
public static "now"(): $OffsetTime
public static "now"(arg0: $ZoneId$$Type): $OffsetTime
public static "now"(arg0: $Clock$$Type): $OffsetTime
public "isEqual"(arg0: $OffsetTime$$Type): boolean
public "atDate"(arg0: $LocalDate$$Type): $OffsetDateTime
public "plusSeconds"(arg0: long): $OffsetTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $OffsetTime$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalTime$$Type, arg1: $ZoneOffset$$Type): $OffsetTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: $ZoneOffset$$Type): $OffsetTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetTime
public static "parse"(arg0: charseq): $OffsetTime
public "with"(arg0: $TemporalAdjuster$$Type): $OffsetTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetTime
public "plus"(arg0: $TemporalAmount$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "toLocalTime"(): $LocalTime
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "offset"(): $ZoneOffset
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetTime$$Type = ($OffsetTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OffsetTime$$Original = $OffsetTime;}
declare module "java.time.OffsetDateTime" {
import {$Month} from "java.time.Month"
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$Comparator} from "java.util.Comparator"
import {$ZoneOffset, $ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$LocalTime, $LocalTime$$Type} from "java.time.LocalTime"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$OffsetTime} from "java.time.OffsetTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime, $LocalDateTime$$Type} from "java.time.LocalDateTime"
import {$DayOfWeek} from "java.time.DayOfWeek"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$LocalDate, $LocalDate$$Type} from "java.time.LocalDate"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $OffsetDateTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($OffsetDateTime)>, $Serializable$$Interface {
static readonly "MIN": $OffsetDateTime
static readonly "MAX": $OffsetDateTime

public "withOffsetSameInstant"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "withOffsetSameLocal"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public "atZoneSameInstant"(arg0: $ZoneId$$Type): $ZonedDateTime
public "atZoneSimilarLocal"(arg0: $ZoneId$$Type): $ZonedDateTime
public "toOffsetTime"(): $OffsetTime
public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $OffsetDateTime
public "minus"(arg0: $TemporalAmount$$Type): $OffsetDateTime
public "getNano"(): integer
public "toEpochSecond"(): long
public "getYear"(): integer
public "getMonthValue"(): integer
public "getDayOfMonth"(): integer
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $OffsetDateTime
public "toInstant"(): $Instant
public "getDayOfWeek"(): $DayOfWeek
public "getDayOfYear"(): integer
public "toZonedDateTime"(): $ZonedDateTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withYear"(arg0: integer): $OffsetDateTime
public "withMonth"(arg0: integer): $OffsetDateTime
public "withDayOfMonth"(arg0: integer): $OffsetDateTime
public "withDayOfYear"(arg0: integer): $OffsetDateTime
public "withHour"(arg0: integer): $OffsetDateTime
public "withMinute"(arg0: integer): $OffsetDateTime
public "withSecond"(arg0: integer): $OffsetDateTime
public "withNano"(arg0: integer): $OffsetDateTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $OffsetDateTime
public "plusNanos"(arg0: long): $OffsetDateTime
public "plusDays"(arg0: long): $OffsetDateTime
public "plusMinutes"(arg0: long): $OffsetDateTime
public "plusHours"(arg0: long): $OffsetDateTime
public "plusYears"(arg0: long): $OffsetDateTime
public "plusMonths"(arg0: long): $OffsetDateTime
public "plusWeeks"(arg0: long): $OffsetDateTime
public "isAfter"(arg0: $OffsetDateTime$$Type): boolean
public "isBefore"(arg0: $OffsetDateTime$$Type): boolean
public "minusDays"(arg0: long): $OffsetDateTime
public "minusYears"(arg0: long): $OffsetDateTime
public "minusMonths"(arg0: long): $OffsetDateTime
public "minusWeeks"(arg0: long): $OffsetDateTime
public "minusHours"(arg0: long): $OffsetDateTime
public "minusMinutes"(arg0: long): $OffsetDateTime
public "minusSeconds"(arg0: long): $OffsetDateTime
public "minusNanos"(arg0: long): $OffsetDateTime
public static "now"(arg0: $Clock$$Type): $OffsetDateTime
public static "now"(arg0: $ZoneId$$Type): $OffsetDateTime
public static "now"(): $OffsetDateTime
public static "timeLineOrder"(): $Comparator<($OffsetDateTime)>
public "isEqual"(arg0: $OffsetDateTime$$Type): boolean
public "plusSeconds"(arg0: long): $OffsetDateTime
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $OffsetDateTime$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: $LocalDateTime$$Type, arg1: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: $ZoneOffset$$Type): $OffsetDateTime
public static "of"(arg0: $LocalDate$$Type, arg1: $LocalTime$$Type, arg2: $ZoneOffset$$Type): $OffsetDateTime
public static "from"(arg0: $TemporalAccessor$$Type): $OffsetDateTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq): $OffsetDateTime
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $OffsetDateTime
public "with"(arg0: $TemporalAdjuster$$Type): $Temporal
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "getOffset"(): $ZoneOffset
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "plus"(arg0: $TemporalAmount$$Type): $Temporal
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
public "getMonth"(): $Month
public "toLocalDate"(): $LocalDate
public "toLocalDateTime"(): $LocalDateTime
public "toLocalTime"(): $LocalTime
get "nano"(): integer
get "year"(): integer
get "monthValue"(): integer
get "dayOfMonth"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
get "dayOfWeek"(): $DayOfWeek
get "dayOfYear"(): integer
get "offset"(): $ZoneOffset
get "month"(): $Month
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OffsetDateTime$$Type = ($OffsetDateTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OffsetDateTime$$Original = $OffsetDateTime;}
declare module "java.time.Period" {
import {$TemporalUnit, $TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$IsoChronology} from "java.time.chrono.IsoChronology"
import {$List} from "java.util.List"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ChronoLocalDate$$Type} from "java.time.chrono.ChronoLocalDate"
import {$ChronoPeriod, $ChronoPeriod$$Interface} from "java.time.chrono.ChronoPeriod"

export class $Period implements $ChronoPeriod$$Interface, $Serializable$$Interface {
static readonly "ZERO": $Period

public "getYears"(): integer
public static "ofYears"(arg0: integer): $Period
public static "ofMonths"(arg0: integer): $Period
public static "ofWeeks"(arg0: integer): $Period
public "withYears"(arg0: integer): $Period
public "withMonths"(arg0: integer): $Period
public "withDays"(arg0: integer): $Period
public "isNegative"(): boolean
public "minus"(arg0: $TemporalAmount$$Type): $ChronoPeriod
public "getMonths"(): integer
public "addTo"(arg0: $Temporal$$Type): $Temporal
public "plusDays"(arg0: long): $Period
public "plusYears"(arg0: long): $Period
public "plusMonths"(arg0: long): $Period
public "subtractFrom"(arg0: $Temporal$$Type): $Temporal
public "minusDays"(arg0: long): $Period
public "minusYears"(arg0: long): $Period
public "minusMonths"(arg0: long): $Period
public "normalized"(): $Period
public "getChronology"(): $IsoChronology
public "toTotalMonths"(): long
public "getDays"(): integer
public "getUnits"(): $List<($TemporalUnit)>
public "negated"(): $Period
public "multipliedBy"(arg0: integer): $ChronoPeriod
public static "ofDays"(arg0: integer): $Period
public "get"(arg0: $TemporalUnit$$Type): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: integer, arg1: integer, arg2: integer): $Period
public static "from"(arg0: $TemporalAmount$$Type): $Period
public static "parse"(arg0: charseq): $Period
public static "between"(arg0: $LocalDate$$Type, arg1: $LocalDate$$Type): $Period
public "plus"(arg0: $TemporalAmount$$Type): $Period
public "isZero"(): boolean
public static "between"(arg0: $ChronoLocalDate$$Type, arg1: $ChronoLocalDate$$Type): $ChronoPeriod
get "years"(): integer
get "negative"(): boolean
get "months"(): integer
get "chronology"(): $IsoChronology
get "days"(): integer
get "units"(): $List<($TemporalUnit)>
get "zero"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Period$$Type = ($Period);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Period$$Original = $Period;}
declare module "java.time.LocalTime" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$OffsetTime} from "java.time.OffsetTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$LocalDateTime} from "java.time.LocalDateTime"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$LocalDate$$Type} from "java.time.LocalDate"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$DateTimeFormatter$$Type} from "java.time.format.DateTimeFormatter"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$Instant$$Type} from "java.time.Instant"

export class $LocalTime implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($LocalTime)>, $Serializable$$Interface {
static readonly "MIN": $LocalTime
static readonly "NOON": $LocalTime
static readonly "MAX": $LocalTime
static readonly "MIDNIGHT": $LocalTime

public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalTime
public "minus"(arg0: $TemporalAmount$$Type): $LocalTime
public "getNano"(): integer
public "toEpochSecond"(arg0: $LocalDate$$Type, arg1: $ZoneOffset$$Type): long
public "getHour"(): integer
public "getMinute"(): integer
public "getSecond"(): integer
public static "ofInstant"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $LocalTime
public static "ofNanoOfDay"(arg0: long): $LocalTime
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "withHour"(arg0: integer): $LocalTime
public "withMinute"(arg0: integer): $LocalTime
public "withSecond"(arg0: integer): $LocalTime
public "withNano"(arg0: integer): $LocalTime
public "truncatedTo"(arg0: $TemporalUnit$$Type): $LocalTime
public "plusNanos"(arg0: long): $LocalTime
public "plusMinutes"(arg0: long): $LocalTime
public "plusHours"(arg0: long): $LocalTime
public "toNanoOfDay"(): long
public "isAfter"(arg0: $LocalTime$$Type): boolean
public "isBefore"(arg0: $LocalTime$$Type): boolean
public "minusHours"(arg0: long): $LocalTime
public "minusMinutes"(arg0: long): $LocalTime
public "minusSeconds"(arg0: long): $LocalTime
public "minusNanos"(arg0: long): $LocalTime
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetTime
public static "now"(arg0: $ZoneId$$Type): $LocalTime
public static "now"(arg0: $Clock$$Type): $LocalTime
public static "now"(): $LocalTime
public static "ofSecondOfDay"(arg0: long): $LocalTime
public "atDate"(arg0: $LocalDate$$Type): $LocalDateTime
public "plusSeconds"(arg0: long): $LocalTime
public "toSecondOfDay"(): integer
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: $LocalTime$$Type): integer
public "compareTo"(arg0: any): integer
public "getLong"(arg0: $TemporalField$$Type): long
public "format"(arg0: $DateTimeFormatter$$Type): StringJS
public static "of"(arg0: integer, arg1: integer, arg2: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer, arg2: integer, arg3: integer): $LocalTime
public static "of"(arg0: integer, arg1: integer): $LocalTime
public static "from"(arg0: $TemporalAccessor$$Type): $LocalTime
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public "isSupported"(arg0: $TemporalField$$Type): boolean
public static "parse"(arg0: charseq, arg1: $DateTimeFormatter$$Type): $LocalTime
public static "parse"(arg0: charseq): $LocalTime
public "with"(arg0: $TemporalField$$Type, arg1: long): $LocalTime
public "with"(arg0: $TemporalAdjuster$$Type): $LocalTime
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $LocalTime
public "plus"(arg0: $TemporalAmount$$Type): $LocalTime
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
get "nano"(): integer
get "hour"(): integer
get "minute"(): integer
get "second"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LocalTime$$Type = ($LocalTime);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LocalTime$$Original = $LocalTime;}
declare module "java.time.Clock" {
import {$InstantSource, $InstantSource$$Type, $InstantSource$$Interface} from "java.time.InstantSource"
import {$ZoneId, $ZoneId$$Type} from "java.time.ZoneId"
import {$Duration$$Type} from "java.time.Duration"
import {$Instant, $Instant$$Type} from "java.time.Instant"

export class $Clock implements $InstantSource$$Interface {
public static "tickMillis"(arg0: $ZoneId$$Type): $Clock
public static "tickSeconds"(arg0: $ZoneId$$Type): $Clock
public static "tickMinutes"(arg0: $ZoneId$$Type): $Clock
public static "tick"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "instant"(): $Instant
public "getZone"(): $ZoneId
public static "systemDefaultZone"(): $Clock
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "offset"(arg0: $Clock$$Type, arg1: $Duration$$Type): $Clock
public "millis"(): long
public static "system"(arg0: $ZoneId$$Type): $Clock
public static "fixed"(arg0: $Instant$$Type, arg1: $ZoneId$$Type): $Clock
public static "systemUTC"(): $Clock
public "withZone"(arg0: $ZoneId$$Type): $Clock
public static "tick"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
public static "offset"(arg0: $InstantSource$$Type, arg1: $Duration$$Type): $InstantSource
public static "system"(): $InstantSource
public static "fixed"(arg0: $Instant$$Type): $InstantSource
get "zone"(): $ZoneId
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Clock$$Type = ($Clock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Clock$$Original = $Clock;}
declare module "java.time.DayOfWeek" {
import {$Enum} from "java.lang.Enum"
import {$TemporalAccessor$$Type, $TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$Locale$$Type} from "java.util.Locale"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $DayOfWeek extends $Enum<($DayOfWeek)> implements $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface {
static readonly "WEDNESDAY": $DayOfWeek
static readonly "MONDAY": $DayOfWeek
static readonly "THURSDAY": $DayOfWeek
static readonly "SUNDAY": $DayOfWeek
static readonly "TUESDAY": $DayOfWeek
static readonly "FRIDAY": $DayOfWeek
static readonly "SATURDAY": $DayOfWeek

public "minus"(arg0: long): $DayOfWeek
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public "get"(arg0: $TemporalField$$Type): integer
public static "values"(): ($DayOfWeek)[]
public "getLong"(arg0: $TemporalField$$Type): long
public static "valueOf"(arg0: StringJS): $DayOfWeek
public "getValue"(): integer
public static "of"(arg0: integer): $DayOfWeek
public static "from"(arg0: $TemporalAccessor$$Type): $DayOfWeek
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: long): $DayOfWeek
get "value"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DayOfWeek$$Type = (("monday") | ("tuesday") | ("wednesday") | ("thursday") | ("friday") | ("saturday") | ("sunday"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DayOfWeek$$Original = $DayOfWeek;}
declare module "java.time.ZoneId" {
import {$Map, $Map$$Type} from "java.util.Map"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ZoneRules} from "java.time.zone.ZoneRules"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$TextStyle$$Type} from "java.time.format.TextStyle"
import {$Set} from "java.util.Set"
import {$Locale$$Type} from "java.util.Locale"

export class $ZoneId implements $Serializable$$Interface {
static readonly "SHORT_IDS": $Map<(StringJS), (StringJS)>

public static "systemDefault"(): $ZoneId
public "getRules"(): $ZoneRules
public "normalized"(): $ZoneId
public "getDisplayName"(arg0: $TextStyle$$Type, arg1: $Locale$$Type): StringJS
public static "getAvailableZoneIds"(): $Set<(StringJS)>
public static "ofOffset"(arg0: StringJS, arg1: $ZoneOffset$$Type): $ZoneId
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: StringJS): $ZoneId
public static "of"(arg0: StringJS, arg1: $Map$$Type<(StringJS), (StringJS)>): $ZoneId
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneId
public "getId"(): StringJS
get "rules"(): $ZoneRules
public static get "availableZoneIds"(): $Set<(StringJS)>
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneId$$Type = ($ZoneId);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneId$$Original = $ZoneId;}
declare module "java.time.Instant" {
import {$TemporalUnit$$Type} from "java.time.temporal.TemporalUnit"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Clock$$Type} from "java.time.Clock"
import {$ZoneOffset$$Type} from "java.time.ZoneOffset"
import {$TemporalAccessor$$Type} from "java.time.temporal.TemporalAccessor"
import {$Temporal, $Temporal$$Type, $Temporal$$Interface} from "java.time.temporal.Temporal"
import {$ZonedDateTime} from "java.time.ZonedDateTime"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"
import {$ZoneId$$Type} from "java.time.ZoneId"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$TemporalAmount$$Type} from "java.time.temporal.TemporalAmount"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$TemporalAdjuster$$Type, $TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$OffsetDateTime} from "java.time.OffsetDateTime"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"

export class $Instant implements $Temporal$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($Instant)>, $Serializable$$Interface {
static readonly "MIN": $Instant
static readonly "MAX": $Instant
static readonly "EPOCH": $Instant

public "minus"(arg0: long, arg1: $TemporalUnit$$Type): $Temporal
public "minus"(arg0: $TemporalAmount$$Type): $Instant
public "getNano"(): integer
public static "ofEpochMilli"(arg0: long): $Instant
public "getEpochSecond"(): long
public static "ofEpochSecond"(arg0: long): $Instant
public static "ofEpochSecond"(arg0: long, arg1: long): $Instant
public "toEpochMilli"(): long
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "truncatedTo"(arg0: $TemporalUnit$$Type): $Instant
public "plusNanos"(arg0: long): $Instant
public "isAfter"(arg0: $Instant$$Type): boolean
public "isBefore"(arg0: $Instant$$Type): boolean
public "atZone"(arg0: $ZoneId$$Type): $ZonedDateTime
public "minusSeconds"(arg0: long): $Instant
public "minusNanos"(arg0: long): $Instant
public "atOffset"(arg0: $ZoneOffset$$Type): $OffsetDateTime
public static "now"(): $Instant
public static "now"(arg0: $Clock$$Type): $Instant
public "plusMillis"(arg0: long): $Instant
public "minusMillis"(arg0: long): $Instant
public "plusSeconds"(arg0: long): $Instant
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $Instant$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "from"(arg0: $TemporalAccessor$$Type): $Instant
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "isSupported"(arg0: $TemporalUnit$$Type): boolean
public static "parse"(arg0: charseq): $Instant
public "with"(arg0: $TemporalField$$Type, arg1: long): $Temporal
public "with"(arg0: $TemporalAdjuster$$Type): $Instant
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
public "plus"(arg0: $TemporalAmount$$Type): $Instant
public "plus"(arg0: long, arg1: $TemporalUnit$$Type): $Instant
public "until"(arg0: $Temporal$$Type, arg1: $TemporalUnit$$Type): long
get "nano"(): integer
get "epochSecond"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Instant$$Type = ($Instant);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Instant$$Original = $Instant;}
declare module "java.time.ZoneOffset" {
import {$Map} from "java.util.Map"
import {$ZoneId} from "java.time.ZoneId"
import {$Comparable$$Interface} from "java.lang.Comparable"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$ZoneRules} from "java.time.zone.ZoneRules"
import {$TemporalAccessor$$Type, $TemporalAccessor$$Interface} from "java.time.temporal.TemporalAccessor"
import {$ValueRange} from "java.time.temporal.ValueRange"
import {$Temporal, $Temporal$$Type} from "java.time.temporal.Temporal"
import {$TemporalAdjuster$$Interface} from "java.time.temporal.TemporalAdjuster"
import {$TemporalQuery$$Type} from "java.time.temporal.TemporalQuery"
import {$TemporalField$$Type} from "java.time.temporal.TemporalField"

export class $ZoneOffset extends $ZoneId implements $TemporalAccessor$$Interface, $TemporalAdjuster$$Interface, $Comparable$$Interface<($ZoneOffset)>, $Serializable$$Interface {
static readonly "MIN": $ZoneOffset
static readonly "UTC": $ZoneOffset
static readonly "MAX": $ZoneOffset
static readonly "SHORT_IDS": $Map<(StringJS), (StringJS)>

public "getRules"(): $ZoneRules
public "adjustInto"(arg0: $Temporal$$Type): $Temporal
public "normalized"(): $ZoneId
public static "ofHours"(arg0: integer): $ZoneOffset
public static "ofHoursMinutesSeconds"(arg0: integer, arg1: integer, arg2: integer): $ZoneOffset
public static "ofHoursMinutes"(arg0: integer, arg1: integer): $ZoneOffset
public "getTotalSeconds"(): integer
public static "ofTotalSeconds"(arg0: integer): $ZoneOffset
public "get"(arg0: $TemporalField$$Type): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "compareTo"(arg0: any): integer
public "compareTo"(arg0: $ZoneOffset$$Type): integer
public "getLong"(arg0: $TemporalField$$Type): long
public static "of"(arg0: StringJS): $ZoneOffset
public static "from"(arg0: $TemporalAccessor$$Type): $ZoneOffset
public "isSupported"(arg0: $TemporalField$$Type): boolean
public "getId"(): StringJS
public "query"<R>(arg0: $TemporalQuery$$Type<(R)>): R
public "range"(arg0: $TemporalField$$Type): $ValueRange
get "rules"(): $ZoneRules
get "totalSeconds"(): integer
get "id"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ZoneOffset$$Type = ($ZoneOffset);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ZoneOffset$$Original = $ZoneOffset;}
